<script lang="ts">
	import { Icon, X } from 'svelte-hero-icons';
	import { fade } from 'svelte/transition';
	export let open: boolean;

	function handleExitButtonClick() {
		open = !open;
	}
</script>

{#if open}
	<aside
		transition:fade
		class="fixed top-0 right-0 bottom-0 z-20 w-1/2 max-w-xs bg-base-900 opacity-95 shadow-lg"
	>
		<nav class="grid h-full w-full place-items-center">
			<ul
				class="grid grid-flow-row justify-items-center gap-32 text-lg font-light tracking-widest"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<button class="absolute top-2 left-2 p-3" on:click={handleExitButtonClick}>
			<Icon src={X} class="h-7 w-7" />
		</button>
	</aside>
{/if}
