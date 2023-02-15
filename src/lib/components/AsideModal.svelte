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
		class="fixed top-0 right-0 bottom-0 w-1/2 max-w-xs bg-base-900 shadow-lg z-20 opacity-95"
	>
		<nav class="w-full h-full grid place-items-center">
			<ul
				class="grid grid-flow-row gap-32 text-lg font-light tracking-widest justify-items-center"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<button class="absolute top-2 left-2 p-3" on:click={handleExitButtonClick}>
			<Icon src={X} class="w-7 h-7" />
		</button>
	</aside>
{/if}
