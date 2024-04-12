import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="cities" />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "20px",
            fontWeight: "bolder",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#716cde",
            color: "#f5f3ff",
          },
        }}
      />
    </QueryClientProvider>
  );
}
