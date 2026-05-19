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
                  
                  
                  <div className="relative w-full flex items-center overflow-x-hidden whitespace-nowrap mask-gradient">
                      <div className="animate-marquee flex space-x-16 items-center">
                          
                          {[...clientLogos, ...clientLogos].map((logo, index) => (
                              <div
                                  key={`${logo.src}-${index}`}
                                  className="relative h-10 w-36 shrink-0 grayscale opacity-60 transition-opacity hover:opacity-100"
                              >
                                  <Image
                                      src={logo.src}
                                      alt={logo.alt}
                                      fill
                                      className="object-contain"
                                      sizes="144px"
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
      
      
              
              
              
  );
}
