import React from 'react';
import './App.css';
import InfoTicker from './InfoTicker';
import { useState } from 'react';
import SmoothScroll from './SmoothScroll';

function Nav() {
  return (
    <nav className="bg-white dark-blue sticky top-0 shadow-md z-50">
      {/* Navigation Bar */}
      <div className="p-2 container mx-auto px-4 flex justify-between items-center max-w-8xl">

        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Barron Icon" className="h-50 w-40 object-contain" />
        </div>

        <ul className="flex space-x-6 text-xl font-semibold">
          <li><a href="#home" className="hover:text-light-blue">Home</a></li>
          <li><a href="#about" className="hover:text-light-blue">About</a></li>
          <li><a href="#services" className="hover:text-light-blue">Services</a></li>
          <li><a href="#contact" className="hover:text-light-blue">Contact</a></li>
        </ul>
      </div>

      {/* Embedded InfoTicker */}
      <InfoTicker />
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center scroll-mt-32">
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
    <section id="about" className="py-20 bg-white scroll-mt-32">
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
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Managed IT Services",
      short: "Comprehensive IT support to keep your systems running smoothly.",
      full: "We offer 24/7 helpdesk, proactive monitoring, patching, and remote support for all your business devices and infrastructure."
    },
    {
      title: "Cybersecurity Solutions",
      short: "Protect your business with advanced security strategies.",
      full: "Includes endpoint protection, threat detection, EDR, firewall management, and phishing simulations."
    },
    {
      title: "Cloud Consulting",
      short: "Optimize your business operations with expert cloud guidance.",
      full: "We help migrate to, manage, and optimize Microsoft 365, Azure, AWS, and Google Cloud platforms."
    },
    {
      title: "Custom Software",
      short: "Tailored solutions to fit your unique workflow.",
      full: "From internal tools to customer-facing apps, we design, develop, and integrate software to streamline operations."
    },
    {
      title: "Monitoring & Dashboards",
      short: "Real-time visibility into IT health and performance.",
      full: "Includes network, device, and cloud service dashboards tailored to your key metrics and SLAs."
    },
    {
      title: "Business Consulting",
      short: "Align your IT investments with business strategy.",
      full: "We provide strategic technology consulting, IT planning, and cost optimization for growing companies."
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20 scroll-mt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:border-l-4 hover:border-light-blue transition-all duration-300"
              >
              <h3 className="text-xl font-semibold text-dark-blue mb-2 hover:text-light-blue transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {activeIndex === index ? service.full : service.short}
              </p>
              <p className="text-sm text-light-blue mt-2">
                {activeIndex === index ? 'Click to collapse ▲' : 'Click to learn more ▼'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">Contact Us</h2>

        <div className="text-center text-lg text-gray-700 mb-6">
          <p className="mb-2">
            📧 Email: <a href="mailto:sales@barrontechnology.com" className="text-light-blue hover:underline">sales@barrontechnology.com</a>
          </p>
          <p className="mb-6">
            📞 Phone: <a href="tel:8064019271" className="text-light-blue hover:underline">(806) 401-9271</a>
          </p>
        </div>

        {/* Embedded Microsoft Form */}
        <div className="w-full flex justify-center">
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=0nfeB-LR5k-YiK6_X83vj7fHBnq3I_hBr68xR9IdD55UNTNLQldGNkRGRDRGVUtUQUc3TTg3RjFERS4u&embed=true"
            width="100%"
            height="1200px"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            style={{ border: 'none', maxWidth: '100%', height: '1200px' }}
            allowFullScreen
            title="Barron Contact Form"
          ></iframe>
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