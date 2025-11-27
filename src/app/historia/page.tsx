"use client"

import { motion } from "framer-motion"
import { Telescope, Calendar, Rocket, Satellite, Eye } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"
import Image from "next/image"

const timelineEvents = [
  {
    year: "Prehistoria",
    title: "Los Primeros Observadores",
    description: "Nuestros ancestros miraban al cielo nocturno con asombro, creando las primeras constelaciones y mitos sobre las estrellas.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80"
  },
  {
    year: "150 d.C.",
    title: "Ptolomeo y el Geocentrismo",
    description: "El astrónomo griego Ptolomeo propone un modelo geocéntrico del universo que dominará el pensamiento durante 1400 años.",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80"
  },
  {
    year: "1543",
    title: "La Revolución Copernicana",
    description: "Nicolás Copérnico propone el modelo heliocéntrico, colocando al Sol en el centro del sistema solar.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80"
  },
  {
    year: "1609",
    title: "Galileo y el Telescopio",
    description: "Galileo Galilei usa el telescopio para observar las lunas de Júpiter, las fases de Venus y las montañas de la Luna.",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80"
  },
  {
    year: "1687",
    title: "Las Leyes de Newton",
    description: "Isaac Newton publica los Principia Mathematica, estableciendo las leyes fundamentales del movimiento y la gravedad.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    year: "1915",
    title: "Relatividad General",
    description: "Albert Einstein revoluciona nuestra comprensión del espacio-tiempo con su teoría de la relatividad general.",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80"
  },
  {
    year: "1929",
    title: "El Universo en Expansión",
    description: "Edwin Hubble descubre que el universo se está expandiendo, cambiando para siempre nuestra comprensión del cosmos.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80"
  },
  {
    year: "1957",
    title: "La Era Espacial",
    description: "La Unión Soviética lanza el Sputnik 1, el primer satélite artificial, marcando el inicio de la exploración espacial.",
    icon: Satellite,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
  },
  {
    year: "1969",
    title: "Un Pequeño Paso",
    description: "Neil Armstrong se convierte en el primer humano en caminar sobre la Luna, cumpliendo el sueño de la humanidad.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?w=800&q=80"
  },
  {
    year: "1990",
    title: "El Telescopio Hubble",
    description: "Se lanza el Telescopio Espacial Hubble, proporcionando imágenes sin precedentes del universo profundo.",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80"
  },
  {
    year: "2019",
    title: "Primera Imagen de un Agujero Negro",
    description: "El Event Horizon Telescope captura la primera imagen directa de un agujero negro en la galaxia M87.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=800&q=80"
  },
  {
    year: "2022",
    title: "James Webb",
    description: "El Telescopio Espacial James Webb comienza a revelar las galaxias más antiguas y distantes jamás observadas.",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80"
  }
]

export default function HistoriaPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24">
        <div className="absolute inset-0 cosmic-gradient opacity-20"></div>
        
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
            >
              <Telescope className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cosmic">
              Historia de la Exploración
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Desde las primeras miradas al cielo hasta los descubrimientos más recientes del cosmos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Timeline Events */}
            <div className="space-y-20">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0
                const Icon = event.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:text-right" : "md:text-left"} text-left ml-20 md:ml-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold text-primary font-mono">
                            {event.year}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          {event.title}
                        </h3>
                        
                        <p className="text-white/70 leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-16 h-16 rounded-full cosmic-gradient nebula-glow flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Spacer for even layout */}
                    <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <Rocket className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              El Futuro de la Exploración
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              La aventura apenas comienza. Misiones a Marte, telescopios más potentes, 
              y quizás algún día, el descubrimiento de vida más allá de la Tierra. 
              El cosmos sigue revelando sus secretos, y nosotros continuamos mirando hacia arriba, 
              preguntándonos qué maravillas nos esperan en las profundidades del espacio infinito.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
