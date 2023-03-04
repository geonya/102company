<script lang="ts">
	const photos = new Array(10);
	const photo = 'https://picsum.photos/400/300';
</script>

<div class="h-full max-h-screen w-full snap-y snap-mandatory overflow-scroll">
	<div
		id="hero"
		class="relative mb-8 h-48 w-full snap-start rounded-b-md bg-base-600 bg-cover bg-center bg-no-repeat shadow-lg md:h-52"
	>
		<div
			class="absolute inset-0 z-20 flex h-full w-full items-center justify-center"
		>
			<h1 class="text-md text-medium">Works1</h1>
			<h3 class="text-sm text-base-500">description...</h3>
		</div>
		<div
			style="background-image:url({photo});"
			class="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
		/>
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
