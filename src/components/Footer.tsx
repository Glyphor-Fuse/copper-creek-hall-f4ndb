import { Facebook, Instagram, Mail, MapPin, Phone, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-border/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl">COPPER CREEK</h2>
            <p className="text-primary-foreground/70 font-body leading-relaxed">
              Nashville's premier destination for authentic music, cold drinks, and good company.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-background/10 hover:text-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 hover:text-foreground">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 hover:text-foreground">
                <Star className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Visit Us</h3>
            <ul className="space-y-4 text-primary-foreground/80 font-body">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>124 Broadway Ave<br/>Nashville, TN 37201</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>(615) 555-0199</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>hello@coppercreek.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Hours</h3>
            <ul className="space-y-2 text-primary-foreground/80 font-body">
              <li className="flex justify-between">
                <span>Mon - Wed</span>
                <span>11am - 12am</span>
              </li>
              <li className="flex justify-between font-bold text-foreground">
                <span>Thu - Sat</span>
                <span>11am - 2:30am</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 12am</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Newsletter</h3>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Get the weekly lineup delivered to your inbox.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-background/5 border border-border/10 rounded px-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent"
              />
              <Button className="w-full bg-accent text-primary font-bold hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40 font-body">
          <p>© 2024 Copper Creek Hall. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
