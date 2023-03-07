<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { BAR_HEIGHT } from '$lib/constants';
	import { Footer } from '$lib/components';
	import { onMount } from 'svelte';
	import { photos } from '$lib/store';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	let menuOpen = false;
	const handleMenuButtonClick = () => {
		menuOpen = !menuOpen;
	};
	onMount(() => {
		if (!data || !data.photos || data.photos.length == 0) return;
		photos.set(data.photos);
	});
</script>

<div class="bg-fixed bg-left" style="background-image:url(/bg.jpg)">
	<header
		class="fixed top-0 left-0 right-0 z-30 bg-clip-content shadow-sm backdrop-blur-md"
		style="height: {BAR_HEIGHT}px"
	>
		<nav
			class="grid h-full w-full grid-cols-3 items-center justify-items-center"
		>
			<ul class="" />
			<ul class="flex h-full items-center ">
				<li>
					<h2 class="font-regular sm:text-md text-sm text-base-100 md:text-lg">
						<a href="/">102 Company</a>
					</h2>
				</li>
			</ul>
			<ul class="justify-self-end pr-3">
				<li>
					<button class="p-3" on:click={handleMenuButtonClick}
						><Icon class="h-6 w-6" src={Menu} /></button
					>
				</li>
			</ul>
		</nav>
	</header>
	<main class="main">
		<slot />
	</main>
	<Footer />
	<AsideModal bind:open={menuOpen} />
</div>
