<script lang="ts">
	import { fly } from 'svelte/transition';

	let aboutWrapper: HTMLElement;
	let scrollTop = 0;
	let scrollHeight = 1;
	let headerElement: HTMLElement;
	let contentElement1: HTMLElement;
	let contentElement2: HTMLElement;
	let contentElement3: HTMLElement;
	let contentElement4: HTMLElement;
	let contentElement5: HTMLElement;
	let contentElement6: HTMLElement;
	let clientHeight = 0;

	function onScroll(e: UIEvent) {
		const scrollRange = clientHeight / 3.5;
		scrollTop = aboutWrapper.scrollTop;
		scrollHeight = aboutWrapper.scrollHeight;
		console.log(scrollTop, scrollRange);
		if (scrollTop <= scrollRange) {
		}
		if (scrollTop > scrollRange / 10) {
			const range = scrollRange / 10;
			let scale = 0.2 + ((scrollTop - range) / range) * 1;
			contentElement1.style.transform = `scale(${scale})`;
			contentElement1.style.opacity = `${scale}`;

			if (scale >= 1) {
				contentElement1.style.transform = `scale(1)`;
			}
		}
		if (scrollTop > scrollRange * 1.5) {
			const range = scrollRange * 1.5;
			let scale = 0.2 + ((scrollTop - range) / range) * 1;
			contentElement2.style.transform = `scale(${scale})`;
			contentElement2.style.opacity = `${scale}`;

			if (scale >= 1) {
				contentElement2.style.transform = `scale(1)`;
			}
		}
		if (scrollTop > scrollRange * 2) {
			const range = scrollRange * 2;
			let scale = 0 + ((scrollTop - range) / range) * 1;
			contentElement3.style.transform = `scale(${scale})`;
			contentElement3.style.opacity = `${scale}`;

			if (scale >= 1) {
				contentElement3.style.transform = `scale(1)`;
			}
		}
		if (scrollTop > scrollRange * 4) {
			const range = scrollRange * 4;
			let scale = 0 + ((scrollTop - range) / range) * 400;
			if (scale > 0) {
				contentElement4.style.transform = `translateX(${scale - 400}px)`;
				contentElement4.style.opacity = `${scale}`;
			}
			if (scale >= 1) {
				contentElement4.style.transform = `translateX(0px)`;
			}
		}
		if (scrollTop > scrollRange * 6) {
			const range = scrollRange * 6;
			let scale = 0 + ((scrollTop - range) / range) * 400;
			contentElement5.style.transform = `translateX(${scale - 400}px)`;
			contentElement5.style.opacity = `${scale}`;

			if (scale >= 1) {
				contentElement5.style.transform = `translateX(0px)`;
			}
		}
		if (scrollTop > scrollRange * 8) {
			const range = scrollRange * 8;
			let scale = 0 + ((scrollTop - range) / range) * 400;

			contentElement6.style.transform = `translateX(${scale - 400}px})`;
			contentElement6.style.opacity = `${scale}`;

			if (scale >= 1) {
				contentElement6.style.transform = `translateX(0px)`;
			}
		}
	}
</script>

<div
	class="relative h-screen w-full overflow-x-hidden overflow-y-scroll"
	bind:this={aboutWrapper}
	bind:clientHeight
	on:scroll={onScroll}
