<section
	class="mx-auto xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl"
>
	<article
		class="xs:min-h[300px] relative space-y-9 rounded-md bg-base-500 bg-cover bg-center bg-no-repeat px-12 py-24 opacity-95 bg-blend-overlay shadow-lg md:min-h-[600px]"
		style="background-image:url(/images/hero.jpg)"
	>
		<div class="space-y-3">
			<h1 class="font-regular text-3xl">Lorem Ipsum</h1>
			<p class="text-sm font-light">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
		<div class="w-full">
			<button class="rounded-md bg-base-500 px-4 py-1 hover:opacity-90"
				>Contact</button
			>
		</div>
	</article>
	<article
		class="grid justify-items-center gap-5 pt-16 xs:grid-cols-1 md:grid-cols-2"
	>
		{#each new Array(10) as item}
			<div class="main-project-wrapper">
				<div
					class="main-project-image"
					style="background-image:url(/images/section{0}.jpg)"
				/>
			</div>
		{/each}
	</article>
</section>
