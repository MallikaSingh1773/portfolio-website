import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Code2, Brain, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, text: 'MERN Stack Development', color: 'bg-peach' },
    { icon: Brain, text: 'Gen AI & Agentic Systems', color: 'bg-lavender' },
    { icon: Users, text: 'ML Internship @ NIELIT', color: 'bg-mint' },
    { icon: Sparkles, text: 'Technical Leadership', color: 'bg-baby-pink' },
  ];

  const exploring = ['Multi-Agent Systems', 'LangGraph Workflows', 'Cloud AI Platforms'];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-peach-lavender text-text-primary border-0 px-4 py-1.5 rounded-full">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building Practical{' '}
              <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </div>

          <div className="bg-soft-beige rounded-3xl p-8 md:p-12 shadow-soft">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I'm Mallika Singh, a final-year Computer Science student at VIT-AP with a GPA of 8.45, 
              passionate about building scalable full-stack applications using the MERN stack and 
              exploring Generative AI and agentic systems.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              My experience includes creating CoderBuddy, a multi-agent AI system that automates 
              software development, and Connectly, a real-time video conferencing platform. I've 
              also completed an ML internship at NIELIT (Govt. of India), where I worked on end-to-end 
              machine learning projects and strengthened my understanding of data-driven development.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Alongside tech, I lead and mentor communities as the Technical Lead at ACM Student 
              Chapter, organizing and managing events for 300+ participants.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I'm currently seeking entry-level roles where I can apply my skills in MERN development, 
              GenAI, and collaborative problem-solving to contribute to impactful products.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
                >
                  <div className={`${item.color} p-3 rounded-xl`}>
                    <item.icon className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="font-medium text-text-primary">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Currently Exploring */}
            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-text-secondary mb-3">
                What I'm exploring now:
              </p>
              <div className="flex flex-wrap gap-2">
                {exploring.map((topic, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-1.5 bg-white text-text-primary border-0 rounded-full shadow-soft"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
