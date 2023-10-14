import { apiInstance } from "../constants/apiInstance";

const api = apiInstance({
  baseURL: "https://jiranew.cybersoft.edu.vn/api/ProjectCategory",
});

export const quanLyPrjCategoryService = {
  getProjectCategory: () => api.get(""),
};
