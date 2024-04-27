enum language {
  fr = "fr",
  en = "en"
}

enum theme {
  light = "light",
  dark = "dark"
}

enum JobType {
  INTERNSHIP = "INTERNSHIP",
  APPRENTICESHIP = "APPRENTICESHIP",
  FULLTIME = "FULLTIME",
  PARTTIME = "PARTTIME",
  FREELANCE = "FREELANCE"
}

enum ExprerienceLevel {
  ENTRY_LEVEL = "ENTRY_LEVEL",
  JUNIOR = "JUNIOR",
  MID = "MID",
  SENIOR = "SENIOR"
}

export type User = {
  id: string;
  oauthId: string;
  fullname: string;
  description?: string;
  linkedinLink?: string;
  githubLink?: string;
  otherLink?: string;
  myPosts: Post[];
  favPosts: Post[];
  comments: Comment[];
  commentsUpLikes: Comment[];
  commentsDownLikes: Comment[];
  notifications: Notification[];
  createdAt: Date;
  language: language;
  theme: theme;
  profilePic?: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  jobType: JobType;
  experienceLevel: ExprerienceLevel;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  archived: boolean;
  totalFav: number;
  resumePath: string | null;
};

type Comment = {
  id: string;
  content: string;
  author: User;
  authorId: string;
  post: Post;
  postId: string;
  totalUpLikes: number;
  totalDownLikes: number;
  createdAt: Date;
  updatedAt: Date;
  upLikes: User[];
  downLikes: User[];
};

type Notification = {
  id: string;
  content: string;
  receiver: User;
  receiverId: string;
  read: boolean;
  createdAt: Date;
};
