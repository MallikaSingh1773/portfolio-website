import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Singhmallika1773@gmail.com',
      href: 'mailto:Singhmallika1773@gmail.com',
      color: 'bg-peach',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9263663380',
      href: 'tel:+919263663380',
      color: 'bg-lavender',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mallikasingh05',
      href: 'https://linkedin.com/in/mallikasingh05',
      color: 'bg-mint',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'MallikaSingh1773',
      href: 'https://github.com/MallikaSingh1773',
      color: 'bg-baby-pink',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Patna, Bihar, India',
      href: null,
      color: 'bg-soft-beige',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks! I'll reply soon ✨",
      description: "Your message has been received successfully.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-peach-lavender text-text-primary border-0 px-4 py-1.5 rounded-full">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-[hsl(265,60%,72%)] to-[hsl(355,100%,80%)] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Open to entry-level opportunities — Let's talk!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer">
                    <Card className="p-4 rounded-2xl border-0 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-subtle cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`${info.color} p-3 rounded-xl`}>
                          <info.icon className="w-5 h-5 text-text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">{info.label}</p>
                          <p className="font-semibold text-text-primary">{info.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card className="p-4 rounded-2xl border-0 shadow-soft bg-gradient-subtle">
                    <div className="flex items-center gap-4">
                      <div className={`${info.color} p-3 rounded-xl`}>
                        <info.icon className="w-5 h-5 text-text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{info.label}</p>
                        <p className="font-semibold text-text-primary">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 rounded-3xl border-0 shadow-soft bg-gradient-subtle">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border min-h-32"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message ✨
                </Button>
                <p className="text-xs text-text-secondary text-center">
                  🔒 I won't share your details
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
