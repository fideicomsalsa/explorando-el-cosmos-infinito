"use client"

import { motion } from "framer-motion"
import { Atom, Orbit, Zap, Clock, Waves, Infinity } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const physicsTopics = [
  {
    id: "agujeros-negros",
    title: "Agujeros Negros",
    icon: Orbit,
    description: "Regiones del espacio-tiempo donde la gravedad es tan intensa que nada, ni siquiera la luz, puede escapar.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&q=80",
    facts: [
      "El horizonte de eventos marca el punto de no retorno",
      "El tiempo se detiene en el horizonte de eventos desde la perspectiva externa",
      "Los agujeros negros supermasivos existen en el centro de la mayoría de las galaxias",
      "La primera imagen de un agujero negro fue capturada en 2019"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "singularidad",
    title: "La Singularidad",
    icon: Infinity,
    description: "El punto infinitamente denso en el centro de un agujero negro donde las leyes de la física colapsan.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    facts: [
      "Densidad infinita en un volumen cero",
      "Las leyes actuales de la física no pueden describir la singularidad",
      "Podría ser el portal a otro universo según algunas teorías",
      "El Big Bang comenzó como una singularidad"
    ],
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "cuantica",
    title: "Física Cuántica",
    icon: Atom,
    description: "La rama de la física que estudia el comportamiento de la materia y la energía a escalas atómicas y subatómicas.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    facts: [
      "Las partículas pueden estar en múltiples estados a la vez (superposición)",
      "El entrelazamiento cuántico conecta partículas instantáneamente a cualquier distancia",
      "El principio de incertidumbre limita lo que podemos conocer simultáneamente",
      "La observación afecta el comportamiento de las partículas"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "espacio-tiempo",
    title: "Dilatación del Espacio-Tiempo",
    icon: Clock,
    description: "El fenómeno donde el tiempo transcurre a diferentes velocidades dependiendo de la velocidad y la gravedad.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1200&q=80",
    facts: [
      "El tiempo pasa más lento cerca de objetos masivos",
      "Viajar a velocidades cercanas a la luz ralentiza el tiempo",
      "Los astronauts envejecen ligeramente más lento que en la Tierra",
      "GPS debe corregir efectos relativistas para funcionar correctamente"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: "gravedad",
    title: "Ondas Gravitacionales",
    icon: Waves,
    description: "Ondulaciones en el tejido del espacio-tiempo causadas por eventos cósmicos violentos.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    facts: [
      "Predichas por Einstein en 1916, detectadas en 2015",
      "Viajan a la velocidad de la luz",
      "Causadas por colisiones de agujeros negros y estrellas de neutrones",
      "Estiran y comprimen el espacio mientras pasan"
    ],
    color: "from-teal-500 to-green-500"
  },
  {
    id: "energia-oscura",
    title: "Energía y Materia Oscura",
    icon: Zap,
    description: "Componentes misteriosos que constituyen el 95% del universo pero no podemos ver directamente.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
    facts: [
      "Materia oscura: 27% del universo, mantiene unidas las galaxias",
      "Energía oscura: 68% del universo, causa su expansión acelerada",
      "Solo el 5% del universo es materia ordinaria",
      "Su naturaleza sigue siendo uno de los mayores misterios de la física"
    ],
    color: "from-indigo-500 to-purple-500"
  }
]

export default function FisicaPage() {
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center"
            >
              <Atom className="w-10 h-10 text-white animate-pulse" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cosmic">
              Física Cósmica
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Los misterios más profundos del universo: agujeros negros, singularidades, 
              física cuántica y las leyes fundamentales del espacio-tiempo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Physics Topics */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-32">
            {physicsTopics.map((topic, index) => {
              const Icon = topic.icon
              const isEven = index % 2 === 0
              const isBlackHole = topic.id === "agujeros-negros"

              return (
                <motion.div
                  key={topic.id}
                  id={topic.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="scroll-mt-20"
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}>
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative h-[400px] rounded-2xl overflow-hidden ${
                        isEven ? "" : "md:col-start-2"
                      }`}
                    >
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Black Hole Animation */}
                      {isBlackHole && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Event Horizon */}
                          <div className="absolute w-48 h-48 rounded-full border-4 border-purple-500/50 animate-pulse" />
                          
                          {/* Inner Accretion Disk */}
                          <div className="absolute w-40 h-40 animate-spin-4s">
                            <div
                              className="w-full h-full rounded-full"
                              style={{
                                background: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), transparent)"
                              }}
                            />
                          </div>
                          
                          {/* Outer Accretion Disk */}
                          <div className="absolute w-56 h-56 animate-spin-reverse">
                            <div
                              className="w-full h-full rounded-full opacity-70"
                              style={{
                                background: "conic-gradient(from 180deg, transparent, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), transparent)"
                              }}
                            />
                          </div>
                          
                          {/* Singularity Core */}
                          <div className="absolute w-12 h-12 rounded-full bg-black border-2 border-purple-400 animate-pulse-glow" />
                          
                          {/* Orbiting Particles */}
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="absolute w-32 h-32"
                              style={{ 
                                animation: `spin-slow ${5 + i * 0.5}s linear infinite`,
                                animationDelay: `${i * 0.2}s`,
                                transform: `rotate(${i * 60}deg)`
                              }}
                            >
                              <div
                                className="w-2 h-2 rounded-full bg-purple-400 absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse"
                                style={{
                                  animationDelay: `${i * 0.3}s`
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className={`absolute top-6 ${isEven ? "left-6" : "right-6"}`}>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${topic.color} flex items-center justify-center nebula-glow`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {topic.title}
                        </h2>
                        
                        <p className="text-lg text-white/80 mb-6 leading-relaxed">
                          {topic.description}
                        </p>

                        <div className="space-y-3">
                          {topic.facts.map((fact, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 * i }}
                              className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${topic.color} mt-2 flex-shrink-0`}></div>
                              <p className="text-white/90">{fact}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escalas del Universo
            </h2>
            <p className="text-lg text-white/70">
              Desde lo infinitamente pequeño hasta lo inconmensurablemente grande
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Escala Cuántica",
                size: "10⁻³⁵ metros",
                description: "La longitud de Planck, la escala más pequeña con significado físico",
                icon: Atom,
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Escala Humana",
                size: "~1.7 metros",
                description: "Nuestra escala cotidiana, el puente entre lo micro y lo macro",
                icon: Clock,
                color: "from-green-500 to-teal-500"
              },
              {
                title: "Escala Cósmica",
                size: "10²⁶ metros",
                description: "El universo observable, conteniendo billones de galaxias",
                icon: Orbit,
                color: "from-purple-500 to-pink-500"
              }
            ].map((scale, i) => {
              const Icon = scale.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-6 h-full hover:bg-white/10 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${scale.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{scale.title}</h3>
                    <p className="text-2xl font-mono text-primary mb-3">{scale.size}</p>
                    <p className="text-white/70">{scale.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Einstein Quote */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="animate-spin-8s">
              <Atom className="w-12 h-12 mx-auto mb-6 text-primary" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic mb-4">
              "Lo más incomprensible del universo es que sea comprensible."
            </blockquote>
            <p className="text-white/60">— Albert Einstein</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}