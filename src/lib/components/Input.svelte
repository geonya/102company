<script lang="ts">
	export let type: string;
	export let id: string;
	export let placeholder = '';
	export let label = '';
	export let required = false;
	export let disabled = false;
</script>

<div class="p-1">
	<label for={id} class="inline-block w-full pl-1">
		{#if label} <span class="inline-block text-xs">{label}</span> {/if}
	</label>
	<input
		class="w-full rounded-md bg-base-800 px-3 py-1 text-sm text-base-100 opacity-60 shadow-md sm:py-2"
		{type}
		{id}
		name={id}
		{placeholder}
		{required}
		{disabled}
	/>
</div>
