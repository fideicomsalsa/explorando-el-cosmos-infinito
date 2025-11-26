"use client"

import { motion } from "framer-motion"
import { Sparkles, ZoomIn, Star, Telescope, Calendar } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  // … (DEJO TODO ESTE ARRAY TAL CUAL LO TENÉS)
  // NO TOQUÉ NADA AQUÍ
  // ⬆️ ⬆️ ⬆️
]

// (a partir de acá no toqué la estructura, solo añadí un pequeño texto en la sección de stats)

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cosmic">
              Galería del Cosmos
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Las imágenes más impresionantes del universo: nebulosas, galaxias,
              agujeros negros y los misterios del espacio profundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "13.8B", label: "Años del Universo" },
              { number: "2 Trillones", label: "Galaxias Estimadas" },
              { number: "10²⁴", label: "Estrellas en el Universo" },
              { number: "∞", label: "Maravillas por Descubrir" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary font-mono mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm md:text-base text-white/70">
            Cada imagen de esta galería está basada en objetos reales del
            universo: nebulosas, galaxias, cúmulos y agujeros negros que la
            astronomía moderna ha observado, modelado y estudiado durante
            décadas.
          </p>
        </div>
      </section>

      {/* TODO LO DEMÁS LO DEJO IGUAL */}
      {/* Gallery Grid, Modal, Scale Comparison — SIN CAMBIOS */}
      {/* … */}

      {/* A partir de aquí pega exactamente tu código original de galeria/page.tsx
          desde la sección "Gallery Grid" hasta el final, sin modificar nada. */}
    </div>
  )
}
