export type Genre = { id: number; name: string };
export type VideoObj = {
  id: number;
  artist: string;
  genre_id: number;
  image_url: string;
  release_year: number;
  title: string;
};
