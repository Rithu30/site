'use client';

import { Building2, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Cloud & Infrastructure Engineer',
    company: 'LTI Mindtree',
    location: 'Chennai, TamilNadu',
    period: 'Oct 2023 – Present',
    achievements: [
      'Automated Net-probe upgrades across 100+ servers using ITRS Geneos Starfleet, achieving 99% deployment success and reducing manual effort by 40%',
      'Engineered transfer agency fund operations systems for Citi Bank, improving processing accuracy for subscriptions, redemption, and fund valuations',
      'Deployed monitoring solutions for trade settlements, cash reconciliations, and exception management, maintaining 99.8% system uptime',
      'Managed trade settlement and funds accounting processes ensuring 100% compliance with internal SLAs and regulatory requirements',
      'Optimized MSSQL database queries resulting in 30% performance improvement for critical banking applications',
    ],
  },
  {
    title: 'Database Administration Intern',
    company: 'LTI Mindtree',
    location: 'Chennai, TamilNadu',
    period: 'Jul 2023 – Aug 2023',
    achievements: [
      'Performed MSSQL database administration including backup/recovery, user management, and security configuration',
      'Conducted query optimization and performance tuning; troubleshot connectivity issues using SQL Server Management Studio',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
