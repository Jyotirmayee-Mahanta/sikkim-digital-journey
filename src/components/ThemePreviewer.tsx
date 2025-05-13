
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

// This is a demo component to showcase the theme customization UI that would be available in the admin panel
const ThemePreviewer: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState("#9B2226");
  const [secondaryColor, setSecondaryColor] = useState("#4D908E");
  const [accentColor, setAccentColor] = useState("#F4A261");
  const [backgroundColor, setBackgroundColor] = useState("#FEFAE0");
  const [fontHeading, setFontHeading] = useState("Playfair Display");
  const [fontBody, setFontBody] = useState("Poppins");
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="sikkim-container">
        <SectionTitle 
          title="Theme Customization" 
          subtitle="Preview of the admin theme controls that will allow customization of the website appearance" 
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-sikkim-charcoal">Theme Controls</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Color Palette</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Primary Color</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="h-10 w-10 rounded cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Secondary Color</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={secondaryColor} 
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="h-10 w-10 rounded cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Accent Color</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={accentColor} 
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="h-10 w-10 rounded cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Background Color</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="color" 
                        value={backgroundColor} 
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="h-10 w-10 rounded cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Typography</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Heading Font</label>
                    <select 
                      value={fontHeading}
                      onChange={(e) => setFontHeading(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="Playfair Display">Playfair Display</option>
                      <option value="Merriweather">Merriweather</option>
                      <option value="Roboto Slab">Roboto Slab</option>
                      <option value="Lora">Lora</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-sikkim-mountain mb-1">Body Font</label>
                    <select 
                      value={fontBody}
                      onChange={(e) => setFontBody(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="Poppins">Poppins</option>
                      <option value="Open Sans">Open Sans</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Lato">Lato</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-sikkim-red text-white py-3 rounded hover:bg-sikkim-red/90 transition-colors">
                Apply Theme
              </button>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <div 
              className="rounded-lg shadow-lg overflow-hidden border border-gray-200"
              style={{ background: backgroundColor }}
            >
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: primaryColor,
                    fontFamily: fontHeading
                  }}
                >
                  Theme Preview
                </h3>
                
                <p 
                  className="mb-6"
                  style={{ 
                    color: "#333333",
                    fontFamily: fontBody
                  }}
                >
                  This preview shows how your selected theme will appear on the website. Colors and fonts are applied to various elements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div 
                    className="p-4 rounded-md"
                    style={{ backgroundColor: primaryColor + "20" }}
                  >
                    <h4 
                      className="font-semibold mb-2"
                      style={{ 
                        color: primaryColor,
                        fontFamily: fontHeading
                      }}
                    >
                      Primary Section
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: "#444444",
                        fontFamily: fontBody
                      }}
                    >
                      Content styled with your primary color theme.
                    </p>
                  </div>
                  
                  <div 
                    className="p-4 rounded-md"
                    style={{ backgroundColor: secondaryColor + "20" }}
                  >
                    <h4 
                      className="font-semibold mb-2"
                      style={{ 
                        color: secondaryColor,
                        fontFamily: fontHeading
                      }}
                    >
                      Secondary Section
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: "#444444",
                        fontFamily: fontBody
                      }}
                    >
                      Content styled with your secondary color theme.
                    </p>
                  </div>
                </div>
                
                <div 
                  className="p-4 rounded-md mb-6"
                  style={{ backgroundColor: accentColor + "20" }}
                >
                  <h4 
                    className="font-semibold mb-2"
                    style={{ 
                      color: accentColor,
                      fontFamily: fontHeading
                    }}
                  >
                    Accent Section
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: "#444444",
                      fontFamily: fontBody
                    }}
                  >
                    Content styled with your accent color theme.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    style={{ 
                      backgroundColor: primaryColor,
                      color: "#ffffff",
                      fontFamily: fontBody
                    }}
                    className="px-4 py-2 rounded"
                  >
                    Primary Button
                  </button>
                  
                  <button 
                    style={{ 
                      backgroundColor: secondaryColor,
                      color: "#ffffff",
                      fontFamily: fontBody
                    }}
                    className="px-4 py-2 rounded"
                  >
                    Secondary Button
                  </button>
                  
                  <button 
                    style={{ 
                      backgroundColor: accentColor,
                      color: "#ffffff",
                      fontFamily: fontBody
                    }}
                    className="px-4 py-2 rounded"
                  >
                    Accent Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemePreviewer;
