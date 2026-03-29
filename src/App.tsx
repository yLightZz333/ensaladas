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
  const [showUpgrade, setShowUpgrade] = useState(false);

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

  if (showUpgrade) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white font-sans flex flex-col items-center">
        {/* TOP BAR */}
        <div className="w-full bg-red-600 py-2 text-center text-[10px] font-black tracking-[0.2em] uppercase">
          ¡DESCUENTO ESPECIAL LIBERADO!
        </div>

        <div className="max-w-2xl w-full px-4 py-8 md:py-12 flex flex-col items-center space-y-8">
          {/* ESPERA BADGE */}
          <div className="bg-red-600 px-6 py-2 rounded-xl font-black text-sm tracking-widest animate-bounce">
            ¡ESPERA!
          </div>

          {/* HEADLINE */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight">
              TENEMOS UN <span className="text-emerald-400">DESCUENTO ESPECIAL</span> PARA UPGRADE DE PLANO
            </h1>
          </div>

          {/* UPGRADE CARD */}
          <div className="bg-white text-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl w-full border-4 border-emerald-500">
            {/* CARD HEADER */}
            <div className="bg-emerald-600 p-6 text-center text-white space-y-1">
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">PLAN PREMIUM VIP COMPLETO</h2>
              <p className="text-[10px] text-emerald-100 font-medium uppercase tracking-widest">El paquete completo para resultados garantizados</p>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* PRODUCT IMAGE */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-zinc-100 border border-zinc-100">
                <img 
                  src="https://i.imgur.com/o631uGn.png" 
                  className="w-full h-full object-contain p-4" 
                  alt="Premium Bundle" 
                  referrerPolicy="no-referrer" 
                />
              </div>

              {/* PRICE */}
              <div className="text-center space-y-1">
                <p className="text-zinc-400 line-through text-xs font-bold uppercase tracking-widest">De $14.90</p>
                <h3 className="text-6xl font-black text-zinc-900 tracking-tighter">
                  $10.90<span className="text-xl align-top mt-2 ml-1">USD</span>
                </h3>
              </div>

              {/* BENEFITS LIST */}
              <div className="space-y-3">
                {[
                  { title: "EBOOK COMPLETO MÉTODO 7D", desc: "Acceso total a la guía principal con combinaciones probadas." },
                  { title: "7 DÍAS DE GARANTÍA TOTAL", desc: "Prueba el contenido por 7 días. Si no te gusta, te devolvemos tu dinero." },
                  { title: "PLANIFICADOR DE 7 DÍAS", desc: "Tu mapa paso a paso para no perderte en el camino." },
                  { title: "TODOS LOS 5 BÔNUS EXCLUSIVOS", desc: "Lista de compras, recetas rápidas, plan detox y más." },
                  { title: "ACCESO INMEDIATO", desc: "Recibe tu material inmediatamente después de la confirmación." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-black text-[11px] uppercase tracking-tight text-zinc-900">{item.title}</h4>
                      <p className="text-[10px] text-zinc-500 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <div className="space-y-4 pt-4">
                <button 
                  onClick={() => window.location.href = 'https://pay.hotmart.com/T105130318V?off=h4f0ci90&checkoutMode=10'}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-center uppercase tracking-widest text-sm md:text-base"
                >
                  ¡SÍ, QUIERO EL UPGRADE AHORA!
                </button>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center gap-2 text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                    <AlertCircle className="w-3 h-3 text-emerald-500" />
                    Oferta exclusiva disponible solo en esta página
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = 'https://pay.hotmart.com/N105126410G?checkoutMode=10'}
                    className="text-[10px] text-zinc-400 hover:text-zinc-600 font-bold underline underline-offset-4 uppercase tracking-widest transition-colors"
                  >
                    No gracias, prefiero el plan básico de $6.90
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="flex flex-col items-center space-y-4 pt-4 opacity-50">
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" />
              Pago 100% seguro vía Hotmart
            </div>
            <button 
              onClick={() => {
                setShowUpgrade(false);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest hover:opacity-100 transition-opacity"
            >
              <ArrowRight className="w-3 h-3 rotate-180" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* 1. TOP BAR / URGENCY */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] sticky top-0 z-50">
        ⚠️ ATENCIÓN: Esta oferta expira en <span className="font-mono">{formatTime(timeLeft)}</span> minutos
      </div>

      {/* 2. HERO SECTION (Headline + Subheadline + CTA) */}
      <header className="section-container text-center space-y-6 pt-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="tag bg-red-50 text-red-600 border border-red-100">¡ALERTA PARA MUJERES!</span>
          <h1 className="headline max-w-5xl mx-auto text-balance">
            Estás comiendo ensalada todos los días… y este <span className="text-red-600 underline decoration-4 underline-offset-8">ERROR silencioso</span> está bloqueando tu pérdida de peso
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
          className="pt-2"
        >
          <div className="max-w-md mx-auto mb-4">
            <img 
              src="https://i.imgur.com/o631uGn.png" 
              alt="Método Ensaladas Inteligentes" 
              className="w-full h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <button onClick={scrollToOffer} className="btn-primary flex items-center gap-3 mx-auto group">
            SÍ, QUIERO EL MÉTODO AHORA <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">👇 Solo 17 cupos disponibles con descuento hoy</p>
        </motion.div>

      </header>

      {/* 5. PERGUNTAS (IDENTIFICACIÓN) */}
      <section className="bg-zinc-50 py-10 md:py-12">
        <div className="section-container">
          <div className="text-center space-y-2 mb-10">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">¿Te ha pasado esto?</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Si respondes "SÍ" a una de estas preguntas, estás cometiendo el "Error Silencioso"...</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "¿Comes ensaladas todos los días pero tu abdomen sigue hinchado?",
              "¿Sientes que tu metabolismo está 'dormido' y nada te hace bajar?",
              "¿Te privas de lo que te gusta y aun así la báscula no se mueve?",
              "¿Sufres de ansiedad por comer dulce apenas terminas tu ensalada?",
              "¿Tu ropa te aprieta cada vez más aunque 'te cuides'?",
              "¿Te sientes sin energía y con el intestino perezoso?"
            ].map((question, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-zinc-700 text-sm font-medium">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORY EMOCIONAL */}
      <section className="section-container py-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">"Odiaba mirarme al espejo e ver como minha roupa favorita já não fechava..."</h2>
            <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
              <p>
                María sentía una <span className="text-zinc-900 font-bold">profunda vergüenza</span>. Cada mañana era una batalla contra el espejo y contra esos pantalones que simplemente se negaban a subir.
              </p>
              <p>
                "Pensé que comer sano me estaba matando... comía lechuga y pollo todos los días, pero mi cuerpo seguía igual. Me sentía <span className="text-zinc-900 font-bold">atrapada en mi propio cuerpo</span>", confiesa.
              </p>
              <p>
                La frustración de ver a otras personas comer de todo mientras ella se privaba de todo era insoportable. Hasta que descubrió que el problema no era la cantidad, sino la <span className="text-emerald-600 font-bold italic">combinación enzimática</span>.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative card p-2 rotate-1">
              <img 
                src="https://i.imgur.com/w8uX3Cp.jpeg" 
                className="rounded-xl shadow-xl" 
                alt="Transformación emocional" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUEBRA DE CRENÇA */}
      <section className="bg-red-50 py-6">
        <div className="section-container text-center space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-red-900">Las dietas tradicionales están diseñadas para hacerte depender... no para darte resultados</h2>
          <p className="text-zinc-700 max-w-3xl mx-auto text-base">
            Olvídate de contar calorías, de los nutricionistas costosos o de pasar horas en el gimnasio. El secreto no es comer menos, es comer <span className="font-bold">inteligente</span>.
          </p>
        </div>
      </section>

      {/* 8. EL MECANISMO (CHISPA METABÓLICA) */}
      <section className="bg-emerald-900 text-white py-10 md:py-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/30">El Secreto Científico</span>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">La "Chispa Metabólica": Cómo las combinaciones enzimáticas activan tu quema de grasa</h2>
              <p className="text-emerald-100/80 text-base leading-relaxed">
                No se trata de comer menos. Se trata de <span className="text-white font-bold">activar las enzimas correctas</span>. Cuando combinas los ingredientes de forma inteligente, tu cuerpo:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Bloquea la Insulina", desc: "Evita que tu cuerpo almacene grasa nueva." },
                  { title: "Activa la Termogénesis", desc: "Eleva tu temperatura interna para quemar calorías en reposo." },
                  { title: "Saciante Natural", desc: "Elimina los antojos de dulce por la tarde." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-white fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-emerald-100/60 text-xs">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="card bg-white/5 backdrop-blur-xl border-white/10 p-4">
                <img 
                  src="https://i.imgur.com/PhbbEzf.jpeg" 
                  className="rounded-xl shadow-2xl" 
                  alt="Mecanismo Metabólico" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL (WHATSAPP STYLE) */}
      <section className="py-10 md:py-12 bg-zinc-50">
        <div className="section-container">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Resultados Reales de Alumnas Reales</h2>
            <p className="text-zinc-500 text-sm">Esto es lo que está pasando en nuestro grupo privado de WhatsApp...</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Claudia R.", text: "Chicas no lo puedo creer, hoy me pesé y bajé 3 kilos en 5 días. ¡Y sin pasar hambre!", date: "Hoy, 10:45 AM", image: "https://i.imgur.com/yx0iLMZ.jpeg" },
              { name: "Elena M.", text: "Mi esposo me preguntó qué estaba haciendo porque me ve la cara más delgada. ¡Amo las ensaladas!", date: "Ayer, 8:20 PM", image: "https://i.imgur.com/55tyS9J.jpeg" },
              { name: "Patricia G.", text: "Por fin encontré algo que funciona. Mi digestión cambió por completo. ¡Gracias!", date: "Lunes, 2:15 PM", image: "https://i.imgur.com/KJqVVUn.jpeg" }
            ].map((chat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden">
                <div className="bg-emerald-600 p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">{chat.name[0]}</div>
                  <div className="text-white">
                    <p className="font-bold text-xs">{chat.name}</p>
                    <p className="text-[10px] opacity-70">En línea</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {chat.image && (
                    <div className="rounded-xl overflow-hidden mb-2">
                      <img src={chat.image} alt={chat.name} className="w-full h-auto" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  <div className="bg-zinc-100 p-3 rounded-2xl rounded-tl-none text-xs text-zinc-700 relative">
                    {chat.text}
                    <span className="block text-[9px] text-zinc-400 mt-1 text-right">{chat.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BENEFÍCIOS (O QUE VAI CONSEGUIR) */}
      <section className="py-10 md:py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://i.imgur.com/VjwLioc.jpeg" 
                className="rounded-2xl shadow-2xl" 
                alt="Mujer feliz con resultados" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Lo que vas a lograr en tus primeros 7 días...</h2>
              <div className="space-y-3">
                {[
                  "Desinflamar tu abdomen desde el primer día.",
                  "Perder entre 2 a 5 kilos de forma natural.",
                  "Eliminar la ansiedad por el dulce y los carbohidratos.",
                  "Aumentar tus niveles de energía sin café.",
                  "Mejorar tu digestión y tránsito intestinal.",
                  "Sentirte ligera y segura con tu ropa favorita."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 text-sm font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. APRESENTAÇÃO DO PRODUTO + 12. BÔNUS */}
      <section className="section-container py-10 md:py-12">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Todo lo que vas a recibir hoy:</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card space-y-6 border-emerald-500 border-2 p-6">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-zinc-100">
              <img src="https://i.imgur.com/o631uGn.png" className="w-full h-full object-contain p-4" alt="Ebook Principal" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ebook: Método Ensaladas Inteligentes 7D</h3>
              <p className="text-zinc-600 text-sm">La guía maestra con las combinaciones exactas para reprogramar tu metabolismo.</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Valor Real: $29.00
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: ShoppingBag, title: "BÔNUS 1: Lista de Compras Semanal", desc: "Ahorra tiempo y dinero con los ingredientes exactos.", val: "$15.00" },
              { icon: Timer, title: "BÔNUS 2: Recetas Quemagrasa en 5 Min", desc: "Para cuando no tienes tiempo pero quieres resultados.", val: "$12.00" },
              { icon: Zap, title: "BÔNUS 3: Plan Detox de 3 Días", desc: "El 'reset' total para tu organismo.", val: "$10.00" },
              { icon: AlertCircle, title: "BÔNUS 4: Guía de Errores Fatales", desc: "Lo que te hace engordar sin que te des cuenta.", val: "$19.00" },
              { icon: Flame, title: "BÔNUS 5: Guía de Bebidas Aceleradoras", desc: "Bebidas naturales que queman grasa mientras duermes.", val: "$15.00" }
            ].map((bonus, i) => (
              <div key={i} className="flex gap-3 p-3 bg-white rounded-xl border border-zinc-100 shadow-sm hover:border-emerald-200 transition-colors">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <bonus.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-zinc-900 text-xs">{bonus.title} <span className="text-emerald-600 text-[9px] ml-1">¡GRATIS!</span></h4>
                  <p className="text-zinc-500 text-[10px]">{bonus.desc}</p>
                </div>
                <div className="text-[9px] text-zinc-300 line-through font-bold">{bonus.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. OFERTA + 14. URGÊNCIA */}
      <section id="offer" className="bg-emerald-50 py-10 md:py-12">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Elige tu plan y comienza hoy</h2>
            <p className="text-red-600 font-bold text-xs animate-pulse tracking-widest uppercase">⚠️ ¡Últimos cupos con bonos gratuitos!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* PLAN 1: STANDARD */}
            <div className="card border-2 border-zinc-100 shadow-xl space-y-4 relative overflow-hidden p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1 text-center">
                  <span className="tag mb-1">Plan Básico</span>
                  <p className="text-zinc-400 line-through text-sm font-medium">Precio Regular: $29.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-5xl font-extrabold text-zinc-900 tracking-tighter">
                      $6.90<span className="text-lg align-top mt-1 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-zinc-600 font-medium text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Ebook Método Ensaladas Inteligentes</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 font-medium text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>7 Días de Garantía Total</span>
                  </div>
                  {[
                    "Planificador de 7 Días",
                    "BÔNUS 1: Lista de Compras Semanal",
                    "BÔNUS 2: Recetas Quemagrasa en 5 Min",
                    "BÔNUS 3: Plan Detox de 3 Días",
                    "BÔNUS 4: Guía de Errores Fatales",
                    "BÔNUS 5: Guía de Bebidas Aceleradoras"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-red-400 font-medium text-xs italic">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="line-through">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    setShowUpgrade(true);
                    window.scrollTo(0, 0);
                  }}
                  className="btn-primary w-full text-base py-4"
                >
                  ELEGIR PLAN BÁSICO
                </button>
              </div>
            </div>

            {/* PLAN 2: PREMIUM (FEATURED) */}
            <div className="bg-emerald-600 rounded-[2rem] shadow-2xl space-y-4 relative p-6 md:p-8 flex flex-col justify-between text-white border-4 border-emerald-400 transform md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl z-20 whitespace-nowrap border border-emerald-300">
                Más Popular
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1 text-center">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-1">Plan Premium VIP</span>
                  <p className="text-emerald-200 line-through text-sm font-medium">Precio Regular: $132.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-5xl font-extrabold text-white tracking-tighter">
                      $14.90<span className="text-lg align-top mt-1 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-white/20 w-full" />

                <div className="space-y-3 text-left">
                  {[
                    "Ebook Método Ensaladas Inteligentes",
                    "7 Días de Garantía Total",
                    "Planificador de 7 Días",
                    "BÔNUS 1: Lista de Compras Semanal",
                    "BÔNUS 2: Recetas Quemagrasa en 5 Min",
                    "BÔNUS 3: Plan Detox de 3 Días",
                    "BÔNUS 4: Guía de Errores Fatales",
                    "BÔNUS 5: Guía de Bebidas Aceleradoras"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-emerald-50 font-medium text-xs">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => window.location.href = 'https://pay.hotmart.com/T105130318V?checkoutMode=10'}
                  className="bg-white text-emerald-600 hover:bg-emerald-500 hover:text-white font-black py-4 px-2 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-center uppercase tracking-wide w-full text-[13px] whitespace-nowrap"
                >
                  SÍ, QUIERO EL PLAN VIP
                </button>
              </div>
            </div>
          </div>

          {/* 15. GARANTIA */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 text-left bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-md">
              <ShieldCheck className="w-10 h-10 text-emerald-600" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-extrabold text-zinc-900 tracking-tight">Garantía "Sin Riesgo" de 7 Días</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Si en 7 días no ves resultados o simplemente no te gusta, te devuelvo cada centavo. Sin preguntas. El riesgo es todo mío.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section className="section-container max-w-3xl py-10 md:py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-3">
          {[
            { q: "¿Realmente funciona en 7 días?", a: "Sí. El método está diseñado para desinflamar tu organismo y activar enzimas metabólicas desde la primera comida." },
            { q: "¿Cómo recibo el acceso?", a: "Inmediatamente después de tu compra, recibirás un correo electrónico con tus datos de acceso." },
            { q: "¿Necesito pasar horas en la cocina?", a: "Para nada. Las recetas están pensadas para mujeres ocupadas. Menos de 15 minutos." },
            { q: "¿Es un pago único?", a: "Sí, es un pago único y tendrás acceso de por vida." }
          ].map((faq, i) => (
            <details key={i} className="group glass border border-zinc-100 rounded-xl p-4 cursor-pointer transition-all hover:bg-zinc-50">
              <summary className="flex items-center justify-between font-bold text-zinc-900 list-none text-sm">
                {faq.q}
                <span className="text-emerald-500 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-100 text-center text-zinc-400 text-[10px] space-y-4 bg-zinc-50">
        <div className="flex justify-center gap-6 font-bold uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">Términos</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Soporte</a>
        </div>
        <p className="max-w-2xl mx-auto px-6 leading-relaxed">
          &copy; 2026 Método Ensaladas Inteligentes 7D. Todos los derechos reservados. <br />
          Aviso Legal: Este producto no garantiza resultados específicos. Consulte a su médico.
        </p>
      </footer>
    </div>
  );
}
