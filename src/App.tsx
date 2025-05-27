import { Route, Routes } from "react-router-dom";
import Hero from "@/pages/hero/hero";
import PageNotFound from "@/pages/page-not-found/page-not-found";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { MySidebar } from "@/components/custom/my-sidebar";
import Projects from "./pages/projects/projects";
import SpotifyTracker from "./pages/projects/pages/spotify-tracker";
import ChessEngine from "./pages/projects/pages/chess-engine";
import OpticalCharacterRecognition from "./pages/projects/pages/optical-character-recognition";
import Interactive3DEngine from "./pages/projects/pages/interactive-3d-engine";
import AILearnsToDrive from "./pages/projects/pages/ai-learns-to-drive";
import Work from "./pages/hero/widget-components/work/work";
import MyHeader from "./components/custom/my-header";
import { BreadcrumbProvider } from "./hooks/use-breadcrumbs";

function App() {
  return (
    <SidebarProvider>
      <BreadcrumbProvider>
        <MySidebar />
        <SidebarInset>
          <MyHeader />
          <Routes>
            <Route path="/" index element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/ai-learns-to-drive" element={<AILearnsToDrive />} />
            <Route path="/projects/interactive-3d-engine" element={<Interactive3DEngine />} />
            <Route path="/projects/optical-character-recognition" element={<OpticalCharacterRecognition />} />
            <Route path="/projects/chess-engine" element={<ChessEngine />} />
            <Route path="/projects/spotify-tracker" element={<SpotifyTracker />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </SidebarInset>
      </BreadcrumbProvider>
    </SidebarProvider>
  );
}

export default App;
