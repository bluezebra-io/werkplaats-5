import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W5</span>
            </div>
            <span className="font-semibold text-gray-900">Werkplaats 5</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#wat-is" className="text-gray-600 hover:text-gray-900 transition">Over ons</a>
            <a href="#werkafspraken" className="text-gray-600 hover:text-gray-900 transition">Werkplekken</a>
            <a href="#hoe-werkt-het" className="text-gray-600 hover:text-gray-900 transition">Hoe werkt het</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <Link
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Huren
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Moderne werkplek"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight">
            Werkplaats 5
          </h1>
          <p className="text-xl text-white/90 mt-4 max-w-xl">
            De flexibele werkplek voor professionals. Huur per dag, week, maand of neem een abonnement.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Direct reserveren
            </Link>
            <a
              href="#wat-is"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition font-semibold"
            >
              Meer informatie
            </a>
          </div>
        </div>
      </section>

      {/* Wat is Werkplaats 5 */}
      <section id="wat-is" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Wat is Werkplaats 5
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Werkplaats 5 is een gedeelde werkruimte voor iedereen die productief wil werken
            in een professionele omgeving. Of je nu freelancer, starter of ondernemer bent.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Bedoeld voor</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Freelancers en ZZP&apos;ers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Startups en kleine teams
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Remote workers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Creatieve professionals
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Wat bedoeld voor</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Focuswerk en concentratie
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Vergaderingen en calls
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Netwerken met andere professionals
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  Een professioneel werkadres
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat krijg je */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Wat krijg je
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ergonomische werkplek", desc: "Comfortabel bureau en stoel" },
              { title: "Snel WiFi", desc: "Betrouwbare glasvezel verbinding" },
              { title: "Koffie & thee", desc: "Onbeperkt koffie en thee" },
              { title: "Vergaderruimte", desc: "Toegang tot vergaderzalen" },
              { title: "Printer & scanner", desc: "Zakelijke apparatuur beschikbaar" },
              { title: "Lockers", desc: "Persoonlijke opbergruimte" },
              { title: "24/7 toegang", desc: "Werk wanneer jij wilt" },
              { title: "Community", desc: "Netwerk met andere professionals" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt huren */}
      <section id="hoe-werkt-het" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Hoe werkt huren
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: "01", title: "Flexibele opties", desc: "Kies uit dag, week, maand of een maandabonnement" },
              { step: "02", title: "Vul je gegevens in", desc: "Reserveer online via het contactformulier" },
              { step: "03", title: "Direct starten", desc: "Na bevestiging kun je direct aan de slag" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-blue-600">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkafspraken / Prijzen */}
      <section id="werkafspraken" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Werkafspraken
          </h2>
          <p className="text-gray-400 text-center mb-12">Kies de optie die bij jou past</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dag", price: "25", period: "per dag", features: ["1 werkdag toegang", "WiFi & koffie", "Gebruik faciliteiten"] },
              { title: "Week", price: "100", period: "per week", features: ["5 werkdagen toegang", "WiFi & koffie", "Gebruik faciliteiten", "Locker beschikbaar"] },
              { title: "Maand", price: "350", period: "per maand", features: ["Volledige maand", "24/7 toegang", "Alle faciliteiten", "Persoonlijke locker"] },
              { title: "Abonnement", price: "299", period: "per maand", features: ["Doorlopend contract", "24/7 toegang", "Alle faciliteiten", "Vast bureau", "Postadres"] },
            ].map((plan, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
                >
                  Reserveren
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkplaats 5 Info */}
      <section className="py-20 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Werkplaats 5</h2>
              <p className="text-gray-400 mb-6">
                Je flexibele werkplek in het hart van de stad. Modern, professioneel en betaalbaar.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>Ma - Vr: 08:00 - 22:00</p>
                <p>Za - Zo: 10:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Adres: Voorbeeldstraat 5, 1234 AB Amsterdam</p>
                <p>Email: info@werkplaats5.nl</p>
                <p>Tel: 020-1234567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Interesse */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Interesse?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Vul het formulier in en we nemen zo snel mogelijk contact met je op.
          </p>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrijfsnaam</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Bedrijfsnaam (optioneel)"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="jouw@email.nl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="06-12345678"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type verhuur *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Selecteer een optie</option>
                <option value="day">Dag (€25)</option>
                <option value="week">Week (€100)</option>
                <option value="month">Maand (€350)</option>
                <option value="subscription">Maandabonnement (€299/maand)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Vertel ons meer over je wensen..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Verstuur aanvraag
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W5</span>
            </div>
            <span className="font-semibold">Werkplaats 5</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Werkplaats 5. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
