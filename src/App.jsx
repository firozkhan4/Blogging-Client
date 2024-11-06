import { BlogPage, BlogEditor, Layout } from "./pages/index";
import { Home } from "./pages/index";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/editor" element={<BlogEditor />} />
      </Route>
    </Routes>
  );
}
