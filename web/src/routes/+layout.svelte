<script>
	import '../app.postcss';
</script>

<div class="min-h-full">
	<nav class="h-16 border-b">
		<ul class="flex-1">
			<li>102Company</li>
		</ul>
		<ul class="flex-none">
			<li>Menu</li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
	<footer class="b-0 l-0  fixed">
		<h3>contact</h3>
	</footer>
</div>
