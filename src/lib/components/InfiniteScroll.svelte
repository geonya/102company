<script lang="ts">
	import { createEventDispatcher, onDestroy, SvelteComponent } from 'svelte';

	export let threshold = 100;
	export let elementScroll: HTMLElement | null;
	export let hasMore = true;

	const dispatch = createEventDispatcher();
	let isLoadMore = false;
	let component: HTMLDivElement;

	$: {
		if (component || elementScroll) {
			const element = elementScroll ? elementScroll : component.parentNode;
			if (element) {
				element.addEventListener('scroll', onScroll);
				element.addEventListener('resize', onScroll);
			}
		}
	}
	const onScroll = (e: Event) => {
		const { scrollHeight, clientHeight, scrollTop } = e.target as HTMLElement;
		const offset = scrollHeight - clientHeight - scrollTop;
		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch('loadmore');
				isLoadMore = true;
			}
		} else {
			isLoadMore = false;
		}
	};
	onDestroy(() => {
		if (component || elementScroll) {
			const element = elementScroll ? elementScroll : component.parentNode;
			if (element) {
				element.removeEventListener('scroll', null);
				element.removeEventListener('resize', null);
			}
		}
	});
</script>

<div bind:this={component} style="width:0px" />
