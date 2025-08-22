"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaKey,
  FaTicketAlt,
  FaNetworkWired,
  FaPalette,
  FaChartLine,
  FaBullhorn,
  FaTachometerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const features = [
    { icon: <FaKey />, title: "Secure Access", desc: "Protect your network with captive portal authentication for guest Wi-Fi." },
    { icon: <FaTicketAlt />, title: "Voucher Management", desc: "Generate and manage access vouchers easily." },
    { icon: <FaNetworkWired />, title: "Network Control", desc: "Control who accesses your Wi-Fi network." },
    { icon: <FaPalette />, title: "Custom Branding", desc: "Add your logo and brand colors to the portal." },
    { icon: <FaChartLine />, title: "Analytics", desc: "Track usage, devices, and performance reports." },
    { icon: <FaBullhorn />, title: "Marketing Tools", desc: "Engage users with social marketing campaigns, ads, and offers." },
    { icon: <FaTachometerAlt />, title: "High Performance", desc: "Optimized for speed and reliability." },
    { icon: <FaShieldAlt />, title: "Data Protection", desc: "Ensure user privacy and compliance." },
  ];

  const pricingPlans = [
    {
      name: "Gold",
      price: "₹999/month",
      features: [
        "User Authentication",
        "Voucher System",
        "Basic Analytics",
        "Custom Branding",
        "Marketing Tools",
      ],
    },
    {
      name: "Platinum",
      price: "₹1999/month",
      features: [
        "All Gold Features",
        "Unlimited Users",
        "Advanced Analytics",
        "Premium Support",
        "Data Protection",
      ],
    },
  ];

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setFormSubmitted(true);
      form.reset();
      setTimeout(() => setFormSubmitted(false), 5000);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
     <Head>
        <title>PronaSoft Captive Portal | Guest Wi-Fi Solutions</title>
        <meta
          name="description"
          content="PronaSoft offers secure captive portal solutions for guest Wi-Fi, social marketing, analytics, and network control for businesses."
        />
        <meta
          name="keywords"
          content="Captive Portal, Guest Wi-Fi, Social Marketing, Wi-Fi Authentication, Voucher Management, Network Control, Analytics, Custom Branding, Secure Wi-Fi Solutions"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-4 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
         {/* Logo + Text */}
          <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"   // <-- put your logo file inside /public/logo.png
            alt="PronaSoft Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
         <h1 className="text-2xl font-bold">Captive Portal</h1>
      </div>

         {/* Navbar Links */}
         <ul className="hidden md:flex space-x-6 text-gray-300">
         <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
         <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
         <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </nav>


        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-1xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Captive Portal
              </h1>
              <br />By PronaSoft India Pvt Ltd <br />
              <p className="text-lg text-gray-300 mb-4">
                A captive portal is a web page users must interact with before accessing the internet,
                often used in public Wi-Fi networks.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 mb-6">
                <li>Free Wi-Fi in cafes/hotels</li>
                <li>Marketing data collection</li>
                <li>Legal acknowledgment or consent</li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get a Demo
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={800}
            height={800}
          />

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 px-6 md:px-16 lg:px-24 max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-slate-800/50 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="text-3xl text-blue-400 mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 md:px-16 lg:px-24 bg-slate-900">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 transition ${
                  plan.name === "Platinum" ? "border-2 border-yellow-400" : ""
                }`}
              >
                {plan.name === "Platinum" && (
                  <div className="absolute -top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
                <p className="text-2xl md:text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-300 mb-4 space-y-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>✅ {feat}</li>
                  ))}
                </ul>
                <button className="w-full py-2 md:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition" onClick={() => window.location.href = "https://your-payment-link.com"}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            For queries, support, or business inquiries about our captive portal solutions and social marketing tools.
          </p>
          <div className="mb-6 space-y-1 text-gray-200">
            <p>📞 +91 9156028904</p>
            <p>📧 info@pronasoft.com</p>
            <p>
              🌐{" "}
              <a
                href="https://pronasoft.com"
                className="text-blue-400 hover:underline"
              >
                https://pronasoft.com
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-400 border-t border-slate-700">
         © {new Date().getFullYear()} PronaSoft India Pvt. Ltd. All rights reserved. |
         Captive Portal | Social Marketing | Guest Wi-Fi Solutions
        </footer>
      </div>
    </>
  );
}
