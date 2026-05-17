import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                    BSc Computer Science
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>G. Venkataswamy Naidu College</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Kovilpatti, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:text-right">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2025</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    CGPA: 7.5 / 10
                  </div>
                  <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                    Graduated
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Graduated with a Bachelor of Science in Computer Science, with strong foundations in software development, web technologies, and application development. 
                  Skilled in building responsive web applications using modern development tools and frameworks through hands-on academic and personal projects.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Areas of Study:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Programming Languages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Database Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Web Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>OOPs concept</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Project Management</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Final Year Team Project:</span> Developed a Blood Donation App using Flutter and Firebase, 
                    focused on connecting blood donors and recipients efficiently.
                    The project demonstrated practical skills in mobile app development, authentication, database management, and user-friendly interface design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                    MSc Computer Science
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>G. Venkataswamy Naidu College</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Kovilpatti, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:text-right">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expected 2027</span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    Current CGPA: 7.4 / 10
                  </div>
                  <div className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                    Final Year
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing Masters' in Computer Science with focus on software development, artificial intelligence, and backend systems. 
                  The program combines theoretical knowledge with practical application through hands-on projects and industry-relevant coursework.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Areas of Study:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Advanced Programming Languages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Database Mining</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>AI & ML</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Internet of Things</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Project Management</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Final Year Team Project:</span> Developed a Blood Donation App using Flutter and Firebase, 
                    focused on connecting blood donors and recipients efficiently.
                    The project demonstrated practical skills in mobile app development, authentication, database management, and user-friendly interface design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}