import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const techStack = ['React', 'Node.js', 'LangChain', 'Python', 'MongoDB'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-mint text-text-primary border-0 px-4 py-1.5 rounded-full">
              ✨ Open to entry-level roles
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
                Mallika
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-text-primary font-semibold">
              MERN + Gen AI Developer & ML Enthusiast
            </h2>

            <p className="text-lg text-text-secondary max-w-xl">
              Final-year CSE student @ VIT-AP building real-time web applications and exploring 
              agentic AI systems. Passionate about turning ideas into practical solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full shadow-medium hover:shadow-large transition-all hover:-translate-y-1"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 hover:-translate-y-1 transition-all"
                onClick={() => window.open('https://drive.google.com/file/d/1H4hsRrnnAMrV5rTTLtVhwn_7qPlkQ-oB/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 w-4 h-4" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full hover:-translate-y-1 transition-all"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-1.5 bg-soft-beige text-text-primary border-0 rounded-full"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] rounded-full blur-2xl opacity-30 animate-glow" />
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Mallika Singh"
                  className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-large"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-peach px-4 py-2 rounded-full shadow-medium border-4 border-white"
              >
                <span className="font-semibold text-text-primary">Gen AI</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-lavender px-4 py-2 rounded-full shadow-medium border-4 border-white"
              >
                <span className="font-semibold text-text-primary">MERN Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
