<script lang="ts">
	export let type: string;
	export let id: string;
	export let placeholder = '';
	export let label = '';
	export let required = false;
	export let disabled = false;
</script>

<label for={id} class="px-2 py-2">
	{#if label} <span class="text-xs">{label}</span> {/if}
	<input
		class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
		{type}
		{id}
		name={id}
		{placeholder}
		{required}
		{disabled}
	/>
</label>
