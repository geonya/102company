import type { Actions } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const body = await request.formData();
		const data = Object.fromEntries(body) as { id: string; password: string };
		try {
			const user = await locals.pb
				.collection('users')
				.authWithPassword(data.id, data.password);
		} catch (err: any) {
			console.error(err);
			throw error(err.status, err.message);
		}
		throw redirect(303, '/');
	},
};
