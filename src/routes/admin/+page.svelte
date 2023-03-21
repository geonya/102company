<script lang="ts">
	import Dropzone from '$lib/components/Dropzone.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let addedFiles: File[] = [];

	let imageUrlList: string[] = [];

	function createImageUrl(files: File[]) {
		return files.map((file) => URL.createObjectURL(file));
	}

	$: imageUrlList = createImageUrl(addedFiles);
</script>

<div class="mx-auto max-w-lg py-24">
	<h1 class="">
		ID :: {data?.props?.user?.name}
	</h1>
	<form method="post" action="?/create" enctype="multipart/form-data">
		<div>
			<h1 class="text-center">Project Upload</h1>
		</div>
		<Input id="title" type="text" label="Project Title" />
		<div class="px-1">
			<label for="name" class="">
				<span class="text-xs">Description</span>
			</label>
			<textarea
				class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
				id="description"
				name="description"
			/>
		</div>
		<div class="mt-2 px-1">
			<Dropzone bind:addedFiles />
		</div>
		<div class="grid w-full grid-cols-3">
			{#each imageUrlList as url}
				<div class="flex flex-col items-center justify-center">
					<img src={url} alt="" class="object-cover" />
				</div>
			{/each}
		</div>
		<div class="inline-flex w-full justify-end">
			<button
				type="submit"
				class="mt-2 mr-2 rounded-sm border border-base-400 px-2 py-1 hover:bg-base-500 hover:text-base-300"
				>Submit</button
			>
		</div>
	</form>
</div>
