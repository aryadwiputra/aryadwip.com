import Image from "next/image";
import { clientLogos } from "@/lib/home-data";

export function ClientsSection() {
  return (
              <section id="clients" className="py-12 border-y border-brand-border bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6 mb-6">
                      <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-muted">
                          Dipercaya tim dan bisnis yang terus berkembang
                      </p>
                  </div>
                  
                  
                  <div className="relative w-full flex items-center overflow-x-auto whitespace-nowrap md:overflow-x-hidden mask-gradient">
                      <div className="flex items-center space-x-10 px-6 md:animate-marquee md:space-x-16 md:px-0">
                          
                          {[...clientLogos, ...clientLogos].map((logo, index) => (
                              <div
                                  key={`${logo.src}-${index}`}
                                  className={`relative h-10 w-36 shrink-0 grayscale opacity-60 transition-opacity hover:opacity-100 ${index >= clientLogos.length ? "hidden md:block" : ""}`}
                              >
                                  <Image
                                      src={logo.src}
                                      alt={logo.alt}
                                      fill
                                      quality={72}
                                      className="object-contain"
                                      sizes="(min-width: 768px) 144px, 120px"
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
      
      
              
              
              
  );
}
