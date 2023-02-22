<script lang="ts">
	import { arrayOf2Groups, loadStaticImages } from '$lib/utils';
	import { onMount } from 'svelte';

	let images: string[] = [];
	let images2GroupArray: string[][] = [];

	onMount(async () => {
		images = await loadStaticImages('projects/seum');
		images2GroupArray = arrayOf2Groups(images);
	});
</script>

<section
	class="h-screen snap-y snap-mandatory overflow-scroll xs:px-3 md:px-10 lg:px-20"
>
	<!--<article-->
	<!--class="grid h-full w-full snap-start snap-always place-content-center "-->
	<!-->-->
	<!--<div-->
	<!--class="relative grid h-full place-content-center space-y-9 rounded-md bg-base-600 bg-cover bg-center bg-no-repeat py-10 px-28 text-base-300 opacity-95 bg-blend-overlay shadow-lg xs:min-h-[400px] xs:min-w-[300px] md:min-h-[700px] md:min-w-[500px]"-->
	<!--style="background-image:url(/images/hero2.jpg)"-->
	<!-->-->
	<!--<h1 class="font-regular text-3xl">Lorem Ipsum</h1>-->
	<!--<div>-->
	<!--<p class="text-sm font-light">-->
	<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do-->
	<!--eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad-->
	<!--minim veniam, quis nostrud exercitation ullamco laboris nisi ut-->
	<!--aliquip ex ea commodo consequat. Duis aute irure dolor in-->
	<!--reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla-->
	<!--pariatur. Excepteur sint occaecat cupidatat non proident, sunt in-->
	<!--culpa qui officia deserunt mollit anim id est laborum.-->
	<!--</p>-->
	<!--<p class="text-sm font-light">-->
	<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do-->
	<!--eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad-->
	<!--minim veniam, quis nostrud exercitation ullamco laboris nisi ut-->
	<!--aliquip ex ea commodo consequat. Duis aute irure dolor in-->
	<!--reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla-->
	<!--pariatur. Excepteur sint occaecat cupidatat non proident, sunt in-->
	<!--culpa qui officia deserunt mollit anim id est laborum.-->
	<!--</p>-->
	<!--</div>-->

	<!--<div class="">-->
	<!--<button-->
	<!--class="rounded-md bg-base-500 px-4 py-2 text-base-200 hover:opacity-90 "-->
	<!-->Contact</button-->
	<!-->-->
	<!--</div>-->
	<!--</div>-->
	<!--</article>-->
	{#each images2GroupArray as group, i}
		<article
			class="grid h-screen w-full snap-start snap-always grid-rows-2 overflow-hidden py-20"
		>
			{#each group as image, j}
				<div
					class={'relative row-span-1 h-full w-full cursor-pointer overflow-hidden px-3'}
				>
					<div class="main-project-wrapper h-full w-full">
						<div
							class={'main-project-image absolute top-0 bottom-0 right-0 left-0 m-auto grid h-full w-full transform grid-cols-3 grid-rows-3 rounded-md bg-base-500 bg-opacity-70 bg-cover bg-center bg-no-repeat bg-blend-overlay transition-all duration-500 ease-in-out hover:bg-blend-darken'}
							style="background-image:url({image})"
						/>
					</div>
				</div>
			{/each}
		</article>
	{/each}
</section>
