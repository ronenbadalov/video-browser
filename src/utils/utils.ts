import { VideoObj } from "../models/general.models";
import { FilterState } from "../store/filter-slice";

const filterBySearchQuery = (
  videoData: VideoObj[],
  searchQuery: string
): VideoObj[] => {
  return videoData.filter(
    (video) =>
      `${video.title}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const filterByYear = (videoData: VideoObj[], year: string): VideoObj[] => {
  return videoData.filter((video) => video.release_year === +year);
};

const filterByGenre = (
  videoData: VideoObj[],
  genreIDArr: number[]
): VideoObj[] => {
  return videoData.filter((video) => genreIDArr.includes(video.genre_id));
};

export const extractYearOptions = (videoData: VideoObj[]): number[] => {
  return Array.from(new Set(videoData.map((video) => video.release_year)))
    .sort()
    .reverse();
};

export const filterVideos = (
  videoData: VideoObj[],
  filterState: FilterState
): VideoObj[] => {
  let filteredVideos = videoData;
  if (filterState.searchQuery)
    filteredVideos = filterBySearchQuery(
      filteredVideos,
      filterState.searchQuery
    );
  if (filterState.year)
    filteredVideos = filterByYear(filteredVideos, filterState.year);

  if (filterState.genreIDArr.length > 0)
    filteredVideos = filterByGenre(filteredVideos, filterState.genreIDArr);
  return filteredVideos;
};
