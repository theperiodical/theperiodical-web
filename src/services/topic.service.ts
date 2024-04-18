import { api, endpoints } from "@/lib";
import { useMemo } from "react";
import useSWR from "swr";

export function useGetTopics(id?: string) {
  const URL = id ? `${endpoints.topic}/${id}` : endpoints.topic;

  const { data, isLoading, error, isValidating } = useSWR(URL, async (url) => {
    const res = await api.get(url);
    return res.data;
  });

  const memoizedValue = useMemo(
    () => ({
      topics: data?.topics || [],
      topicsLoading: isLoading,
      topicsError: error,
      topicsValidating: isValidating,
      topicsEmpty: !isLoading && !data?.topics.length,
    }),
    [data?.topics, error, isLoading, isValidating]
  );

  return memoizedValue;
}
