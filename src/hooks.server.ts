import Pocketbase from 'pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('https://102company-back.fly.dev/');
	const response = await resolve(event);
	return response;
};
