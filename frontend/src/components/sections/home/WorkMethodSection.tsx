export function WorkMethodSection() {
  return (
              <section id="workflow" className="py-20 bg-white border-t border-brand-border">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                      
                      
                      <div className="md:col-span-5 sticky top-24">
                          <div className="border border-brand-border p-6 rounded-card bg-gray-50/50 space-y-4 shadow-soft">
                              <div className="aspect-[4/3] w-full bg-white border border-brand-border rounded flex items-center justify-center text-brand-muted text-xs">
                                  
                              </div>
                              <div>
                                  <h4 className="text-sm font-semibold text-brand-dark">Arsitektur Terarah & Terukur</h4>
                                  <p className="text-xs text-brand-muted mt-1">Mengurangi redundansi kode serta menghindari bottleneck database semenjak hari pertama proyek dimulai.</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="md:col-span-7 space-y-8">
                          <div className="space-y-3">
                              <span className="text-xs font-semibold text-accent-pink uppercase tracking-wider">How I Work</span>
                              <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">A structured process to ship reliable products</h2>
                          </div>
      
                          
                          <div className="relative pl-6 border-l border-brand-border space-y-10 mt-8">
                              
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">01</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Discovery & Requirement Mapping</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Bedah kebutuhan bisnis klien untuk menetapkan fungsionalitas sistem informasi, kebutuhan user role, cakupan skalabilitas, serta penentuan timeline rilis yang masuk akal.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">02</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Database & Architecture Planning</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Merancang skema Entity-Relationship Diagram (ERD), normalisasi data, pendefinisian relasi tabel, indeks kolom penting, serta menetapkan API design pattern yang bersih.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">03</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Clean Implementation</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Penulisan kode berbasis standar PSR-12, pemanfaatan Service Classes, Form Requests, Observers, serta pemisahan logika bisnis yang rigid dari controller agar project mudah di-maintain jangka panjang.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">04</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Testing & Optimasi</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Menjalankan PHPUnit testing, penanganan N+1 query menggunakan eager loading, serta optimasi caching data menggunakan Redis guna memangkas *response time* aplikasi.
                                  </p>
                              </div>
      
                              
                              <div className="relative">
                                  <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 text-xs font-medium bg-white text-brand-dark border border-brand-border rounded-full">05</span>
                                  <h3 className="text-base font-semibold text-brand-dark">Deployment & Maintenance</h3>
                                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                                      Mengotomatisasi siklus deploy melalui CI/CD pipeline, konfigurasi server Nginx via Laravel Forge, serta integrasi logging error real-time untuk memastikan *high-availability*.
                                  </p>
                              </div>
      
                          </div>
                      </div>
      
                  </div>
              </section>
      
      
              
              
              
  );
}
