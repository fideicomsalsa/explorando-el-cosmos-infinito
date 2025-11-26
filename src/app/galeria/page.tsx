"use client"

import { motion } from "framer-motion"
import { Sparkles, ZoomIn, Star, Telescope, Calendar } from "lucide-react"
import Navigation from "@/components/Navigation"
import StarField from "@/components/StarField"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  {
    title: "La Nebulosa del Águila (Pilares de la Creación)",
    description: "Columnas monumentales de gas y polvo interestelar donde nacen nuevas estrellas",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-the-eagle-nebula-be8b8a20-20251126143415.jpg",
    category: "Nebulosas",
    year: "1995 (Hubble) / 2014 (reimagen HD)",
    facts: "Ubicada a 7,000 años luz en la constelación Serpens. Las columnas tienen aproximadamente 4-5 años luz de altura (más de 40 billones de kilómetros cada una). La región contiene estrellas recién formadas de apenas unos miles de años de edad, verdaderos bebés cósmicos. El gas y polvo están siendo erosionados por la intensa radiación ultravioleta de estrellas masivas cercanas a una velocidad de 70 mil millones de kilómetros por año. Dentro de las columnas hay EGGs (Evaporating Gaseous Globules), glóbulos gaseosos en evaporación que contienen embriones estelares. La imagen original de 1995 se convirtió en una de las fotografías más icónicas de la historia de la astronomía.",
    discovery: "Fotografiada por primera vez en detalle por el Telescopio Espacial Hubble en 1995. La imagen mejorada de 2014 utilizó tecnología infrarroja que permitió ver a través del polvo y revelar las estrellas recién nacidas ocultas."
  },
  {
    title: "Agujero Negro M87*",
    description: "La primera imagen directa de un agujero negro supermasivo en la historia de la humanidad",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-event-horizon-telescope-image--8ca80723-20251126143414.jpg",
    category: "Agujeros Negros",
    year: "2019 (10 de abril)",
    facts: "Capturada por el Event Horizon Telescope (EHT), una red global de 8 radiotelescopios sincronizados que efectivamente crearon un telescopio del tamaño de la Tierra. El agujero negro tiene una masa de 6,500 millones de veces la del Sol, pero su horizonte de eventos tiene un diámetro de 38 mil millones de kilómetros (aproximadamente 2.5 veces la órbita de Neptuno o 40 veces la distancia Tierra-Sol). El anillo brillante que vemos es el disco de acreción de materia supercaliente girando a velocidades relativistas cercanas a la luz. La temperatura del material en el disco alcanza billones de grados Celsius. La asimetría del brillo se debe al efecto Doppler relativista: el lado que se acerca a nosotros brilla más. La imagen requirió 5 petabytes de datos (equivalente a 5,000 años de archivos MP3) y 2 años de procesamiento computacional intenso. Está ubicado en el centro de la galaxia elíptica gigante Messier 87, a 55 millones de años luz de distancia.",
    discovery: "Event Horizon Telescope Collaboration - 10 de abril de 2019. Este logro monumental confirmó directamente las predicciones de la Teoría de la Relatividad General de Einstein de hace más de 100 años.",
    isBlackHole: true
  },
  {
    title: "La Galaxia de Andrómeda (M31)",
    description: "La galaxia espiral más cercana y masiva, en curso de colisión con la Vía Láctea",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-andromeda-galaxy-ded438bd-20251126143414.jpg",
    category: "Galaxias",
    year: "964 d.C. (primera observación documentada)",
    facts: "Descubierta y descrita por primera vez por el astrónomo persa Abd al-Rahman al-Sufi en su 'Libro de las Estrellas Fijas'. Está a 2.5 millones de años luz de distancia, lo que significa que la luz que vemos hoy salió de allí cuando nuestros ancestros australopithecus caminaban por África. Contiene aproximadamente 1 billón de estrellas, el doble que la Vía Láctea. Se acerca a nosotros a una velocidad de 110 km/s (400,000 km/h) y colisionará con nuestra galaxia en aproximadamente 4,500 millones de años, creando una nueva galaxia elíptica que algunos astrónomos han apodado 'Milkómeda' o 'Lactómeda'. Tiene al menos 26 galaxias satélite conocidas formando el Grupo Local. El disco galáctico mide 220,000 años luz de diámetro. Andrómeda es visible a simple vista desde lugares oscuros y es el objeto más distante visible sin telescopio. Contiene un agujero negro supermasivo central de 140 millones de masas solares.",
    discovery: "Observada desde la antigüedad como una 'pequeña nube'. Catalogada por Charles Messier en 1764 como M31. Edwin Hubble demostró en 1925 que era una galaxia separada, no una nebulosa dentro de nuestra Vía Láctea."
  },
  {
    title: "Nebulosa del Cangrejo (M1)",
    description: "Remanente expansivo de una supernova histórica observada en el año 1054",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-crab-nebula-supe-b2f94e36-20251126143415.jpg",
    category: "Nebulosas",
    year: "1054 (explosión) / 1731 (descubrimiento moderno)",
    facts: "La supernova que creó esta nebulosa fue registrada por astrónomos chinos y árabes el 4 de julio de 1054. Fue tan brillante que era visible a plena luz del día durante 23 días consecutivos y visible por la noche durante 653 días (casi 2 años). Los nativos americanos también dejaron petroglifos de este evento. Está a 6,500 años luz de distancia y la nebulosa se expande a una velocidad de 1,500 km/s. En su centro exacto hay un púlsar (estrella de neutrones) que gira 30.2 veces por segundo, emitiendo pulsos de radiación como un faro cósmico. Este púlsar tiene solo 28 km de diámetro pero contiene 1.4 veces la masa del Sol - una cucharadita de su material pesaría 100 millones de toneladas. La nebulosa emite radiación en todo el espectro electromagnético, desde ondas de radio hasta rayos gamma. Mide actualmente unos 11 años luz de diámetro y continúa expandiéndose. La energía liberada en la explosión original fue equivalente a la energía que nuestro Sol emitirá durante toda su vida de 10 mil millones de años.",
    discovery: "John Bevis la descubrió en 1731. Charles Messier la catalogó en 1758 como el primer objeto de su famoso catálogo, convirtiéndola en M1. El púlsar central fue descubierto en 1968."
  },
  {
    title: "Campo Ultra Profundo del Hubble (HUDF)",
    description: "La imagen más profunda del universo visible: una ventana al cosmos primitivo",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-hubble-ultra-deep-field-photog-3b6eaf71-20251126143414.jpg",
    category: "Campo Profundo",
    year: "2003-2004",
    facts: "Resultado de 11.3 días (273 horas) de exposición acumulada durante 4 meses. Muestra aproximadamente 10,000 galaxias en una pequeña región del cielo de solo 3 arcominutos cuadrados - equivalente al tamaño de un grano de arena visto a un brazo de distancia, o una moneda vista a 100 metros. En esta minúscula porción del cielo, cada punto de luz es una galaxia entera con cientos de miles de millones de estrellas. Las galaxias más antiguas detectadas tienen 13 mil millones de años, formadas apenas 400-800 millones de años después del Big Bang, cuando el universo tenía solo el 5% de su edad actual. Si extrapolamos esta densidad a todo el cielo, existirían unos 100 mil millones de galaxias en el universo observable. Las galaxias más distantes aparecen rojas debido al corrimiento al rojo cosmológico - su luz ha sido estirada por la expansión del universo durante miles de millones de años. La imagen capturó 800 exposiciones individuales que fueron combinadas. Mirando esta imagen, estamos viendo literalmente el pasado profundo del universo.",
    discovery: "Telescopio Espacial Hubble - publicado el 9 de marzo de 2004. Fue superado en profundidad por el Hubble eXtreme Deep Field en 2012 y más recientemente por imágenes del Telescopio Espacial James Webb."
  },
  {
    title: "Nebulosa de Orión (M42)",
    description: "La región de formación estelar masiva más cercana, brillante y fotografiada",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-orion-nebula-m42-87907e11-20251126143414.jpg",
    category: "Nebulosas",
    year: "1610 (primera observación telescópica)",
    facts: "Visible a simple vista como la 'estrella' del medio en la espada de Orión, debajo de las tres estrellas del cinturón. Es el objeto de cielo profundo más brillante después de las galaxias de Andrómeda y Magallanes. Está a solo 1,344 años luz de distancia, prácticamente en nuestro vecindario cósmico. Contiene el Cúmulo del Trapecio, un grupo de estrellas jóvenes muy masivas de menos de 1 millón de años de edad - bebés en términos estelares. La nebulosa mide unos 24 años luz de diámetro. Es una gigantesca nube de gas hidrógeno ionizado (región HII) brillando intensamente con un color característico rojo-rosado. Se están formando unas 700 estrellas simultáneamente en esta región. Los astrónomos han detectado más de 3,000 estrellas de diversas edades asociadas con la nebulosa. En infrarrojo, el Hubble descubrió numerosos 'proplyds' (discos protoplanetarios) - sistemas planetarios en formación alrededor de estrellas jóvenes. La nebulosa es parte del Complejo de Nubes Moleculares de Orión, una estructura masiva de formación estelar. La radiación ultravioleta de las estrellas del Trapecio ioniza el gas circundante, haciendo que brille.",
    discovery: "Nicolas-Claude Fabri de Peiresc realizó la primera observación telescópica documentada en 1610. Galileo Galilei también pudo haberla observado ese mismo año. Charles Messier la catalogó como M42 en 1769."
  },
  {
    title: "Campo Estelar del Centro Galáctico",
    description: "El denso y misterioso corazón de nuestra Vía Láctea",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-infrared-photograph-of-milky-w-fcdde7c8-20251126143414.jpg",
    category: "Vía Láctea",
    year: "1918 (ubicación) / 1990s-presente (estudio detallado)",
    facts: "El centro galáctico está a 26,000 años luz de distancia en dirección a la constelación de Sagitario. En su centro exacto reside Sagitario A* (Sgr A*), un agujero negro supermasivo con 4 millones de masas solares - relativamente pequeño comparado con otros agujeros negros supermasivos, pero extraordinariamente denso. La región es extremadamente densa con millones de estrellas por año luz cúbico (comparado con 0.004 estrellas por año luz cúbico en nuestra vecindad solar). No podemos ver el centro en luz visible debido a las 25 magnitudes de extinción causadas por polvo interestelar, pero podemos observar en infrarrojo, radio y rayos X. Las estrellas más cercanas al agujero negro, llamadas estrellas-S (como S2 y S62), orbitan a velocidades vertiginosas de hasta 8,000 km/s - el 2.7% de la velocidad de la luz. Estas órbitas ultra-rápidas han permitido probar la Relatividad General en condiciones gravitacionales extremas. El centro galáctico experimenta ocasionalmente destellos de rayos X cuando el agujero negro devora material. La región está llena de remanentes de supernovas, estrellas masivas, y campos magnéticos retorcidos. En 2020, se detectaron misteriosos 'filamentos' magnéticos que se extienden por cientos de años luz cerca del centro.",
    discovery: "Harlow Shapley determinó la ubicación del centro galáctico en 1918 mediante el estudio de cúmulos globulares. Sagitario A* fue descubierto en 1974 como una intensa fuente de radio. Su naturaleza como agujero negro fue confirmada mediante observaciones de órbitas estelares en las décadas de 1990-2000 por Reinhard Genzel y Andrea Ghez (Premio Nobel de Física 2020)."
  },
  {
    title: "Galaxias Antennae (NGC 4038/4039)",
    description: "Dos galaxias espirales en dramática colisión galáctica",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-antennae-galaxie-83d658d2-20251126143413.jpg",
    category: "Galaxias",
    year: "1785 (descubrimiento)",
    facts: "Descubiertas por William Herschel el 7 de febrero de 1785. Están a 45 millones de años luz en la constelación de Corvus (el Cuervo). La colisión comenzó hace aproximadamente 600 millones de años - cuando en la Tierra apenas aparecían los primeros animales complejos - y continuará por varios cientos de millones de años más. El choque galáctico ha desencadenado intensos brotes de formación estelar: se están formando miles de cúmulos estelares masivos, muchos con masas de más de 100,000 soles. Las famosas 'antenas' son largas colas de marea que se extienden por más de 500,000 años luz - estructuras gigantescas de estrellas, gas y polvo expulsadas por las tremendas fuerzas gravitacionales de la colisión. Los núcleos de ambas galaxias están separados actualmente por unos 30,000 años luz, pero se acercan. Eventualmente se fusionarán en una sola galaxia elíptica gigante en unos mil millones de años. Los dos agujeros negros supermasivos de los núcleos galácticos también se fusionarán, creando ondas gravitacionales masivas. Esta fusión galáctica es una vista previa de lo que le ocurrirá a nuestra Vía Láctea cuando colisione con Andrómeda. El Hubble ha identificado más de 1,000 cúmulos estelares super jóvenes formados en la colisión.",
    discovery: "William Herschel - 7 de febrero de 1785. El nombre 'Antennae' fue acuñado más tarde debido a las distintivas colas de marea que se asemejan a las antenas de un insecto."
  },
  {
    title: "Nebulosa de la Tarántula (30 Doradus)",
    description: "La región de formación estelar más activa y luminosa del Grupo Local",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-tarantula-nebula-c8fc8036-20251126143413.jpg",
    category: "Nebulosas",
    year: "1751 (descubrimiento)",
    facts: "Ubicada en la Gran Nube de Magallanes, una galaxia satélite de la Vía Láctea, a 160,000 años luz. Es la región HII más grande y luminosa conocida en el Grupo Local de galaxias. Si la Nebulosa de la Tarántula estuviera a la misma distancia de la Tierra que la Nebulosa de Orión (1,344 años luz), cubriría 60 grados del cielo (120 lunas llenas) y proyectaría sombras en la Tierra por la noche - sería visible incluso durante el día. En su centro contiene R136, un súper cúmulo estelar extremadamente denso con algunas de las estrellas más masivas conocidas en el universo, incluyendo R136a1 con aproximadamente 260-315 masas solares (el límite teórico es ~300 masas solares). Las estrellas en R136 son tan masivas y brillantes que emiten más radiación ultravioleta que cualquier otro cúmulo conocido. La nebulosa mide unos 1,000 años luz de diámetro - 40 veces más grande que la Nebulosa de Orión. Contiene suficiente gas y polvo para formar 500,000 soles. En 1987, la supernova SN 1987A explotó en las proximidades de la Tarántula, la supernova más cercana observada desde la invención del telescopio. La nebulosa es visible a simple vista desde el hemisferio sur.",
    discovery: "Nicolas-Louis de Lacaille en 1751 durante su expedición astronómica al Cabo de Buena Esperanza. John Herschel le dio el nombre de '30 Doradus' en el siglo XIX debido a su forma de araña."
  },
  {
    title: "La Nebulosa de la Hélice (NGC 7293) - 'El Ojo de Dios'",
    description: "Una de las nebulosas planetarias más cercanas y fotogénicas",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-helix-nebula-ngc-450f83ea-20251126143414.jpg",
    category: "Nebulosas Planetarias",
    year: "1824 (descubrimiento)",
    facts: "Descubierta por Karl Ludwig Harding antes de 1824. Está a solo 650 años luz de distancia, una de las nebulosas planetarias más cercanas conocidas. Representa el destino exacto de nuestro Sol en aproximadamente 5 mil millones de años cuando agote su hidrógeno nuclear. La enana blanca central (el núcleo expuesto de la estrella moribunda) tiene una temperatura superficial de aproximadamente 120,000°C - 20 veces más caliente que la superficie del Sol. A pesar de estar tan caliente, es muy tenue porque es muy pequeña (similar al tamaño de la Tierra). La nebulosa se expande a 31 km/s. Su diámetro aparente en el cielo es aproximadamente la mitad de la Luna llena, pero está mucho más lejos. La estructura compleja muestra capas múltiples de gas expulsado en diferentes episodios. Miles de nudos densos (cometary knots) de gas se extienden radialmente desde la estrella central - cada uno aproximadamente del tamaño de nuestro Sistema Solar. La apariencia 'facial' le ha valido el apodo popular de 'Ojo de Dios', aunque este nombre no es oficial. En realidad vemos la nebulosa aproximadamente de frente - si la viéramos de lado parecería una hélice, de ahí su nombre oficial. El color azul-verde proviene de oxígeno ionizado, el rojo de nitrógeno e hidrógeno.",
    discovery: "Karl Ludwig Harding - alrededor de 1824. Fue catalogada por John Herschel en la década de 1830."
  },
  {
    title: "Cúmulo de Galaxias Abell 2744 - 'El Cúmulo de Pandora'",
    description: "Una violenta colisión simultánea de múltiples cúmulos galácticos",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-abell-2744-pando-2fe0a860-20251126143414.jpg",
    category: "Cúmulos de Galaxias",
    year: "1989 (catalogado) / 2014 (Frontier Fields del Hubble)",
    facts: "Apodado 'Cúmulo de Pandora' porque es resultado de la colisión simultánea de al menos cuatro cúmulos de galaxias separados - un evento extremadamente raro y violento. Está a 3,500 millones de años luz en la constelación de Sculptor. La masa total combinada es aproximadamente 4 cuatrillones (4 × 10¹⁵) de veces la masa del Sol, de la cual el 75% es materia oscura invisible, 20% es gas intracumular caliente, y solo 5% son las galaxias visibles. La colisión ha separado la materia oscura del gas caliente - evidencia directa de la existencia de materia oscura. El cúmulo actúa como una gigantesca 'lente gravitacional' natural, doblando y magnificando la luz de galaxias aún más distantes detrás de él. Usado por el programa Frontier Fields del Hubble para observar algunas de las galaxias más antiguas y distantes del universo. A través de este efecto de lente, el Hubble detectó galaxias formadas apenas 450 millones de años después del Big Bang, ubicadas a más de 12 mil millones de años luz. Las imágenes muestran arcos y múltiples imágenes distorsionadas de galaxias de fondo debido al lensing gravitacional extremo. La temperatura del gas intracumular alcanza 100 millones de grados, emitiendo intensos rayos X. Las colisiones entre cúmulos de galaxias son los eventos más energéticos en el universo desde el Big Bang.",
    discovery: "Catalogado por George Abell en 1989. Estudiado en profundidad por el Telescopio Espacial Hubble como parte del programa Frontier Fields en 2014-2017."
  },
  {
    title: "La Nebulosa del Velo (Velo de Cygnus)",
    description: "Hermoso remanente de supernova de hace 8,000 años",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-veil-nebula-supe-134e80cc-20251126143414.jpg",
    category: "Remanentes de Supernova",
    year: "1784 (descubrimiento)",
    facts: "Descubierta por William Herschel el 5 de septiembre de 1784. Los delicados filamentos son ondas de choque de una estrella masiva que explotó hace aproximadamente 8,000 años, cuando los humanos apenas comenzaban la agricultura. Está a 2,400 años luz en la constelación de Cygnus (el Cisne). El remanente completo mide unos 110 años luz de diámetro - si pudiéramos verlo completo en el cielo, cubriría un área 36 veces el tamaño de la luna llena. Se expande a aproximadamente 1.5 millones de km/h (420 km/s). La onda de choque calienta el gas a millones de grados, haciéndolo brillar en diferentes colores según los elementos presentes. Los diferentes colores en imágenes de banda estrecha representan diferentes elementos: oxígeno aparece azul-verde, azufre aparece rojo, e hidrógeno aparece rojo-naranja. La estructura intrincada de 'encaje' es causada por la interacción de la onda de choque con nubes de gas interestelar de densidades variables. La estrella original tenía probablemente 20 veces la masa del Sol. El núcleo colapsado puede ser ahora una estrella de neutrones o incluso un agujero negro, aunque no ha sido identificado con certeza. El remanente consiste en múltiples secciones con nombres propios: el Velo del Este (NGC 6992), el Velo del Oeste (NGC 6960), y el Triángulo de Pickering.",
    discovery: "William Herschel - 5 de septiembre de 1784. Descubrió primero el segmento del Este. Williamina Fleming descubrió el Triángulo de Pickering en 1904."
  },
  {
    title: "Galaxia del Sombrero (M104)",
    description: "Majestuosa galaxia espiral con prominente bulbo central y anillo de polvo",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-sombrero-galaxy--f512bc41-20251126143414.jpg",
    category: "Galaxias",
    year: "1781 (descubrimiento)",
    facts: "Descubierta por Pierre Méchain el 11 de mayo de 1781. Está a 31 millones de años luz en la constelación de Virgo. Contiene aproximadamente 2,000 cúmulos globulares - 10 veces más que la Vía Láctea (que tiene unos 200). Este enorme número de cúmulos globulares sugiere que la galaxia ha tenido una historia de fusiones. Tiene un agujero negro supermasivo en su centro con una masa de 1 mil millones de masas solares - 250 veces más masivo que el de la Vía Láctea. El prominente anillo de polvo oscuro contiene la mayoría del gas de formación estelar. El disco galáctico está inclinado solo 6° desde nuestra línea de visión, dándole su distintiva apariencia de sombrero mexicano. El enorme bulbo central brilla con la luz de miles de millones de estrellas viejas y contiene el 90% de las estrellas de la galaxia. Su magnitud aparente de +8.0 la hace visible con binoculares desde lugares oscuros. Es miembro del Cúmulo de Virgo, el cúmulo de galaxias masivo más cercano. Las observaciones del Telescopio Espacial Spitzer revelaron que la galaxia está rodeada por un enorme halo de polvo, posiblemente resultado de colisiones antiguas.",
    discovery: "Pierre Méchain - 11 de mayo de 1781. William Herschel la observó independientemente el 9 de mayo de 1784. Añadida al catálogo de Messier como M104 en 1921."
  },
  {
    title: "Nebulosa Cabeza de Caballo (Barnard 33)",
    description: "Una de las nebulosas oscuras más icónicas y fotografiadas del cielo",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-horsehead-nebula-1e8566b1-20251126143415.jpg",
    category: "Nebulosas Oscuras",
    year: "1888 (descubrimiento)",
    facts: "Descubierta por Williamina Fleming en una placa fotográfica del Observatorio del Harvard College el 1 de enero de 1888. Es una nube oscura de polvo frío y gas denso en la constelación de Orión, visible como una silueta contra el brillo rojo de IC 434, una nebulosa de emisión. Es parte del gigantesco Complejo de Nubes Moleculares de Orión, a aproximadamente 1,375 años luz de distancia. La 'cabeza' mide aproximadamente 3.5 años luz de altura - similar a la distancia entre nuestro Sol y la estrella más cercana, Próxima Centauri. La nebulosa tiene una temperatura de solo -250°C (23 Kelvin), apenas por encima del cero absoluto. La forma distintiva de cabeza de caballo está siendo lentamente erosionada y esculpida por la intensa radiación ultravioleta de la estrella cercana Sigma Orionis. En aproximadamente 5 millones de años, la radiación habrá dispersado suficiente material para que la forma de caballo desaparezca completamente. La nebulosa es tan densa que la luz no puede atravesarla - contiene polvo que bloquea completamente la luz visible. Sin embargo, en observaciones infrarrojas del Hubble, podemos 'ver' a través del polvo y detectar estrellas recién nacidas ocultas dentro. La estrella brillante Alnitak (la más oriental del Cinturón de Orión) está cerca y ayuda a iluminar la región. A pesar de su fama, la Cabeza de Caballo es muy difícil de ver visualmente incluso con telescopios grandes - requiere filtros especiales y cielos muy oscuros.",
    discovery: "Williamina Fleming - 1888. Fleming fue una astrónoma brillante que comenzó como empleada doméstica del director del observatorio, y eventualmente catalogó más de 10,000 estrellas."
  },
  {
    title: "Galaxia del Remolino (M51)",
    description: "Perfecta galaxia espiral de 'gran diseño' en interacción gravitacional",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/41c98e0c-9f98-4c43-bf00-e3a3a34529e0/generated_images/realistic-photograph-of-whirlpool-galaxy-552cd797-20251126143414.jpg",
    category: "Galaxias",
    year: "1773 (descubrimiento)",
    facts: "Descubierta por Charles Messier el 13 de octubre de 1773 mientras buscaba cometas. Fue la primera galaxia en la que se identificó estructura espiral definitiva - Lord Rosse dibujó sus brazos espirales en 1845 usando su telescopio 'Leviatán', el más grande del mundo en esa época. Está a 23 millones de años luz en la constelación de Canes Venatici (Los Perros de Caza). En dramática interacción gravitacional con NGC 5195, su pequeña galaxia compañera amarillenta que está parcialmente oculta detrás de uno de los brazos espirales. Esta interacción de marea ha comprimido las nubes de gas en M51, desencadenando intensos brotes de formación estelar en los brazos espirales, visible como regiones rosadas brillantes (regiones HII). Los brazos espirales extremadamente bien definidos hacen de M51 un ejemplo clásico de 'galaxia espiral de gran diseño' - solo el 10% de las galaxias espirales tienen brazos tan pronunciados. Contiene un agujero negro supermasivo de aproximadamente 1 millón de masas solares en su núcleo. El paso cercano de NGC 5195 ocurrió hace unos 500-800 millones de años. M51 ha sido anfitriona de tres supernovas observadas: en 1994, 2005, y 2011. El Telescopio Espacial Hubble ha revelado detalles extraordinarios en los brazos espirales, incluyendo carriles de polvo oscuro, cúmulos estelares jóvenes azules, y nebulosas rosadas de formación estelar. Es uno de los objetos favoritos de astrofotógrafos aficionados y puede verse con binoculares desde lugares oscuros como una mancha borrosa.",
    discovery: "Charles Messier - 13 de octubre de 1773. Su compañera NGC 5195 fue descubierta por Pierre Méchain en 1781. Lord Rosse identificó la estructura espiral en 1845."
  }
]

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
              Las imágenes más impresionantes del universo: nebulosas, galaxias, agujeros negros y los misterios del espacio profundo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "13.8B", label: "Años del Universo" },
              { number: "2 Trillones", label: "Galaxias Estimadas" },
              { number: "10²⁴", label: "Estrellas en el Universo" },
              { number: "∞", label: "Maravillas por Descubrir" }
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-80 rounded-xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Black Hole M87 Animation Overlay */}
                  {item.isBlackHole && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Photon Ring */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-32 h-32 rounded-full border-2 border-orange-500/60"
                      />
                      
                      {/* Accretion Disk */}
                      <motion.div
                        animate={{ 
                          rotate: 360
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="absolute w-40 h-40 rounded-full"
                        style={{
                          background: "conic-gradient(from 0deg, transparent, rgba(251, 146, 60, 0.5), rgba(249, 115, 22, 0.6), transparent)"
                        }}
                      />
                      
                      {/* Event Horizon Shadow */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-16 h-16 rounded-full bg-black/90 border border-orange-400/30"
                      />
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      <span>{item.year.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl bg-black/95 backdrop-blur-xl border-white/20 text-white p-0 max-h-[90vh] overflow-y-auto">
          {selectedImage !== null && (
            <div className="relative">
              <div className="relative h-[50vh] md:h-[60vh]">
                <Image
                  src={galleryImages[selectedImage].image}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
                
                {/* Enhanced M87 Animation in Modal */}
                {galleryImages[selectedImage].isBlackHole && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Photon Sphere */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute w-96 h-96 rounded-full border-4 border-orange-500/40"
                    />
                    
                    {/* Middle Ring */}
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.08, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute w-80 h-80 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(251, 146, 60, 0.6), rgba(249, 115, 22, 0.7), rgba(234, 88, 12, 0.5), transparent)"
                      }}
                    />
                    
                    {/* Inner Accretion Disk */}
                    <motion.div
                      animate={{ 
                        rotate: -360
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="absolute w-64 h-64 rounded-full"
                      style={{
                        background: "conic-gradient(from 180deg, transparent, rgba(251, 146, 60, 0.8), rgba(249, 115, 22, 0.9), transparent)"
                      }}
                    />
                    
                    {/* Event Horizon */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 40px rgba(249, 115, 22, 0.6)",
                          "0 0 60px rgba(249, 115, 22, 0.9)",
                          "0 0 40px rgba(249, 115, 22, 0.6)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute w-32 h-32 rounded-full bg-black border-4 border-orange-400/50"
                    />
                    
                    {/* Jets of Matter */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scaleY: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute w-2 h-64 bg-gradient-to-t from-transparent via-blue-400/50 to-transparent"
                      style={{ top: '-100px' }}
                    />
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scaleY: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute w-2 h-64 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                      style={{ bottom: '-100px' }}
                    />
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary/80 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {galleryImages[selectedImage].category}
                  </span>
                  <div className="flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{galleryImages[selectedImage].year}</span>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {galleryImages[selectedImage].title}
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                  {galleryImages[selectedImage].description}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <Telescope className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Datos Fascinantes</h3>
                        <p className="text-white/90 leading-relaxed">
                          {galleryImages[selectedImage].facts}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-5 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Descubrimiento</h3>
                        <p className="text-white/90">
                          {galleryImages[selectedImage].discovery}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Scale Comparison */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              La Inmensidad del Universo
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Si el Sol fuera del tamaño de una célula blanca sanguínea, 
              la Vía Láctea sería del tamaño de los Estados Unidos. 
              Y hay 2 trillones de galaxias en el universo observable.
            </p>
            <p className="text-xl text-white/90 font-light italic">
              Somos verdaderamente infinitesimales en la vastedad cósmica, 
              y sin embargo, capaces de contemplar y comprender su magnificencia.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}