import Pocketbase from 'pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('https://102company-back.fly.dev/');
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers.get('cookie') || '',
	);
	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = structuredClone(event.locals.pb.authStore.model);
		}
	} catch (err: any) {
		console.error(err);
		event.locals.user = undefined;
		event.locals.pb.authStore.clear();
	}
	const response = await resolve(event);
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({
			secure: process.env.NODE_ENV === 'production',
		}),
	);
	return response;
};
