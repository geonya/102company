<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { BAR_HEIGHT } from '$lib/constants';

	let open = false;
	let isFooterOpen = false;

	let screenHeight: number;
	let footerHeight: number;
	let footerElement: HTMLElement;

	$: footerTop = tweened(screenHeight - BAR_HEIGHT, {
		duration: 400,
		easing: cubicInOut,
	});

	const handleFooterToggle = () => {
		if (isFooterOpen) {
			footerTop.set(screenHeight - BAR_HEIGHT);
			isFooterOpen = false;
		} else {
			footerTop.set(screenHeight - footerHeight);
			isFooterOpen = true;
		}
	};
	const handleMenuButtonClick = () => {
		open = !open;
	};

	onMount(() => {
		if (footerElement) {
			footerHeight = footerElement.offsetHeight;
		}
	});
</script>

<svelte:window
	bind:innerHeight={screenHeight}
	on:resize={() => {
		if (isFooterOpen) {
			handleFooterToggle();
		}
	}}
/>
<div
	class="bg-fixed bg-left text-base-300"
	style="background-image:url(/bg.jpg)"
>
	<header
		class="fixed top-0 left-0 right-0 z-10 shadow-sm backdrop-blur-md"
		style="height: {BAR_HEIGHT}px"
	>
		<nav
			class="grid h-full w-full grid-cols-3 items-center justify-items-center"
		>
			<ul class="" />
			<ul class="">
				<li>
					<h2 class="font-regular">
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
	<div
		class="fixed left-0 h-full w-full cursor-pointer rounded-md "
		style="top: {$footerTop}px"
	>
		<footer
			bind:this={footerElement}
			class={'rounded-md bg-base-600 bg-opacity-0 p-2 shadow-inner backdrop-blur-md transition delay-100 duration-500 ease-in-out hover:shadow-md' +
				(isFooterOpen ? ' bg-opacity-90' : '')}
		>
			<nav class=" grid h-full w-full items-center gap-3 px-3 pb-3">
				<ul
					on:click={handleFooterToggle}
					on:keypress={handleFooterToggle}
					class="grid grid-cols-2"
					style="height: {BAR_HEIGHT}px"
				>
					<li class="w-full">
						<h2 class="text-sm font-light">Contact us</h2>
					</li>
					<li class="flex h-full w-full items-center justify-end pb-5">
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
								class="h-5 w-5"
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
						<label for="phone" class="">
							<span class="text-xs">Phone</span>
							<input
								class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
								type="number"
								id="phone"
								name="phone"
							/>
						</label>
						<label for="inquiry-type" class="text-xs">문의 종류</label>
						<select id="inquiry-type" name="inquiry-type">
							<option value="신축">신축</option>
							<option value="리모델링">리모델링</option>
							<option value="부분">부분</option>
							<option value="기타">기타</option>
						</select>
					</div>
				</ul>
				<ul class="grid grid-cols-2 gap-10">
					<div class="grid w-full max-w-md gap-1">
						<label for="detail" class="">
							<span class="text-xs">Detail</span>
							<input
								class="w-full rounded-md px-2 py-1 text-sm text-base-500 shadow-md"
								type="text"
								id="detail"
								name="detail"
							/>
						</label>
					</div>
					<div class="h-full bg-red-400">
						<button class="h-full w-full bg-base-600"> Send </button>
					</div>
				</ul>
			</nav>
		</footer>
	</div>
	<AsideModal bind:open />
</div>
