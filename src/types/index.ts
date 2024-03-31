export type ProfilInputType = {
  linkedin?: string;
  github?: string;
  otherLink?: string;
  ln: "FR" | "EN";
};

export type NewPostInputType = {
  title: string;
  description: string;
  jobType: string;
  level: string;
  file: File | null;
};

export type EditPostInputType = {
  title: string;
  description: string;
  jobType: string;
  level: string;
};
