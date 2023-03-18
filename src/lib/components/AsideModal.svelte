<script lang="ts">
	import { Icon, X } from 'svelte-hero-icons';
	import { fade } from 'svelte/transition';
	export let open: boolean;

	function handleExitButtonClick() {
		open = false;
	}
</script>

{#if open}
	<aside
		transition:fade
		class="fixed top-0 right-0 bottom-0 z-30 w-1/2 max-w-xs bg-base-900 opacity-95 shadow-lg"
	>
		<nav class="grid h-full w-full place-items-center">
			<ul
				class="grid grid-flow-row justify-items-center gap-10 text-sm font-light tracking-widest md:text-lg"
			>
				<li class="hover:text-base-300"><a href="/">Home</a></li>
				<li class="hover:text-base-300"><a href="/about">About</a></li>
				<li class="hover:text-base-300"><a href="/projects">Projects</a></li>
				<li class="hover:text-base-300"><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<button class="absolute top-2 left-2 p-3" on:click={handleExitButtonClick}>
			<Icon src={X} class=" h-5 w-5 md:h-7 md:w-7" />
		</button>
	</aside>
	<div
		class=" fixed top-0 left-0 h-screen w-full"
		on:click={handleExitButtonClick}
		on:keypress={handleExitButtonClick}
	/>
{/if}
