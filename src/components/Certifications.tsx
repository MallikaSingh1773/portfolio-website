import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Graduate – Cloud Architecting',
      issuer: 'AWS',
      link: 'https://drive.google.com/file/d/1F72ICZyEMYirJbWGVoaTEeKQQkWP_QPj/view?usp=sharing',
      color: 'bg-peach',
    },
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS',
      link: 'https://drive.google.com/file/d/1B3abJ6HOvmOj1B1VdBHCuYijVBsqVjuv/view',
      color: 'bg-mint',
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1znjYV7zi3Qk8cKpda0ZTZnjKaXSRtOvJ/view',
      color: 'bg-lavender',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      link: 'https://drive.google.com/file/d/1pdkK5lRgrgiQcy92jLnh515XDCL_RGqb/view',
      color: 'bg-baby-pink',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      link: 'https://drive.google.com/file/d/1ebkozDdqO3LwuTwLvlQUSKOcGOkSSljE/view',
      color: 'bg-peach',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-mint-pink text-text-primary border-0 px-4 py-1.5 rounded-full">
            Credentials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Cloud computing and AI certifications from industry leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-3xl border-0 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 bg-white h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${cert.color} p-3 rounded-2xl`}>
                    <Award className="w-6 h-6 text-text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{cert.issuer}</p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