>
	<div
		class="flex flex-col items-center bg-cover bg-center bg-no-repeat py-24"
		style="background-image:url('/bg.jpg');"
	>
		<div
			class="mx-auto mt-36 mb-24 flex w-full flex-col items-center justify-center duration-1000 ease-in-out"
			style="transform:scale(1);"
			bind:this={headerElement}
		>
			<h2
				class="bg-gradient-to-bl from-base-200 to-base-400 bg-clip-text text-3xl font-semibold text-transparent"
			>
				102 Company
			</h2>
			<h3 class="text-xl">하나의 공간, 하나의 이해</h3>
			<img src="/hero.jpg" alt="" class=" my-12 h-auto w-2/3 rounded-sm" />
		</div>
		<div
			class="mb-12 flex flex-col items-center justify-center rounded-sm bg-base-800 bg-opacity-70 py-12 opacity-0 transition-all duration-1000 ease-in-out"
			style="transform:scale(0); transform-origin:bottom right;"
			bind:this={contentElement1}
		>
			<p class="w-2/3 font-semibold text-base-300 md:text-lg">
				<span class="text-base-100 md:text-2xl">I</span>
				nterior design is an intimate reflection of the way we live. What we choose
				to surround ourselves with can make an already responsive architectural space
				even more interactive and in tune with our sensory needs. Our work carefully
				considers how each client relates to a space on a personal level. We explore
				how essential components such as light, texture, and color can express and
				respond to the unique desires of a family’s living space, a brand’s retail
				environment, or a creative office setting. Throughout, we maintain an organic
				and modern approach, creating interiors that work seamlessly with the architectural
				design as well as with the surrounding landscape.
			</p>
		</div>
		<div
			class="mb-12 flex flex-col items-center justify-center opacity-20 transition-all duration-1000 ease-in-out"
			style="transform:scale(0.2); transform-origin:bottom left;"
			bind:this={contentElement2}
		>
			<img src="/hero.jpg" alt="" class="h-auto w-2/3 rounded-sm" />
		</div>
		<div
			class="mb-12 flex flex-col items-center justify-center opacity-20 transition-all duration-1000 ease-in-out"
			style="transform:scale(0.2); transform-origin:bottom left;"
			bind:this={contentElement3}
		>
			<p class="md:text-md w-2/3 font-semibold ">
				<span class="text-base-200">I</span>
				nterior design is an intimate reflection of the way we live. What we choose
				to surround ourselves with can make an already responsive architectural space
				even more interactive and in tune with our sensory needs. Our work carefully
				considers how each client relates to a space on a personal level. We explore
				how essential components such as light, texture, and color can express and
				respond to the unique desires of a family’s living space, a brand’s retail
				environment, or a creative office setting. Throughout, we maintain an organic
				and modern approach, creating interiors that work seamlessly with the architectural
				design as well as with the surrounding landscape.
			</p>
		</div>
		<div
			class="mb-12 flex w-full justify-center opacity-20 transition-all duration-1000 ease-in-out"
			style="transform:translateX(-400px);"
			bind:this={contentElement4}
		>
			<div class="w-2/3">
				<h3 class=" font-semibold md:text-xl" style="">1. Detail</h3>
				<p class=" font-semibold md:text-base ">
					<span class="text-base-200 md:text-2xl">I</span>
					nterior design is an intimate reflection of the way we live. What we choose
					to surround ourselves with can make an already responsive architectural
					space even more interactive and in tune with our sensory needs. Our work
					carefully considers how each client relates to a space on a personal level.
					We explore how essential components such as light, texture, and color can
					express and respond to the unique desires of a family’s living space, a
					brand’s retail environment, or a creative office setting. Throughout, we
					maintain an organic and modern approach, creating interiors that work seamlessly
					with the architectural design as well as with the surrounding landscape.
				</p>
			</div>
		</div>
		<div
			class="mb-12 flex w-full justify-center opacity-20 transition-all duration-1000 ease-in-out"
			style="transform:translateX(-400px);"
			bind:this={contentElement5}
		>
			<div class="w-2/3">
				<h3 class="font-semibold md:text-xl" style=";">2. Focus</h3>
				<p class=" font-semibold md:text-base ">
					<span class="text-base-200 md:text-2xl">I</span>
					nterior design is an intimate reflection of the way we live. What we choose
					to surround ourselves with can make an already responsive architectural
					space even more interactive and in tune with our sensory needs. Our work
					carefully considers how each client relates to a space on a personal level.
					We explore how essential components such as light, texture, and color can
					express and respond to the unique desires of a family’s living space, a
					brand’s retail environment, or a creative office setting. Throughout, we
					maintain an organic and modern approach, creating interiors that work seamlessly
					with the architectural design as well as with the surrounding landscape.
				</p>
			</div>
		</div>
		<div
			class="mb-12 flex w-full justify-center opacity-20 transition-all duration-1000 ease-in-out"
			style="transform:translateX(-400px);"
			bind:this={contentElement6}
		>
			<div class="w-2/3">
				<h3 class=" font-semibold md:text-xl" style=";">3. Output</h3>
				<p class=" font-semibold md:text-base ">
					<span class="text-base-200 md:text-2xl">I</span>
					nterior design is an intimate reflection of the way we live. What we choose
					to surround ourselves with can make an already responsive architectural
					space even more interactive and in tune with our sensory needs. Our work
					carefully considers how each client relates to a space on a personal level.
					We explore how essential components such as light, texture, and color can
					express and respond to the unique desires of a family’s living space, a
					brand’s retail environment, or a creative office setting. Throughout, we
					maintain an organic and modern approach, creating interiors that work seamlessly
					with the architectural design as well as with the surrounding landscape.
				</p>
			</div>
		</div>
		<a href="/contact">
			<button
				class="rounded-sm border border-base-400 px-2 py-1 hover:bg-base-500 hover:text-base-300"
				>Contact us</button
			></a
		>
	</div>
</div>
