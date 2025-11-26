import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Target, Calendar } from 'lucide-react';

const PositionsOfResponsibility = () => {
  const positions = [
    {
      title: 'Technical Lead',
      organization: 'ACM Student Chapter, VIT-AP',
      description: 'Directed 6+ technical events; oversaw club website maintenance.',
      icon: Target,
      color: 'bg-lavender',
      metrics: ['6+ Events', 'Website Maintenance'],
    },
    {
      title: 'Community Manager',
      organization: 'Innovators Quest',
      description: 'Increased event participation by 40% via planning & outreach.',
      icon: Users,
      color: 'bg-mint',
      metrics: ['+40% Participation', 'Event Planning'],
    },
    {
      title: 'Associate Event Lead',
      organization: 'Women in Open Source',
      description: 'Coordinated 3+ events for 300+ participants with a 27-member team.',
      icon: Calendar,
      color: 'bg-baby-pink',
      metrics: ['3+ Events', '300+ Participants', '27-Member Team'],
    },
  ];

  return (
    <section id="positions" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Positions of{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Responsibility
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Leading technical communities and driving student engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {positions.map((position, index) => {
            const Icon = position.icon;
            return (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 rounded-3xl border-0 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 bg-white h-full">
                  <div className={`${position.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{position.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{position.organization}</p>
                  <p className="text-text-secondary mb-4 text-sm">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.metrics.map((metric) => (
                      <Badge
                        key={metric}
                        variant="secondary"
                        className="px-3 py-1 bg-soft-beige text-text-primary border-0 rounded-full text-xs"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PositionsOfResponsibility;
