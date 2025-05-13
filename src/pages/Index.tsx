
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import TransportSection from "@/components/TransportSection";
import ThemePreviewer from "@/components/ThemePreviewer";

const Index = () => {
  const featuredSections = [
    {
      title: "Culture & Traditions",
      description: "Discover the rich heritage of Sikkim's diverse ethnic communities.",
      imageSrc: "https://images.unsplash.com/photo-1543922590-c9a75cc6e0bd?q=80&w=1000&auto=format&fit=crop",
      link: "/culture"
    },
    {
      title: "History",
      description: "Journey through Sikkim's past, from ancient kingdoms to modern times.",
      imageSrc: "https://images.unsplash.com/photo-1586076920412-961f0679331c?q=80&w=1000&auto=format&fit=crop",
      link: "/history"
    },
    {
      title: "Nature & Biodiversity",
      description: "Explore the breathtaking landscapes and unique ecosystems of Sikkim.",
      imageSrc: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?q=80&w=1000&auto=format&fit=crop", 
      link: "/nature"
    },
    {
      title: "People & Livelihoods",
      description: "Meet the locals and learn about traditional ways of life in Sikkim.",
      imageSrc: "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1000&auto=format&fit=crop",
      link: "/people"
    },
    {
      title: "Experiences",
      description: "Immerse yourself in authentic experiences and cultural activities.",
      imageSrc: "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?q=80&w=1000&auto=format&fit=crop",
      link: "/experiences"
    },
    {
      title: "Getting Around",
      description: "Navigate Sikkim like a local with practical transportation insights.",
      imageSrc: "https://images.unsplash.com/photo-1602548065881-5001b7851db6?q=80&w=1000&auto=format&fit=crop",
      link: "/transport"
    }
  ];

  const latestPosts = [
    {
      title: "Celebrating Losar: The Tibetan New Year in Sikkim",
      excerpt: "Experience the vibrant festivities of Losar across Sikkim's monasteries and communities.",
      date: "May 8, 2025",
      imageSrc: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
      link: "/blog/losar-celebration"
    },
    {
      title: "Organic Farming Initiatives Transform Rural Sikkim",
      excerpt: "How local communities are leading the way in sustainable agricultural practices.",
      date: "May 5, 2025",
      imageSrc: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      link: "/blog/organic-farming"
    },
    {
      title: "New Shared Taxi Routes Connect Remote Villages",
      excerpt: "Latest transportation updates to help travelers reach lesser-known destinations.",
      date: "April 30, 2025",
      imageSrc: "https://images.unsplash.com/photo-1580458825493-1790a1bd2c36?q=80&w=1000&auto=format&fit=crop",
      link: "/blog/new-taxi-routes"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        <HeroSection 
          title="Discover the Authentic Spirit of Sikkim"
          subtitle="Journey through breathtaking landscapes, vibrant cultures, and ancient traditions in the heart of the Eastern Himalayas."
          backgroundImage="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1000&auto=format&fit=crop"
        />
        
        <section className="py-16">
          <div className="sikkim-container">
            <SectionTitle 
              title="Welcome to Sikkim"
              subtitle="More than just a travel destination, Sikkim is a living tapestry of cultures, traditions and natural wonders waiting to be experienced authentically."
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sikkim-mountain mb-4">
                  Nestled in the Eastern Himalayas, Sikkim is India's smallest state but holds within its borders an 
                  incredible diversity of landscapes, peoples, and traditions. From snow-capped mountains to lush valleys, 
                  ancient monasteries to vibrant festivals, Sikkim offers visitors a genuine glimpse into a way of life 
                  shaped by centuries of history and a deep connection to nature.
                </p>
                <p className="text-sikkim-mountain">
                  This digital journey aims to present Sikkim as locals experience it - beyond the tourist spots and 
                  staged attractions. Here, you'll discover the authentic heart of Sikkim through its diverse ethnic 
                  communities, traditional livelihoods, organic farming practices, and the rhythms of daily life in the mountains.
                </p>
              </div>
              
              <div className="thangka-border">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Traditional Sikkim landscape with prayer flags" 
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-sikkim-cream/30">
          <div className="sikkim-container">
            <SectionTitle 
              title="Explore Sikkim"
              subtitle="Dive into different aspects of Sikkim's rich heritage, natural beauty, and local life."
              centered
            />
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSections.map((section, index) => (
                <FeatureCard
                  key={index}
                  title={section.title}
                  description={section.description}
                  imageSrc={section.imageSrc}
                  link={section.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        <TransportSection />
        
        <section className="py-16 bg-white">
          <div className="sikkim-container">
            <SectionTitle 
              title="Latest From Our Blog"
              subtitle="Stories, news and updates from Sikkim's communities and cultural landscape"
              centered
            />
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <img 
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs text-sikkim-mountain">{post.date}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 text-sikkim-charcoal">{post.title}</h3>
                    <p className="text-sikkim-mountain mb-4">{post.excerpt}</p>
                    <a 
                      href={post.link} 
                      className="inline-flex items-center text-sikkim-red font-medium hover:underline"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ThemePreviewer />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
