import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Navy Overlay for Contrast */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-accent font-sans font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            Est. 2024 • Nashville, TN
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
            COPPER<br />CREEK
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-body max-w-2xl mx-auto italic">
            "A refined honky tonk for the modern outlaw."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold text-lg px-8 h-14 min-w-[200px]">
            Book VIP Booth
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-background/10 font-medium text-lg px-8 h-14 min-w-[200px]">
            View Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/50 animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}

export default Hero;
