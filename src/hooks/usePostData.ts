import { useMutation } from "@tanstack/react-query";
import API from "../api";

const usePostData = <T, V = any>(url: string) => {
  const postData = async (payload: V): Promise<T> => {
    const { data } = await API.post(url, payload);
    return data;
  };

  return useMutation<T, unknown, V>({
    mutationFn: postData,
  });
};

export default usePostData;
