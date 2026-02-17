import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-primary py-3 border-border/10 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-foreground tracking-wide">
          COPPER CREEK
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground/90 hover:text-accent transition-colors uppercase tracking-widest">
            Lineup
          </a>
          <a href="#" className="text-sm font-medium text-foreground/90 hover:text-accent transition-colors uppercase tracking-widest">
            Menu
          </a>
          <a href="#" className="text-sm font-medium text-foreground/90 hover:text-accent transition-colors uppercase tracking-widest">
            Private Events
          </a>
          <Button variant="secondary" className="font-bold">
            Reserve Table
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-l-white/10 text-foreground w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-8 mt-12">
                <a href="#" className="text-2xl font-display hover:text-accent">Home</a>
                <a href="#" className="text-2xl font-display hover:text-accent">Live Music</a>
                <a href="#" className="text-2xl font-display hover:text-accent">Food & Drink</a>
                <a href="#" className="text-2xl font-display hover:text-accent">Gallery</a>
                <a href="#" className="text-2xl font-display hover:text-accent">FAQ</a>
                <Button size="lg" className="w-full mt-4 bg-accent text-primary">Book VIP Booth</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
