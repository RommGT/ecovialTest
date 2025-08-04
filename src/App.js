import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
