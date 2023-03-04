<script lang="ts">
	import { InfiniteScroll } from '$lib/components';
	import { arrayOf2Groups, loadStaticImages } from '$lib/utils';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let page = 0;
	let totalGroup = [];
	let images: string[][] = [];
	let newImages: string[][] = [];

	const fetchData = async (page: number) => {
		const newData = arrayOf2Groups(await loadStaticImages('')).slice(
			page,
			page + 1,
		);
		return newData;
	};

	const handleLoadMore = async () => {
		newImages = await fetchData(page);
	};

	$: images = [...images, ...newImages];

	onMount(async () => {
		totalGroup = arrayOf2Groups(await loadStaticImages(''));
		newImages = totalGroup.slice(0, 1);
	});
</script>

<section class="h-screen snap-y snap-mandatory overflow-scroll">
	<div id="reponsibleWidthSet" class="mx-auto h-full xs:w-full md:max-w-7xl">
		<article class="h-full min-h-screen w-full snap-start">
			<div
				class="relative rounded-md bg-base-600 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-overlay "
				style="background-image:url(/hero2.jpg)"
			>
				<div
					class="flex h-full min-h-screen w-full flex-col justify-between px-5 py-24"
				>
					<div />
					<div class="space-y-10">
						<h1 class="font-regular text-3xl">Lorem Ipsum</h1>

						<p class="text-sm font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>

					<div class="flex h-full w-full items-end justify-center">
						<button class="focue:opacity-95 hover:opacity-95">
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
			</div>
		</article>
		<!-- Project Images -->
		{#each images as group, i}
			<article
				class={'relative grid h-full w-full snap-start grid-rows-2 py-20 px-1'}
				id="project{i}"
			>
				<div class={'absolute top-32' + (i % 2 === 0 ? ' right-5' : ' left-5')}>
					<a href="/projects/1">
						<button
							class={'flex items-center rounded-md px-3 pt-2 opacity-60 hover:cursor-pointer hover:text-base-200 hover:opacity-95 ' +
								(i % 2 === 1 ? ' flex-row-reverse' : ' flex-row')}
						>
							<div class="flex items-center xs:text-sm md:text-sm">
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
					</a>
				</div>
				{#each group as image, j}
					<label
						in:fade={{
							duration: 1000,
							delay: 700 * (j + 0.5),
							easing: cubicInOut,
						}}
						for="clickBox{i + '-' + j}"
						class={'row-span-1 grid h-full w-full cursor-pointer grid-cols-3 px-3 py-2 '}
					>
						<div
							class={'main-project-wrapper relative isolate col-span-2 h-full max-h-[300px] w-full max-w-[600px] overflow-hidden rounded-md lg:max-h-[400px]' +
								((j + i) % 2 === 0 ? ' col-start-1 ' : ' col-start-2 ') +
								(j % 2 ? ' self-start' : ' self-end')}
							style=""
						>
							<input
								type="checkbox"
								id="clickBox{i + '-' + j}"
								class="click-box"
								hidden
							/>
							<div
								class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform place-content-center rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-darken transition-all duration-500 ease-in-out hover:bg-blend-normal focus:bg-blend-normal'}
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
	<InfiniteScroll
		elementScroll={null}
		hasMore={newImages.length > 0}
		threshold={100}
		on:loadmore={() => {
			page++;
			handleLoadMore();
		}}
	/>
</section>
