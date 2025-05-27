
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, User } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate 2nd-year B.Tech student specializing in Computer Science and Engineering with 
            Artificial Intelligence and Machine Learning, driven by curiosity and a desire to create 
            intelligent solutions for tomorrow's challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="Himanshu Singh"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm Himanshu Singh, a dedicated student currently pursuing my Bachelor's degree 
                in Computer Science and Engineering with a specialization in Artificial Intelligence 
                and Machine Learning. I'm in my second year and expected to graduate in 2028.
              </p>
              <p>
                My journey into the world of AI and ML began with a fascination for how machines can 
                learn and make decisions. This curiosity has evolved into a deep passion for creating 
                intelligent systems that can solve real-world problems.
              </p>
              <p>
                I believe in learning by doing, which is why I've already started building projects 
                that demonstrate my understanding of fundamental concepts in machine learning, deep 
                learning, and data science. Each project is a stepping stone in my journey to become 
                a skilled AI developer.
              </p>
              <p>
                When I'm not coding or studying, I enjoy exploring the latest research in AI, 
                participating in online courses, and connecting with fellow enthusiasts in the field.
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left">
                <strong>B.Tech in Computer Science & Engineering</strong><br />
                Specialization: AI & Machine Learning<br />
                Currently: 2nd Year<br />
                Expected Graduation: 2028
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left">
                • Machine Learning Algorithms<br />
                • Deep Learning & Neural Networks<br />
                • Data Science & Analytics<br />
                • Computer Vision<br />
                • Natural Language Processing
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Personal Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left">
                • AI Research & Innovation<br />
                • Open Source Contributions<br />
                • Competitive Programming<br />
                • Tech Community Engagement<br />
                • Continuous Learning
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Vision</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To become a skilled AI developer who contributes meaningfully to the advancement of 
            artificial intelligence technology, creating solutions that make a positive impact on 
            society while continuously learning and growing in this exciting field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
