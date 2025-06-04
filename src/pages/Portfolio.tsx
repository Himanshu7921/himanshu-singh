import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "SparksNet",
      description: "A lightweight deep learning framework built from scratch to demonstrate fundamental neural network concepts and architectures.",
      technologies: ["Python", "NumPy", "Neural Networks", "Deep Learning"],
      purpose: "Educational framework showcasing understanding of neural network fundamentals",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      category: "Deep Learning",
      githubLink: "https://github.com/Himanshu7921/SparksNet",
      liveDemoLink: "https://github.com/Himanshu7921/SparksNet"
    },
    {
      title: "Spam Email Classification",
      description: "PyTorch-based email classifier implementing advanced preprocessing techniques including tokenization and stemming for accurate spam detection.",
      technologies: ["PyTorch", "NLP", "Tokenization", "Stemming", "Python"],
      purpose: "Text classification using deep learning for email spam detection",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
      category: "Natural Language Processing",
      githubLink: "https://github.com/Himanshu7921/Projects/tree/main/Email%20Spam%20Checking",
      liveDemoLink: "https://github.com/Himanshu7921/Projects/tree/main/Email%20Spam%20Checking"
    },
    {
      title: "Iris Classification (KNN)",
      description: "Classic machine learning implementation using K-Nearest Neighbors algorithm for iris flower species classification.",
      technologies: ["Python", "scikit-learn", "KNN", "Data Visualization", "Pandas"],
      purpose: "Fundamental ML classification demonstrating algorithm implementation",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      category: "Machine Learning",
      githubLink: "https://github.com/Himanshu7921/Projects/tree/main/Iris%20Flower%20Classification",
      liveDemoLink: "https://github.com/Himanshu7921/Projects/tree/main/Iris%20Flower%20Classification"
    },
    {
      title: "Wine Quality Analysis",
      description: "Comprehensive data science project modeling wine preferences using physicochemical properties with Python data science libraries.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
      purpose: "Data analysis and modeling for wine quality prediction",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=250&fit=crop",
      category: "Data Science",
      githubLink: "https://github.com/Himanshu7921/Projects/tree/main/Wine%20Quality%20Prediction%20System",
      liveDemoLink: "https://github.com/Himanshu7921/Projects/tree/main/Wine%20Quality%20Prediction%20System"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my journey through machine learning and AI development. Each project represents 
            a step forward in my understanding and application of cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Purpose:</h4>
                    <p className="text-sm text-gray-600">{project.purpose}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and exploring emerging technologies in AI and ML. 
            Stay tuned for more exciting developments!
          </p>
          <Button asChild>
            <a
              href="https://github.com/Himanshu7921"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Follow My GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
