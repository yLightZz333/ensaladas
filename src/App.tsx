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
  Award
} from "lucide-react";

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. TOP BAR / URGENCY */}
      <div className="bg-zinc-900 text-white text-center py-3 px-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        ⚠️ Oferta por tiempo limitado: <span className="text-emerald-400">Solo 17 cupos disponibles</span> con 75% de descuento
      </div>

      {/* 2. HERO SECTION */}
      <header className="section-container text-center space-y-10 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="tag">Método Ensaladas Inteligentes 7D</span>
          <h1 className="headline max-w-4xl mx-auto">
            ¿Y si pudieras perder hasta <span className="text-emerald-600">5kg en tus primeros 7 días</span> sin pisar un gimnasio?
          </h1>
        </motion.div>

        <motion.p 
          className="subheadline max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Descubre la forma más rápida y deliciosa de deshinchar tu cuerpo, regular tu intestino y recuperar tu energía vital sin pasar hambre ni seguir dietas aburridas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-6"
        >
          <button onClick={scrollToOffer} className="btn-primary flex items-center gap-3 mx-auto group">
            QUIERO EMPEZAR HOY <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-zinc-400 text-xs font-medium">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Pago 100% Seguro</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500" /> Acceso Inmediato</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-emerald-500" /> Garantía de Satisfacción</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mt-20 max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-emerald-100/50 blur-3xl rounded-[3rem] -z-10" />
          <img 
            src="https://picsum.photos/seed/salad-hero/1200/700" 
            alt="Ensaladas Saludables" 
            className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[16/9]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </header>

      {/* 3. PAIN POINTS / IDENTIFICATION */}
      <section className="bg-zinc-50 py-32">
        <div className="section-container">
          <div className="text-center space-y-4 mb-20">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">¿Te sientes identificada?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Si respondes "SÍ" a una de estas preguntas, esto es para ti...</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "¿Te despiertas sintiéndote pesada e hinchada incluso después de dormir?",
              "¿Tu ropa favorita ya no te queda como antes y te genera frustración?",
              "¿Sufres de antojos incontrolables de dulce o carbohidratos por la tarde?",
              "¿Sientes que tu metabolismo está 'bloqueado' y nada de lo que haces funciona?",
              "¿Tu digestión es lenta y vives con esa molesta sensación de inflamación?",
              "¿Te falta energía para terminar el día y solo quieres llegar a la cama?"
            ].map((question, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <HelpCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                <p className="text-zinc-700 font-medium">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OBJECTION BREAKING / STORY */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="headline text-3xl md:text-5xl">No es tu culpa... <span className="text-emerald-600 italic">es el método que te vendieron.</span></h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              La industria de las dietas quiere que creas que para bajar de peso necesitas sufrir, pasar hambre y contar cada caloría. Pero la realidad es que <span className="highlight">tu cuerpo está inflamado</span>, no solo con sobrepeso.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Cuando aprendes a combinar los alimentos de forma inteligente, tu metabolismo se activa por sí solo. No necesitas comer menos, necesitas <span className="highlight">comer mejor</span>.
            </p>
            <div className="card bg-emerald-50 border-emerald-100 space-y-6">
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/user-story/120/120" className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md" alt="Testimonio" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-zinc-900">Elena M.</p>
                  <p className="text-xs text-emerald-700 font-bold">Bajó 4.5kg en 7 días</p>
                </div>
              </div>
              <p className="italic text-zinc-700 leading-relaxed">
                "Estaba cansada de las dietas que me dejaban sin energía. Con el Método Ensaladas Inteligentes, no solo perdí peso, sino que mi piel mejoró y mi digestión es otra. ¡Es increíble lo fácil que es!"
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100/30 blur-2xl rounded-full" />
            <img 
              src="https://picsum.photos/seed/transformation/600/800" 
              className="rounded-[2.5rem] shadow-2xl relative z-10" 
              alt="Transformación" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 5. UNIQUE MECHANISM / HOW IT WORKS */}
      <section className="bg-zinc-900 text-white py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="section-container relative z-10">
          <div className="text-center space-y-6 mb-20">
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-[0.2em]">El Mecanismo Único</span>
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">¿Por qué las "Ensaladas Inteligentes" funcionan?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              No son simples ensaladas. Es una fórmula precisa de macronutrientes y enzimas que reprograman tu metabolismo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Zap, 
                title: "Desbloqueo Metabólico", 
                desc: "Ingredientes específicos que activan las hormonas responsables de quemar grasa acumulada." 
              },
              { 
                icon: Heart, 
                title: "Efecto Anti-Inflamatorio", 
                desc: "Elimina las toxinas que causan el inchaço y la retención de líquidos desde el primer día." 
              },
              { 
                icon: Utensils, 
                title: "Saciedad Prolongada", 
                desc: "Combinaciones que mantienen tus niveles de azúcar estables, eliminando la ansiedad por el dulce." 
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

      {/* 6. BENEFITS LIST */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/seed/benefits/600/600" 
              className="rounded-[2.5rem] shadow-xl" 
              alt="Beneficios" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-10 order-1 md:order-2">
            <h2 className="headline text-3xl md:text-5xl">Lo que vas a lograr en <span className="text-emerald-600">solo una semana:</span></h2>
            <div className="space-y-6">
              {[
                "Pérdida de peso real y visible (hasta 5kg).",
                "Vientre plano y sin esa molesta sensación de globo.",
                "Digestión ligera y regularidad intestinal.",
                "Piel más luminosa y libre de toxinas.",
                "Energía constante durante todo el día.",
                "Control total sobre tus antojos y ansiedad."
              ].map((benefit, i) => (
                <div key={i} className="bullet-item">
                  <CheckCircle2 className="bullet-icon" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <button onClick={scrollToOffer} className="btn-primary w-full md:w-auto">
              QUIERO ESTOS RESULTADOS
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHAT YOU GET / BONUSES */}
      <section className="bg-zinc-50 py-32">
        <div className="section-container">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">Todo lo que recibes al unirte hoy:</h2>
            <p className="text-zinc-500 text-lg">Un sistema completo diseñado para que no puedas fallar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="card space-y-8">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-inner bg-zinc-100">
                <img src="https://picsum.photos/seed/ebook-main/800/450" className="w-full h-full object-cover" alt="Ebook Principal" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Ebook: Método Ensaladas Inteligentes 7D</h3>
                <p className="text-zinc-600">Más de 50 recetas exclusivas con la fórmula exacta para desinflamar tu cuerpo y activar tu metabolismo.</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-5 h-5" /> Valor Real: $29.00
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Planificador de 7 Días", desc: "Sabrás exactamente qué comer en cada momento del día.", val: "$15.00" },
                { icon: Smartphone, title: "Lista de Compras Inteligente", desc: "Ahorra tiempo y dinero en el supermercado con esta guía.", val: "$10.00" },
                { icon: Gift, title: "BONO 1: Guía de Jugos Detox", desc: "Potencia tu quema de grasa con estas bebidas naturales.", val: "$12.00" },
                { icon: Heart, title: "BONO 2: Comunidad VIP", desc: "Acceso a nuestro grupo exclusivo de apoyo y motivación.", val: "Invaluable" }
              ].map((bonus, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-[1.5rem] border border-zinc-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <bonus.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{bonus.title} <span className="text-emerald-600 text-xs ml-2">¡GRATIS!</span></h4>
                    <p className="text-zinc-500 text-sm">{bonus.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF */}
      <section className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ellas ya están viviendo la transformación</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Carla R.", text: "En 4 días mi abdomen bajó muchísimo. Me siento ligera y con mucha más energía.", city: "CDMX, México" },
            { name: "Lucía G.", text: "Las recetas son deliciosas y súper rápidas. No parece que estuviera a dieta.", city: "Bogotá, Colombia" },
            { name: "Mariana S.", text: "Por fin encontré algo que regula mi intestino. Bajé 3kg en la primera semana.", city: "Lima, Perú" }
          ].map((testimonial, i) => (
            <div key={i} className="card space-y-6">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-600 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-50">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. OFFER SECTION */}
      <section id="offer" className="bg-emerald-50 py-32">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* PLAN 1: STANDARD */}
            <div className="card border-2 border-zinc-100 shadow-xl space-y-10 relative overflow-hidden p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <span className="tag mb-2">Plan Básico</span>
                  <p className="text-zinc-400 line-through text-xl font-medium">Precio Regular: $29.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-6xl font-extrabold text-zinc-900 tracking-tighter">
                      $6.90<span className="text-xl align-top mt-2 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="divider my-8" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Ebook Método Ensaladas Inteligentes</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Planificador de 7 Días Paso a Paso</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Todos los Bonos Exclusivos</span>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <button className="btn-primary w-full text-lg py-5">
                  ELEGIR PLAN BÁSICO
                </button>
              </div>
            </div>

            {/* PLAN 2: PREMIUM (FEATURED) */}
            <div className="bg-emerald-600 rounded-[2.5rem] shadow-2xl space-y-10 relative overflow-hidden p-10 flex flex-col justify-between text-white border-4 border-emerald-400">
              <div className="absolute top-0 right-0 bg-white text-emerald-600 px-10 py-2 text-xs font-bold uppercase -rotate-45 translate-x-10 translate-y-6 shadow-md">
                Más Popular
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">Plan Premium VIP</span>
                  <p className="text-emerald-200 line-through text-xl font-medium">Precio Regular: $59.00 USD</p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-6xl font-extrabold text-white tracking-tighter">
                      $14.90<span className="text-xl align-top mt-2 ml-1">USD</span>
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-white/20 w-full my-8" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Todo el contenido del Plan Básico</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>BONO: Guía de Jugos Detox VIP</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Acceso Vitalicio a la Comunidad VIP</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Soporte Prioritario por WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-extrabold py-5 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-center uppercase tracking-wider w-full text-lg">
                  ELEGIR PLAN PREMIUM
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 opacity-50" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-50" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-50" alt="Mastercard" />
          </div>

          {/* 10. GUARANTEE */}
          <div className="mt-24 flex flex-col md:flex-row items-center gap-10 text-left bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
              <ShieldCheck className="w-16 h-16 text-emerald-600" />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-extrabold text-zinc-900 tracking-tight">Garantía de Satisfacción de 7 Días</h4>
              <p className="text-zinc-500 leading-relaxed">
                Prueba el método completo por 7 días. Si no ves resultados, si no te gustan las recetas o si simplemente decides que no es para ti, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. Tu inversión está protegida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ (Extra for conversion) */}
      <section className="section-container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "¿Cómo recibo el material?", a: "Inmediatamente después del pago, recibirás un correo con el acceso directo para descargar todo el contenido en formato PDF." },
            { q: "¿Necesito ingredientes caros?", a: "No. Todas las recetas utilizan ingredientes sencillos que encuentras en cualquier mercado local a precios económicos." },
            { q: "¿Es seguro el pago?", a: "Totalmente. Utilizamos plataformas de pago con encriptación de nivel bancario para proteger tus datos." },
            { q: "¿Funciona si no tengo tiempo para cocinar?", a: "Sí. Las recetas están diseñadas para prepararse en menos de 15 minutos, ideales para mujeres con poco tiempo." }
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
          Aviso Legal: Los resultados pueden variar de persona a persona. Este producto no sustituye el consejo médico profesional.
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
