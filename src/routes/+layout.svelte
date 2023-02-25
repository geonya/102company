<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let open = false;
	let isFooterOpen = false;

	let screenHeight: number;
	let footerHeight: number;
	let footerElement: HTMLElement;

	$: footerTop = tweened(screenHeight - 64, {
		duration: 400,
		easing: cubicInOut,
	});
	const handleFooterToggle = () => {
		if (isFooterOpen) {
			footerTop.set(screenHeight - 64);
			isFooterOpen = false;
		} else {
			isFooterOpen = true;
			footerTop.set(screenHeight - footerHeight);
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
	<div
		class="fixed left-0 h-full w-full cursor-pointer rounded-md "
		style="top: {$footerTop}px"
	>
		<footer
			bind:this={footerElement}
			class={'rounded-md bg-base-600 bg-opacity-0 shadow-inner backdrop-blur-md transition delay-100 duration-500 ease-in-out hover:shadow-md' +
				(isFooterOpen ? ' bg-opacity-90' : '')}
		>
			<nav class="h-full w-full">
				<ul
					on:click={handleFooterToggle}
					on:keypress={handleFooterToggle}
					class="grid h-16 grid-cols-3 items-center justify-items-center"
				>
					<li class="col-span-1 col-start-1">
						<h2 class="font-regular text-lg ">Contact us</h2>
					</li>
					<li />
					<li class="col-span-1 col-start-3">
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

				<ul class="grid h-full w-full">
					<form action="" class="">
						<div class="block">
							<label for="name"
								>상호
								<input
									name="name"
									type="text"
									placeholder="상호"
									class="w-full max-w-lg rounded-md p-2 opacity-90 shadow-md"
								/></label
							>
							<label class="block" for="name"
								>상호
								<input
									name="name"
									type="text"
									placeholder="상호"
									class="w-full max-w-lg rounded-md p-2 opacity-90 shadow-md"
								/></label
							>
						</div>
						<div class="">
							<label for="name">상호</label>
							<input
								name="name"
								type="text"
								placeholder="상호"
								class="w-full rounded-md p-2 opacity-90 shadow-md"
							/>
							<label for="name">상호</label>
							<input
								name="name"
								type="text"
								placeholder="상호"
								class="w-full rounded-md p-2 opacity-90 shadow-md"
							/>
						</div>
						<div
							class="col-span-full row-span-2 flex h-full items-center justify-center p-2"
						>
							<label class="h-full w-full" for="detail"
								><span class="block">문의 내용</span>
								<textarea
									class="h-full w-full rounded-md px-10 py-2"
									name="문의 내용"
									id=""
								/>
							</label>
						</div>
					</form>
				</ul>
			</nav>
		</footer>
		<AsideModal bind:open />
	</div>
</div>
