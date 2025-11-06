'use client';

import { Calendar, Award, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Fortified Security System',
    technologies: ['YOLOv5', 'Python', 'TensorFlow', 'Telegram Bot', 'Android Studio'],
    date: 'May 2022',
    description: [
      'Developed YOLOv5-based real-time object detection security system using Python and TensorFlow with integrated Telegram bot API and Android mobile application for instant security alerts and remote monitoring',
      'Published in IEEE IC3IoT 2022',
    ],
    badge: 'Patent Filed',
  },
  {
    title: 'Liquefied Crude Oil Detection Device',
    technologies: ['IoT', 'Sensors', 'Real-time Monitoring'],
    date: 'Jan 2023',
    description: [
      'Created IoT-based portable detection gadget for industrial crude oil leak identification with real-time alert system',
      'Presented at International Conference on Power, Energy, Control and Transmission Systems (PECTS 2023)',
    ],
    badge: 'Published',
  },
];

const publications = [
  {
    title: 'IoT-Based Crude Oil Leak Detector',
    venue: 'IEEE ICPECTS',
    date: 'Feb 2023',
    description: 'Developed a portable sensor device with real-time alerts for crude oil leak detection',
  },
  {
    title: 'Augmented Security System for Commercial Buildings',
    venue: 'IEEE IC3IoT',
    date: 'May 2022',
    description: 'Implemented YOLO-based object detection with admin panel for automated building security',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Projects & Publications</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                      {project.badge && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span className="text-sm text-muted-foreground leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Publications</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-2">
                        <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <Badge variant="secondary">{pub.venue}</Badge>
                          <span className="text-muted-foreground">{pub.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
