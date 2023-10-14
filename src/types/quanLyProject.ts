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

export type PrjDetail = {
  alias: string;
  creator: {
    id: number;
    name: string;
  };
  description: string;
  id: number;
  lstTask: [];
  members: Member[];
  projectCategory: {
    id: number;
    name: string;
  };
  projectName: string;
};

export type PrjUpdate = {
  id: number;
  projectName: string;
  creator: number;
  description: string;
  categoryId: number;
};
