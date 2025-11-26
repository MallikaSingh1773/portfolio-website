import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'VIT-AP University',
      cgpa: '8.45',
      year: 'Graduating 2026',
      color: 'bg-lavender',
    },
    {
      degree: 'Class 12',
      institution: 'GD Goenka Public School, Patna',
      cgpa: '82.67%',
      year: '2022',
      color: 'bg-peach',
    },
    {
      degree: 'Class 10',
      institution: 'GD Goenka Public School, Patna',
      cgpa: '90.34%',
      year: '2020',
      color: 'bg-mint',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Academic Background
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education &{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-3xl border-0 shadow-soft hover:shadow-medium transition-all bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`${edu.color} p-3 rounded-2xl`}>
                      {index === 0 ? (
                        <GraduationCap className="w-6 h-6 text-text-primary" />
                      ) : (
                        <Award className="w-6 h-6 text-text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                      <p className="text-text-secondary">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-left md:text-right ml-14 md:ml-0">
                    <p className="text-2xl font-bold text-primary">{edu.cgpa}</p>
                    <p className="text-sm text-text-secondary">{edu.year}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
