import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Music, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Gig = {
  day: string;
  date: string;
  artist: string;
  genre: string;
  time: string;
  image: string;
  description: string;
};

const schedule: Gig[] = [
  {
    day: "THU",
    date: "OCT 12",
    artist: "The Lowdown Drifters",
    genre: "Outlaw Country",
    time: "8:00 PM",
    image: "/images/artist-1.png",
    description: "Gritty, authentic outlaw country straight from the plains. Known for their storytelling and raw acoustic energy.",
  },
  {
    day: "FRI",
    date: "OCT 13",
    artist: "Sarah Mae & The Ricochets",
    genre: "Honky Tonk Swing",
    time: "9:00 PM",
    image: "/images/artist-2.png",
    description: "High-energy swing that keeps the dance floor packed. Bring your dancing boots for this one.",
  },
  {
    day: "SAT",
    date: "OCT 14",
    artist: "Copper Creek House Band",
    genre: "Classic Nashville",
    time: "9:00 PM",
    image: "/images/artist-3.png",
    description: "Our legendary house band playing the hits from Cash, Waylon, and Willie. The true Nashville experience.",
  },
  {
    day: "SUN",
    date: "OCT 15",
    artist: "Blue Ridge Gospel Hour",
    genre: "Bluegrass / Gospel",
    time: "11:00 AM",
    image: "/images/artist-4.png",
    description: "Recover from Saturday night with soul-stirring harmonies and a Bloody Mary bar.",
  },
];

export function MusicLedger() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/30 border-y border-border/50 overflow-hidden relative">
      <div className="container px-4 mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-2">
            The Weekly Ledger
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md">
            Live music daily. Scroll through the lineup and secure your VIP booth before the floor fills up.
          </p>
        </div>
        <div className="flex gap-2 text-sm font-medium text-accent uppercase tracking-widest">
          <Star className="w-4 h-4" />
          <span>Live Music 7 Days a Week</span>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 pt-4 px-4 scrollbar-hide">
        <div className="flex gap-6 w-max mx-auto px-4 md:px-0">
          {schedule.map((gig, index) => (
            <motion.div
              key={gig.date}
              layout
              onClick={() => setSelected(selected === index ? null : index)}
              className={cn(
                "relative cursor-pointer rounded-xl overflow-hidden border border-border shadow-sm transition-colors duration-300",
                selected === index
                  ? "w-[85vw] md:w-[600px] bg-card"
                  : "w-[280px] hover:border-primary/50 bg-background"
              )}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex h-full min-h-[320px]">
                {/* Left Spine (Always Visible) */}
                <div className="w-[100px] bg-primary text-primary-foreground flex flex-col items-center justify-between py-6 shrink-0 border-r border-primary-foreground/20">
                  <span className="text-3xl font-display rotate-180 py-4 writing-vertical-rl">
                    {gig.day}
                  </span>
                  <div className="text-center">
                    <span className="block text-sm opacity-70 font-sans tracking-widest">
                      {gig.date.split(" ")[0]}
                    </span>
                    <span className="block text-xl font-bold font-display">
                      {gig.date.split(" ")[1]}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col relative group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                      {gig.genre}
                    </span>
                    <span className="text-sm font-serif italic text-muted-foreground">
                      {gig.time}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                    {gig.artist}
                  </h3>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selected === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 flex flex-col md:flex-row gap-6 border-t border-border pt-4"
                      >
                        <div className="flex-1">
                          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                            {gig.description}
                          </p>
                          <Button className="w-full md:w-auto gap-2">
                            Reserve VIP Booth <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="w-full md:w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-muted">
                           <img src={gig.image} alt={gig.artist} className="w-full h-full object-cover" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Collapsed Hint */}
                  {selected !== index && (
                    <div className="mt-auto pt-8">
                       <p className="text-sm text-muted-foreground flex items-center gap-2">
                         <Music className="w-4 h-4" /> Tap to view details
                       </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicLedger;
