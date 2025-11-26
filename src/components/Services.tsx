import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code2, Brain, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Web Development',
      description:
        'MERN applications with REST APIs, authentication, dashboards, and real-time features using WebRTC and Socket.io.',
      color: 'bg-peach',
      tags: ['React', 'Node.js', 'MongoDB', 'Real-time'],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description:
        'Data preprocessing, model training and evaluation with Scikit-learn, small end-to-end prototypes, and OpenCV basics.',
      color: 'bg-lavender',
      tags: ['Python', 'Scikit-learn', 'OpenCV', 'Prototypes'],
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description:
        'Exploratory data analysis, cleaning, extracting insights, and creating lightweight dashboards.',
      color: 'bg-mint',
      tags: ['Pandas', 'NumPy', 'Visualization', 'Insights'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-peach-lavender text-text-primary border-0 px-4 py-1.5 rounded-full">
            What I Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services &{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From MVPs to small production features, I ship clean, approachable, and well-documented
            solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-3xl border-0 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 bg-white h-full group">
                <div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 bg-soft-beige text-text-primary border-0 rounded-full text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-text-secondary bg-soft-beige rounded-full px-6 py-3 inline-block">
          
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
