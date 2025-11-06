'use client';

import { Code, Cloud, Database, Wrench, Briefcase, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'HTML'],
  },
  {
    icon: Cloud,
    title: 'Infrastructure & Cloud',
    skills: [
      'Linux/Unix Administration',
      'Server Monitoring',
      'Deployment Automation',
      'Infrastructure Management',
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MSSQL', 'SQL Server', 'MongoDB', 'Query Optimization', 'Database Administration'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: [
      'ITRS Geneos (Starfleet)',
      'ServiceNow',
      'Autosys',
      'Tectia',
      'SQL Management Studio',
      'Confluence',
      'Android Studio',
    ],
  },
  {
    icon: Briefcase,
    title: 'Domain Expertise',
    skills: [
      'Transfer Agency Funds',
      'Trade & Funds Accounting',
      'Middle-Office Operations',
      'Banking',
      'Regulatory Compliance',
    ],
  },
];

const certifications = [
  'Pega Certified Senior System Architect (CSSA 8.7)',
  'Python Data Structures - Coursera',
  'AI for Everyone',
  'Build an E-commerce dashboard with Figma',
  'Basic Image Classification with TensorFlow',
  'Build a Machine Learning and Web app with Streamlit and Python',
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Certifications</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
