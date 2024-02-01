import './App.css'
import { useQuery } from '@tanstack/react-query';
import { Page } from './Page';
import { useEffect, useState } from 'react';

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

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    setCnt(n => n + 1);
    console.log(cnt);
  }, [isLoading]);

  if (isLoading) {
    return "Loading...";
  }

  return <Page />;
}
