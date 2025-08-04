import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonios" />
        <Testimonials />
       
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
