import type { Action, Actions } from './$types';
import { error } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const body = await request.formData();
		const data = Object.fromEntries(body);
		try {
			await locals.pb.collection('contacts').create(data);
		} catch (err: any) {
			console.error(err);
			throw error(err.status, err.message);
		}
	},
};
