<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';

	let open: boolean;
	$: open = false;

	const handleMenuButtonClick = () => {
		open = !open;
	};
</script>

<div
	class="bg-fixed bg-left text-base-300"
	style="background-image:url(/images/bg.jpg)"
>
	<header
		class="fixed top-0 left-0 right-0 z-10 h-16 shadow-sm backdrop-blur-md"
	>
		<nav
			class="grid h-full w-full grid-cols-3 items-center justify-items-center"
		>
			<ul class="" />
			<ul class="">
				<li>
					<h2 class="text-lg font-medium">
						<a href="/">102 Company</a>
					</h2>
				</li>
			</ul>
			<ul class="justify-self-end pr-5">
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
	<footer
		class="fixed bottom-0 left-0 right-0 h-16 cursor-pointer shadow-inner backdrop-blur-md"
	>
		<nav
			class="grid h-full w-full grid-cols-3 items-center justify-items-center"
		>
			<ul class="">
				<li />
			</ul>
			<ul class="">
				<li><h2 class="text-md font-regular">Contact us</h2></li>
			</ul>
			<ul class="justify-self-end pr-6" />
		</nav>
	</footer>
	<AsideModal bind:open />
</div>
