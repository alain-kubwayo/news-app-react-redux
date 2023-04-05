import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper";
import HomePage from "./pages/HomePage";
import PublisherArticlesPage from "./pages/PublisherArticlesPage";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
        <PageWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/publisher-articles/:id" element={<PublisherArticlesPage />} />
          </Routes>
        </PageWrapper>
      
    </BrowserRouter>
  );
}

export default App;
