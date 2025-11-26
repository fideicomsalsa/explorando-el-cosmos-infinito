"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Telescope,
  Atom,
  Orbit,
  ChevronDown,
  Heart,
  Infinity,
  Star,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"

function BlackHoleHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-64 h-64 mx-auto"
    >
      {/* halo externo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(251,146,60,0.25), transparent 60%)",
        }}
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* anillo fotónico */}
      <motion.div
        className="absolute inset-6 rounded-full border-2 border-orange-400/60 shadow-[0_0_40px_rgba(251,146,60,0.8)]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* disco de acreción */}
      <motion.div
        className="absolute inset-2 rounded-full blur-[1px]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(251,146,60,0.8), rgba(249,115,22,0.9), rgba(234,88,12,0.7), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* distorsión gravitacional (lente) */}
      <motion.div
        className="absolute inset-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(15,23,42,0.85) 75%)",
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* horizonte de sucesos */}
      <motion.div
        className="absolute inset-16 rounded-full bg-black border border-orange-500/40"
        animate={{
          boxShadow: [
            "0 0 30px rgba(249,115,22,0.5)",
            "0 0 55px rgba(249,115,22,0.9)",
            "0 0 30px rgba(249,115,22,0.5)",
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* “chorros” relativistas sutiles */}
      <motion.div
        className="absolute left-1/2 w-[3px] h-44 -translate-x-1/2 bg-gradient-to-b from-sky-400/0 via-sky-400/70 to-sky-400/0"
        style={{ top: "-40px" }}
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/2 w-[3px] h-44 -translate-x-1/2 bg-gradient-to-t from-sky-400/0 via-sky-400/70 to-sky-400/0"
        style={{ bottom: "-40px" }}
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* estrellitas alrededor */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/80"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      <Navigation />

      {/* HERO – AGUJERO NEGRO */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 cosmic-gradient opacity-20" />

        <div className="container mx-auto text-center z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <BlackHoleHeroVisual />

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-cosmic">
              EL COSMOS
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Un viaje al borde de los agujeros negros, donde el tiempo se
              estira, el espacio se curva y la realidad se vuelve casi
              inverosímil.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                asChild
                size="lg"
                className="cosmic-gradient text-white hover:opacity-90 px-8 py-6 text-lg"
              >
                <Link href="/historia">
                  <Telescope className="mr-2" />
                  Comenzar el Viaje
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/fisica">
                  <Atom className="mr-2" />
                  Explorar la Física
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 1.2 }}
              className="text-sm md:text-base text-white/60 max-w-xl mx-auto"
            >
              Cada segundo que pasas cerca de un agujero negro podría ser una
              hora, un año o un siglo lejos de él. Esta página es una brújula
              para no perderte en esa inmensidad.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* CARDS PRINCIPALES */}
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
                desc: "Desde los primeros observadores hasta la era de los telescopios espaciales.",
                href: "/historia",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Orbit,
                title: "Agujeros Negros",
                desc: "Horizontes de sucesos, espaguetificación y el límite mismo del tiempo.",
                href: "/fisica#agujeros-negros",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Atom,
                title: "Física Cuántica",
                desc: "Partículas que aparecen, desaparecen y desafían la intuición.",
                href: "/fisica#cuantica",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: Sparkles,
                title: "Galería Cósmica",
                desc: "Nebulosas, galaxias, remanentes de supernovas y más.",
                href: "/galeria",
                color: "from-pink-500 to-rose-500",
              },
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
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {card.title}
                    </h3>
                    <p className="text-white/70">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: DILATACIÓN DEL TIEMPO Y ESPACIO-TIEMPO */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 lg:grid-cols-2 items-start"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Dilatación del Tiempo y Curvatura del Espacio
              </h2>
              <p className="text-white/80 leading-relaxed text-lg">
                La Relatividad General de Einstein nos dice que{" "}
                <span className="text-primary font-semibold">
                  la gravedad no es una fuerza en el sentido clásico
                </span>
                , sino la curvatura del espacio-tiempo. Un reloj cerca de una
                gran masa —como un agujero negro— late distinto a uno lejos de
                ella.
              </p>
              <p className="text-white/80 leading-relaxed">
                Para un observador lejano, quien se acerca al horizonte de
                sucesos parece moverse cada vez más lento. Para quien cae,
                en cambio, el tiempo se siente normal, pero el universo entero
                parece acelerarse, comprimirse, volverse un suspiro.
              </p>
              <p className="text-white/80 leading-relaxed">
                Esa diferencia, esa{" "}
                <span className="italic">dilatación del tiempo</span>, es la
                razón por la que dos vidas que se cruzan pueden salir de un
                mismo punto y terminar en futuros completamente distintos.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Infinity className="w-7 h-7 text-primary" />
                Escalas que rompen la intuición
              </h3>
              <ul className="space-y-3 text-white/80 text-sm md:text-base">
                <li>
                  • Cerca de un agujero negro supermasivo,{" "}
                  <span className="text-primary">
                    una hora para ti puede ser décadas o siglos lejos de él
                  </span>
                  .
                </li>
                <li>
                  • Un segundo a la velocidad cercana a la luz no se parece a un
                  segundo en reposo. El tiempo se estira, se deforma, se
                  vuelve relativo.
                </li>
                <li>
                  • La luz misma se curva; los agujeros negros pueden actuar
                  como lentes cósmicas, doblando la imagen del universo.
                </li>
                <li>
                  • Cada elección, cada encuentro, cada despedida, ocurre
                  en un tejido de espacio-tiempo que está cambiando
                  constantemente.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: FÍSICA CUÁNTICA Y LEYES DEL UNIVERSO */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Física Cuántica: Lo que el Ojo no Ve
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              En las escalas más pequeñas, el universo deja de comportarse
              “lógicamente”. Partículas que están en dos lugares a la vez,
              entrelazamientos invisibles que unen destinos a años luz de
              distancia, probabilidades que definen lo real.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Atom,
                title: "Superposición",
                text: "Una partícula puede existir en múltiples estados a la vez hasta que la medimos. La realidad es, en el fondo, un abanico de posibilidades.",
              },
              {
                icon: Star,
                title: "Entrelazamiento",
                text: "Dos partículas pueden quedar conectadas para siempre: si cambias una, la otra 'responde' al instante, sin importar la distancia.",
              },
              {
                icon: Heart,
                title: "El Observador Importa",
                text: "Observar no es pasivo. Medir, mirar, interactuar con el sistema, cambia el resultado. El universo responde a la mirada consciente.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-1">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-8 md:p-10 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-primary" />
              Leyes Fundamentales del Universo
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">
              Entre toda esta complejidad, el universo parece obedecer un puñado
              de leyes profundas: conservación de la energía, velocidad de la
              luz como límite cósmico, entropía creciendo sin parar, curvatura
              del espacio-tiempo, campos cuánticos vibrando en todas partes.
            </p>
            <p className="text-white/80 leading-relaxed">
              Y nosotros, una especie recién despierta en un planeta minúsculo,
              estamos empezando a descifrarlas. Mirar el cielo es, de algún
              modo, leer instrucciones que fueron escritas hace miles de
              millones de años.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FRASE DE CIERRE / SAGAN */}
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
              "El cosmos está dentro de nosotros. Estamos hechos de materia
              estelar. Somos una forma de que el universo se conozca a sí
              mismo."
            </blockquote>
            <p className="text-white/60">— Carl Sagan</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
