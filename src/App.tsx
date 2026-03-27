import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Heart, 
  Utensils, 
  Smartphone, 
  BookOpen, 
  Gift, 
  AlertCircle,
  HelpCircle,
  Users,
  Award,
  MessageCircle,
  TrendingDown,
  ShoppingBag,
  Flame,
  Timer,
  XCircle
} from "lucide-react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* 1. TOP BAR / URGENCY */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] sticky top-0 z-50">
        ⚠️ ATENCIÓN: Esta oferta expira en <span className="font-mono">{formatTime(timeLeft)}</span> minutos
      </div>

      {/* 2. HERO SECTION (Headline + Subheadline + CTA) */}
      <header className="section-container text-center space-y-10 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="tag bg-red-50 text-red-600 border border-red-100">¡ALERTA PARA MUJERES!</span>
          <h1 className="headline max-w-5xl mx-auto text-balance">
            Si estás comiendo ensalada y <span className="text-red-600 underline decoration-4 underline-offset-8">NO bajas de peso</span>… esto te va a sorprender
          </h1>
        </motion.div>

        <motion.p 
          className="subheadline max-w-3xl mx-auto text-zinc-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Descubre el <span className="font-bold text-zinc-900">error fatal</span> con las ensaladas que está bloqueando tu quema de grasa y cómo solucionarlo en los próximos 7 días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-6"
        >
          <button onClick={scrollToOffer} className="btn-primary flex items-center gap-3 mx-auto group bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 px-12 rounded-2xl shadow-2xl shadow-emerald-200/50 transition-all duration-300 transform hover:scale-[1.05] active:scale-95 text-center uppercase tracking-wider text-xl">
            SÍ, QUIERO EL MÉTODO AHORA <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-zinc-400 text-xs font-bold uppercase tracking-widest">👇 Solo 17 cupos disponibles con descuento hoy</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mt-20 max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 bg-emerald-100/50 blur-3xl rounded-[3rem] -z-10" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/salad-warning/1200/700" 
              alt="El error de las ensaladas" 
              className="w-full h-auto object-cover aspect-[16/9]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-emerald-600 border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* 4. PERGUNTAS (IDENTIFICACIÓN) */}
      <section className="bg-zinc-50 py-32">
        <div className="section-container">
          <div className="text-center space-y-4 mb-20">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">¿Te ha pasado esto?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Si respondes "SÍ" a una de estas preguntas, estás cometiendo el "Error Silencioso"...</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "¿Comes ensaladas todos los días pero tu abdomen sigue hinchado?",
              "¿Sientes que tu metabolismo está 'dormido' y nada te hace bajar?",
              "¿Te privas de lo que te gusta y aun así la báscula no se mueve?",
              "¿Sufres de ansiedad por comer dulce apenas terminas tu ensalada?",
              "¿Tu ropa te aprieta cada vez más aunque 'te cuides'?",
              "¿Te sientes sin energía y con el intestino perezoso?"
            ].map((question, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                <p className="text-zinc-700 font-medium">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STORY EMOCIONAL */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="tag">La Historia de María</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">"Pensé que comer sano me estaba matando..."</h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                María, madre de 38 años, estaba desesperada. <span className="text-zinc-900 font-bold">Comía lechuga y pollo a la plancha todos los días</span>, pero cada mañana se despertaba más hinchada.
              </p>
              <p>
                Evitaba las fiestas para no caer en la tentación, lloraba frente al espejo porque su vestido favorito ya no cerraba, y lo peor: <span className="text-zinc-900 font-bold">sentía que su cuerpo la había traicionado.</span>
              </p>
              <p>
                Hasta que un día, un especialista le reveló la verdad: <span className="text-emerald-600 font-bold italic">"María, tus ensaladas están bloqueando tu metabolismo porque te faltan las enzimas activadoras."</span>
              </p>
              <p>
                En solo 7 días aplicando el <span className="highlight">Método Ensaladas Inteligentes</span>, María no solo bajó 4.8kg, sino que recuperó la sonrisa que había perdido hace años.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100/30 blur-2xl rounded-full" />
            <div className="relative card p-4 rotate-2">
              <img 
                src="https://picsum.photos/seed/maria-transformation/600/800" 
                className="rounded-[2rem] shadow-2xl" 
                alt="Transformación de María" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-zinc-100 max-w-[200px] -rotate-6">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs font-bold text-zinc-900">"Bajé 2 tallas en una semana. ¡No lo puedo creer!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUEBRA DE CRENÇA + 7. MECANISMO ÚNICO */}
      <section className="bg-zinc-900 text-white py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-container relative z-10">
          <div className="text-center space-y-6 mb-20">
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-[0.2em]">Por qué esto es diferente</span>
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">El Secreto de la "Chispa Metabólica"</h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              La mayoría de las ensaladas son solo "fibra muerta". El Método Ensaladas Inteligentes utiliza <span className="text-white font-bold">Combinaciones Enzimáticas</span> que obligan a tu cuerpo a usar la grasa como combustible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Flame, 
                title: "Activación Termogénica", 
                desc: "Combinamos vegetales específicos con grasas saludables que elevan la temperatura interna de tus células." 
              },
              { 
                icon: TrendingDown, 
                title: "Bloqueo de Insulina", 
                desc: "Nuestras recetas evitan los picos de azúcar que te hacen acumular grasa abdominal, incluso comiendo sano." 
              },
              { 
                icon: Zap, 
                title: "Efecto Saciante Real", 
                desc: "No pasas hambre porque usamos prebióticos que calman la hormona del hambre (Grelina) por hasta 6 horas." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] space-y-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL (FORTE) */}
      <section className="section-container">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Resultados Reales de WhatsApp</h2>
          <p className="text-zinc-500">Lo que nuestras alumnas están compartiendo en el grupo privado:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "https://picsum.photos/seed/wa1/400/600", text: "¡Chicas! No lo puedo creer, 3kg menos en 4 días y mi abdomen está plano." },
            { img: "https://picsum.photos/seed/wa2/400/600", text: "Ayer me puse mis jeans favoritos y me quedan sueltos. ¡Gracias!" },
            { img: "https://picsum.photos/seed/wa3/400/600", text: "Mi esposo me preguntó qué estaba haciendo porque me ve radiante." }
          ].map((proof, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-2 bg-emerald-500/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-lg">
                <img src={proof.img} className="w-full aspect-[3/4] object-cover" alt="Prueba Social" referrerPolicy="no-referrer" />
                <div className="p-6 bg-emerald-50">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Chat de Alumnas</span>
                  </div>
                  <p className="text-sm text-zinc-700 font-medium italic">"{proof.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BENEFÍCIOS */}
      <section className="bg-zinc-50 py-32">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Tu nueva vida comienza <span className="text-emerald-600">en 7 días:</span></h2>
              <div className="space-y-6">
                {[
                  "Desinflamación abdominal inmediata.",
                  "Pérdida de peso acelerada (sin efecto rebote).",
                  "Adiós a la ansiedad por el dulce y carbohidratos.",
                  "Piel más limpia y radiante.",
                  "Intestino funcionando como un reloj.",
                  "Energía inagotable desde que te despiertas."
                ].map((benefit, i) => (
                  <div key={i} className="bullet-item">
                    <CheckCircle2 className="bullet-icon" />
                    <span className="font-bold text-zinc-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/b1/300/400" className="rounded-2xl shadow-lg" alt="Beneficio 1" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/b2/300/400" className="rounded-2xl shadow-lg mt-8" alt="Beneficio 2" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. APRESENTAÇÃO DO PRODUTO + 11. BÔNUS */}
      <section className="section-container">
        <div className="text-center space-y-6 mb-20">
          <span className="tag">Acceso Completo</span>
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">Lo que vas a recibir hoy:</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="card space-y-8 border-emerald-500 border-2">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-inner bg-zinc-100">
              <img src="https://picsum.photos/seed/ebook-main/800/450" className="w-full h-full object-cover" alt="Ebook Principal" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Ebook: Método Ensaladas Inteligentes 7D</h3>
              <p className="text-zinc-600">La guía maestra con las combinaciones exactas para reprogramar tu metabolismo.</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Valor Real: $29.00
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: ShoppingBag, title: "BÔNUS 1: Lista de Compras Semanal", desc: "Ahorra tiempo y dinero con los ingredientes exactos.", val: "$15.00" },
              { icon: Timer, title: "BÔNUS 2: Recetas Quemagrasa en 5 Min", desc: "Para cuando no tienes tiempo pero quieres resultados.", val: "$12.00" },
              { icon: Zap, title: "BÔNUS 3: Plan Detox de 3 Días", desc: "El 'reset' total para tu organismo.", val: "$10.00" },
              { icon: Users, title: "BÔNUS 4: Grupo Privado WhatsApp", desc: "Motivación y apoyo diario de otras alumnas.", val: "$47.00" },
              { icon: AlertCircle, title: "BÔNUS 5: Guía de Errores Fatales", desc: "Lo que te hace engordar sin que te des cuenta.", val: "$19.00" }
            ].map((bonus, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <bonus.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-zinc-900 text-sm">{bonus.title} <span className="text-emerald-600 text-[10px] ml-1">¡GRATIS!</span></h4>
                  <p className="text-zinc-500 text-xs">{bonus.desc}</p>
                </div>
                <div className="text-[10px] text-zinc-300 line-through font-bold">{bonus.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OFERTA + 13. URGÊNCIA */}
      <section id="offer" className="bg-emerald-50 py-20">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Elige tu camino hacia la transformación</h2>
            <p className="text-red-600 font-bold animate-pulse">⚠️ ¡Últimos cupos con bonos gratuitos disponibles!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* PLAN 1: STANDARD */}
            <div className="card border-2 border-zinc-100 shadow-xl space-y-4 relative overflow-hidden p-10 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="space-y-0 text-center">
                  <span className="tag mb-1">Plan Básico</span>
                  <p className="text-zinc-400 line-through text-lg font-medium">Precio Regular: $29.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-6xl font-extrabold text-zinc-900 tracking-tighter">
                      $6.90<span className="text-xl align-top mt-2 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="divider my-2" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Ebook Método Ensaladas Inteligentes</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>7 Días de Garantía Total</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">Planificador de 7 Días</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">BÔNUS 1: Lista de Compras Semanal</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">BÔNUS 2: Recetas Quemagrasa en 5 Min</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">BÔNUS 3: Plan Detox de 3 Días</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">BÔNUS 4: Grupo Privado WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400 font-medium text-sm italic">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="line-through">BÔNUS 5: Guía de Errores Fatales</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button className="btn-primary w-full text-lg py-5">
                  ELEGIR PLAN BÁSICO
                </button>
              </div>
            </div>

            {/* PLAN 2: PREMIUM (FEATURED) */}
            <div className="bg-emerald-600 rounded-[2.5rem] shadow-2xl space-y-4 relative p-10 flex flex-col justify-between text-white border-4 border-emerald-400 transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-white px-8 py-2.5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl z-20 whitespace-nowrap border border-emerald-300">
                Más Popular
              </div>
              
              <div className="space-y-2">
                <div className="space-y-0 text-center">
                  <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-1">Plan Premium VIP</span>
                  <p className="text-emerald-200 line-through text-lg font-medium">Precio Regular: $132.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-6xl font-extrabold text-white tracking-tighter">
                      $14.90<span className="text-xl align-top mt-2 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-white/20 w-full my-2" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Ebook Método Ensaladas Inteligentes</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>7 Días de Garantía Total</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Planificador de 7 Días</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BÔNUS 1: Lista de Compras Semanal</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BÔNUS 2: Recetas Quemagrasa en 5 Min</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BÔNUS 3: Plan Detox de 3 Días</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BÔNUS 4: Grupo Privado WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BÔNUS 5: Guía de Errores Fatales</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-black py-5 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-center uppercase tracking-wider w-full text-lg">
                  SÍ, QUIERO EL PLAN VIP
                </button>
              </div>
            </div>
          </div>

          {/* 14. GARANTIA */}
          <div className="mt-16 flex flex-col md:flex-row items-center gap-10 text-left bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
              <ShieldCheck className="w-16 h-16 text-emerald-600" />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Garantía "Sin Riesgo" de 7 Días</h4>
              <p className="text-zinc-500 leading-relaxed">
                Estoy tan segura de que el <span className="text-emerald-600 font-bold">Método Ensaladas Inteligentes</span> transformará tu cuerpo que te doy una garantía total. Si en 7 días no ves resultados o simplemente no te gusta, te devuelvo cada centavo. Sin preguntas. El riesgo es todo mío.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="section-container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "¿Realmente funciona en 7 días?", a: "Sí. El método está diseñado para desinflamar tu organismo y activar enzimas metabólicas desde la primera comida. La mayoría de las alumnas reportan cambios visibles en la báscula y en su ropa en la primera semana." },
            { q: "¿Cómo recibo el acceso?", a: "Inmediatamente después de tu compra, recibirás un correo electrónico con tus datos de acceso a nuestra plataforma exclusiva y los enlaces de descarga de todos los materiales." },
            { q: "¿Necesito pasar horas en la cocina?", a: "Para nada. Las recetas están pensadas para mujeres ocupadas. Puedes preparar cualquier plato en menos de 15 minutos con ingredientes que ya tienes en casa." },
            { q: "¿Es un pago único?", a: "Sí, es un pago único y tendrás acceso de por vida al material y a todas las actualizaciones futuras sin pagar un centavo más." }
          ].map((faq, i) => (
            <details key={i} className="group glass border border-zinc-100 rounded-2xl p-6 cursor-pointer transition-all hover:bg-zinc-50">
              <summary className="flex items-center justify-between font-bold text-zinc-900 list-none">
                {faq.q}
                <span className="text-emerald-500 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-zinc-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-100 text-center text-zinc-400 text-[10px] md:text-xs space-y-6 bg-zinc-50">
        <div className="flex justify-center gap-8 font-bold uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">Términos</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Soporte</a>
        </div>
        <p className="max-w-2xl mx-auto px-6 leading-relaxed">
          &copy; 2026 Método Ensaladas Inteligentes 7D. Todos los derechos reservados. <br />
          Aviso Legal: Este producto no garantiza resultados específicos. Los testimonios son experiencias individuales. Consulte a su médico antes de iniciar cualquier plan nutricional.
        </p>
        <div className="flex justify-center gap-4 opacity-30 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
        </div>
      </footer>
    </div>
  );
}
