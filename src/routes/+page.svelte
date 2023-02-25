<script lang="ts">
	import { InifiniteScroll } from '$lib/components';
	import AsideModal from '$lib/components/AsideModal.svelte';
	import { arrayOf2Groups, loadStaticImages } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let sectionElement: HTMLElement;
	let page = 0;
	let images: string[][] = [];
	let newImages: string[][] = [];

	const fetchData = async (page: number) => {
		const newData = arrayOf2Groups(
			await loadStaticImages('projects/seum'),
		).slice(page, page + 1);
		return newData;
	};

	const handleLoadMore = async () => {
		console.log('loadmore');

		newImages = await fetchData(page);
	};

	$: images = [...images, ...newImages];

	onMount(async () => {
		newImages = arrayOf2Groups(await loadStaticImages('projects/seum')).slice(
			0,
			1,
		);
	});
</script>

<section
	bind:this={sectionElement}
	class="h-screen snap-y snap-mandatory overflow-scroll xs:px-3 md:px-10 lg:px-20"
>
	<article
		class="grid h-full w-full snap-start snap-normal place-content-center "
	>
		<div
			class="relative grid h-full place-content-center space-y-9 rounded-md bg-base-600 bg-cover bg-center bg-no-repeat py-10 px-28 text-base-300 opacity-95 bg-blend-overlay shadow-lg xs:min-h-[400px] xs:min-w-[300px] md:min-h-[700px] md:min-w-[500px]"
			style="background-image:url(/images/hero2.jpg)"
		>
			<h1 class="font-regular text-3xl">Lorem Ipsum</h1>
			<div>
				<p class="text-sm font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p class="text-sm font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>

			<div class="">
				<button
					class="rounded-md bg-base-500 px-4 py-2 text-base-200 hover:opacity-90 "
					>Contact</button
				>
			</div>
		</div>
	</article>
	{#each images as group, i}
		<article
			transition:fade
			class="relative grid h-screen w-full snap-start snap-normal grid-rows-2 gap-4 overflow-hidden py-20"
		>
			<div class={'absolute top-24' + (i % 2 === 0 ? ' right-5' : ' left-5')}>
				<button
					class={'flex items-center rounded-md px-2 py-1 opacity-50 hover:cursor-pointer hover:text-base-200 hover:opacity-100 ' +
						(i % 2 === 1 ? ' flex-row-reverse' : ' flex-row')}
				>
					<div class="flex items-center ">View Project</div>
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
					for="clickBox{i + '-' + j}"
					class={'row-span-1 grid h-full w-full cursor-pointer grid-cols-3 px-3 py-2'}
				>
					<div
						class={'main-project-wrapper relative col-span-2 h-full w-full max-w-[800px] overflow-hidden rounded-md' +
							((j + i) % 2 === 0 ? ' col-start-1' : ' col-start-2 ')}
					>
						<input
							type="checkbox"
							id="clickBox{i + '-' + j}"
							class="click-box"
							hidden
						/>
						<div
							class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform place-content-center rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-blend-darken'}
							style="background-image:url({image})"
						>
							<h3 class="main-project-title">Title</h3>
						</div>
					</div>
				</label>
			{/each}
			<InifiniteScroll
				elementScroll={sectionElement}
				hasMore={newImages.length > 0}
				threshold={100}
				on:loadmore={() => {
					console.log('loadmore callback');
					page++;
					handleLoadMore();
				}}
			/>
		</article>
	{/each}
</section>
