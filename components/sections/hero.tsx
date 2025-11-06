'use client';

import { ArrowDown, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Rithika V
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
            Cloud & Infrastructure Engineer
          </p>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Specializing in MSSQL database administration, Linux/Unix systems, and infrastructure automation
          with 1.5+ years of experience at LTI Mindtree
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Chennai, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:rithu30.v@gmail.com" className="hover:underline">
              rithu30.v@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91-7358025179</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" onClick={scrollToContact}>
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://linkedin.com/in/rithika-v-2997921ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={() =>
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
