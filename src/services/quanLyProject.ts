import { apiInstance } from "../constants/apiInstance";

const api = apiInstance({
  baseURL: "https://jiranew.cybersoft.edu.vn/api/Project",
});

export const quanLyProjectServices = {
  getAllProject: () => api.get("/getAllProject"),
};
