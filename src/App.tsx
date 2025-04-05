
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ImplementationPage from "./pages/ImplementationPage";
import UploadPage from "./pages/UploadPage";
import PredictionPage from "./pages/PredictionPage";
import NotFound from "./pages/NotFound";
import { PredictionProvider } from "./lib/prediction-context";

import "./styles/global.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PredictionProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </BrowserRouter>
    </PredictionProvider>
  </QueryClientProvider>
);

export default App;
