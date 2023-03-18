import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.pb.authStore.isValid || !locals.user) {
		throw error(401, 'Unauthorized');
	}
	return {
		props: {
			user: locals.user,
		},
	};
};
