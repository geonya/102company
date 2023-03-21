import { browser } from '$app/environment';
// import processPolyfill from 'process';
// declare var process: typeof processPolyfill;
// globalThis.process = processPolyfill;

export const loadStaticImages = async (filter?: string) => {
	let images: string[] = [];
	const modules = import.meta.glob('/static/*.jpg');
	for (const path in modules) {
		let imagePath = await modules[path]().then((value) => {
			return (value as { default: string }).default;
		});
		imagePath = imagePath.replace('/static', '').replace(' ', '');
		images.push(imagePath);
	}
	if (filter) {
		images = images.filter((image) => image.includes(filter));
		return images;
	}
	return images;
};

export const arrayOf3Groups = <T>(array: T[]) => {
	const groups: T[][] = [];
	for (let i = 0; i < array.length; i += 3) {
		groups.push(array.slice(i, i + 3));
	}
	return groups;
};
export const arrayOf2Groups = <T>(array: T[]) => {
	const groups: T[][] = [];
	for (let i = 0; i < array.length; i += 2) {
		groups.push(array.slice(i, i + 2));
	}
	return groups;
};

export const makeProjectGroupGridClass = (i: number, j: number) => {
	if (j < 3) {
		return ` col-start-${(i + j) % 2 ? 2 : 1} row-start-${j + 1} `;
	} else {
		return ' ';
	}
};

export const getPhotoData = (url: string) => {
	if (!url) return;
	const urlData = url.split('id')[1];
	return urlData;
};

async function contraintImage(
	buffer: Uint8Array,
	quality = 82,
	drop = 2,
): Promise<Uint8Array | null> {
	if (!browser) return null;
	const sharp = (await import('sharp')).default;
	const compressedBuffer = await sharp(buffer).jpeg({ quality }).toBuffer();
	if (compressedBuffer.byteLength > 2000000) {
		return await contraintImage(compressedBuffer, quality - drop);
	}
	return compressedBuffer;
}

export async function getCompressedImages(files: File[]) {
	return await Promise.all(
		files.map(async (file: File) => {
			const buffer = await file.arrayBuffer();
			const typedBuffer = new Uint8Array(buffer);
			const compressedBuffer = await contraintImage(typedBuffer);
			if (!compressedBuffer) return file;
			const compressedBlob = new Blob([compressedBuffer], {
				type: 'image/jpeg',
			});
			return new File([compressedBlob], file.name, {
				type: 'image/jpeg',
			});
		}),
	);
}
