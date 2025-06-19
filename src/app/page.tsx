'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: '7+', label: 'Published Papers' },
  { number: '94%', label: 'AI Diagnostic Accuracy' },
  { number: '4.0', label: 'GPA (UPenn MS)' },
  { number: '50%', label: 'Cost Optimization' },
];

const technologies = [
  'TensorFlow', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 
  'Docker', 'OpenAI', 'TypeScript', 'Python', 'Next.js'
];

const experiences = [
  {
    role: 'AI Engineer',
    company: 'GPT Integrators',
    location: 'Atlanta, Georgia',
    period: 'May 2025 - Present',
    type: 'Current Position',
    highlights: [
      'Architected comprehensive full-stack Agentic AI assistant achieving 50% cost optimization',
      'Built RAG (Retrieval-Augmented Generation) chat system with OpenAI integration',
      'Developed document processing pipeline supporting 10+ file formats',
      'Implemented semantic search using vector embeddings and pgvector',
      'Led cross-functional teams integrating ML, backend, and frontend systems'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI', 'Docker', 'AWS'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    role: 'Machine Learning Researcher',
    company: 'The Research World (Threws)',
    location: 'Remote',
    period: 'Apr 2023 - Apr 2024',
    type: 'Research Role',
    highlights: [
      'Improved diagnostic accuracy from 78% to 94% in medical imaging applications',
      'Published 7 peer-reviewed papers in SCOPUS-indexed journals',
      'Developed CNNs using TensorFlow and Keras for medical image classification',
      'Engineered preprocessing pipelines for 50,000+ patient images',
      'Applied ensemble stacking of CNNs, SVMs, and Random Forest classifiers'
    ],
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Optuna', 'scikit-learn'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    role: 'Data Scientist (Sales & Digital Media)',
    company: 'Ultrafast Tools',
    location: 'India',
    period: 'Mar 2022 - Mar 2023',
    type: 'Industry Experience',
    highlights: [
      'Built customer churn prediction models improving retention from 65% to 80%',
      'Developed fraud detection algorithms reducing fraud from 10,000 to <1,000 cases/month',
      'Engineered ETL pipelines processing 20GB+ daily data streams',
      'Deployed time-series forecasting models reducing delivery delays from 5 to 2 days',
      'Built interactive analytics dashboards in Tableau and Flask'
    ],
    technologies: ['XGBoost', 'LightGBM', 'Apache Airflow', 'PySpark', 'FastAPI', 'Tableau'],
    color: 'from-pink-500 to-red-600'
  }
];

const publications = [
  {
    title: 'Deep Learning-Based Diagnosis of Osteoarthritis in Knee X-ray Images using Convolutional Neural Networks for Sustainable Healthcare',
    journal: 'Communications in Computer and Information Science Springer Series',
    type: 'Conference Paper',
    impact: 'Medical AI Breakthrough',
    description: 'Developed CNN models for automated osteoarthritis diagnosis, contributing to sustainable healthcare solutions.',
    tags: ['Deep Learning', 'Medical Imaging', 'CNN', 'Healthcare'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'AI for Secure and Resilient Cyber-Physical Systems',
    journal: 'Auerbach Publications',
    type: 'Book Chapter',
    impact: 'Cybersecurity Innovation',
    description: 'Comprehensive analysis of AI applications in securing cyber-physical systems and infrastructure.',
    tags: ['Cybersecurity', 'AI', 'IoT', 'Security'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Early-Stage Leukemia Detection Using Sophisticated Machine Learning Algorithms',
    journal: 'International Journal of Medical Engineering and Informatics',
    type: 'Journal Paper',
    impact: 'Medical Diagnostics',
    description: 'Advanced ML algorithms for early detection of leukemia, improving diagnostic accuracy by 16%.',
    tags: ['Machine Learning', 'Medical Diagnostics', 'Leukemia', 'Classification'],
    color: 'from-green-500 to-blue-600'
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // Auto-play on by default
  const [isClient, setIsClient] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const galleryImages = [
    { src: "/assets/images/i2.jpg", alt: "Photo booth shenanigans", caption: "Photo booth therapy: where #HUSTLE meets #ROCKSTAR and nobody questions your feather boa choices 🪶✨" },
    { src: "/assets/images/i3.png", alt: "Flower power moment", caption: "When life gives you flowers and heart decorations, you smile like you just found the TV remote 📺💐" },
    { src: "/assets/images/i4.jpg", alt: "Escape room victory", caption: "Holding the 'WE ESCAPED BECAUSE OF ME!' sign while everyone else pretends they're not secretly agreeing 🔓😏" },
    { src: "/assets/images/i5.jpg", alt: "Tree climbing adventure", caption: "That awkward moment when you realize climbing up was the easy part 🌳😅" },
    { src: "/assets/images/i6.jpg", alt: "Stream side chilling", caption: "My risk assessment skills: sitting on a log over water because YOLO ⛲😎" },
    { src: "/assets/images/i7.jpg", alt: "Leaf angel making", caption: "Making leaf angels because adulting is overrated and autumn leaves don't judge your life choices 🍂😂" },
    { src: "/assets/images/i8.jpg", alt: "Holi color explosion", caption: "When life throws colors at you, throw them right back! Holi vibes and rainbow dreams 🌈✨" },
    { src: "/assets/images/i13.jpg", alt: "Fancy suit vibes", caption: "When you dress up fancy and suddenly feel like you should own a yacht or at least know what caviar tastes like 🎩✨" },
    { src: "/assets/images/i15.jpg", alt: "Ice skating fun", caption: "Ice skating: where confidence meets gravity and gravity usually wins ⛸️😄" },
    { src: "/assets/images/i14.jpg", alt: "Hiking break time", caption: "Taking a break from life to become one with nature (and these surprisingly comfortable rocks) 🥾🌲" },
    { src: "/assets/images/i16.jpg", alt: "Halloween pumpkin carving", caption: "When your pumpkin carving skills peak at 'definitely looks like a face' 🎃🔥" },
    { src: "/assets/images/i18.jpg", alt: "Cafe contemplation", caption: "Deep thoughts at the cafe: Do I need more coffee or does coffee need more me? ☕🤔" },
    { src: "/assets/images/i19.jpg", alt: "BBQ master at work", caption: "That moment when you're the grill master and everyone pretends the smoke in their eyes is from being emotional about your cooking 🔥😎" },
    { src: "/assets/images/i20.jpg", alt: "Kayak adventure ready", caption: "Posing with my kayak like I'm about to discover a new continent instead of probably just paddling in circles 🛶😂" }
  ];

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 3D Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  // Client-side detection to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setIsMounted(true);
  }, []);

  // Auto-play functionality for 3D carousel
  useEffect(() => {
    if (isAutoPlay && isClient && isMounted) {
      const interval = setInterval(() => {
        nextSlide();
      }, 1000); // Change slide every 1 second
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, currentSlide, isClient, isMounted]);

  // Intersection Observer to update active section based on scroll position
  useEffect(() => {
    if (!isMounted) return;

    const sections = ['home', 'about', 'gallery', 'experience', 'research', 'contact'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-100px 0px -100px 0px'
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, [isMounted]);

  // Show loading state during hydration to prevent mismatch
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Loading...
          </div>
          <div className="text-gray-400">Preparing your experience</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-3 items-center">
            {/* Name on Left */}
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all justify-self-start"
            >
              ANANT AGGARWAL
            </motion.button>

            {/* Beyond the Code in Center */}
            <motion.button
              onClick={() => scrollToSection('gallery')}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all justify-self-center ${
                activeSection === 'gallery'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              🎭 BEYOND THE CODE
            </motion.button>

            {/* Tabs on Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-4 justify-self-end"
            >
              <button
                onClick={() => scrollToSection('experience')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all ${
                  activeSection === 'experience'
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>💼</span>
                <span>Experience</span>
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all ${
                  activeSection === 'research'
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>🔬</span>
                <span>Research</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all ${
                  activeSection === 'contact'
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>📞</span>
                <span>Contact</span>
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center px-6 pt-30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 mt-16"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
        <Image
                src="/assets/images/main_photo.jpg"
                alt="Anant Aggarwal"
                fill
                className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
          priority
        />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-black mb-6 leading-none"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ENGINEER
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Building practical machine learning systems that solve real problems.
            <br />
            <span className="text-blue-400 font-semibold">MS Data Science @ UPenn</span> • 
            <span className="text-purple-400 font-semibold"> Published Researcher</span> • 
            <span className="text-pink-400 font-semibold"> Full-Stack AI Developer</span>
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-sm hover:bg-white/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('experience')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
            >
              📄 View Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:bg-white/5 transition-all"
            >
              ✉️ Get In Touch
            </motion.button>
          </motion.div>
        </div>


      </section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-900/50 to-black/50 pt-28"
      >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Beyond the Code
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Life's too short to be serious all the time! Here's the real me in all my chaotic, adventurous, and slightly ridiculous glory. 
                From epic fails to unexpected wins, these moments capture the human behind the algorithms.
              </p>
            </motion.div>

            {/* Complete Carousel Layout - Properly Centered */}
            <div className="relative w-full max-w-6xl mx-auto">

              



              {/* 3D Carousel Container - Centered */}
              <div className="relative w-full flex flex-col items-center justify-center">
                {/* Carousel Images - Fixed Height with Proper Spacing */}
                <div className="relative w-full h-[450px] mb-20" style={{ perspective: '1200px' }}>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  {!isClient || !isMounted ? (
                    // Server-side rendering fallback - simple loading state
                    <div className="absolute w-80 h-96 flex items-center justify-center">
                      <div className="text-white text-xl">Loading gallery...</div>
                    </div>
                  ) : (
                    // Client-side 3D carousel
                    galleryImages.map((image, index) => {
                    const totalImages = galleryImages.length;
                    const isActive = index === currentSlide;

                    // For active slide, position it flat in the center
                    if (isActive) {
                      return (
                        <motion.div
                          key={`active-${index}`}
                          className="absolute w-80 h-96 cursor-pointer"
                          style={{
                            transformOrigin: 'center center',
                            transformStyle: 'preserve-3d',
                            zIndex: 20,
                          }}
                          animate={{
                            rotateY: 0,
                            scale: 1.4,
                            opacity: 1,
                            z: 50
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut"
                          }}
                          onClick={() => goToSlide(index)}
                          whileHover={{
                            scale: 1.45,
                            z: 60
                          }}
                        >
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-4 ring-blue-400 ring-opacity-80 shadow-blue-500/50">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-all duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Active
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    // For non-active slides, arrange them on left and right sides
                    const relativeIndex = index - currentSlide;
                    const normalizedIndex = relativeIndex < 0 ? relativeIndex + totalImages : relativeIndex;
                    const halfImages = Math.floor((totalImages - 1) / 2);

                    let xPosition, rotateY, zPosition;

                    if (normalizedIndex <= halfImages) {
                      // Left side images
                      const leftIndex = normalizedIndex;
                      xPosition = -200 - (leftIndex * 80);
                      rotateY = 25 + (leftIndex * 10);
                      zPosition = -100 - (leftIndex * 50);
                    } else {
                      // Right side images
                      const rightIndex = normalizedIndex - halfImages;
                      xPosition = 200 + ((rightIndex - 1) * 80);
                      rotateY = -25 - ((rightIndex - 1) * 10);
                      zPosition = -100 - ((rightIndex - 1) * 50);
                    }

                    const scale = 0.7;

                    return (
                      <motion.div
                        key={index}
                        className="absolute w-64 h-72 cursor-pointer"
                        style={{
                          transformOrigin: 'center center',
                          transformStyle: 'preserve-3d',
                          zIndex: 5,
                        }}
                        animate={{
                          rotateY: rotateY,
                          scale: scale,
                          opacity: 0.7,
                          x: xPosition,
                          z: zPosition
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                        onClick={() => goToSlide(index)}
                        whileHover={{
                          scale: 0.8,
                          opacity: 0.9,
                          z: zPosition + 30
                        }}
                      >
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl group shadow-black/50">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />

                          {/* Overlay for non-active slides */}
                          <div className="absolute inset-0 transition-all duration-500 bg-black/50 group-hover:bg-black/30" />
                        </div>
                      </motion.div>
                    );
                  }))}
                </div>
              </div>

              {/* Caption Section - Separated with Proper Spacing */}
              <div className="w-full max-w-4xl mx-auto px-4">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Image {currentSlide + 1} of {galleryImages.length}
                    </h3>
                    <p className="text-gray-200 text-lg font-semibold leading-relaxed">
                      {galleryImages[currentSlide].caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-6 gap-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-4 bg-blue-500/20 border-2 border-blue-400/40 rounded-full hover:bg-blue-500/30 hover:border-blue-400/60 transition-all shadow-lg backdrop-blur-sm"
              >
                <span className="text-2xl text-blue-300">←</span>
              </motion.button>

              {/* Slide Indicators */}
              <div className="flex gap-3">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all border-2 ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-300 scale-125 shadow-lg shadow-blue-400/50'
                        : 'bg-white/20 border-white/40 hover:bg-white/40 hover:border-white/60 hover:shadow-md'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-4 bg-blue-500/20 border-2 border-blue-400/40 rounded-full hover:bg-blue-500/30 hover:border-blue-400/60 transition-all shadow-lg backdrop-blur-sm"
              >
                <span className="text-2xl text-blue-300">→</span>
              </motion.button>
              
            </div>
            {/* Autoplay Toggle Button */}
            <div className="flex justify-center mb-25">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    isAutoPlay
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg shadow-gray-500/25'
                  } hover:shadow-xl`}
                >
                  {isAutoPlay ? '⏸️ Autoplay ON' : '▶️ Autoplay OFF'}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-24 px-6 bg-gradient-to-br from-gray-900/50 to-black/50 pt-28"
      >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                I'm an AI Engineer currently pursuing my Master's in Data Science at the University of Pennsylvania. 
                I specialize in building practical machine learning systems that solve real-world problems, from medical 
                diagnostics to enterprise AI assistants. Ready to explore my journey?
              </p>
            </motion.div>

            {/* Quick Navigation */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <motion.button
                onClick={() => scrollToSection('gallery')}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold text-white mb-3">Beyond the Code</h3>
                <p className="text-gray-300">Discover the real me through hilarious moments and epic adventures!</p>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('experience')}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-white mb-3">Professional Journey</h3>
                <p className="text-gray-300">Explore my experience building AI systems that make a real impact.</p>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('research')}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-xl hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-white mb-3">Research Impact</h3>
                <p className="text-gray-300">Check out my published work and contributions to the field.</p>
              </motion.button>
            </div>

            {/* Personal Qualities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-12"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Analytical Thinker</h3>
                <p className="text-gray-300">Published researcher in medical AI, achieving 94% diagnostic accuracy in imaging applications through rigorous analysis and innovation.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Collaborative Leader</h3>
                <p className="text-gray-300">Expert in leading cross-functional teams, with enterprise-scale deployments and proven ability to bridge technical and business domains.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-pink-500/20 to-red-600/20 rounded-xl border border-pink-500/30 backdrop-blur-sm hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Innovation Catalyst</h3>
                <p className="text-gray-300">Building the next generation of AI-powered tools that transform how people work, always pushing boundaries and exploring new possibilities.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-900 to-black pt-28"
      >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Professional Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From research breakthroughs to enterprise solutions, pushing the boundaries of AI and machine learning
              </p>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        📅 {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center text-gray-300 mb-4">
                      🏢 <span className="font-semibold mx-2">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                                         <div className="flex flex-wrap gap-2">
                       {exp.technologies.map((tech) => (
                         <span
                           key={tech}
                           className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-colors"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>


                 </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      {/* Research Section */}
      <motion.section
        id="research"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-28"
      >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Research Impact
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Advancing the frontiers of AI and machine learning through rigorous research and practical applications
              </p>
            </div>

            {/* Publications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${pub.color} text-white text-xs font-semibold rounded-full`}>
                        {pub.type}
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                        {pub.impact}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-blue-400 text-sm font-medium mb-3">
                      {pub.journal}
                    </p>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {pub.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      🎓 Peer Reviewed
                    </div>
                    <span className="text-blue-400 text-sm font-medium">
                      📄 Published
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Areas */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Research Focus Areas</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-xl">
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="text-xl font-semibold text-white mb-3">Medical AI</h4>
                  <p className="text-gray-300">Developing AI systems for medical imaging, diagnostics, and healthcare optimization with proven clinical impact.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl">
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="text-xl font-semibold text-white mb-3">AI Security</h4>
                  <p className="text-gray-300">Researching secure AI systems, cyber-physical security, and robust machine learning architectures.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-600/10 border border-green-500/20 rounded-xl">
                  <div className="text-4xl mb-4">🌱</div>
                  <h4 className="text-xl font-semibold text-white mb-3">Sustainable AI</h4>
                  <p className="text-gray-300">Applying AI for sustainability, renewable energy optimization, and environmental conservation.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-28"
      >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to collaborate on groundbreaking AI projects? Let's discuss how we can create something extraordinary together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                                     <p className="text-gray-300 mb-8 leading-relaxed">
                     I&apos;m always excited to discuss new opportunities, collaborate on innovative projects, 
                     or simply chat about the latest developments in AI and machine learning. 
                     Whether you&apos;re looking for a skilled engineer, researcher, or just want to connect, 
                     I&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg mr-4">
                      ✉️
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold">qbertangry@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mr-4">
                      📞
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Phone</div>
                      <div className="text-white font-semibold">+1 (445) 310-0291</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4">
                      📍
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Location</div>
                      <div className="text-white font-semibold">Philadelphia, Pennsylvania</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect Online</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/anant241203"
          target="_blank"
          rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      🔗 LinkedIn
        </a>
        <a
                      href="https://github.com/ANANT241203"
          target="_blank"
          rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>

                             {/* Professional Summary */}
               <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                 <div className="flex items-center gap-4 mb-6">
                   <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
                 </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    🎓 <strong>MS Data Science @ University of Pennsylvania</strong> (GPA: 4.0)
                  </p>
                  <p>
                    🚀 <strong>Current Role:</strong> AI Engineer at GPT Integrators, architecting enterprise AI solutions
                  </p>
                  <p>
                    📚 <strong>Research:</strong> 7+ published papers in SCOPUS-indexed journals, focusing on medical AI and sustainable technology
                  </p>
                  <p>
                    💡 <strong>Expertise:</strong> Full-stack AI development, machine learning research, and enterprise system architecture
                  </p>
                  <p>
                    🏆 <strong>Impact:</strong> Improved diagnostic accuracy from 78% to 94%, reduced operational costs by 50%, and led cross-functional teams
                  </p>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-2">Open to Opportunities</h4>
                  <p className="text-gray-300 text-sm">
                    Full-time positions, research collaborations, consulting projects, and innovative AI ventures.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-400">
                © 2025 Anant Aggarwal. Built with Next.js and deployed with passion.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                MS Data Science @ University of Pennsylvania
              </p>
            </div>
          </div>
        </motion.section>
    </div>
  );
}
