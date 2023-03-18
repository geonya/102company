import imageCompression from 'browser-image-compression';
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

export async function getCompressedImage(file: File) {
	const options = {
		maxSizeMB: 1,
		maxWidthOrHeight: 1920,
		useWebWorker: true,
	};
	try {
		console.log(file instanceof Blob);
		const compressedFile = await imageCompression(file, options);
		console.log(compressedFile);
		return compressedFile;
	} catch (error) {
		console.log(error);
	}
}
