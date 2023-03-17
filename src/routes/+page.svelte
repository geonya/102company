<script lang="ts">
	import { InfiniteScroll } from '$lib/components';
	import { photos } from '$lib/store';
	import type { Photo } from '$lib/type';
	import { arrayOf2Groups } from '$lib/utils';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	let page = 0;
	let totalPhotos: Photo[] = [];
	let imageGroups: Photo[][] = [];

	$: totalPhotos = $photos;
	$: imageGroups = [
		...imageGroups,
		...arrayOf2Groups(slicePhotos(page, totalPhotos)),
	];

	const slicePhotos = (page: number, photos: Photo[]) => {
		return photos.slice(page, page + 2);
	};

	onMount(() => {
		totalPhotos = data.photos;
		imageGroups = arrayOf2Groups(slicePhotos(0, totalPhotos));
	});
</script>

<section class="h-screen overflow-scroll">
	<div id="reponsibleWidthSet" class="mx-auto h-full w-full">
		<article class="h-full min-h-screen w-full ">
			<div
				class="relative bg-cover bg-center bg-no-repeat"
				style="background-image:url(/hero2.jpg)"
			>
				<div
					class="mx-auto flex h-full min-h-screen max-w-xl flex-col justify-between px-5 py-24"
				>
					<div />
					<div class="space-y-10">
						<h1 class="text-4xl">
							하나의 <strong class="font-semibold">공간</strong>, 하나의
							<strong class="font-semibold">이해</strong>
						</h1>

						<p class="text-base font-light">
							Without active listening skills and taking the time to address
							concerns when they arise, projects can veer off the tracks rather
							quickly. I have learned that my most successful projects have
							always been the ones where the clients and I stayed on the same
							page together, every step of the way.
						</p>
					</div>
					<div class="flex justify-around">
						<a href="/about">
							<button
								class="rounded-sm border border-base-400 px-2 py-1 hover:bg-base-300 hover:text-base-600"
								>Our Story</button
							></a
						>
						<a href="/projects">
							<button
								class="rounded-sm border border-base-400 px-2 py-1 hover:bg-base-300 hover:text-base-600"
								>Our Projects</button
							></a
						>
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
		{#each imageGroups as group, i}
			<article
				class={'relative mx-auto grid h-full w-full grid-rows-2 py-20 xs:w-full md:max-w-6xl'}
				id="project{i}"
			>
				<div class={'absolute top-11' + (i % 2 === 0 ? ' right-2' : ' left-2')}>
					<a href="/projects">
						<button
							id="ViewProjectButton"
							class={'flex items-center rounded-sm px-3 pt-2 opacity-60 hover:cursor-pointer hover:text-base-200 hover:opacity-95 ' +
								(i % 2 === 1 ? ' flex-row-reverse' : ' flex-row')}
						>
							<div class="flex items-center text-xs md:text-sm">
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
						class={'row-span-1 grid h-full w-full cursor-pointer grid-cols-2 justify-items-center gap-1 '}
					>
						<div
							class={'main-project-wrapper relative isolate col-span-1 h-full w-full overflow-hidden rounded-sm ' +
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
								class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform place-content-center rounded-sm bg-base-500 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out '}
								style="background-image:url({image.download_url})"
							>
								<h3 class="main-project-title">{image.author}</h3>
							</div>
						</div>
					</label>
				{/each}
			</article>
		{/each}
	</div>
	<InfiniteScroll
		elementScroll={null}
		hasMore={imageGroups.length > 0}
		threshold={100}
		on:loadmore={() => {
			page++;
		}}
	/>
</section>
