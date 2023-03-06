<script lang="ts">
	interface Work {
		title: string;
		image: string;
		description: string;
		createdAt: string;
	}
	const mockWorks = new Array(10);
	const mockWork: Work = {
		title: 'Work1',
		image: 'https://picsum.photos/400/300',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		createdAt: '23.03.04',
	};
</script>

<div id="projectwrapper" class="mx-auto h-full w-full max-w-7xl px-5">
	<div id="projectHeader" class="flex h-20 w-full items-center justify-between">
		<h2 class="text-md font-light">Out Works</h2>
		<input
			class="w-full max-w-[200px] rounded-md bg-base-800 px-2 py-1.5 text-xs text-base-100 opacity-60 shadow-md"
			type="text"
			id="search"
			name="search"
		/>
	</div>
	<div
		class="mx-auto grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-8"
		id="projectsGallery"
	>
		{#each mockWorks as work}
			<a href="/projects/1">
				<div
					id="projectWrapper"
					class="cursor-pointer overflow-hidden rounded-md bg-base-700 bg-opacity-90 shadow-lg transition-all duration-500 hover:bg-base-600"
				>
					<img src={mockWork.image} alt={mockWork.title} class="object-cover" />
					<div class="p-2 px-3">
						<h3 class="font-regular my-1 text-sm font-medium">
							{mockWork.title}
						</h3>
						<p class="text-sm font-light">{mockWork.description}</p>
						<div class="w-full">
							<span class="inline-block w-full text-end text-xs text-base-400"
								>{mockWork.createdAt}</span
							>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
