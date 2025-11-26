import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notable{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recognition for innovation and technical excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 rounded-3xl border-0 shadow-large bg-gradient-peach-lavender relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Trophy className="w-32 h-32 text-text-primary" />
              </div>
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                        Top 10 Finalist — AeroSpanza National Innovation Program
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      National Level Recognition (India)
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      Selected among the top 10 finalists nationwide for an innovative aerospace technology concept. 
                      Recognized for exceptional creativity, problem-solving abilities, and research excellence in the 
                      aerospace engineering domain.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 bg-white/80 backdrop-blur-sm text-text-primary border-0 rounded-full">
                    Innovation
                  </Badge>
                  <Badge className="px-3 py-1 bg-white/80 backdrop-blur-sm text-text-primary border-0 rounded-full">
                    Problem-Solving
                  </Badge>
                  <Badge className="px-3 py-1 bg-white/80 backdrop-blur-sm text-text-primary border-0 rounded-full">
                    Research Excellence
                  </Badge>
                  <Badge className="px-3 py-1 bg-white/80 backdrop-blur-sm text-text-primary border-0 rounded-full">
                    Aerospace Tech
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
