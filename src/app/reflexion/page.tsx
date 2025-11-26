"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Star, Infinity } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ReflexionPage() {
  const [reflection, setReflection] = useState("")

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 cosmic-gradient opacity-30 animate-pulse" style={{ animationDuration: "8s" }}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Title */}
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-full cosmic-gradient nebula-glow flex items-center justify-center">
                    <Infinity className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <Star className="w-6 h-6 text-yellow-400 absolute -top-2 left-1/2 transform -translate-x-1/2" />
                    <Star className="w-4 h-4 text-pink-400 absolute bottom-0 right-0" />
                    <Star className="w-4 h-4 text-blue-400 absolute top-1/2 -left-2" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cosmic"
              >
                La Inmensidad del Cosmos
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-white/80"
              >
                Una reflexión sobre nuestra existencia en el universo infinito
              </motion.p>
            </div>

            {/* Poetic Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1 animate-pulse" />
                  <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                      En la vastedad infinita del cosmos, donde miles de millones de galaxias danzan en el lienzo oscuro del espacio-tiempo, 
                      existimos. Pequeños, frágiles, efímeros. Y sin embargo, conscientes.
                    </p>
                    <p>
                      Somos polvo de estrellas que se ha despertado para contemplar el universo del cual surgimos. 
                      Cada átomo de nuestro cuerpo fue forjado en el corazón ardiente de estrellas ancestrales que murieron 
                      hace eones, explotando en supernovas y esparciendo sus elementos por el cosmos.
                    </p>
                    <p>
                      Hemos mirado hacia arriba durante milenios, primero con asombro primitivo, luego con telescopios 
                      cada vez más poderosos. Hemos descubierto que no somos el centro, que nuestra Tierra es apenas 
                      un punto azul pálido suspendido en un rayo de sol cósmico.
                    </p>
                    <p className="text-xl font-light italic text-primary">
                      Y en ese descubrimiento de nuestra pequeñez, encontramos algo profundamente hermoso...
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Realizations */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Somos el Universo Consciente",
                    text: "El cosmos se conoce a sí mismo a través de nosotros. Somos la forma que tiene el universo de experimentarse.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Infinity,
                    title: "Conectados por el Tiempo",
                    text: "La luz de estrellas distantes viaja millones de años para llegar a nuestros ojos. Miramos al cielo y vemos el pasado.",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Heart,
                    title: "La Fragilidad Preciosa",
                    text: "En un universo de violencia cósmica y vacío infinito, la vida es el fenómeno más extraordinario y delicado.",
                    color: "from-pink-500 to-rose-500"
                  },
                  {
                    icon: Star,
                    title: "El Misterio Persiste",
                    text: "Cuanto más descubrimos, más preguntas surgen. El cosmos guarda secretos que quizás nunca comprendamos completamente.",
                    color: "from-yellow-500 to-orange-500"
                  }
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Personal Reflection Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Tu Reflexión Personal
                  </h2>
                  <p className="text-white/80">
                    ¿Qué significa para ti la inmensidad del cosmos? Comparte tus pensamientos...
                  </p>
                </div>

                <Textarea
                  placeholder="Escribe aquí tu reflexión sobre el universo, nuestra existencia, o lo que sientes al contemplar la vastedad del cosmos..."
                  className="min-h-[200px] bg-black/30 border-white/20 text-white placeholder:text-white/40 text-lg resize-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: reflection.length > 0 ? 1 : 0 }}
                  className="mt-4 text-center text-white/60 text-sm"
                >
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  {reflection.length} caracteres de sabiduría cósmica
                </motion.div>
              </div>
            </motion.div>

            {/* Final Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center space-y-6 py-12"
            >
              <div className="space-y-4">
                <Infinity className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic">
                  "El cosmos es todo lo que es, todo lo que fue y todo lo que será. 
                  Nuestras contemplaciones del cosmos nos conmueven... 
                  Hay un cosquilleo en la columna vertebral, un nudo en la garganta, 
                  una sensación débil como de un recuerdo lejano, de caer desde una altura. 
                  Sabemos que nos estamos aproximando al más grande de los misterios."
                </blockquote>
                <p className="text-white/60 text-lg">— Carl Sagan, Cosmos</p>
              </div>

              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mt-8"
              >
                <div className="w-16 h-16 rounded-full cosmic-gradient nebula-glow"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
