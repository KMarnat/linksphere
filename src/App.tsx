import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="/feed" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route index element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={15}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#2E2B33",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
