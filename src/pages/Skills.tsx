
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Python", level: 85, description: "Primary language for ML/AI development" },
        { name: "JavaScript", level: 70, description: "Web development and data visualization" },
        { name: "SQL", level: 65, description: "Database queries and data manipulation" },
      ]
    },
    {
      category: "Machine Learning",
      icon: Brain,
      color: "green",
      skills: [
        { name: "PyTorch", level: 80, description: "Deep learning framework" },
        { name: "TensorFlow", level: 75, description: "ML/DL model development" },
        { name: "scikit-learn", level: 85, description: "Classical ML algorithms" },
        { name: "Keras", level: 70, description: "High-level neural networks API" },
      ]
    },
    {
      category: "Data Science",
      icon: BarChart3,
      color: "purple",
      skills: [
        { name: "Pandas", level: 90, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 88, description: "Numerical computing" },
        { name: "Matplotlib", level: 85, description: "Data visualization" },
        { name: "Seaborn", level: 80, description: "Statistical data visualization" },
      ]
    },
    {
      category: "Tools & Technologies",
      icon: Database,
      color: "orange",
      skills: [
        { name: "Git", level: 75, description: "Version control" },
        { name: "Jupyter Notebooks", level: 90, description: "Interactive development" },
        { name: "VS Code", level: 85, description: "Code editor" },
        { name: "Google Colab", level: 80, description: "Cloud-based ML development" },
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Research & Learning",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels in various 
            technologies, frameworks, and tools essential for AI and ML development.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 mb-1" />
                      <CardDescription className="text-xs">
                        {skill.description}
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a student in the rapidly evolving field of AI and ML, I'm committed to continuous 
            learning and staying updated with the latest technologies, frameworks, and research. 
            Each project is an opportunity to deepen my understanding and expand my skill set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
