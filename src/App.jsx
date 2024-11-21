import './index.css'
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  //,  const [count, setCount] = useState(0)

  const AnimatedCard = ({ title, description, icon: Icon }) => {
    return (
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-4">
          {Icon && <Icon className="w-6 h-6 text-blue-500" />}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
      </motion.div>
    );
  };

  // Animated Section Header
  const AnimatedHeader = ({ title }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <motion.div
          className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
    );
  };

  // Animated Progress Bar
  const AnimatedSkillBar = ({ skill, level }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill}</span>
          <span className="text-gray-600">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  };

  // Page Transition Wrapper
  const PageTransition = ({ children }) => {
    return (
      <motion.div
        classname="bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };

  // Staggered List Animation
  const StaggeredList = ({ items }) => {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };

    const item = {
      hidden: { opacity: 0, x: -20 },
      show: { opacity: 1, x: 0 }
    };

    return (
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="space-y-4"
      >
        {items.map((text, index) => (
          <motion.li
            key={index}
            variants={item}
            className="flex items-center space-x-2"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'Python', level: 70 }
  ];

  const listItems = [
    "5+ years of development experience",
    "Worked with Fortune 500 companies",
    "Led multiple successful projects",
    "Excellent problem-solving skills"
  ];

  return (
    <PageTransition className="bg-background">
      <div className="max-w-5xl mx-auto px-4 py-16 bg-background">
        <div className="min-h-screen bg-gray-50">
          {/* Header/Nav */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Stephen Roberts</h1>
                <div className="space-x-6">
                  <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                  <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="bg-background">
            <div className="max-w-5xl mx-auto px-4 py-20">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-text mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-xl text-text mb-8">
                  Building beautiful and functional web experiences
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary">
                    View Projects
                  </button>
                  <button href="./assets/Resume.pdf" className="bg-primary text-white border-text px-6 py-2 rounded-md hover:bg-secondary">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section id="about" className="bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <p className="text-gray-600 leading-relaxed">
                  I&lsquo;m a full-stack developer with 5 years of experience building web and mobile applications. I&lsquo;ve been to 14 countries and plan to increase that number any chance I get. You can find me mostly sitting in front of a computer in Houston, TX.  
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="bg-white py-20">
            <AnimatedHeader title="My Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill) => (
                <AnimatedSkillBar
                  key={skill.skill}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimatedCard
                title="Frontend"
                description="Building responsive and interactive user interfaces using modern frameworks"
              />
              <AnimatedCard
                title="Backend"
                description="Developing robust server-side applications and APIs"
              />
              <AnimatedCard
                title="DevOps"
                description="Setting up CI/CD pipelines and managing cloud infrastructure"
              />
            </div>
          </section>

          <section>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Experience Highlights</h3>
              <StaggeredList items={listItems} />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex justify-center space-x-8">
                  <a href="https://github.com/sroberts12321" target="_blank" className="text-gray-600 hover:text-gray-900">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/sroberts12321" target="_blank" className="text-gray-600 hover:text-gray-900">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-4 py-6">
              <p className="text-center text-gray-600">
                © 2024 Stephen Roberts. All rights reserved. But like, does writing this really do anything?
              </p>
            </div>
          </footer>
        </div>
      </div>
    </PageTransition>
  )
}

export default App
