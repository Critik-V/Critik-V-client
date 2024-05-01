export type JobType = "FULLTIME" | "PARTTIME" | "INTERNSHIP" | "APPRENTICESHIP" | "FREELANCE";

export type Level = "ENTRY_LEVEL" | "JUNIOR" | "MID" | "SENIOR";

export type updateUserData = {
  linkedinLink: string;
  githubLink: string;
  otherLink: string;
  language: "fr" | "en";
};

export type SearchInputType = {
  search: string;
  jobType: JobType | "";
  experienceLevel: Level | "";
};
