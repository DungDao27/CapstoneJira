export type Project = {
  alias: string;
  categoryId: number;
  categoryName: string;
  creator: {
    id: number;
    name: string;
  };
  delete: false;
  description: string;
  id: number;
  members: Member[];
  projectName: string;
};

export type Member = {
  userId: number;
  name: string;
  avatar: string;
};