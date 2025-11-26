import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-peach-lavender text-text-primary border-0 px-4 py-1.5 rounded-full">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 rounded-3xl border-0 shadow-soft hover:shadow-medium transition-all bg-gradient-subtle">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="bg-peach p-4 rounded-2xl">
                    <Briefcase className="w-6 h-6 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">
                      Machine Learning Intern
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      NIELIT (Govt. of India)
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-text-secondary">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 – Jun 2025 • Remote</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 ml-0 md:ml-20">
                <p className="text-text-secondary leading-relaxed">
                  Participated in structured training focused on supervised learning, model
                  evaluation, and hyperparameter tuning through hands-on projects.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <p className="text-text-secondary">
                      Built and evaluated two end-to-end machine learning projects using Python,
                      NumPy, and Scikit-learn
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <p className="text-text-secondary">
                      Practiced data preprocessing techniques including normalization, feature
                      engineering, and train/test split methodologies
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <p className="text-text-secondary">
                      Developed strong foundations in accuracy scoring, cross-validation, and
                      practical ML workflows
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {['Python', 'Scikit-learn', 'NumPy', 'Model Evaluation', 'Preprocessing'].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 bg-white text-text-primary border-0 rounded-full"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
