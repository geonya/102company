<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { BAR_HEIGHT } from '$lib/constants';
	import { Input } from '$lib/components';

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
			<ul class="flex h-full items-center ">
				<li>
					<h2 class="font-regular text-md">
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
			class={'rounded-md bg-base-600 backdrop-blur-md transition delay-100 duration-500 ease-in-out hover:shadow-md' +
				(isFooterOpen ? ' bg-opacity-90' : '')}
		>
			<nav class="h-full w-full items-center">
				<ul
					on:click={handleFooterToggle}
					on:keypress={handleFooterToggle}
					class="grid w-full grid-cols-2 px-5 pb-1"
					style="height: {BAR_HEIGHT}px"
				>
					<li class="flex h-full w-full items-center">
						<h2 class="text-sm font-light">Contact us</h2>
					</li>
					<li class="flex h-full w-full items-center justify-end">
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
				<ul class="grid h-full w-full xs:grid-cols-1 lg:grid-cols-2">
					<li class="self-center px-5 xs:hidden lg:block">
						<ol class="">
							<span class="text-lg font-light">Address :</span>
							<span>경기도 김포시 한강길 123, 3층</span>
						</ol>
						<ol>
							<span class="text-lg font-light">Contact :</span>
							<span>1234-1234</span>
						</ol>
						<ol>
							<span class="text-lg font-light">Email :</span>
							<span>102company@gmail.com</span>
						</ol>
						<ol>
							<span class="text-lg font-light">Contact :</span>
							<span>102company@gmail.com</span>
						</ol>
						<ol>
							<span class="text-lg font-light">Contact :</span>
							<span>102company@gmail.com</span>
						</ol>
						<ol>
							<span class="text-lg font-light">Contact :</span>
							<span>102company@gmail.com</span>
						</ol>
					</li>
					<li class="grid h-full w-full grid-flow-dense grid-cols-2">
						<Input type="text" id="name" label="Name" />
						<label for="email" class="px-2 py-2">
							<span class="text-xs">Email</span>
							<input
								class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
								type="email"
								id="email"
								name="email"
							/>
						</label>
						<label for="phone" class="px-2 py-2">
							<span class="text-xs">Phone</span>
							<input
								class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
								type="number"
								id="phone"
								name="phone"
							/>
						</label>
						<label for="inquiry-type" class="px-2 py-2">
							<span class="text-xs">Category</span>
							<select
								class="block w-full appearance-none rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md focus:border-blue-500 focus:ring-blue-500"
							>
								<option selected value="신축">신축</option>
								<option value="리모델링">리모델링</option>
								<option value="부분">부분</option>
								<option value="기타">기타</option>
							</select>
						</label>
						<div class="col-span-2 -mt-1 px-2 py-2">
							<label for="name" class="">
								<span class="text-xs">Description</span>
								<textarea
									class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
									id="name"
									name="name"
								/>
							</label>
							<div class="flex w-full justify-end">
								<button
									class="mt-2 rounded-md bg-base-800 bg-opacity-70 px-3 py-2 text-xs hover:bg-opacity-100"
								>
									Submit
								</button>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</footer>
	</div>
	<AsideModal bind:open />
</div>
