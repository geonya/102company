<script lang="ts">
	const photos = new Array(10);
	const photo = 'https://picsum.photos/400/300';
</script>

<div class="h-full max-h-screen w-full snap-y snap-mandatory overflow-scroll">
	<div
		id="hero"
		class="relative mb-8 h-52 w-full snap-start overflow-hidden rounded-b-md bg-base-600 bg-cover bg-center bg-no-repeat shadow-lg md:h-52"
	>
		<div
			class="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-end space-y-3 pl-10 pb-5 opacity-95"
		>
			<h1
				class="text-md text-medium text-base-200 underline underline-offset-8"
			>
				새힘재활의학과 의원
			</h1>
			<h3 class="text-sm text-base-300">description...</h3>
			<p class="text-xs text-base-300">This is our works!</p>
		</div>
		<div
			style="background-image:url({photo});"
			class="absolute inset-0 z-0 h-full w-full rounded-b-md bg-cover bg-center bg-no-repeat bg-blend-overlay"
		>
			<div class="absolute inset-0 h-full w-full bg-base-800 opacity-50" />
		</div>
	</div>
	<div
		class="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 md:gap-10 md:px-10"
	>
		{#each photos as no}
			<div class="w-full cursor-pointer snap-start">
				<img
					src={photo}
					alt="project"
					class="mx-auto min-h-max w-full rounded-md object-cover shadow-lg"
				/>
			</div>
		{/each}
	</div>
</div>
