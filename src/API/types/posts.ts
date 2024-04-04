import { JobType, Level } from "@types";

export type CreatePostType = {
  resume: File;
  title: string;
  description: string;
  jobType: JobType;
  experienceLevel: Level;
  establishmentName?: string;
  authorId: string;
};

export type UpdatePostType = {
  title?: string;
  description?: string;
  jobType?: JobType;
  experienceLevel?: Level;
  establishmentName?: string;
};

export type SinglePostType = { authorId: string };

export enum FavActionType {
  ADD = "add",
  REMOVE = "remove",
}
