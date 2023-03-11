<script lang="ts">
	import { page } from '$app/stores';
	import { photos } from '$lib/store';
	import type { Photo } from '$lib/type';
	import { onMount } from 'svelte';
	let photo: Photo | undefined;
	onMount(() => {
		const photoId = $page.params.id;
		if (photoId) {
			photo = $photos.find((photo) => photo.id === photoId);
		}
	});
</script>

<div
	class="h-full max-h-screen min-h-screen w-full snap-y snap-mandatory overflow-scroll"
>
	{#if photo}
		<div
			id="hero"
			class="relative mb-7 flex h-40 w-full snap-start items-center overflow-hidden rounded-b-md bg-base-600 bg-cover bg-center bg-no-repeat shadow-lg md:h-52"
		>
			<div class="z-10 flex h-full w-full items-end justify-between px-5 pb-6">
				<h1
					class="text-medium text-md text-base-300 underline underline-offset-8 md:text-lg"
				>
					새힘재활의학과 의원
				</h1>
				<div>
					<h3 class="text-sm text-base-400 md:text-sm">description...</h3>
					<p class="text-xs text-base-400">This is our works!</p>
				</div>
			</div>
			<div
				style="background-image:url({photo.download_url});"
				class="absolute inset-0 z-0 h-full w-full rounded-b-md bg-cover bg-center bg-no-repeat bg-blend-overlay blur-sm"
			/>
		</div>
		<div class="mx-auto grid w-full max-w-4xl gap-3 md:px-3">
			{#each $photos as photo}
				<div class="w-full cursor-pointer rounded-b-md text-base-400 ">
					<img
						src={photo.download_url}
						alt="project"
						class="mt-15 mx-auto w-full snap-center rounded-t-md object-cover shadow-lg"
					/>
				</div>
			{/each}
			<div class="h-8" />
			<a href="/projects" class="z-20 flex w-full justify-end">
				<button class="flex cursor-pointer items-center rounded-sm px-3 pt-2">
					<div class="flex items-center text-base-200 hover:text-white">
						View more projects
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
			<div class="h-20" />
		</div>
	{/if}
</div>
