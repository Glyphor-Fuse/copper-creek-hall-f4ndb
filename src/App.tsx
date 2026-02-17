import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MusicLedger } from "@/components/MusicLedger";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-primary">
          <Navbar />
          <Hero />
          <MusicLedger />
          <Features />
          <Gallery />
          <FAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
