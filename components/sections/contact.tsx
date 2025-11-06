'use client';

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rithu30.v@gmail.com',
    href: 'mailto:rithu30.v@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7358025179',
    href: 'tel:+917358025179',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rithika-v-2997921ab',
    href: 'https://linkedin.com/in/rithika-v-2997921ab',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium hover:underline break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:rithu30.v@gmail.com">Send Email</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://linkedin.com/in/rithika-v-2997921ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rithika V. All rights reserved.</p>
      </footer>
    </section>
  );
}
