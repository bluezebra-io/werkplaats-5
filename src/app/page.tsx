import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="font-medium text-gray-900 text-sm">Werkplaats 5</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#wat-is" className="text-gray-600 hover:text-gray-900 transition">Over ons</a>
            <a href="#werkafspraken" className="text-gray-600 hover:text-gray-900 transition">Werkplekken</a>
            <a href="#hoe-werkt-het" className="text-gray-600 hover:text-gray-900 transition">Hoe werkt het</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
          >
            Huren
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-blue-600">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Moderne werkplek"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Werkplaats 5
              </h1>
              <p className="text-lg text-white/90 mb-2">
                De flexibele werkplek voor creatieve ondernemers
              </p>
              <p className="text-white/80 mb-8 max-w-md">
                Een inspirerende omgeving waar je kunt focussen, samenwerken en groeien.
                Huur per dag, week, maand of neem een abonnement.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition"
                >
                  Direct reserveren
                </a>
                <a
                  href="#wat-is"
                  className="border border-white text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-white/10 transition"
                >
                  Meer informatie
                </a>
              </div>
            </div>

            <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <p className="text-sm mb-4">
                &quot;Sinds ik bij Werkplaats 5 werk, is mijn productiviteit enorm gestegen.
                De sfeer is inspirerend en de faciliteiten zijn top.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Maria de Vries</p>
                  <p className="text-xs text-white/70">Freelance Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Werkplaats 5 */}
      <section id="wat-is" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Wat is Werkplaats 5
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-sm">
            Werkplaats 5 is een gedeelde werkruimte voor iedereen die productief wil werken
            in een professionele omgeving. Of je nu freelancer, starter of ondernemer bent.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Bedoeld voor</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Freelancers en ZZP&apos;ers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Startups en kleine teams
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Remote workers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Creatieve professionals
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Niet bedoeld voor</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Grote bedrijven met eigen kantoor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Productie en fabricage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Opslag van goederen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  Activiteiten met geluidsoverlast
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat krijg je */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Wat krijg je
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Eigen werkplek", desc: "Bureau en ergonomische stoel" },
              { title: "Snel internet", desc: "Glasvezel WiFi verbinding" },
              { title: "Koffie & thee", desc: "Onbeperkt beschikbaar" },
              { title: "Vergaderruimte", desc: "Op aanvraag beschikbaar" },
              { title: "Printer", desc: "Print en scan faciliteiten" },
              { title: "Locker", desc: "Persoonlijke opbergruimte" },
              { title: "24/7 toegang", desc: "Altijd welkom" },
              { title: "Community", desc: "Netwerk met anderen" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 text-white p-4 rounded-lg">
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt huren */}
      <section id="hoe-werkt-het" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Hoe werkt huren
              </h2>
              <p className="text-gray-500 text-sm">
                In drie simpele stappen aan de slag bij Werkplaats 5.
                Kies je formule, reserveer online en start direct.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-blue-600">01</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexibele opties</h3>
                  <p className="text-gray-500 text-sm">Kies uit dag, week, maand of een doorlopend abonnement</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-blue-600">02</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vul je gegevens in</h3>
                  <p className="text-gray-500 text-sm">Reserveer eenvoudig online via het contactformulier</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-blue-600">03</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Direct starten</h3>
                  <p className="text-gray-500 text-sm">Na bevestiging kun je meteen aan de slag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkafspraken / Prijzen */}
      <section id="werkafspraken" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Werkafspraken
          </h2>
          <p className="text-gray-400 text-center mb-12 text-sm">Kies de optie die bij jou past</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                title: "Dag",
                price: "25",
                period: "per dag",
                features: ["Werkdag toegang", "WiFi & koffie", "Faciliteiten"]
              },
              {
                title: "Week",
                price: "100",
                period: "per week",
                features: ["5 dagen toegang", "WiFi & koffie", "Faciliteiten", "Locker"]
              },
              {
                title: "Maand",
                price: "350",
                period: "per maand",
                features: ["Volledige maand", "24/7 toegang", "Alle faciliteiten", "Eigen locker"]
              },
              {
                title: "Abonnement",
                price: "299",
                period: "per maand",
                features: ["Doorlopend", "24/7 toegang", "Vast bureau", "Postadres"],
                highlight: true
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg ${plan.highlight ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                <h3 className="font-medium mb-1">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold">€{plan.price}</span>
                  <span className="text-gray-400 text-xs ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-300 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center py-2 rounded text-xs font-medium transition ${
                    plan.highlight
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Reserveren
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkplaats 5 Info Block */}
      <section className="py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Werkplaats 5</h3>
              <p className="text-gray-400 text-sm">
                Je flexibele werkplek in het hart van de stad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Openingstijden</h3>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Ma - Vr: 08:00 - 22:00</p>
                <p>Za - Zo: 10:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <div className="text-gray-400 text-sm space-y-1">
                <p>info@werkplaats5.nl</p>
                <p>020-1234567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interesse? */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Interesse?
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Vul het formulier in en we nemen contact met je op.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Naam *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Bedrijf</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Bedrijfsnaam"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="jouw@email.nl"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Telefoon *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="06-12345678"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Type verhuur *</label>
              <select
                required
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Selecteer een optie</option>
                <option value="day">Dag (€25)</option>
                <option value="week">Week (€100)</option>
                <option value="month">Maand (€350)</option>
                <option value="subscription">Abonnement (€299/maand)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Bericht</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Vertel ons meer..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded text-sm font-medium hover:bg-blue-700 transition"
            >
              Verstuur aanvraag
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-gray-900 font-bold text-xs">W</span>
            </div>
            <span className="text-sm">Werkplaats 5</span>
          </div>
          <p className="text-gray-500 text-xs">© 2024 Werkplaats 5. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
