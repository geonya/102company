import type { Actions, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getCompressedImages } from '$lib/utils';
import sharp from 'sharp';

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

export const actions: Actions = {
	create: async ({ locals, request }) => {
		const body = await request.formData();
		const title = body.get('title') as string;
		const files = body.getAll('photos') as File[];
		const formData = new FormData();
		formData.append('title', title);
		const getCompressedFiles = await getCompressedImages(files);
		getCompressedFiles.forEach((file) => {
			formData.append('photos', file);
		});

		try {
			await locals.pb.collection('projects').create(formData);
		} catch (err: any) {
			console.error(err);
			throw error(err.status, err.message);
		}
	},
};
