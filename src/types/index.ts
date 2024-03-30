export type ProfilInputType = {
  description: string;
  linkedin?: string;
  github?: string;
  otherLink?: string;
  ln: "FR" | "EN";
};

export type NewPostInputType = {
  title: string;
  description: string;
  jobType: string;
  domain?: string;
  level: string;
  file: File | null;
};
