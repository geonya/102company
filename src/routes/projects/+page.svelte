<script lang="ts">
	import { Input } from '$lib/components';

	interface Work {
		title: string;
		image: string;
		description: string;
		createdAt: string;
	}
	const mockWorks = new Array(10);
	const mockWork = {
		title: 'Work1',
		image: 'https://picsum.photos/400/300',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		createdAt: '23.03.04',
	};
</script>

<div class="h-full min-h-screen w-full overflow-scroll py-16">
	<div class="mx-auto h-full w-full max-w-7xl px-3">
		<div class="flex h-20 w-full items-center justify-between px-2">
			<h2 class="text-lg font-light">Out Works</h2>
			<Input id="search" type="text" label="search" />
		</div>
		<div
			class="mx-auto grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5"
			id="projectsGallery"
		>
			{#each mockWorks as work}
				<div
					id="projectWrapper"
					class="cursor-pointer overflow-hidden rounded-md bg-base-700 shadow-lg hover:bg-base-600"
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
			{/each}
		</div>
	</div>
</div>
