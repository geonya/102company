<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="h-screen py-24">
	<h1 class="">
		Welcome {data?.props?.user?.name}
	</h1>
	<form method="post" action="?/create" enctype="multipart/form-data">
		<input id="title" name="title" type="text" />
		<input id="photos" name="photos" type="file" multiple accept="image/*" />
		<button type="submit">Submit</button>
	</form>
</div>
