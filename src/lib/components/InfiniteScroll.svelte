<script lang="ts">
	import { createEventDispatcher, onDestroy, SvelteComponent } from 'svelte';

	export let threshold = 100;
	export let elementScroll: HTMLElement | null;
	export let hasMore = true;
	export let elId: string;
	export let sectionLength: number = 0;

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
	$: console.log(sectionLength);
	const onScroll = (e: Event) => {
		const { scrollHeight, clientHeight, scrollTop } = e.target as HTMLElement;
		const totalHeight = clientHeight * (sectionLength + 1);
		const sectionRatio = scrollTop / totalHeight;
		const sectionIndex = sectionRatio * sectionLength;
		console.log(sectionIndex);
		// if (sectionIndex >= 1 && sectionIndex - 1 === elIndex) {
		// 	const el = document.querySelector('elId');
		// 	if (el) {
		// 		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// 	}
		// }
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
