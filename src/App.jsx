import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import Cities from "./pages/Cities";
import WeatherPage from "./pages/WeatherPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTimer: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="cities" />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}
