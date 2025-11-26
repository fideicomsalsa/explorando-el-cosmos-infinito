"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Telescope, Atom, Orbit, ChevronDown } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 cosmic-gradient opacity-20"></div>
        
        <div className="container mx-auto text-center z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto rounded-full cosmic-gradient nebula-glow flex items-center justify-center"
            >
              <Orbit className="w-16 h-16 text-white animate-spin" style={{ animationDuration: "20s" }} />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-cosmic">
              EL COSMOS
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Un viaje a través del espacio, el tiempo y los misterios del universo
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button asChild size="lg" className="cosmic-gradient text-white hover:opacity-90 px-8 py-6 text-lg">
                <Link href="/historia">
                  <Telescope className="mr-2" />
                  Comenzar el Viaje
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href="/fisica">
                  <Atom className="mr-2" />
                  Explorar la Física
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, repeat: Infinity, duration: 2, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Telescope,
                title: "Historia",
                desc: "Desde los primeros observadores hasta la era moderna",
                href: "/historia",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Orbit,
                title: "Agujeros Negros",
                desc: "Los fenómenos más misteriosos del universo",
                href: "/fisica#agujeros-negros",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Atom,
                title: "Física Cuántica",
                desc: "La naturaleza fundamental de la realidad",
                href: "/fisica#cuantica",
                color: "from-violet-500 to-purple-500"
              },
              {
                icon: Sparkles,
                title: "Galería Cósmica",
                desc: "Las imágenes más impresionantes del espacio",
                href: "/galeria",
                color: "from-pink-500 to-rose-500"
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Link href={card.href}>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                    <p className="text-white/70">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse" />
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic">
              "El cosmos está dentro de nosotros. Estamos hechos de materia estelar. Somos una forma de que el universo se conozca a sí mismo."
            </blockquote>
            <p className="text-white/60">— Carl Sagan</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}