import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ExploreScreen } from "./pages/ExploreScreen";
import { ProjectsListScreen } from "./pages/ProjectsListScreen";
import { ProjectDetailScreen } from "./pages/ProjectDetailScreen";

/**
 * SpecWise - AI-powered discovery and workflow tool for interior designers.
 * Main application component with routing for Explore and Project environments.
 */
export default function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<ExploreScreen />} />
          <Route path="/projects" element={<ProjectsListScreen />} />
          <Route path="/projects/:projectId" element={<ProjectDetailScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
