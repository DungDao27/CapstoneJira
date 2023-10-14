import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjY1OTIwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2ODA2ODAwfQ.RmFBx9ElL7VuYNzZnzMoGUHyC3iXKRpw7Yvq2LsXk0Q";

export const apiInstance = (config: CreateAxiosDefaults) => {
  const api = axios.create(config);

  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        authorization:
          "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtb3RoYWliYUBnbWFpbC5jb20iLCJuYmYiOjE2OTY5MTU4NjksImV4cCI6MTY5NjkxOTQ2OX0.vKEeGhcPeZV0uygIduPJL4_dTnNfWNbm8nQ9FKYXQlk",
      } as unknown as AxiosRequestHeaders,
    };
  });

  return api;
};
