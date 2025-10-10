import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "NEW ARRIVAL",
    subtitle: "PERFORMANCE SERIES",
    description: "Engineered for athletes who demand excellence",
    cta: "Shop Now",
  },
  {
    id: 2,
    image: hero2,
    title: "UP TO 30% OFF",
    subtitle: "SUMMER COLLECTION",
    description: "Limited time offer on select items",
    cta: "Explore Deals",
  },
  {
    id: 3,
    image: hero3,
    title: "EXCLUSIVE",
    subtitle: "ELITE TRACKSUIT",
    description: "Unmatched comfort meets cutting-edge style",
    cta: "Discover More",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden mt-20">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-sm font-display font-semibold text-secondary tracking-widest">
                      {slide.title}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient">
                      {slide.subtitle}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      {slide.description}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-display font-semibold px-8 py-6 text-lg"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground p-3 rounded-full transition-all duration-300 hover:glow-primary"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground p-3 rounded-full transition-all duration-300 hover:glow-primary"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary glow-primary"
                : "w-2 bg-muted-foreground hover:bg-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
