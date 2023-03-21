<script lang="ts">
	let inputElement: HTMLInputElement;
	export let addedFiles: File[];

	function createFileList(files: File[]) {
		const dataTransfer = new DataTransfer();
		for (const file of files) {
			dataTransfer.items.add(file);
		}
		return dataTransfer.files;
	}

	function onDrop(
		event: DragEvent & {
			currentTarget: EventTarget & HTMLElement;
		},
	) {
		if (!event.dataTransfer) return;
		const files: File[] = [];
		for (const item of event.dataTransfer.items) {
			if (item.kind === 'file' && item.type.startsWith('image/')) {
				const file = item.getAsFile();
				if (file) {
					files.push(file);
				}
			}
		}
		if (files.length) {
			inputElement.files = createFileList(files);
			inputElement.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}
	function handleSelectedFile(
		event: Event & { currentTarget: EventTarget & HTMLInputElement },
	) {
		const files = event.currentTarget.files;
		if (files) {
			addedFiles = Array.from(files);
		}
	}
</script>

<div
	class="flex w-full items-center justify-center"
	on:dragover|preventDefault
	on:drop|preventDefault|stopPropagation={onDrop}
>
	<label
		for="photos"
		class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-base-500 bg-base-600 hover:bg-base-700 "
	>
		<div class="flex flex-col items-center justify-center pt-5 pb-6">
			<svg
				aria-hidden="true"
				class="mb-3 h-10 w-10 text-base-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/></svg
			>
			<p class="mb-2 text-sm text-base-500 ">
				<span class="font-semibold">Click to upload</span> or drag and drop
			</p>
			<p class="text-xs text-base-500 ">JPG, PNG</p>
		</div>
		<input
			id="photos"
			name="photos"
			type="file"
			multiple
			accept="image/*"
			autocomplete="off"
			tabindex="-1"
			on:change={handleSelectedFile}
			class="hidden"
			bind:this={inputElement}
		/>
	</label>
</div>
