
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import HeroSection from "@/components/HeroSection";
import TransportSection from "@/components/TransportSection";

const Transport = () => {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection 
          title="Getting Around Sikkim"
          subtitle="Navigate the mountain roads and experience journey like a local"
          backgroundImage="https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1000&auto=format&fit=crop"
          ctaText="View Transport Options"
          ctaLink="#transport-options"
        />
        
        <section className="py-16">
          <div className="sikkim-container">
            <SectionTitle 
              title="Transportation in Sikkim"
              subtitle="Understanding how to get around is essential for experiencing Sikkim authentically"
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sikkim-mountain mb-4">
                  Transportation in Sikkim is an adventure itself, offering glimpses into local life while traversing 
                  through breathtaking mountain landscapes. Unlike urban settings with fixed schedules and standardized 
                  services, Sikkim's transport system follows the rhythm of mountain life - sometimes unpredictable 
                  but always authentic.
                </p>
                <p className="text-sikkim-mountain mb-4">
                  Shared jeeps and taxis form the backbone of Sikkim's public transportation. These vehicles connect towns 
                  and villages, departing when they're full rather than on a strict timetable. This system, while sometimes 
                  requiring patience, provides travelers with an immersive experience alongside locals.
                </p>
                <p className="text-sikkim-mountain">
                  Road conditions vary widely across Sikkim, from smooth highways near urban centers to rugged mountain 
                  roads in remote areas. Weather significantly impacts travel, especially during monsoon season when 
                  landslides can temporarily close routes. Winter snowfall may affect high-altitude passes.
                </p>
              </div>
              
              <div className="thangka-border">
                <img 
                  src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mountain road in Sikkim with shared jeep" 
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="transport-options" className="scroll-mt-20">
          <TransportSection />
        </section>
        
        <section className="py-16 bg-sikkim-cream/30">
          <div className="sikkim-container">
            <SectionTitle 
              title="Local Perspective on Travel"
              subtitle="How Sikkimese locals navigate their mountain home"
              centered
            />
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-sikkim-charcoal">The Shared Taxi Culture</h3>
                <p className="text-sikkim-mountain mb-4">
                  For Sikkimese, shared taxis aren't just transportation—they're social hubs where news is exchanged, 
                  friendships are formed, and the community connects. Drivers know everyone and everything happening 
                  in their routes.
                </p>
                <p className="text-sikkim-mountain">
                  The front seat beside the driver is considered the place of honor, often reserved for elders or those 
                  willing to pay a small premium. The community aspect of these shared rides is what makes them special.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-sikkim-charcoal">Seasonal Adaptations</h3>
                <p className="text-sikkim-mountain mb-4">
                  Locals plan their travel according to seasons. During monsoons (June-September), they avoid non-essential 
                  travel to remote areas. Winter sees reduced transport to high-altitude areas, while spring and autumn 
                  offer the most reliable conditions.
                </p>
                <p className="text-sikkim-mountain">
                  Many remote villages have weekly "market days" when transportation options increase significantly as 
                  people travel to sell produce and purchase supplies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-sikkim-charcoal">Walking Traditions</h3>
                <p className="text-sikkim-mountain mb-4">
                  Despite modern transportation, walking remains important in Sikkimese culture. Many villages are 
                  connected by traditional footpaths that locals still use regularly. Some remote monasteries can 
                  only be reached on foot.
                </p>
                <p className="text-sikkim-mountain">
                  Walking is seen not just as transportation but as meditation by many Buddhists in the region. Some 
                  pilgrimage routes are specifically meant to be walked as a spiritual practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="sikkim-container">
            <SectionTitle 
              title="Transportation Folklore"
              subtitle="Stories from the mountain roads of Sikkim"
            />
            
            <div className="mt-8 bg-sikkim-cream/50 p-8 rounded-lg border border-sikkim-cream">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1623005329171-3ffe3e642ca4?q=80&w=1000&auto=format&fit=crop" 
                    alt="Mountain driver in Sikkim" 
                    className="rounded-md shadow-md w-full h-auto"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-sikkim-charcoal">The Legendary Drivers of North Sikkim</h3>
                  <p className="text-sikkim-mountain mb-4">
                    Among locals, the drivers who navigate the treacherous roads to Gurudongmar Lake and other North 
                    Sikkim destinations have achieved near-mythical status. Stories abound of their ability to navigate 
                    hairpin turns in zero visibility or repair vehicles with minimal tools in remote locations.
                  </p>
                  <p className="text-sikkim-mountain mb-4">
                    One popular tale tells of a driver named Tenzing who, during a sudden snowstorm, safely guided his 
                    jeep full of passengers through the Thangu Valley despite nearly zero visibility, relying solely on 
                    his intimate knowledge of every curve and dip in the road.
                  </p>
                  <p className="text-sikkim-mountain">
                    These drivers are respected not just for their skills but for their connection to the mountains. Many 
                    maintain small shrines in their vehicles and perform rituals before particularly difficult journeys, 
                    showing the blend of practicality and spirituality that characterizes life in the Himalayas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Transport;
