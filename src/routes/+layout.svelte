<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let open = false;
	let isFooterOpen = true;

	let screenHeight: number;
	let footerHeight: number;
	let footerElement: HTMLElement;

	$: footerTop = tweened(screenHeight - footerHeight, {
		duration: 400,
		easing: cubicInOut,
	});
	const handleFooterToggle = () => {
		if (isFooterOpen) {
			footerTop.set(screenHeight - 64);
			isFooterOpen = false;
		} else {
			footerTop.set(screenHeight - footerHeight);
			isFooterOpen = true;
		}
	};
	const handleMenuButtonClick = () => {
		open = true;
	};

	onMount(() => {
		if (footerElement) {
			footerHeight = footerElement.offsetHeight;
		}
	});
</script>

<svelte:window bind:innerHeight={screenHeight} />
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
			<ul class="pr-5">
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
	<div
		class="fixed left-0 h-full w-full cursor-pointer rounded-md "
		style="top: {$footerTop}px"
	>
		<footer
			bind:this={footerElement}
			class={'rounded-md bg-base-600 bg-opacity-0 p-2 shadow-inner backdrop-blur-md transition delay-100 duration-500 ease-in-out hover:shadow-md' +
				(isFooterOpen ? ' bg-opacity-90' : '')}
		>
			<nav class=" grid h-full w-full pb-3">
				<ul
					on:click={handleFooterToggle}
					on:keypress={handleFooterToggle}
					class="grid h-12 grid-cols-2"
				>
					<li class="w-full">
						<h2 class="text-lg font-light">Contact us</h2>
					</li>
					<li class="flex h-full w-full items-center justify-end ">
						<button
							class={'transition duration-1000 ' +
								(isFooterOpen
									? 'rotate-0 hover:rotate-180 focus:rotate-0'
									: 'rotate-180 hover:rotate-0 focus:rotate-180')}
							><svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
							>
								<path
									d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg></button
						>
					</li>
				</ul>
				<ul class="grid grid-cols-2 justify-items-center gap-10">
					<div class="grid w-full max-w-md gap-1">
						<label for="name" class="">
							<span class="text-xs">Name</span>
							<input
								class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
								type="text"
								id="name"
								name="name"
							/>
						</label>
						<label for="email">
							<span class="text-xs">Email</span>
						</label>
						<input
							class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div class="grid w-full max-w-md gap-1">
						<label for="name" class="">
							<span class="text-xs">Phone</span>
							<input
								class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
								type="text"
								id="name"
								name="name"
							/>
						</label>
						<label for="email">
							<span class="text-xs">Detail</span>
						</label>
						<input
							class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
							type="email"
							id="email"
							name="email"
						/>
					</div>
				</ul>
			</nav>
		</footer>
		<AsideModal bind:open />
	</div>
</div>
