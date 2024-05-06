export const TagDate = (date: Date): JSX.Element => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));

  if (diffInDays > 7) {
    return <span>Old</span>;
  } else if (diffInDays > 0 && diffInDays <= 7) {
    return <span className="new">{diffInDays} Jour(s)</span>;
  } else if (diffInHours >= 0 && diffInHours < 24) {
    return <span className="new">New</span>;
  } else {
    return <span className="old">Old</span>;
  }
};

export const UnreviewedCardTag = (data: Array<unknown>): JSX.Element | null => {
  if (data && data.length === 0) return <span className="unreviewed">Unreviewed</span>;
  return null;
};
