
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Code, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Himanshu Singh</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                2nd Year B.Tech CSE-AIML Student
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Aspiring Machine Learning & AI Developer passionate about building intelligent systems and solving real-world problems through code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <img
                  src="https://i.ibb.co/Kkb89Jt/your-image.jpg"
                  alt="Himanshu Singh"
                  className="w-80 h-80 rounded-full mx-auto shadow-2xl border-8 border-white object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm currently exploring the fascinating world of Artificial Intelligence and Machine Learning, 
              building projects that showcase my growing expertise in this exciting field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building intelligent models using PyTorch, TensorFlow, and scikit-learn to solve classification and prediction problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Deep Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating neural networks from scratch and implementing advanced architectures for computer vision and NLP tasks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Applying analytical thinking and programming skills to tackle complex challenges in AI and data science.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore My Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover my projects, skills, and the exciting path I'm taking in the world of AI and Machine Learning.
          </p>
          <Button asChild size="lg">
            <Link to="/about">
              Learn More About Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
