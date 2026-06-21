import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

// Import logo and activity images
import logoImg from '../assets/746b9dab6f052f8202647c88f58f96713d5da4b1.png';
import schoolImg from '../assets/2d6840a5bde1cc173afb604c6f87f5600b415660.png';
import boxerImg from '../assets/8d8ac0768d11367a63c2e4e20061d09c16acec58.png';
import memoryImg from '../assets/Muziek-Memory.png';
import runImg from '../assets/Ren-je-hit.jpg'
import owlImg from '../assets/Uil.jpg'

import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [activeActivity, setActiveActivity] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['activities', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activities = [
    {
      id: 1,
      title: 'Mini Escape Room – De School',
      subtitle: 'Compacte escape room',
      description: 'Stap in een mini-schoolgebouw en ga als team de uitdaging aan. Rondom de school lossen jullie puzzels en raadsels op die bijdragen aan één doel: zorgen dat de school op schoolreis kan.',
      features: ['2-5 personen per team (tot 5 teams)', 'Ca. 60 minuten', 'Vanaf 14 jaar', 'Speelbaar in Ter Aar of op locatie', '€45 per school'],
      image: schoolImg,
      imageType: 'imported' as const,
      visitors: '2,055',
    },
    {
      id: 2,
      title: 'BOXER',
      subtitle: 'Kennismaken met Escape Rooms',
      description: 'Kinderen werken eerst samen om hun eigen box te vinden en gaan daarna individueel aan de slag met puzzels en opdrachten. Spannend, leerzaam en speels tegelijk.',
      features: ['Ca. 8-12 jaar', 'Max. 12 deelnemers', 'Ca. 45 minuten', 'Speelbaar in Ter Aar of op locatie', '€14 p.p. (min. 4 personen)'],
      image: boxerImg,
      imageType: 'imported' as const,
      visitors: '4,658',
    },
    {
      id: 3,
      title: 'Team Event – De UIL',
      subtitle: 'Teamuitje',
      description: 'De UIL is een veelzijdig teamevent waarin verschillende spellen en opdrachten samenkomen. Teams nemen het tegen elkaar op in een mix van puzzels, actie en samenwerking.',
      features: ['Ca. 10-45 personen', 'Ca. 2 uur (flexibel)', 'Op maat samen te stellen', 'Speelbaar in Ter Aar of op locatie', '€30 p.p.'],
      image: owlImg,
      imageType: 'url' as const,
      visitors: '3,890',
    },
    {
      id: 4,
      title: 'Ren je Hit',
      subtitle: 'Muziekspel',
      description: 'Teams testen hun muziekkennis in verschillende categorieën en proberen zo snel mogelijk het juiste jaartal te bepalen. Iedereen speelt tegelijk en dat zorgt voor veel energie en interactie.',
      features: ['2-6 teams van 2-5 personen', 'Ca. 60 minuten', 'Vanaf 16 jaar', 'Speelbaar in Ter Aar of op locatie', '€15 p.p. (min. 6 personen)'],
      image: runImg,
      imageType: 'url' as const,
      visitors: '3,241',
    },
    {
      id: 5,
      title: 'Muziekmemory',
      subtitle: 'Interactief muziekspel',
      description: 'Deelnemers combineren grote memoryonderdelen rondom muziek. Het spel vraagt om samenwerking, geheugen en een goed gevoel voor muziek.',
      features: ['6-36 personen', 'Ca. 60 minuten', 'Vanaf 16 jaar', 'Speelbaar in Ter Aar of op locatie', '€10 p.p.'],
      image: memoryImg,
      imageType: 'url' as const,
      visitors: '2,567',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src={logoImg} alt="Escape Rooms Ter Aar logo" className="h-12 md:h-16" />
          <div className="flex gap-8 items-center">
            <button 
              onClick={() => scrollToSection('activities')}
              className={`text-sm md:text-base font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-2 py-1 ${
                activeSection === 'activities' 
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  : 'text-black hover:text-blue-500'
              }`}
              aria-label="Ga naar Uitdagingen sectie"
            >
              Uitdagingen
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm md:text-base font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-2 py-1 ${
                activeSection === 'contact' 
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  : 'text-black hover:text-blue-500'
              }`}
              aria-label="Ga naar Contact sectie"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
          <div className="bg-white py-12 md:py-16 px-6 mb-8 border-4 border-blue-500">
            <img src={logoImg} alt="Escape Rooms Ter Aar" className="max-w-2xl w-full mx-auto mb-8" />
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto tracking-wide">
            Beleef het samen
          </p>
        </div>

        <button 
          onClick={() => scrollToSection('activities')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll naar uitdagingen"
        >
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </button>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">Uitdagingen</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="text-lg text-zinc-400 mt-8 max-w-4xl mx-auto leading-relaxed">
              Op zoek naar een origineel en actief uitje voor familie, vrienden, kinderen of collega's?
            </p>
            <p className="text-lg text-zinc-400 mt-4 max-w-4xl mx-auto leading-relaxed">
              Bij Escape Rooms Ter Aar draait alles om samenwerken, plezier en een gezonde dosis competitie. Van spannende puzzels tot hilarische teamgames: er is voor iedere groep een passende activiteit.
            </p>
            <p className="text-lg text-zinc-400 mt-4 max-w-4xl mx-auto leading-relaxed">
              Onze activiteiten kunnen zowel in Ter Aar als op locatie worden gespeeld. Kies je voor een activiteit op locatie, dan houden we rekening met jullie wensen en omgeving. Afhankelijk van de locatie kan hiervoor een meerprijs worden gerekend.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-1 bg-blue-500/20">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`bg-black hover:bg-zinc-950 transition-all duration-300 group flex flex-col ${
                  index < 3 ? 'w-full md:w-[calc(50%-0.125rem)] lg:w-[calc(33.333%-0.167rem)]' : 'w-full md:w-[calc(50%-0.125rem)]'
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center border-b-2 border-blue-500/20">
                  {activity.imageType === 'imported' ? (
                    <img 
                      src={activity.image as string} 
                      alt={`${activity.title} uitdaging illustratie`}
                      className="max-h-full max-w-full object-contain p-12"
                    />
                  ) : (
                    <ImageWithFallback
                      src={activity.image as string}
                      alt={`${activity.title} uitdaging illustratie`}
                      className="max-h-full max-w-full object-cover"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">{activity.title}</h3>
                  <p className="text-blue-500 mb-6 font-semibold tracking-wide uppercase text-sm">{activity.subtitle}</p>
                  <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">{activity.description}</p>
                  
                  <div className="space-y-3 mb-8 border-l-2 border-blue-500/30 pl-6">
                    {activity.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-zinc-400">
                        <div className="w-1 h-1 bg-blue-500"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 font-semibold transition-all uppercase tracking-wider mt-auto focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={`Neem contact op voor ${activity.title}`}
                  >
                    Neem Contact Op
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">Welke uitdaging ga jij aan?</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-zinc-500 tracking-wide">Duizenden deelnemers gingen je al voor</p>
          </div>

          <div className="flex flex-wrap justify-center gap-1 bg-blue-500/20">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`bg-zinc-950 p-10 border-l-4 border-blue-500 ${
                index < 3 ? 'w-full md:w-[calc(50%-0.125rem)] lg:w-[calc(33.333%-0.167rem)]' : 'w-full md:w-[calc(50%-0.125rem)]'
              }`}>
                <div className="text-6xl font-bold text-blue-500 mb-4 tracking-tight">{activity.visitors}</div>
                <p className="text-zinc-400 leading-relaxed">
                  deelnemers beleefden <span className="font-semibold text-white">{activity.title}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 pt-16 border-t border-zinc-800">
            <p className="text-3xl text-zinc-500">
              Meer dan <span className="font-bold text-blue-500">16.410+</span> tevreden deelnemers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Boek je Uitdaging</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="text-lg text-zinc-400 mt-8 max-w-2xl mx-auto">
              Bel of mail voor beschikbaarheid en tarieven!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="tel:+31612345678" 
              className="flex flex-col items-center gap-4 p-8 bg-zinc-950 hover:bg-zinc-900 transition-all border-t-4 border-blue-500 group focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Bel of WhatsApp naar +31 6 1234 5678"
            >
              <div className="bg-blue-600 p-5 group-hover:bg-blue-500 transition-colors" aria-hidden="true">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Bel of WhatsApp</div>
                <div className="font-semibold text-lg tracking-tight">+31 6 1234 5678</div>
              </div>
            </a>

            <a 
              href="mailto:info@escaperoomteraar.nl" 
              className="flex flex-col items-center gap-4 p-8 bg-zinc-950 hover:bg-zinc-900 transition-all border-t-4 border-blue-500 group focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Stuur een email naar info@escaperoomteraar.nl"
            >
              <div className="bg-blue-600 p-5 group-hover:bg-blue-500 transition-colors" aria-hidden="true">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Email</div>
                <div className="font-semibold text-lg tracking-tight">info@escaperoomteraar.nl</div>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 p-8 bg-zinc-950 border-t-4 border-blue-500">
              <div className="bg-blue-600 p-5" aria-hidden="true">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Locatie</div>
                <div className="font-semibold text-lg tracking-tight">Ter Aar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 tracking-tight">
            ESCAPE ROOM <span className="text-blue-500">TER AAR</span>
          </h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8" aria-hidden="true"></div>
          <div className="flex justify-center gap-8 text-sm text-zinc-500 tracking-wide">
            <a 
              href="tel:+31651235253"
              className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Bel +31 6 51235253"
            >
              +31 6 51235253
            </a>
            <span aria-hidden="true">|</span>
            <a 
              href="mailto:info@escaperoomteraar.nl" 
              className="hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Email naar info@escaperoomteraar.nl"
            >
              info@escaperoomteraar.nl
            </a>
          </div>
          <p className="text-zinc-700 mt-8 text-sm tracking-wider">© 2026 Escape Room Ter Aar</p>
        </div>
      </footer>
    </div>
  );
}
