import React from 'react';
import './App.css';
import SmoothScroll from './SmoothScroll';

function Nav() {
  return (
    <nav className="bg-white dark-blue p-4 sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-5xl">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Barron Technology Logo" className="h-32 w-32 object-contain align-middle" />
        </a>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-light-blue">Home</a></li>
          <li><a href="#about" className="hover:text-light-blue">About</a></li>
          <li><a href="#services" className="hover:text-light-blue">Services</a></li>
          <li><a href="#contact" className="hover:text-light-blue">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">Empowering Your Business with Technology</h1>
        <p className="text-lg md:text-xl mb-6">Barron Technology delivers innovative IT and consulting solutions to drive your success!</p>
        <a href="#contact" className="bg-dark-blue text-white px-6 py-3 rounded-lg hover:bg-light-blue">Get Started</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">About Barron Technology</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-6">
          Barron Technology is a trusted IT and business consulting partner headquartered Texas. We specialize in delivering tailored solutions that drive growth, performance, and resilience for modern organizations.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-6">
          With over five years of hands-on experience in technical consulting, our team has successfully implemented scalable, secure, and innovative solutions for clients across industries. From managed IT services to advanced cybersecurity, cloud optimization, and custom software deployments — we bring enterprise-level expertise to every engagement.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Our commitment is simple: to empower businesses with reliable technology, forward-thinking strategies, and white-glove service. Whether you're a startup or an established enterprise, Barron Technology is here to ensure your technology drives meaningful outcomes.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Managed IT Services", description: "Comprehensive IT support to ensure your systems run smoothly and securely." },
    { title: "Cybersecurity Solutions", description: "Protect your business with advanced threat detection and prevention strategies." },
    { title: "Cloud Consulting", description: "Optimize your operations with scalable cloud solutions and expert guidance." },
    { title: "Custom Software", description: "Tailored software implementation and integration to meet your unique needs." },
    { title: "Monitoring & Dashboards", description: "Real-time insights with custom monitoring and dashboard solutions." },
    { title: "IT & Business Consulting", description: "Strategic guidance to align technology with your business goals." },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-blue mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">Contact Us</h2>
        <div className="text-center text-lg text-gray-700 mb-6">
          <p className="mb-2">
            📧 Email: <a href="mailto:sales@barrontechnology.com" className="text-light-blue hover:underline">sales@barrontechnology.com</a>
          </p>
          <p className="mb-6">
            📞 Phone: <a href="tel:8064019271" className="text-light-blue hover:underline">(806) 401-9271</a>
          </p>
          <p className="mb-6">
            Have a question or want to work with us? Fill out our form and we’ll get back to you shortly.
          </p>
          <a
            href="https://forms.office.com/r/7xCTsk3pQH" // ← Replace with your actual MS Form link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-blue text-white px-8 py-4 rounded-lg hover:bg-light-blue transition duration-300"
          >
            Fill Out Our Contact Form
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <p>© 2025 Barron Technology LLC. All rights reserved.</p>
        <p className="mt-2">Willis, Texas</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <SmoothScroll />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;