import { API_URL } from "@/config";
import axios from "axios";

const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export const fetcher = async (
  args: string | [string, { [key: string]: any }]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await api.get(url, { ...config });

  return res.data;
};

export const endpoints = {
  gist: "/gist",
  topic: "/gist/topic",
};

export { api };
