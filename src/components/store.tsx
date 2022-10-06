import { atom } from "recoil";
interface Link {
  flickr_images: string[];
}
interface Flight {
  mission_name: string;
  details: string;
  links: Link;
  id: string;
}
export const favouritesState = atom({
  key: "favourites",
  default: [] as Flight[],
});
