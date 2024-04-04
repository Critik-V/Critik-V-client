export type JobType =
  | "FULLTIME"
  | "PARTTIME"
  | "INTERNSHIP"
  | "APPRENTICESHIP"
  | "FREELANCE";

export type Level = "ENTRY_LEVEL" | "JUNIOR" | "MID" | "SENIOR";

export type ProfilInputType = {
  linkedin?: string;
  github?: string;
  otherLink?: string;
  ln: "FR" | "EN";
};

export type NewPostInputType = {
  title: string;
  description: string;
  jobType: JobType;
  level: Level;
  file: File | null;
};

export type EditPostInputType = {
  title: string;
  description: string;
  jobType: JobType;
  level: Level; 
};

export type SearchInputType = {
  search: string;
  jobType: JobType | "";
  level: Level | "";
};
