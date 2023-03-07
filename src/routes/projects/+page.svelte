<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { photos } from '$lib/store';

	let searchBarWidth = tweened(200, {
		duration: 500,
		easing: cubicInOut,
	});
	const onSearchBarClick = () => {
		searchBarWidth.set(250);
	};
	const onSearchBlur = () => {
		searchBarWidth.set(200);
	};
</script>

<div id="projectwrapper" class="h-screen w-full overflow-scroll md:px-3">
	<div class="h-8 " />
	<div class="mx-auto max-w-7xl">
		<div
			id="projectHeader"
			class="my-4 flex h-20 w-full items-center justify-between"
		>
			<h2 class="text-md ml-5 font-light text-white">Out Works</h2>
			<button class="relative" on:click={onSearchBarClick}>
				<input
					class="w-full rounded-md bg-base-600 px-2 py-1.5 pl-8 text-xs text-base-100 opacity-60 shadow-md hover:bg-base-700"
					type="text"
					id="search"
					name="search"
					style="max-width:{$searchBarWidth}px;"
					on:blur={onSearchBlur}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					viewBox="0 96 960 960"
					width="48"
					class="absolute top-1/2 left-1 h-5  w-5 -translate-y-1/2 fill-base-400"
					><path
						d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"
					/></svg
				>
			</button>
		</div>
		<div class="mx-auto grid gap-3 lg:grid-cols-2" id="projectsGallery">
			{#if $photos && $photos.length > 0}
				{#each $photos as photo, i}
					<a href="/projects/{photo.id}" class="">
						<div
							id="projectWrapper"
							class="cursor-pointer overflow-hidden rounded-md shadow-lg backdrop-blur transition-all duration-500 hover:bg-base-600"
						>
							<img
								src={photo.download_url}
								alt={photo.id}
								class="w-full object-cover"
							/>
							<div class="p-2 px-3">
								<h3 class="font-regular my-1 text-sm font-medium">
									{photo.author}
								</h3>
								<p class="text-sm font-light">{photo.author}</p>
								<div class="w-full">
									<span
										class="inline-block w-full text-end text-xs text-base-400"
										>{photo.width}</span
									>
								</div>
							</div>
						</div>
					</a>
				{/each}
			{/if}
		</div>
		<div class="h-8" />
		<a href="/" class="z-20 flex w-full justify-end">
			<button class="flex cursor-pointer items-center rounded-md px-3 pt-2">
				<div class="flex items-center text-base-200 hover:text-white">
					Go Home
				</div>
				<div class="mx-1 grid place-content-center pb-1 pt-1.5">
					<svg
						class=" h-5 w-5"
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
							d={'M8.25 4.5l7.5 7.5-7.5 7.5'}
						/>
					</svg>
				</div>
			</button>
		</a>
		<div class="h-16" />
	</div>
</div>
