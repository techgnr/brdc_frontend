import { useQuery } from "@tanstack/react-query";
import API from "../api";

const useFetchData = <T>(url: string, queryParams: Record<string, any>) => {
  const fetchData = async () => {
    const { data } = await API.get(`${url}`);
    return data;
  };

  return useQuery<T>({
    queryKey: [url, queryParams],
    queryFn: fetchData,
    enabled: !!url,
  });
};

export default useFetchData;
