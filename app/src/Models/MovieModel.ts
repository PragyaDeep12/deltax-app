import CelebsModel from "./CelebsModel";

export default interface MovieModel {
  name?: string | null;
  cast?: Array<CelebsModel> | null;
  plot?: string | null;
  poster?: string | null;
  posterUrl?: string;
  yearOfRelease?: number;
}
