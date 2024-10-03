'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { PlayCircle, ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react'

const testimonials = [
  {
    quote: "Great Designer, does great work and is very flexible with change. If you're a programmer and are looking for UI/UX designer is definitely well qualified for the job.",
    name: "Cameron Williamson",
    title: "Founder of Relik",
    image: "/images/1.jpeg"
  },
  {
    quote: "Bibek is an exceptional developer. His attention to detail and problem-solving skills are unmatched.",
    name: "Olivia Martinez",
    title: "CTO of TechInnovate",
    image: "/images/22.jpeg"
  },
  {
    quote: "Working with Bibek was a game-changer for our project. His full-stack expertise brought our vision to life.",
    name: "Ethan Brooks",
    title: "Product Manager at WebSolutions",
    image: "/images/33.jpeg"
  }
];

const services = [
  {
    title: 'Back-end Development',
    image: '/images/backend.jpg',
    description: 'Robust server-side solutions, database management, and API development to power your applications.',
  },
  {
    title: 'Front-end Development',
    image: '/images/frontend.jpg',
    description: 'Creating responsive, interactive, and user-friendly interfaces using modern web technologies.',
  },
  {
    title: 'Content Writing',
    image: '/images/content-writing.jpg',
    description: 'Engaging and SEO-optimized content to help your brand communicate effectively with your audience.',
  },
];

export function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialHeight, setTestimonialHeight] = useState('auto')
  const servicesRef = useRef<HTMLElement>(null)

  // Remove the staticImage state and useEffect
  // const [staticImage, setStaticImage] = useState("/images/1.jpeg")
  // useEffect(() => {
  //   setStaticImage("/images/1.jpeg")
  // }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const updateHeight = () => {
      const testimonialElement = document.getElementById('testimonial-content')
      if (testimonialElement) {
        const height = testimonialElement.offsetHeight
        setTestimonialHeight(`${height}px`)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [currentTestimonial])

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openMailApp = () => {
    window.location.href = "mailto:01biveka@gmail.com";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Preload all testimonial images */}
      {testimonials.map((testimonial, index) => (
        <Image
          key={index}
          src={testimonial.image}
          alt={`Preload ${testimonial.name}`}
          width={1}
          height={1}
          priority
          style={{ position: 'absolute', opacity: 0 }}
        />
      ))}

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:w-3/5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center">
                <span className="mr-2 md:mr-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">👋</span>
                Hey, I'm Bibek
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-700">Full-Stack Developer.</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Full Stack Frontend Developer and Content Writing Based in Nepal. I specialize in Bug Fixing, Responsive Web Design, and Visual Development.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={openMailApp}
                  className="bg-yellow-400 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-yellow-500 transition duration-300 text-base sm:text-lg w-full sm:w-auto"
                >
                  Let's Work →
                </button>
                <button 
                  onClick={scrollToServices}
                  className="flex items-center text-green-700 font-semibold hover:text-green-800 transition duration-300 text-base sm:text-lg"
                >
                  <PlayCircle className="mr-2" />
                  My Services
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 relative h-64 sm:h-80 md:h-96 lg:h-auto">
              <Image
                src="/images/nobg.png"
                alt="Bibek - Full-Stack Developer"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Client Testimonial Section */}
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:w-3/5">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Client Testimonial</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Praesent interdum eu magna a imperdiet. Ut orci ipsum, rutrum id tortor sit amet, mattis cursus libero. Phasellus facilisis malesuada nibh vel commodo.
              </p>
              <div 
                id="testimonial-content"
                className="bg-yellow-100 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8"
                style={{ minHeight: testimonialHeight, transition: 'min-height 0.3s ease-in-out' }}
              >
                <blockquote className="text-lg sm:text-xl italic mb-4 text-gray-700">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].title}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button onClick={prevTestimonial} className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextTestimonial} className="p-2 sm:p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 relative bg-gray-200 h-64 sm:h-80 md:h-96 lg:h-auto">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={`Testimonial from ${testimonials[currentTestimonial].name}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="bg-white rounded-3xl shadow-lg overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">My Services</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl transition duration-300 hover:shadow-lg">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-lg sm:text-xl text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={openMailApp}
                  className="text-green-700 font-semibold flex items-center hover:text-green-800 transition duration-300 text-base sm:text-lg"
                >
                  Let's Work Together <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Have a project idea.<br />Let's work together!</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-green-700 mr-2" size={20} />
                <span className="text-base sm:text-lg">01biveka@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-green-700 mr-2" size={20} />
                <span className="text-base sm:text-lg">+977- 9746******</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}