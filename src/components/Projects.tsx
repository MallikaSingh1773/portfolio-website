import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import connectlyImg from '@/assets/connectly.jpg';
import coderbuddyImg from '@/assets/coderbuddy.jpg';
import brailleImg from '@/assets/brailleease.jpg';
import animeImg from '@/assets/anime-rec.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Connectly',
      subtitle: 'Real-Time Conferencing App',
      image: connectlyImg,
      tags: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
      color: 'bg-peach',
      description:
        'A full-featured video conferencing platform enabling multi-user calls with real-time chat and screen sharing.',
      problem:
        'Need for a seamless, real-time communication platform with robust permissions and scalability.',
      approach: [
        'Built with React frontend and Node.js backend',
        'Implemented WebRTC for peer-to-peer video streaming',
        'Used Socket.io for real-time messaging and signaling',
        'MongoDB for user management and session data',
        'Role-based access control for meeting permissions',
      ],
      outcome:
        'Successfully delivered a stable multi-user conferencing app with chat, screen sharing, and role-based permissions.',
      role: 'Full-Stack Developer',
      github: 'https://github.com/MallikaSingh1773/Connectly',
    },
    {
      title: 'CoderBuddy',
      subtitle: 'Agentic AI Software Engineer',
      image: coderbuddyImg,
      tags: ['Python', 'LangChain', 'LangGraph', 'Groq Cloud', 'Pydantic'],
      color: 'bg-lavender',
      description:
        'Self-built multi-agent system that transforms natural-language requests into complete mini-projects with clean, structured code.',
      problem: 'Automate the entire software development process from planning to implementation using AI agents.',
      approach: [
        'Built a multi-agent system with Planner, Architect, and Coder roles',
        'Designed state-managed workflow with 15+ task transitions using LangGraph',
        'Integrated LangChain for LLM orchestration and agent coordination',
        'Reduced repetitive LLM calls by 25% through efficient workflow design',
        'Added safe file tools and real-time agent tracing for debugging',
      ],
      outcome:
        'Successfully developed an agentic AI system generating 4–10 code files per request with 30% improved debugging speed and execution visibility.',
      role: 'AI Engineer & Architect',
      github: 'https://github.com/MallikaSingh1773/CoderBuddy',
    },
    {
      title: 'BrailleEase',
      subtitle: 'Real-Time Text to Braille Converter',
      image: brailleImg,
      tags: ['Python', 'OpenCV', 'Tesseract OCR', 'spaCy', 'Tkinter'],
      color: 'bg-mint',
      description:
        'Accessibility tool that detects text via webcam and converts it to Braille instantly with improved accuracy.',
      problem: 'Enable visually impaired users to access printed text in real-time through Braille conversion.',
      approach: [
        'Real-time text detection using OpenCV and webcam feed',
        'OCR processing with Tesseract for text extraction',
        'spaCy for natural language processing and text refinement',
        'Tkinter-based user interface for easy interaction',
        'Optimized recognition algorithms for +30% accuracy improvement',
      ],
      outcome:
        '+30% recognition accuracy and +40% usability improvement. Built collaboratively with a 4-member ECS team.',
      role: 'Team Lead & ML Developer',
      team: '4-member ECS team',
      github: 'https://github.com/MallikaSingh1773/Real-Time-Text-Recognition-and-Braille-Conversion-System-',
    },
    {
      title: 'Anime Recommendation System',
      subtitle: 'Personalized Content Discovery',
      image: animeImg,
      tags: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
      color: 'bg-baby-pink',
      description:
        'Hybrid recommendation system delivering personalized anime suggestions based on user preferences and behavior.',
      problem: 'Help anime enthusiasts discover content tailored to their unique tastes.',
      approach: [
        'Built hybrid recommendation model combining collaborative and content-based filtering',
        'Data preprocessing with Pandas for anime metadata',
        'Scikit-learn for model training and similarity calculations',
        'Streamlit web interface for interactive recommendations',
        'Performance tuning for accurate and diverse suggestions',
      ],
      outcome:
        'Delivered a functional recommendation system with strong accuracy, deployed as an interactive web app.',
      role: 'ML Engineer',
      github: 'https://github.com/MallikaSingh1773/AnimeRecommendation',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden rounded-3xl border-0 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 bg-white cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 ${project.color} px-3 py-1 rounded-full`}>
                    <span className="text-xs font-semibold text-text-primary">
                      {project.subtitle.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 bg-soft-beige text-text-primary border-0 rounded-full text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
                <p className="text-text-secondary">{selectedProject.subtitle}</p>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                
                <div>
                  <h4 className="font-bold text-lg mb-2">🎯 Problem</h4>
                  <p className="text-text-secondary">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">🛠️ Approach</h4>
                  <ul className="space-y-2">
                    {selectedProject.approach.map((item: string, i: number) => (
                      <li key={i} className="text-text-secondary flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">✨ Outcome</h4>
                  <p className="text-text-secondary">{selectedProject.outcome}</p>
                </div>

                <div className="bg-soft-beige rounded-2xl p-4">
                  <p className="text-sm">
                    <span className="font-semibold">Role:</span> {selectedProject.role}
                  </p>
                  {selectedProject.team && (
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Team:</span> {selectedProject.team}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 bg-white text-text-primary border-0 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="rounded-full flex-1"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
