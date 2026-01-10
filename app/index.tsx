import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Home from "./(tabs)/Home";
import { initDB } from "@/db/database";
import { queryClient } from "@/lib/queryClient";
import { Router } from "express";
import { Redirect } from "expo-router";

export default function Index() {
  // useEffect(() => {
  //   initDB();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Redirect href="/(tabs)/Home" />
    </QueryClientProvider>
  );
}
