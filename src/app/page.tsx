import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F3EF]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F4F3EF] rounded flex items-center justify-center">
              <span className="text-[#111111] font-bold text-lg">W5</span>
            </div>
            <span className="text-[#F4F3EF] text-xl font-medium">Werkplaats 5</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#BDBDB8] hover:text-[#3A7BFF] transition-colors text-sm font-medium">Over</a>
            <a href="#offerings" className="text-[#BDBDB8] hover:text-[#3A7BFF] transition-colors text-sm font-medium">Wat je krijgt</a>
            <a href="#process" className="text-[#BDBDB8] hover:text-[#3A7BFF] transition-colors text-sm font-medium">Huren</a>
            <a href="#contact" className="text-[#BDBDB8] hover:text-[#3A7BFF] transition-colors text-sm font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[70px]">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Werkplaats 5 Interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/60 to-[#111111]/70" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-[#BDBDB8] text-sm font-medium tracking-wide uppercase">AI-werkplekken</span>
                <div className="w-16 h-0.5 bg-[#3A7BFF] mt-2"></div>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#F4F3EF] mb-4 leading-tight">Werkplaats 5</h1>
              <p className="text-2xl text-[#F4F3EF]/90 font-light mb-3">De Nieuwe Energie, Leiden</p>
              <p className="text-lg text-[#F4F3EF]/80 mb-12 leading-relaxed max-w-xl">
                Hier werken professionals die AI niet als buzzword zien, maar als gereedschap. Claude, ChatGPT, Copilot — wij bouwen ermee. Elke dag. Kom erbij.
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#111111] text-[#F4F3EF] px-10 py-4 rounded-lg text-base font-medium border-2 border-transparent hover:border-[#3A7BFF] transition-all"
              >
                Neem contact op
              </a>
            </div>

            <div className="lg:col-span-3 flex justify-end">
              <div className="bg-[#111111]/80 backdrop-blur-sm p-8 rounded-xl max-w-md border border-[#2E2E2E]">
                <p className="text-[#F4F3EF] text-base leading-relaxed">
                  &quot;De toekomst van werk is hier al begonnen. Terwijl anderen nog praten over AI, shippen wij producten.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Werkplaats 5 */}
      <section id="about" className="bg-[#F4F3EF] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-6">
            <span className="text-[#BDBDB8] text-sm font-medium tracking-wide uppercase">Over</span>
            <div className="w-12 h-0.5 bg-[#3A7BFF] mt-2"></div>
          </div>
          <h2 className="text-5xl font-bold text-[#111111] mb-16">Wat is Werkplaats 5</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#BDBDB8]/30"></div>
            <div className="space-y-6">
              <p className="text-[#2E2E2E] text-lg leading-relaxed">
                <strong>Geen hippe coworking met pingpongtafels.</strong> Werkplaats 5 is waar AI-natives samenkomen om te bouwen, te experimenteren en te leveren.
              </p>
              <p className="text-[#2E2E2E] text-lg leading-relaxed">
                Developers die met Cursor en Claude werken. Consultants die AI-strategieën uitrollen. Ondernemers die hun hele business op AI draaien. Dit is hun plek.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-[#2E2E2E] text-lg leading-relaxed">
                Wij geloven dat de beste AI-werk ontstaat in een omgeving van focus en gelijkgestemden. Geen afleiding. Geen uitleg nodig waarom je met een AI praat.
              </p>
              <p className="text-[#2E2E2E] text-lg leading-relaxed">
                <strong>Hier is AI de standaard, niet de uitzondering.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bedoeld voor / Niet bedoeld voor */}
      <section id="audience" className="bg-[#111111] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#BDBDB8]/20"></div>
            <div>
              <h3 className="text-3xl font-medium text-[#F4F3EF] mb-8">Jij hoort hier als je...</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#3A7BFF] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/90 text-base leading-relaxed">AI dagelijks gebruikt om sneller en slimmer te werken</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#3A7BFF] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/90 text-base leading-relaxed">Bouwt met tools als Claude, GPT-5, Midjourney of Cursor</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#3A7BFF] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/90 text-base leading-relaxed">Klaar bent met thuiswerken en energie zoekt van anderen</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#3A7BFF] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/90 text-base leading-relaxed">Wilt leren van mensen die AI al hebben omarmd</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-[#F4F3EF] mb-8">Waarschijnlijk niet jouw plek als je...</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#BDBDB8] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/70 text-base leading-relaxed">AI nog steeds als hype ziet of &quot;afwacht&quot;</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#BDBDB8] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/70 text-base leading-relaxed">Vooral belt en videovergadert de hele dag</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-[#BDBDB8] mt-2.5 flex-shrink-0"></div>
                  <span className="text-[#F4F3EF]/70 text-base leading-relaxed">Een standaard flexplek of kantoortuin zoekt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat krijg je */}
      <section id="offerings" className="bg-[#F4F3EF] py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#111111] leading-tight">Wat krijg je</h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "High-speed werkplek", desc: "Ultrasnelle Mac-ready setup met dual monitors" },
                  { title: "Gigabit internet", desc: "Download AI-modellen, push naar cloud — geen wachten" },
                  { title: "Deep work omgeving", desc: "Ontworpen voor flow state, niet voor small talk" },
                  { title: "AI Knowledge Sessions", desc: "Wekelijkse deep-dives in de nieuwste AI-tools en workflows" },
                  { title: "Receptie & post", desc: "Professionele ontvangst voor je klanten en pakketservice" },
                  { title: "Ship-mentaliteit", desc: "Hier wordt gebouwd. Elke dag. Geen excuses." },
                ].map((item, index) => (
                  <div key={index} className="group bg-[#F4F3EF] border border-[#BDBDB8]/30 rounded-lg p-6 hover:border-[#3A7BFF] transition-all cursor-pointer">
                    <div className="w-8 h-0.5 bg-[#BDBDB8] group-hover:bg-[#3A7BFF] transition-colors mb-4"></div>
                    <h3 className="text-xl font-medium text-[#111111] mb-3">{item.title}</h3>
                    <p className="text-[#2E2E2E] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt huren */}
      <section id="process" className="bg-[#111111] py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#F4F3EF] mb-16 text-center">Start binnen 24 uur</h2>

          <div className="space-y-12">
            <div>
              <div className="flex items-start gap-8">
                <div className="text-[#3A7BFF] text-7xl lg:text-8xl font-bold leading-none flex-shrink-0">01</div>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium text-[#F4F3EF] mb-3">Kies je tempo</h3>
                  <p className="text-[#F4F3EF]/80 text-base leading-relaxed">Eén dag om te testen. Een week om te bouwen. Een maand om te groeien. Jij bepaalt.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#BDBDB8]/20 mt-12"></div>
            </div>

            <div>
              <div className="flex items-start gap-8">
                <div className="text-[#3A7BFF] text-7xl lg:text-8xl font-bold leading-none flex-shrink-0">02</div>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium text-[#F4F3EF] mb-3">Quick call</h3>
                  <p className="text-[#F4F3EF]/80 text-base leading-relaxed">15 minuten om te checken of er een match is. Geen sales, geen gedoe.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#BDBDB8]/20 mt-12"></div>
            </div>

            <div>
              <div className="flex items-start gap-8">
                <div className="text-[#3A7BFF] text-7xl lg:text-8xl font-bold leading-none flex-shrink-0">03</div>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium text-[#F4F3EF] mb-3">Morgen aan de slag</h3>
                  <p className="text-[#F4F3EF]/80 text-base leading-relaxed">Badge, WiFi-code, werkplek. Done. Focus op wat ertoe doet.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block border-2 border-[#F4F3EF] text-[#F4F3EF] px-10 py-4 rounded-lg text-base font-medium hover:bg-[#3A7BFF] hover:border-[#3A7BFF] transition-all"
            >
              Ik wil starten →
            </a>
          </div>
        </div>
      </section>

      {/* Werkafspraken */}
      <section className="bg-[#F4F3EF] py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#111111] mb-4">De Regels</h2>
            <p className="text-[#2E2E2E] text-lg">Simpel. Duidelijk. Voor iedereen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Deep work eerst", desc: "Hier komt niemand om te kletsen. Focus is heilig." },
              { icon: "🔇", title: "Calls = koptelefoon", desc: "Geen gebel door de ruimte. Respecteer de flow." },
              { icon: "⚡", title: "Async > sync", desc: "Slack een vraag, spring niet random binnen." },
              { icon: "🤝", title: "Delen is winnen", desc: "Nieuwe AI-trick gevonden? Share it." },
            ].map((item, index) => (
              <div key={index} className="bg-[#111111] rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <span className="text-[#3A7BFF] text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-medium text-[#F4F3EF] mb-3">{item.title}</h3>
                <p className="text-[#F4F3EF]/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#2E2E2E] text-base">Wie hier werkt, snapt dit. Geen discussie nodig.</p>
          </div>
        </div>
      </section>

      {/* Gratis Proberen */}
      <section id="proberen" className="bg-[#3A7BFF] py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-white/70 text-sm font-medium tracking-wide uppercase">Kennismaken</span>
                <div className="w-12 h-0.5 bg-white mt-2"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Test drive. Gratis.
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Sceptisch? Begrijpelijk. Kom gewoon een dag langs, werk mee, voel de energie. Geen commitment, geen gedoe.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-base">Full access. Werkplek, WiFi, koffie, AI-tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-base">Plug in bij de community. Leer van anderen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-base">Bevalt het niet? No hard feelings. Shake hands, done.</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-white text-[#3A7BFF] px-8 py-4 rounded-lg text-base font-medium hover:bg-[#F4F3EF] transition-all"
              >
                Claim je gratis dag
              </a>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-sm">
                <div className="text-6xl font-bold text-white mb-2">€0</div>
                <p className="text-white/70 text-lg mb-6">Zero risk. Zero cost.</p>
                <div className="w-full h-px bg-white/20 mb-6"></div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Één dag. Volledig gratis. Ervaar waarom AI-professionals hier samenkomen. Daarna beslis jij.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="bg-[#111111] py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-[#BDBDB8] text-sm font-medium tracking-wide uppercase">Netwerk</span>
                <div className="w-12 h-0.5 bg-[#3A7BFF] mt-2"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F4F3EF] mb-6 leading-tight">
                Onderdeel van iets groters
              </h2>
              <p className="text-[#F4F3EF]/80 text-lg leading-relaxed mb-8">
                De Nieuwe Energie is meer dan een gebouw. Het is een community van <strong className="text-[#F4F3EF]">65+ bedrijven</strong> en <strong className="text-[#F4F3EF]">175+ professionals</strong> die hier dagelijks werken, innoveren en groeien.
              </p>
              <p className="text-[#F4F3EF]/80 text-lg leading-relaxed">
                Van startup founders tot gevestigde consultants. Van creative agencies tot tech companies. Je buren zijn net zo ambitieus als jij.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#BDBDB8]/10">
                <div className="text-3xl mb-3">🎉</div>
                <h4 className="text-[#F4F3EF] font-medium mb-2">Community Events</h4>
                <p className="text-[#F4F3EF]/70 text-sm">Zomer-BBQs, kerstlunches, wine tastings, seminars</p>
              </div>
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#BDBDB8]/10">
                <div className="text-3xl mb-3">🍽️</div>
                <h4 className="text-[#F4F3EF] font-medium mb-2">Restaurant</h4>
                <p className="text-[#F4F3EF]/70 text-sm">Lunch en koffie in het gebouw. Geen reden om te vertrekken.</p>
              </div>
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#BDBDB8]/10">
                <div className="text-3xl mb-3">🔑</div>
                <h4 className="text-[#F4F3EF] font-medium mb-2">24/7 Toegang</h4>
                <p className="text-[#F4F3EF]/70 text-sm">Nachtbraker? Early bird? Jij bepaalt wanneer je werkt.</p>
              </div>
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#BDBDB8]/10">
                <div className="text-3xl mb-3">☀️</div>
                <h4 className="text-[#F4F3EF] font-medium mb-2">300 Zonnepanelen</h4>
                <p className="text-[#F4F3EF]/70 text-sm">Grootste installatie van Leiden. Groene energie voor je AI-workloads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locatie */}
      <section id="location" className="bg-[#F4F3EF]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[500px] lg:h-auto bg-[#BDBDB8]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.5!2d4.4889!3d52.1575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c6f5a5b5b5b5%3A0x0!2s3e%20Binnenvestgracht%2023%2C%20Leiden!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Werkplaats 5 Locatie"
              style={{ border: 0, filter: 'grayscale(100%)', minHeight: '500px' }}
            />
          </div>
          <div className="bg-[#111111] flex items-center justify-center p-12 lg:p-16">
            <div className="max-w-md">
              <div className="mb-6">
                <span className="text-[#BDBDB8] text-sm font-medium tracking-wide uppercase">Locatie</span>
                <div className="w-12 h-0.5 bg-[#3A7BFF] mt-2"></div>
              </div>
              <h2 className="text-3xl font-bold text-[#F4F3EF] mb-8">Werkplaats 5</h2>
              <div className="space-y-2 mb-6">
                <p className="text-[#F4F3EF] text-xl leading-relaxed">Unit 5, De Nieuwe Energie</p>
                <p className="text-[#F4F3EF] text-xl leading-relaxed">3e Binnenvestgracht 23</p>
                <p className="text-[#F4F3EF] text-xl leading-relaxed">2312 NR Leiden</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[#3A7BFF]">🚶</span>
                  <span className="text-[#F4F3EF]/90 text-base">6 minuten lopen vanaf Leiden Centraal</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#3A7BFF]">🌳</span>
                  <span className="text-[#F4F3EF]/90 text-base">Direct aan het Singelpark</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#3A7BFF]">🅿️</span>
                  <span className="text-[#F4F3EF]/90 text-base">Parkeergarages Lammermarkt & De Kooi op loopafstand</span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/3e+Binnenvestgracht+23+Leiden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7BFF] text-base font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Interesse */}
      <section id="contact" className="bg-[#111111] py-32">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#F4F3EF] mb-6">Ready to build?</h2>
            <p className="text-[#F4F3EF]/80 text-lg leading-relaxed">
              Stop met scrollen. Start met doen.<br />
              Stuur een bericht en binnen 24 uur heb je antwoord.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-16 border-t border-[#2E2E2E]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#F4F3EF] rounded flex items-center justify-center">
                  <span className="text-[#111111] font-bold text-sm">W5</span>
                </div>
                <span className="text-[#F4F3EF] text-lg font-medium">Werkplaats 5</span>
              </div>
              <p className="text-[#BDBDB8] text-sm leading-relaxed">
                AI-werkplekken in De Nieuwe Energie, Leiden.<br />
                Onderdeel van <a href="https://www.bluezebra.nl" target="_blank" rel="noopener noreferrer" className="text-[#3A7BFF] hover:underline">BlueZebra</a>
              </p>
            </div>
            <div>
              <h4 className="text-[#F4F3EF] text-base font-medium mb-4">Navigatie</h4>
              <nav className="space-y-3">
                <a href="#about" className="block text-[#BDBDB8] text-sm hover:text-[#3A7BFF] transition-colors">Over Werkplaats 5</a>
                <a href="#offerings" className="block text-[#BDBDB8] text-sm hover:text-[#3A7BFF] transition-colors">Wat je krijgt</a>
                <a href="#process" className="block text-[#BDBDB8] text-sm hover:text-[#3A7BFF] transition-colors">Hoe werkt huren</a>
                <a href="#contact" className="block text-[#BDBDB8] text-sm hover:text-[#3A7BFF] transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <h4 className="text-[#F4F3EF] text-base font-medium mb-4">Locatie</h4>
              <p className="text-[#BDBDB8] text-sm leading-relaxed">
                Unit 5, De Nieuwe Energie<br />
                3e Binnenvestgracht 23<br />
                2312 NR Leiden
              </p>
            </div>
          </div>
          <div className="border-t border-[#BDBDB8]/20 pt-8">
            <p className="text-[#BDBDB8] text-sm">© 2025 Werkplaats 5. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
