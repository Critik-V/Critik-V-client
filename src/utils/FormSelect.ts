type selectType<T extends string | number> = {
  value: T;
  label: T;
};

export const JobtypeSelect: selectType<string>[] = [
  { value: "APPRENTICESHIP", label: "Alternance" },
  { value: "FREELANCE", label: "Freelance" },
  { value: "INTERNSHIP", label: "Stage" },
  { value: "PARTTIME", label: "Temps partiel" },
  { value: "FULLTIME", label: "Temps plein" },
];

export const LevelSelect: selectType<string>[] = [
  { value: "ENTRY_LEVEL", label: "Débutant" },
  { value: "JUNIOR", label: "Junior" },
  { value: "MID", label: "intermédiaire" },
  { value: "SENIOR", label: "Senior" },
];
