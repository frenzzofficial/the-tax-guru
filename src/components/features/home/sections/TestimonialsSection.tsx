import { homeConfig } from "@/packages/configs/home.config";
import TestimonialsCarousel from "./TestimonialsCarousel";

const TestimonialsSection = () => {
  const { testimonials } = homeConfig;

  return (
    <section className="border-b border-border/60 py-14 lg:py-20">
      <div className="container-page">
        <span className="text-xs font-semibold tracking-wide text-primary">
          {testimonials.eyebrow}
        </span>
        <h2 className="mt-2 text-foreground">{testimonials.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {testimonials.description}
        </p>

        <div className="mt-10">
          <TestimonialsCarousel items={testimonials.items} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
