import './App.css'
import { useQuery } from '@tanstack/react-query';
import { Page } from './Page';

const queryFn = () => {
  console.log("404!!!");
  return Promise.reject(new Error("404!!!"));
};

export function App() {
  const { isLoading } = useQuery<string, Error, string>({
    queryFn,
    queryKey: ["key"],
    retry: false,
    retryOnMount: true,
  });

  if (isLoading) {
    return "Loading...";
  }

  return <Page />;
}
