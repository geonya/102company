import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (ctx) => {
	const user = ctx.locals.user;
	const response = await ctx.fetch('https://picsum.photos/v2/list');
	const data = await response.json();
	if (data) {
		return {
			photos: data,
			user,
		};
	}
};
