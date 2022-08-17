import { Media } from "./media";

export interface Live extends Media {
    end_date: Date,
}