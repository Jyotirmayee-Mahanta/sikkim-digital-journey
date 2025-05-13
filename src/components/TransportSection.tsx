
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

interface TransportOption {
  mode: string;
  description: string;
  price: string;
  timeEstimate: string;
  tips: string;
}

interface RouteInfo {
  from: string;
  to: string;
  options: TransportOption[];
}

const TransportSection: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteInfo | null>(null);

  const commonRoutes: RouteInfo[] = [
    {
      from: "Gangtok",
      to: "Pelling",
      options: [
        {
          mode: "Shared Jeep",
          description: "Shared jeeps depart from the main stand when full. Expect basic comfort but authentic local experience.",
          price: "₹300-400 per person",
          timeEstimate: "4-5 hours",
          tips: "Arrive early to secure a seat. Jeeps typically leave when full."
        },
        {
          mode: "Private Taxi",
          description: "Comfortable car with dedicated driver. Can stop at viewpoints along the way.",
          price: "₹2500-3000 for the vehicle",
          timeEstimate: "3-4 hours",
          tips: "Negotiate price before departure and clarify if sightseeing stops are included."
        }
      ]
    },
    {
      from: "Gangtok",
      to: "Namchi",
      options: [
        {
          mode: "Shared Jeep",
          description: "Departs from Lower Taxi Stand. Basic transport shared with locals.",
          price: "₹200-250 per person",
          timeEstimate: "3 hours",
          tips: "Jeeps only depart when full. Be prepared for some crowding."
        },
        {
          mode: "Public Bus",
          description: "SNT (Sikkim Nationalised Transport) buses run on this route. Very economical but less frequent.",
          price: "₹100-150 per person",
          timeEstimate: "4 hours",
          tips: "Check schedules in advance as they might only run 1-2 times daily."
        }
      ]
    },
    {
      from: "Gangtok",
      to: "Tsomgo Lake",
      options: [
        {
          mode: "Shared Jeep Package",
          description: "Travel with other tourists to this popular destination. Usually includes permit arrangements.",
          price: "₹1000-1200 per person",
          timeEstimate: "2-3 hours each way",
          tips: "Permits are required. Tour operators usually handle this. Dress warmly as the lake is at high altitude."
        },
        {
          mode: "Private Taxi",
          description: "Exclusive vehicle for your group. More flexibility for stops and timing.",
          price: "₹4000-5000 for the vehicle",
          timeEstimate: "2-3 hours each way",
          tips: "Book a day in advance. Ensure the driver has experience on mountain roads."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="sikkim-container">
        <SectionTitle 
          title="Getting Around Sikkim" 
          subtitle="Travel like a local through the mountain roads and experience the authentic journey." 
          centered
        />
        
        <div className="mt-10">
          <p className="mb-6 text-sikkim-mountain">
            Transportation in Sikkim is an adventure in itself. Roads wind through mountains, offering breathtaking views at every turn. 
            While services may not follow strict schedules, they provide an authentic glimpse into local life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-sikkim-cream/50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sikkim-charcoal">Common Transport Options</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 bg-sikkim-red rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-sikkim-charcoal">Shared Jeeps/Taxis</h4>
                    <p className="text-sikkim-mountain text-sm mt-1">The most common way to travel between towns. Jeeps depart when full, not on fixed schedules. Economical and authentic.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 bg-sikkim-turquoise rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-medium text-sikkim-charcoal">Private Taxis</h4>
                    <p className="text-sikkim-mountain text-sm mt-1">More expensive but offer flexibility. Good for groups or when visiting multiple places in one day.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 bg-sikkim-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-medium text-sikkim-charcoal">SNT Buses</h4>
                    <p className="text-sikkim-mountain text-sm mt-1">Government buses connect major towns. Very economical but have limited schedules and take longer.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="h-8 w-8 flex-shrink-0 bg-sikkim-green rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-medium text-sikkim-charcoal">Walking</h4>
                    <p className="text-sikkim-mountain text-sm mt-1">Many mountain villages are best explored on foot. Local trails often connect communities.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-sikkim-cream/50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sikkim-charcoal">Popular Routes</h3>
              <p className="text-sikkim-mountain text-sm mb-4">Select a route to see transport options, estimated costs, and local tips:</p>
              
              <div className="space-y-3">
                {commonRoutes.map((route, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedRoute === route 
                        ? "bg-sikkim-gold/20 border border-sikkim-gold" 
                        : "bg-white border border-gray-200 hover:bg-sikkim-cream"
                    }`}
                    onClick={() => setSelectedRoute(route)}
                  >
                    <div className="font-medium">{route.from} to {route.to}</div>
                    <div className="text-xs text-sikkim-mountain mt-1">
                      {route.options.length} transport options available
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {selectedRoute && (
            <div className="mt-10 bg-white border border-gray-100 rounded-lg shadow-md p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-sikkim-charcoal">
                  {selectedRoute.from} to {selectedRoute.to}
                </h3>
                <button 
                  className="text-sikkim-mountain text-sm hover:text-sikkim-red"
                  onClick={() => setSelectedRoute(null)}
                >
                  Close
                </button>
              </div>
              
              <div className="space-y-6">
                {selectedRoute.options.map((option, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <h4 className="font-medium text-lg text-sikkim-red">{option.mode}</h4>
                    <p className="mt-2 text-sikkim-mountain">{option.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-sikkim-cream/30 p-3 rounded">
                        <div className="text-xs text-sikkim-mountain mb-1">Estimated Price</div>
                        <div className="font-medium">{option.price}</div>
                      </div>
                      
                      <div className="bg-sikkim-cream/30 p-3 rounded">
                        <div className="text-xs text-sikkim-mountain mb-1">Travel Time</div>
                        <div className="font-medium">{option.timeEstimate}</div>
                      </div>
                      
                      <div className="bg-sikkim-cream/30 p-3 rounded">
                        <div className="text-xs text-sikkim-mountain mb-1">Local Tips</div>
                        <div className="font-medium text-sm">{option.tips}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sikkim-gold/10 border border-sikkim-gold/20 rounded text-sm">
                <strong className="text-sikkim-charcoal">Note:</strong> Prices and times are estimates only and may vary based on season, weather conditions, and availability. Always check locally for the most current information.
              </div>
            </div>
          )}
          
          <div className="mt-12 bg-sikkim-blue/10 p-6 rounded-lg border border-sikkim-blue/20">
            <h3 className="text-xl font-semibold mb-3 text-sikkim-charcoal">Transportation Tips</h3>
            <ul className="space-y-3 text-sikkim-mountain">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-sikkim-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Roads in Sikkim can be narrow and winding. If you're prone to motion sickness, sit near a window and bring medication.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-sikkim-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Start your journey early as mountain weather can change quickly, and some roads may close early.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-sikkim-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Keep small denominations of cash ready for shared transport as drivers may not have change.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-sikkim-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>During monsoon season (June-September), expect occasional delays due to landslides or road repairs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
