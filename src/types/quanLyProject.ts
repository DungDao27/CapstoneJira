export type ProjectCreated = {
  id: number;
  projectName: string;
  description: string;
  categoryId: number;
  alias: string;
  deleted: boolean;
  creator: number;
};

export type Project = ProjectCreated & {
  categoryName: string;
  creator: {
    id: number;
    name: string;
  };
  members: Member[];
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
