'use client';

import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Education</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">
                      Bachelor of Engineering in Electronics and Communication Engineering
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      CGPA: 9.34
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span className="font-medium">Sri Sairam Engineering College</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jul 2019 – Apr 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
