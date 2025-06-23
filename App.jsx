import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Euro, Camera, Mountain, Waves, Building, Utensils } from 'lucide-react';
import './App.css';

// Import images
import laSeuCathedral from './assets/images/palma_de_mallorca/la_seu_cathedral.jpg';
import bellverCastle from './assets/images/palma_de_mallorca/bellver_castle.jpg';
import esBaluard from './assets/images/palma_de_mallorca/es_baluard.jpg';
import sollerTram from './assets/images/serra_de_tramuntana/soller_tram.jpg';
import fornalutx from './assets/images/serra_de_tramuntana/fornalutx.jpg';
import deia from './assets/images/serra_de_tramuntana/deia.jpg';
import valldemossa from './assets/images/serra_de_tramuntana/valldemossa.jpg';
import capDeFormentor from './assets/images/cap_de_formentor/cap_de_formentor.jpg';
import platjaDeFormentor from './assets/images/cap_de_formentor/platja_de_formentor.jpg';
import calaMesquida from './assets/images/east_coast_beaches/cala_mesquida.jpg';
import cuevasDelDrach from './assets/images/east_coast_beaches/cuevas_del_drach.jpg';
import esTrenc from './assets/images/south_coast_beaches/es_trenc.jpg';
import calaPi from './assets/images/south_coast_beaches/cala_pi.jpg';

const itinerary = [
  {
    day: 1,
    title: "Palma de Mallorca",
    icon: <Building className="w-6 h-6" />,
    color: "bg-blue-500",
    activities: [
      {
        name: "La Seu Cathedral",
        description: "Explore the Gothic cathedral with its famous rose window",
        cost: "€7-€10",
        image: laSeuCathedral
      },
      {
        name: "Historic Old Town",
        description: "Stroll through Basilica de Sant Francesc and Passeig del Born",
        cost: "Free",
        image: null
      },
      {
        name: "Bellver Castle",
        description: "Visit the hilltop castle for panoramic views",
        cost: "€4",
        image: bellverCastle
      },
      {
        name: "Es Baluard (Optional)",
        description: "Modern art museum in historic bastion",
        cost: "€6",
        image: esBaluard
      }
    ]
  },
  {
    day: "2-3",
    title: "Serra de Tramuntana & Northwestern Coast",
    icon: <Mountain className="w-6 h-6" />,
    color: "bg-green-500",
    activities: [
      {
        name: "Scenic Ma-10 Route",
        description: "Drive through the stunning mountain range",
        cost: "Fuel costs",
        image: null
      },
      {
        name: "Sóller & Port de Sóller",
        description: "Take the vintage tram between these charming towns",
        cost: "€7-€11",
        image: sollerTram
      },
      {
        name: "Fornalutx",
        description: "Visit one of Spain's prettiest villages",
        cost: "Free",
        image: fornalutx
      },
      {
        name: "Deià",
        description: "Explore the artistic village with stunning views",
        cost: "Free",
        image: deia
      },
      {
        name: "Valldemossa",
        description: "Home of Chopin and the Carthusian monastery",
        cost: "Free",
        image: valldemossa
      }
    ]
  },
  {
    day: 4,
    title: "Cap de Formentor & Northern Beaches",
    icon: <Waves className="w-6 h-6" />,
    color: "bg-cyan-500",
    activities: [
      {
        name: "Cap de Formentor",
        description: "Drive to the dramatic cliffs and lighthouse",
        cost: "Free",
        image: capDeFormentor
      },
      {
        name: "Platja de Formentor",
        description: "Relax on the beautiful beach",
        cost: "€12-€20 parking",
        image: platjaDeFormentor
      },
      {
        name: "Pollença or Alcúdia",
        description: "Explore old towns and local markets",
        cost: "Free",
        image: null
      }
    ]
  },
  {
    day: 5,
    title: "East Coast Beaches",
    icon: <Camera className="w-6 h-6" />,
    color: "bg-orange-500",
    activities: [
      {
        name: "Cala Mesquida/Agulla/Ratjada",
        description: "Swim at pristine east coast beaches",
        cost: "Free",
        image: calaMesquida
      },
      {
        name: "Cuevas del Drach",
        description: "Underground caves with live classical concert",
        cost: "€17",
        image: cuevasDelDrach
      },
      {
        name: "East Coast Sunset",
        description: "Watch sunset over the beautiful coves",
        cost: "Free",
        image: null
      }
    ]
  },
  {
    day: 6,
    title: "South Coast & Beach Day",
    icon: <Waves className="w-6 h-6" />,
    color: "bg-teal-500",
    activities: [
      {
        name: "Es Trenc",
        description: "Mallorca's celebrated white-sand beach",
        cost: "Free",
        image: esTrenc
      },
      {
        name: "Cala Pi or Cala Llombards",
        description: "Perfect for swimming and snorkeling",
        cost: "Free",
        image: calaPi
      },
      {
        name: "Santanyí",
        description: "Evening tapas by the square",
        cost: "€15-€25",
        image: null
      }
    ]
  },
  {
    day: 7,
    title: "Palma or Countryside Experience",
    icon: <Utensils className="w-6 h-6" />,
    color: "bg-purple-500",
    activities: [
      {
        name: "Palma Shopping & Cafes",
        description: "Explore the city or nearby Portixol beach",
        cost: "Variable",
        image: null
      },
      {
        name: "Wine Tasting (Alternative)",
        description: "Visit bodegas like Es Verger or Son Sureda Ric",
        cost: "€40-€125",
        image: null
      }
    ]
  }
];

