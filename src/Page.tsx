import { useQuery } from "@tanstack/react-query";

const queryFn = () => {
  console.log("404!!!");
  return Promise.reject(new Error("404!!!"));
};

export function Page(): React.ReactNode {
  const { data } = useQuery<string, Error, string>({
    queryFn,
    queryKey: ["key"],
    retry: false,
  });

  return data;
}
