<script lang="ts">
	import { InifiniteScroll } from '$lib/components';
	import { arrayOf2Groups, loadStaticImages } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { cubicInOut, elasticInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let sectionElement: HTMLElement;
	let page = 0;
	let totalGroup = [];
	let images: string[][] = [];
	let newImages: string[][] = [];
	let loading = false;
	let scrollY = 0;
	let bannerElement: HTMLElement;

	const fetchData = async (page: number) => {
		const newData = arrayOf2Groups(await loadStaticImages('')).slice(
			page,
			page + 1,
		);
		return newData;
	};

	const handleLoadMore = async () => {
		loading = true;
		newImages = await fetchData(page);
		loading = false;
	};

	const handleScrollDown = () => {
		if (bannerElement) {
			sectionElement.scrollTo({
				top: bannerElement.scrollHeight,
				behavior: 'smooth',
			});
		}
	};

	$: images = [...images, ...newImages];

	onMount(async () => {
		totalGroup = arrayOf2Groups(await loadStaticImages(''));
		newImages = totalGroup.slice(0, 1);
	});
</script>

<svelte:window bind:scrollY />

<section bind:this={sectionElement} class="h-screen overflow-scroll">
	<div class="mx-auto h-full xs:max-w-md md:max-w-lg lg:max-w-2xl">
		<article
			bind:this={bannerElement}
			class="grid h-full min-h-screen w-full grid-rows-3"
		>
			<div
				class="relative grid min-h-screen place-content-center space-y-9 rounded-md bg-base-600 bg-cover bg-center bg-no-repeat px-5 text-base-300 opacity-95 bg-blend-overlay shadow-lg xs:h-full xs:w-full md:max-w-5xl"
				style="background-image:url(/hero2.jpg)"
			>
				<h1 class="font-regular text-3xl">Lorem Ipsum</h1>
				<div>
					<p class="text-sm font-light">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<div class="flex h-full w-full items-end justify-center">
					<button class="hover:opacity-90 " on:click={handleScrollDown}>
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							stroke-width="0.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</article>
		{#each images as group, i}
			<article class="relative grid h-full grid-rows-2 py-20" id="project{i}">
				<div class={'absolute top-12' + (i % 2 === 0 ? ' right-5' : ' left-5')}>
					<button
						class={'flex items-center rounded-md px-2 py-1 opacity-50 hover:cursor-pointer hover:text-base-200 hover:opacity-100 ' +
							(i % 2 === 1 ? ' flex-row-reverse' : ' flex-row')}
					>
						<div class="flex items-center xs:text-xs md:text-sm">
							View Project
						</div>
						<div class="mx-1 grid place-content-center pb-1 pt-1.5">
							<svg
								class=" h-4 w-4"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d={i % 2 === 0
										? 'M8.25 4.5l7.5 7.5-7.5 7.5'
										: 'M15.75 19.5L8.25 12l7.5-7.5'}
								/>
							</svg>
						</div>
					</button>
				</div>
				{#each group as image, j}
					<label
						in:fade={{
							duration: 1000,
							delay: 700 * (j + 0.5),
							easing: cubicInOut,
						}}
						for="clickBox{i + '-' + j}"
						class={' row-span-1 grid h-full w-full cursor-pointer grid-cols-3 justify-items-center px-3 py-2'}
					>
						<div
							class={'main-project-wrapper relative isolate col-span-2 h-full w-full max-w-[640px] overflow-hidden rounded-md' +
								((j + i) % 2 === 0 ? ' col-start-1' : ' col-start-2 ')}
							style=""
						>
							<input
								type="checkbox"
								id="clickBox{i + '-' + j}"
								class="click-box"
								hidden
							/>
							<div
								class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform place-content-center rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-blend-darken '}
								style="background-image:url({image})"
							>
								<h3 class="main-project-title">Title</h3>
							</div>
						</div>
					</label>
				{/each}
			</article>
		{/each}
	</div>
	<InifiniteScroll
		elId="project3"
		sectionLength={totalGroup.length}
		elementScroll={null}
		hasMore={newImages.length > 0}
		threshold={100}
		on:loadmore={() => {
			page++;
			handleLoadMore();
		}}
	/>
</section>
