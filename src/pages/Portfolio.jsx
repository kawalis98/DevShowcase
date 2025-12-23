import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold">
            <span className="gradient-text text-sm sm:text-base">Kawalis</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 sm:gap-8 items-center">
            <button 
              onClick={() => scrollToSection('works')} 
              className="text-xs sm:text-sm hover:text-[#0cc0df] transition-colors duration-200"
            >
              WORKS
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-xs sm:text-sm hover:text-[#0cc0df] transition-colors duration-200"
            >
              EXPERIENCE
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-xs sm:text-sm hover:text-[#0cc0df] transition-colors duration-200"
            >
              CONTACT
            </button>
          </div>
          
          <div className="hidden md:flex gap-2 sm:gap-4">
            <a href="https://github.com/kawalis" target="_blank" rel="noopener noreferrer" className="hover:text-[#0cc0df] transition-colors duration-300">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0cc0df] transition-colors duration-300">
              <Linkedin size={16} />
            </a>
            <a href="mailto:kawalis@proton.me" className="hover:text-[#0cc0df] transition-colors duration-300">
              <Mail size={16} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0b] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('works')} 
                className="text-sm hover:text-[#0cc0df] transition-colors duration-200 py-2"
              >
                WORKS
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-sm hover:text-[#0cc0df] transition-colors duration-200 py-2"
              >
                EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm hover:text-[#0cc0df] transition-colors duration-200 py-2"
              >
                CONTACT
              </button>
              <div className="flex justify-center space-x-6 pt-2">
                <a href="https://github.com/kawalis" target="_blank" rel="noopener noreferrer" className="hover:text-[#0cc0df] transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0cc0df] transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kawalis@proton.me" className="hover:text-[#0cc0df] transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Bio */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-gray-400">Biography</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Creative and execution-driven Full-Stack Developer with hands-on experience building scalable web and mobile applications. Strong focus on clean UI, performance, and automation.
            </p>
            
            <div className="space-y-3 pt-4">
              <h4 className="text-xs sm:text-xs uppercase tracking-wider text-gray-400">Contact</h4>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#0cc0df]">
                <Globe size={12} />
                <a href="https://kawalis.dev" target="_blank" rel="noopener noreferrer" className="hover:underline text-xs sm:text-sm">kawalis.dev</a>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                <MapPin size={12} />
                <span className="text-xs sm:text-sm">Remote / Europe</span>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h4 className="text-xs sm:text-xs uppercase tracking-wider text-gray-400">Expertise</h4>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
                <li>• Full-Stack Development</li>
                <li>• Mobile Apps (React Native)</li>
                <li>• AI Automation</li>
                <li>• UI/UX Implementation</li>
              </ul>
            </div>
          </div>

          {/* Center Profile */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
            <div className="text-center space-y-2 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">Kawalis</h1>
              <p className="text-xl sm:text-2xl md:text-3xl gradient-text font-light">Full-Stack Developer</p>
              <p className="text-gray-400 text-xs sm:text-sm">Remote • Global</p>
            </div>

            <div className="relative mt-4 md:mt-6">
              <div className="glow-border rounded-full p-1 bg-gradient-to-br from-[#0cc0df] to-[#06a0bf]">
                <img 
                  src="/images/dog.jpg" 
                  alt="Kawalis" 
                  className="w-32 h-40 sm:w-40 sm:h-52 md:w-60 md:h-72 lg:w-64 lg:h-80 xl:w-80 xl:h-96 rounded-full object-cover bg-gray-900"
                />
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('works')} 
              className="mt-6 sm:mt-8 bg-[#0cc0df] hover:bg-[#0aa8c7] text-white px-6 py-3 sm:px-8 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              View My Work
              <ChevronDown className="ml-2" size={20} />
            </Button>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6 lg:space-y-8">
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[0.5rem] sm:text-xs uppercase tracking-wider text-gray-400">Years of Experience</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light gradient-text">3+</p>
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[0.5rem] sm:text-xs uppercase tracking-wider text-gray-400">Technologies & Skills</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light gradient-text">20+</p>
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[0.5rem] sm:text-xs uppercase tracking-wider text-gray-400">Projects Delivered</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light gradient-text">15+</p>
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-[0.5rem] sm:text-xs uppercase tracking-wider text-gray-400">Companies Worked With</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light gradient-text">5+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="works" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#111113]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-4">Technologies & Skills</h2>
            <p className="text-gray-400 text-sm md:text-base">A comprehensive toolkit for building modern web experiences</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {[
              'HTML', 'HTML Canvas', 'CSS', 'Sass', 'Bootstrap', 'Tailwind CSS', 'CSS Transition Animation', 
              'JavaScript', 'TypeScript', 'React', 'React.js',
              'Redux', 'PWA', 'Expo', 'MUI', 'Webpack', 'ER.js', 'Three.js', 'CanvaJS', 
              'Next.js', 'Figma', 'Jira', 'Git', 'FIGMA',
              'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase',
              'React Native', 'iOS & Android', 'Firebase',
              'OpenAI API', 'AI Automation', 'WebSockets', 'JWT',
              'Docker', 'Vercel', 'Linux', 'Nginx', 'CI/CD',
              'Application Optimization', 'UX', 'SEO', 'Yarn', 'Data Visualization'
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-[#1a1a1c] border border-gray-700 text-gray-300 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm hover:border-[#0cc0df]/50 transition-colors duration-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-sm md:text-base">6+ years of building exceptional digital products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Driver7</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Front-End Developer</p>
                <p className="text-gray-400 text-xs sm:text-sm">Riyadh, Saudi Arabia (Remote)</p>
                <p className="text-gray-500 text-xs sm:text-sm">January 2024 - Present</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">HTML</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">ER.js</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Three.js</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Redux</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Tailwind</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Express</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Postgres</Badge>
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">WSM</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Front-End Developer</p>
                <p className="text-gray-400 text-xs sm:text-sm">Riyadh, Saudi Arabia (Remote)</p>
                <p className="text-gray-500 text-xs sm:text-sm">August 2022 - December 2023</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">React</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Chart</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Redux</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Saga</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">MongoDB</Badge>
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Intellica</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Front-End Developer</p>
                <p className="text-gray-400 text-sm">Istanbul (Remote)</p>
                <p className="text-gray-500 text-sm">April 2021 - August 2022</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">React</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">HTML5</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Sass</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Chart</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Animation</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">React Bootstrap</Badge>
                </div>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Lightning-works</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Front-End Developer</p>
                <p className="text-gray-400 text-sm">Istanbul (Remote)</p>
                <p className="text-gray-500 text-sm">February 2020 - March 2021</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">React</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">CSS3</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Bootstrap</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">Firebase</Badge>
                </div>
              </div>
            </Card>

            {/* Card 5 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Pejika.dev</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Front-End Teaching Assistant</p>
                <p className="text-gray-400 text-sm">Istanbul (Remote)</p>
                <p className="text-gray-500 text-sm">May 2019 - January 2020</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">HTML</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">CSS</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">React</Badge>
                </div>
              </div>
            </Card>

            {/* Card 6 */}
            <Card className="bg-[#1a1a1c] border-l-4 border-l-[#0cc0df] border-r border-t border-b border-gray-800 p-4 sm:p-6 hover-lift relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0cc0df] before:to-[#06a0bf] before:shadow-[0_0_20px_rgba(12,192,223,0.6)]">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Kodluyoruz</h3>
                <p className="text-[#0cc0df] text-sm sm:text-base">Mentor</p>
                <p className="text-gray-400 text-sm">Istanbul (Remote)</p>
                <p className="text-gray-500 text-sm">February 2019 - April 2019</p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">HTML</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">CSS</Badge>
                  <Badge variant="secondary" className="bg-[#0cc0df]/20 text-[#0cc0df] text-[0.5rem] sm:text-xs">JavaScript</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 md:mb-12">Available for freelance projects, collaborations, and full-time opportunities</p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
            <Button 
              asChild
              className="bg-[#0cc0df] hover:bg-[#0aa8c7] text-white px-6 py-3 sm:px-8 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
            >
              <a href="mailto:kawalis@proton.me">
                <Mail className="mr-2" size={20} />
                Email Me
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df]/20 hover:text-white px-6 py-3 sm:px-8 sm:py-6 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto mt-2 sm:mt-0"
            >
              <a href="https://github.com/kawalis" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df]/20 hover:text-white px-6 py-3 sm:px-8 sm:py-6 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto mt-2 sm:mt-0"
            >
              <a href="https://kawalis.dev" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2" size={20} />
                Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800 bg-[#111113]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 Kawalis. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-6 mt-2 sm:mt-0">
            <a href="https://github.com/kawalis" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0cc0df] transition-colors duration-300">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0cc0df] transition-colors duration-300">
              <Linkedin size={16} />
            </a>
            <a href="mailto:kawalis@proton.me" className="text-gray-500 hover:text-[#0cc0df] transition-colors duration-300">
              <Mail size={16} />
            </a>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">Remote / Europe</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;