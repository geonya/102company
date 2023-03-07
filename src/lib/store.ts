import { writable } from "svelte/store"
import type { Photo } from './type'
const getPhotos = () => {
  const { subscribe, set } = writable<Photo[]>([])

  return {
    subscribe,
    set,
  }
}

export const photos = getPhotos();

