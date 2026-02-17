import { Button } from "@/components/ui/button";

// Reusing manifest images to stay within limits
const galleryImages = [
  { src: "/images/dance-1.png", alt: "Couples dancing", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/band-1.png", alt: "Live band closeup", span: "col-span-1 row-span-1" },
  { src: "/images/artist-1.png", alt: "Cheering crowd", span: "col-span-1 row-span-1" },
  { src: "/images/cocktail-feature.png", alt: "Toast with beers", span: "col-span-1 row-span-1" },
  { src: "/images/artist-3.png", alt: "Guitar detail", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Nights to Remember</h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto font-body">
          The energy at Copper Creek is undeniable. See what happens when the sun goes down and the amps turn up.
        </p>
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-lg bg-background/20 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-border/20 text-foreground hover:bg-background hover:text-primary">
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