const insiderTips = [
  {
    title: "Weather",
    description: "Hot & dry (30-34°C) - start early and carry water",
    icon: "☀️"
  },
  {
    title: "Crowds",
    description: "Very peak season - reserve accommodation, restaurants & tours in advance",
    icon: "👥"
  },
  {
    title: "Best Times",
    description: "Visit beaches or caves early or late to avoid heat & crowds",
    icon: "⏰"
  }
];

const costEstimates = [
  { category: "Accommodation", cost: "$225-$381/night", description: "3-4 star hotels in Palma" },
  { category: "Public Transport", cost: "€2-€5", description: "Per single bus ticket" },
  { category: "Attractions", cost: "€4-€17", description: "Major sights and caves" },
  { category: "Wine Tasting", cost: "€10-€125", description: "Basic to deluxe experiences" },
  { category: "Daily Budget", cost: "€70-€400", description: "Budget to luxury per person" }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              Mallorca
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-90">
              Your Perfect 7-Day Island Adventure
            </p>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
              Discover the magic of Mallorca with our comprehensive guide covering beaches, 
              culture, mountain villages, and unforgettable experiences across this Mediterranean paradise.
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          7-Day Itinerary
        </h2>
        
        <div className="space-y-8">
          {itinerary.map((day, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${day.color} text-white`}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    {day.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Day {day.day}</CardTitle>
                    <CardDescription className="text-white/90 text-lg">
                      {day.title}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="group">
                      {activity.image && (
                        <div className="relative overflow-hidden rounded-lg mb-3 h-48">
                          <img 
                            src={activity.image} 
                            alt={activity.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-2 left-2 text-white">
                            <h4 className="font-semibold">{activity.name}</h4>
                          </div>
                        </div>
                      )}
                      {!activity.image && (
                        <div className="h-12 flex items-center mb-3">
                          <h4 className="font-semibold text-lg">{activity.name}</h4>
                        </div>
                      )}
                      <p className="text-gray-600 mb-2">{activity.description}</p>
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4 text-green-600" />
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {activity.cost}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cost Estimates Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Cost Estimates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {costEstimates.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.category}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.cost}</div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Insider Tips Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Insider Tips for August
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {insiderTips.map((tip, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Ready for your Mallorca adventure?</p>
          <p className="text-gray-400">
            Remember to book accommodations and tours in advance during peak season!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

