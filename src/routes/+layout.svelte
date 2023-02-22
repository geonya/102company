<script lang="ts">
	import '../app.postcss';
	import { Icon, Menu } from 'svelte-hero-icons';
	import AsideModal from '../lib/components/AsideModal.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	let open: boolean;
	$: open = false;
	let isFooterOpen = false;
	const footerBottom = tweened(-436, {
		duration: 500,
		easing: cubicInOut,
	});
	const handleFooterToggle = () => {
		if (isFooterOpen) {
			footerBottom.set(-436);
			isFooterOpen = false;
		} else {
			isFooterOpen = true;
			footerBottom.set(0);
		}
	};

	const handleMenuButtonClick = () => {
		open = true;
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
	<div
		class="fixed left-0 right-0 w-full cursor-pointer rounded-md "
		style="bottom: {$footerBottom}px"
	>
		<footer
			class={'w-full rounded-md bg-base-600 bg-opacity-0 shadow-inner backdrop-blur-md transition delay-100 duration-500 ease-in-out hover:shadow-md xs:h-[500px] lg:h-[350px]' +
				(isFooterOpen ? ' bg-opacity-90' : '')}
		>
			<nav
				class="grid h-full w-full grid-cols-3 grid-rows-55 justify-items-center"
			>
				<ul
					on:click={handleFooterToggle}
					on:keypress={handleFooterToggle}
					class="col-span-1 col-start-3 row-span-1 row-start-1 grid  w-full"
				>
					<li class="mt-1">
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
				<ul />
				<ul
					class="col-span-1 col-start-1 row-span-1 row-start-1 h-full  
				"
				>
					<li class=" grid h-full w-full cursor-pointer place-content-center">
						<h2 class="font-regular text-lg ">Contact us</h2>
					</li>
				</ul>
				<ul
					class="col-span-full col-start-1 row-span-4 row-start-2 grid h-full w-full "
				>
					<form
						action=""
						class="bg-greed-400 grid h-full w-full grid-rows-3 p-5 xs:grid-cols-1 lg:grid-cols-2"
					>
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
