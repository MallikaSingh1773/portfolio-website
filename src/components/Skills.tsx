import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Gen AI & Agentic Systems',
      color: 'bg-lavender',
      skills: [
        { name: 'LangChain', level: 'Intermediate' },
        { name: 'LangGraph', level: 'Intermediate' },
        { name: 'Groq Cloud', level: 'Intermediate' },
        { name: 'OpenAI Tools', level: 'Intermediate' },
        { name: 'Pydantic', level: 'Intermediate' },
        { name: 'Agent Workflows', level: 'Intermediate' },
      ],
    },
    {
      title: 'Machine Learning & Data Science',
      color: 'bg-mint',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Machine Learning', level: 'Intermediate' },
        { name: 'Scikit-Learn', level: 'Intermediate' },
        { name: 'Pandas', level: 'Intermediate' },
        { name: 'NumPy', level: 'Intermediate' },
        { name: 'OpenCV', level: 'Intermediate' },
        { name: 'Streamlit', level: 'Intermediate' },
        { name: 'Spacy', level: 'Intermediate' },
      ],
    },
    {
      title: 'Web Development / MERN',
      color: 'bg-peach',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'WebRTC', level: 'Intermediate' },
        { name: 'Socket.io', level: 'Intermediate' },
      ],
    },
    {
      title: 'CS Fundamentals & Tools',
      color: 'bg-baby-pink',
      skills: [
        { name: 'DSA', level: 'Intermediate' },
        { name: 'OOP', level: 'Intermediate' },
        { name: 'SQL/MySQL', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'Linux', level: 'Intermediate' },
        { name: 'AWS', level: 'Beginner' },
        { name: 'Google Colab', level: 'Intermediate' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-[hsl(265,60%,72%)] text-white';
      case 'Intermediate':
        return 'bg-[hsl(355,100%,80%)] text-text-primary';
      case 'Beginner':
        return 'bg-soft-beige text-text-primary';
      default:
        return 'bg-soft-beige text-text-primary';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Skills & Technologies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Specialized in Gen AI, agentic systems, and full-stack ML applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 rounded-3xl border-0 shadow-soft hover:shadow-medium transition-all bg-white h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  <h3 className="text-xl font-bold text-text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="bg-soft-beige px-4 py-2 rounded-full hover:shadow-soft transition-all">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-text-primary">{skill.name}</span>
                          <Badge
                            className={`px-2 py-0.5 text-xs border-0 ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
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
          className="text-center mt-8"
        >
          <p className="text-sm text-text-secondary">
            <Badge variant="secondary" className="mr-2 bg-lavender text-text-primary border-0">
              Multi-Agent Systems
            </Badge>
            <Badge variant="secondary" className="mr-2 bg-mint text-text-primary border-0">
              Model Fine-Tuning
            </Badge>
            <Badge variant="secondary" className="bg-peach text-text-primary border-0">
              Real-Time Apps
            </Badge>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
