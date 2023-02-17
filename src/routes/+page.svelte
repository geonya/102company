<script lang="ts">
	import {
		arrayOf2Groups,
		arrayOf3Groups,
		loadStaticImages,
		makeProjectGroupGridClass,
	} from '$lib/utils';
	import { onMount } from 'svelte';

	let images: string[] = [];
	let images2GroupArray: string[][] = [];
	let images3GroupArray: string[][] = [];

	onMount(async () => {
		images = await loadStaticImages('projects/seum');
		images3GroupArray = arrayOf3Groups(images);
		// images2GroupArray = arrayOf2Groups(images);
	});
</script>

<section
	class="mx-auto h-screen snap-y snap-mandatory overflow-scroll xs:px-3 md:px-12"
>
	<article class="h-full snap-start snap-always py-32 px-36">
		<div
			class="relative grid h-full place-content-center space-y-9 rounded-md bg-base-600 bg-cover bg-center bg-no-repeat px-28 text-base-300 opacity-95 bg-blend-overlay shadow-lg"
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
	<!-- {#each images2GroupArray as group, i}
		<article
			class="grid h-screen w-full snap-start snap-always grid-cols-2 grid-rows-2 overflow-hidden"
		>
			{#each group as image, j}
				<div
					class={'main-project-wrapper relative col-span-1 row-span-1 h-full w-full cursor-pointer overflow-hidden'}
				>
					<div
						class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform grid-cols-3 grid-rows-3 rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-blend-darken'}
						style="background-image:url({image})"
					/>
				</div>
			{/each}
		</article>
	{/each} -->

	{#each images3GroupArray as group, i}
		<div
			class={'relative mx-auto grid h-screen w-full max-w-5xl snap-start snap-always grid-cols-3 grid-rows-3 content-center justify-center gap-y-3 py-16'}
		>
			<div class={'absolute top-20' + (i % 2 === 0 ? ' right-2' : ' left-2')}>
				<button
					class={'flex items-center justify-center space-x-3 rounded-md px-3 py-2 hover:bg-base-600 hover:bg-opacity-50 hover:text-base-200' +
						(i % 2 === 1 && ' flex-row-reverse')}
				>
					<div>View Project</div>
					<svg
						class="h-4 w-4"
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
				</button>
			</div>
			{#each group as image, j}
				<label
					for="clickBox{i + '-' + j}"
					class={`main-project-wrapper relative col-span-2 row-span-1 h-full w-full cursor-pointer overflow-hidden rounded-sm  ${makeProjectGroupGridClass(
						i,
						j,
					)}` + (j === 1 && ' z-10')}
					on:focus={() => {}}
					on:mouseover={() => {
						console.log('over');
					}}
				>
					<input
						id="clickBox{i + '-' + j}"
						class="clickBox"
						type="checkbox"
						hidden
					/>
					<div
						class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform grid-cols-3 grid-rows-3 rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-blend-darken'}
						style="background-image:url({image})"
					>
						<div
							class="main-project-title col-span-1 col-start-2 row-span-1 row-start-2 grid h-full w-full place-content-center text-base-200"
						>
							<h3 class="invisible">평택 세움재할의학과의원</h3>
						</div>
					</div>
				</label>
			{/each}
		</div>
	{/each}
</section>
