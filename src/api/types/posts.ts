import { JobType, Level } from "@types";

export type CreatePostType = {
  file: File;
  title: string;
  description: string;
  jobType: JobType;
  experienceLevel: Level;
  authorId: string;
};

export type UpdatePostType = {
  title?: string;
  description?: string;
  jobType?: JobType;
  experienceLevel?: Level;
};

export enum FavActionType {
  ADD = "add",
  REMOVE = "remove"
}
