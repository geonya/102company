<script lang="ts">
	import { Input } from '$lib/components';
</script>

<div
	class="relative grid h-full min-h-screen w-full place-content-center overflow-scroll py-16"
>
	<div class="w-full max-w-xl overflow-scroll px-3 lg:px-0" id="contactCard">
		<div
			class="h-full w-full rounded-md bg-base-700 bg-opacity-90 p-3 shadow-lg"
		>
			<h3 class="text-md text-base-400 ">Contact us</h3>
			<div class="px-5 py-10 text-sm leading-8">
				<p>저희 102 컴퍼니에 의뢰해주셔서 감사합니다.</p>
				<p>
					의뢰 전에 몇가지 항목에 답해주시면 더욱 자세하게 상담 도와드릴 수
					있습니다.
				</p>
				<ul class="mt-3 text-xs leading-8">
					<li>1.</li>
					<li>2.</li>
					<li>3.</li>
				</ul>
			</div>
			<div class="space-y-2">
				<Input type="text" id="name" label="Name" />
				<Input type="email" id="email" label="Email" />
				<Input type="number" id="phone" label="Phone" />
				<div class="p-1">
					<label for="inquiry-type" class="pl-1">
						<span class="text-xs">Category</span>
					</label>
					<select
						class=" mt-1 block w-full appearance-none rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md focus:border-blue-500 focus:ring-blue-500"
					>
						<option selected value="신축">신축</option>
						<option value="리모델링">리모델링</option>
						<option value="부분">부분</option>
						<option value="기타">기타</option>
					</select>
				</div>
				<div class="p-1">
					<label for="name" class="pl-1">
						<span class="text-xs">Description</span>
					</label>
					<textarea
						class="w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
						id="description"
						name="description"
					/>
				</div>
				<div class="flex w-full justify-end">
					<button
						class="mt-2 rounded-md bg-base-800 bg-opacity-70 px-3 py-2 text-xs hover:bg-opacity-100"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div />
	</div>
</div>
