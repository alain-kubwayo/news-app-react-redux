import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            {/* <Route path="/publisher-articles" element={<PublisherArticles />} /> */}
          </Routes>
        </PageWrapper>
      
    </BrowserRouter>
  );
}

export default App;
