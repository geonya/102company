<script lang="ts">
	import { Input } from '$lib/components';
</script>

<div class="h-full min-h-screen w-full py-16">
	<div
		class="mx-auto max-w-xl rounded-md bg-base-700 bg-opacity-90 p-2 shadow-lg"
		id="contactCard"
	>
		<h3 class="ml-1 mb-3 text-base-400">Contact</h3>
		<div class="px-5 py-10 text-sm">
			<p>저희 102 컴퍼니에 의뢰해주셔서 감사합니다.</p>
			<p>
				의뢰 전에 몇가지 참고해주면 더욱 자세하게 상담 도와드릴 수 있습니다.
			</p>
			<div class="mt-3 text-xs ">
				<p>1. 입주하시는 건물의 컨디션을 자세하게 기입해주세요.</p>
				<p>2. 입주하시는 건물의 컨디션을 자세하게 기입해주세요.</p>
				<p>3. 입주하시는 건물의 컨디션을 자세하게 기입해주세요.</p>
				<p>4. 입주하시는 건물의 컨디션을 자세하게 기입해주세요.</p>
				<p>5. 입주하시는 건물의 컨디션을 자세하게 기입해주세요.</p>
			</div>
		</div>
		<div>
			<Input type="text" id="name" label="Name" />
			<Input type="email" id="email" label="Email" />
			<Input type="number" id="phone" label="Phone" />
			<label for="inquiry-type" class="px-2 py-2">
				<span class="text-xs">Category</span>
				<select
					class="mt-1 block w-full appearance-none rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md focus:border-blue-500 focus:ring-blue-500"
				>
					<option selected value="신축">신축</option>
					<option value="리모델링">리모델링</option>
					<option value="부분">부분</option>
					<option value="기타">기타</option>
				</select>
			</label>
			<label for="name" class="">
				<span class="inline-block text-xs">Description</span>
				<textarea
					class="mt-1 w-full rounded-md bg-base-800 px-3 py-2 text-sm text-base-100 opacity-60 shadow-md"
					id="description"
					name="description"
				/>
			</label>
			<div class="flex w-full justify-end">
				<button
					class="mt-2 rounded-md bg-base-800 bg-opacity-70 px-3 py-2 text-xs hover:bg-opacity-100"
				>
					Submit
				</button>
			</div>
		</div>
	</div>
	<div>
		<div />
	</div>
</div>
