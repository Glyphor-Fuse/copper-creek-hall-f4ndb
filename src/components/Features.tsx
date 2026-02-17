import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
              <img
                src="/images/cocktail-feature.png"
                alt="Signature Copper Creek Old Fashioned"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute top-8 left-8 w-full h-full border-2 border-primary/20 -z-0 rounded-lg" />
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Southern Comfort,<br />Elevated.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Copper Creek Hall isn't just another stop on Broadway. We've reclaimed the soul of the honky tonk—stripping away the neon chaos to reveal the warm timber, the cold drinks, and the rhythm that built Music City.
              </p>
              <p>
                From our signature smoked brisket sliders to our "Copper Mile" whiskey flight, every detail is crafted for those who appreciate the finer side of a rowdy night out.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="font-bold text-primary mb-2 text-xl">Top Shelf Only</h4>
                <p className="text-sm text-muted-foreground">Premium spirits and local craft brews on tap.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-xl">Room to Breathe</h4>
                <p className="text-sm text-muted-foreground">Spacious booths and a dance floor that isn't a mosh pit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
