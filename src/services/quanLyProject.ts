import { apiInstance } from "../constants/apiInstance";
import { PrjDetail, PrjUpdate, Project } from "../types/quanLyProject";

const api = apiInstance({
  baseURL: "https://jiranew.cybersoft.edu.vn/api/Project",
});

export const quanLyProjectServices = {
  getAllProject: () => api.get("/getAllProject"),

  deleteProject: (prjId: number) =>
    api.delete(`/deleteProject?projectId=${prjId}`),

  getProjectDetail: (idProject: number) =>
    api.get<ApiResponse<PrjDetail>>(`/getProjectDetail?id=${idProject}`),

  updateProject: (payload: PrjUpdate, projectId: string) =>
    api.put(`/updateProject?projectId=${projectId}`, payload),
};
