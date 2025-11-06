'use client';

import { Award, Users, Clock, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const highlights = [
  {
    icon: Award,
    title: 'Team Lead',
    description: 'Managed team of 3 for server management at LTI Mindtree',
  },
  {
    icon: Users,
    title: 'IEEE Vice-chair',
    description: 'Led international symposiums and technical workshops',
  },
  {
    icon: Clock,
    title: '99.8% Uptime',
    description: 'Maintained exceptional system reliability',
  },
  {
    icon: Lightbulb,
    title: 'Hackathon Winner',
    description: 'Smart India Hackathon with Leo Muthu Scholarship',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed text-center text-muted-foreground">
            Cloud & Infrastructure Engineer with 1.5+ years of experience at LTI Mindtree, specializing in
            MSSQL database administration, Linux/Unix systems, and infrastructure automation. Proven expertise
            in ITRS Geneos monitoring, deployment automation, and banking domain applications. Achieved 40%
            reduction in manual deployment effort and 30% performance improvement across critical banking systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
