
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const futureServices = [
    {
      icon: Code,
      title: "Machine Learning Solutions",
      description: "Custom ML models for classification, regression, and prediction tasks",
      timeline: "Available after graduation"
    },
    {
      icon: BookOpen,
      title: "Research & Analysis",
      description: "Data analysis and insights generation from complex datasets",
      timeline: "Learning phase"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "AI/ML project guidance and technical consultation",
      timeline: "Future offering"
    },
    {
      icon: Lightbulb,
      title: "Innovation Projects",
      description: "Collaborative development of cutting-edge AI applications",
      timeline: "Post-graduation"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            While I'm currently focused on learning and building my expertise in Machine Learning 
            and AI, here's what I envision offering in the future as I grow in my career.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Current Focus</h2>
          <p className="text-blue-800 text-lg mb-6">
            I am currently dedicated to expanding my knowledge and expertise in Machine Learning, 
            Deep Learning, and Artificial Intelligence through hands-on projects and continuous learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/portfolio">View My Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/skills">Explore My Skills</Link>
            </Button>
          </div>
        </div>

        {/* Future Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Future Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {futureServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded p-3">
                    <span className="text-sm font-medium text-gray-600">Timeline: </span>
                    <span className="text-sm text-gray-800">{service.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Learning Journey</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Every day brings new opportunities to learn and grow. I'm building a strong foundation 
            in AI and ML that will enable me to offer valuable services and solutions in the future. 
            My current projects and studies are stepping stones toward becoming a skilled professional 
            in this exciting field.
          </p>
          <Button asChild size="lg">
            <Link to="/about">Learn More About My Journey</Link>
          </Button>
        </div>

        {/* Collaboration */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Open to Collaboration</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            While I'm still learning, I'm always interested in collaborating on interesting projects, 
            participating in hackathons, and connecting with fellow AI/ML enthusiasts.
          </p>
          <Button asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
