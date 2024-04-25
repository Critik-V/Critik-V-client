const TagDate = (date: Date): JSX.Element => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));

  if (diffInDays > 7) {
    return <span>Vieux</span>;
  } else if (diffInDays >= 1 && diffInDays <= 7) {
    return <span className="new">{diffInDays} Jour(s)</span>;
  } else if (diffInHours >= 1 && diffInHours < 24) {
    return <span className="new">New</span>;
  } else {
    return <span className="old">Old</span>;
  }
};

export default TagDate;
