import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  BarChart3, 
  Smartphone, 
  ShieldCheck, 
  CalendarDays, 
  Search, 
  Zap,
  Layers,
  Users,
  Database,
  CheckCircle2,
  TrendingUp,
  Workflow,
  Plug,
  Cloud,
  Gauge,
  MousePointerClick,
  Github,
  Slack,
  Trello,
  Figma,
  Linkedin,
  Instagram,
  Facebook,
  Lock,
  LockOpen,
  Server,
  Settings,
  Bell,
  Scan,
  Activity,
  FileText,
  Calendar as CalendarIcon,
  Youtube,
  Twitter,
  Mail,
  Phone,
  Brain
} from 'lucide-react';
import { motion, useInView, animate, useAnimation } from 'framer-motion';
import { AnimatedTestimonials } from './components/ui/AnimatedTestimonials';
import { SpaceParticles } from './components/ui/SpaceParticles';
import { cn } from './lib/utils';

// --- Components ---

interface MetallicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
}

const MetallicButton = ({ 
  children, 
  className, 
  onClick,
  href,
  ...props
}: MetallicButtonProps) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.4, ease: "easeInOut" }
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [controls]);

  const baseStyles = cn(
    "group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-[1px] relative items-center justify-center cursor-pointer", 
    className
  );

  const content = (
    <motion.span animate={controls} className="block w-full h-full relative rounded-full">
      <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#003099_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
      <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 text-zinc-200 group-hover:text-white text-xs md:text-sm font-medium tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full px-6 py-3 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={baseStyles} 
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={baseStyles}
      {...props}
    >
      {content}
    </button>
  );
};

const Counter = ({ value, duration = 2.5 }: { value: number, duration?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration,
        onUpdate(v) {
          node.textContent = v.toFixed(1) + "%";
        },
        ease: "circOut"
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return <div ref={ref} className="text-5xl font-bold text-white mb-2 tabular-nums">0.0%</div>;
};

const Hero = () => {
  const logos = [
    { name: "Make", component: <div className="flex items-center gap-2 font-bold text-xl text-zinc-300"><span className="bg-zinc-700 text-white p-1 rounded text-xs">M</span> Make</div> },
    { name: "Salesforce", component: <div className="flex items-center gap-2 font-bold text-xl text-zinc-300"><Database className="w-6 h-6 text-zinc-200"/> Salesforce</div> },
    { name: "Monday", component: <div className="flex items-center gap-2 font-bold text-xl text-zinc-300"><span className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center text-white text-xs">M</span> Monday.com</div> },
    { name: "Pipedrive", component: <div className="flex items-center gap-2 font-bold text-xl text-zinc-300"><span className="font-serif italic text-green-700">P</span> Pipedrive</div> },
    { name: "HubSpot", component: <div className="flex items-center gap-2 font-bold text-xl text-zinc-300"><span className="text-orange-700">HubSpot</span></div> },
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-10 overflow-hidden bg-zinc-950">
      <SpaceParticles />
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-3 py-1 text-sm text-zinc-400"
        >
          <span className="flex h-2 w-2 rounded-full bg-zinc-400 mr-2 animate-pulse"></span>
          Consultoria de Vendas High-End
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Acelera o Crescimento <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 animate-shimmer bg-[length:200%_100%]">
            Da Tua Empresa
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Implementamos sistemas de CRM, automação e processos comerciais que transformam equipas e multiplicam resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <MetallicButton href="https://meetings-eu1.hubspot.com/miguel-marques?uuid=1fc2b9c6-f251-49b4-b6a5-fa9c1618af27">
            Agendar consulta gratuita
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </MetallicButton>
        </motion.div>

        {/* Logos Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 w-full pt-10 border-t border-zinc-800/50 relative"
        >
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
               className="flex flex-nowrap gap-16 w-max items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                 duration: 10, // Faster speed (was 25)
                 ease: "linear", 
                 repeat: Infinity 
               }}
            >
               {/* Doubled list for infinite loop */}
               {[...logos, ...logos].map((logo, index) => (
                 <div key={`${logo.name}-${index}`} className="flex-shrink-0">
                   {logo.component}
                 </div>
               ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  desc, 
  highlight, 
  delay = 0,
  decoration,
  iconAnimation
}: { 
  icon: any, 
  title: React.ReactNode, 
  desc: string, 
  highlight?: boolean, 
  delay?: number,
  decoration?: React.ReactNode,
  iconAnimation?: any
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    whileHover={{ y: -5 }}
    className={cn(
      "relative p-6 rounded-3xl border transition-all duration-300 h-full flex flex-col justify-between overflow-hidden group",
      highlight 
        ? "bg-zinc-800 text-white border-zinc-700 shadow-lg shadow-zinc-900/50 hover:border-white/40" 
        : "bg-zinc-900 border-zinc-800 hover:border-white/40 hover:shadow-2xl hover:shadow-zinc-900/50"
    )}
  >
    {decoration && (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {decoration}
      </div>
    )}

    <div className="relative z-10">
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors relative", highlight ? "bg-zinc-700" : "bg-zinc-800 group-hover:bg-zinc-800/80")}>
        <motion.div animate={iconAnimation}>
          <Icon className={cn("w-6 h-6", highlight ? "text-zinc-200" : "text-zinc-400 group-hover:text-zinc-200 transition-colors")} />
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-zinc-100">{title}</h3>
      <p className={cn("text-sm leading-relaxed", highlight ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-400 transition-colors")}>{desc}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-zinc-950 scroll-mt-28">
      <div className="container mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Pensamento Estratégico <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#003099] to-[#003099]/40 animate-shimmer bg-[length:200%_100%]">
              Com Tecnologia
            </span>
          </h2>
          <p className="text-xl text-zinc-400">Nunca percas uma oportunidade, processo ou conexão importante.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <FeatureCard 
              icon={Cpu}
              title="Automação Inteligente"
              desc="Sistemas que trabalham por ti, 24/7, garantindo eficiência máxima."
              delay={1}
              iconAnimation={{ rotate: 360, transition: { duration: 20, repeat: Infinity, ease: "linear" } }}
              decoration={
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity"
                  >
                    <Settings className="w-48 h-48 text-zinc-400" />
                  </motion.div>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute right-20 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity"
                  >
                    <Settings className="w-32 h-32 text-zinc-400" />
                  </motion.div>
                </>
              }
            />
          </div>
          <FeatureCard 
            icon={Zap}
            title={<>Velocidade de <br/> Implementação</>}
            desc="Sincroniza instantaneamente as tuas ferramentas em todos os dispositivos."
            delay={2}
            iconAnimation={{ x: [0, 5, -2, 0], skewX: [0, -10, 10, 0], transition: { repeat: Infinity, repeatDelay: 2, duration: 0.5 } }}
            decoration={
               <div className="absolute inset-0 overflow-hidden">
                 {/* Speed/Motion Lines */}
                 <motion.div 
                   animate={{ x: ["-100%", "200%"] }} 
                   transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5, ease: "linear" }} 
                   className="absolute top-1/4 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-30" 
                 />
                 <motion.div 
                   animate={{ x: ["-100%", "200%"] }} 
                   transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2, ease: "linear" }} 
                   className="absolute top-1/2 h-[2px] w-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-20" 
                 />
                 <motion.div 
                   animate={{ x: ["-100%", "200%"] }} 
                   transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.8, ease: "linear" }} 
                   className="absolute top-3/4 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-30" 
                 />
                 
                 {/* Skewed background for momentum feel */}
                 <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-zinc-800/20 to-transparent skew-x-[-20deg] translate-x-1/2" />
               </div>
            }
          />
          <FeatureCard 
            icon={BarChart3}
            title={<>Relatórios <br/> Automáticos</>}
            desc="Partilha métricas e insights com um clique."
            delay={3}
            iconAnimation={{ y: [0, -3, 0], transition: { repeat: Infinity, duration: 2 } }}
            decoration={
              /* Moved graph to Top Right as requested */
               <div className="flex items-end gap-1 h-12 w-20 absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <motion.div className="w-3 bg-zinc-500 rounded-t-sm" animate={{ height: ["20%", "50%", "20%"] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="w-3 bg-zinc-400 rounded-t-sm" animate={{ height: ["30%", "70%", "30%"] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }} />
                  <motion.div className="w-3 bg-zinc-300 rounded-t-sm" animate={{ height: ["40%", "90%", "40%"] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }} />
                  <motion.div className="w-3 bg-zinc-500 rounded-t-sm" animate={{ height: ["25%", "60%", "25%"] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.1 }} />
                  <motion.div className="w-3 bg-zinc-600 rounded-t-sm" animate={{ height: ["35%", "80%", "35%"] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }} />
               </div>
            }
          />
          
          <div className="lg:col-span-1">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-3xl bg-zinc-900 border border-zinc-800 h-full flex flex-col items-center justify-center text-center shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 hover:border-white/40 transition-all overflow-hidden"
             >
                {/* Background Graph Animation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                    <motion.path 
                        d="M0 50 C 20 40, 40 40, 60 20 S 80 10, 100 5" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-zinc-500"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <motion.path 
                        d="M0 50 L 100 50 L 100 5 L 80 10 C 60 20 40 40 20 40 C 0 50 0 50 0 50 Z" 
                        fill="currentColor" 
                        stroke="none"
                        className="text-zinc-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    </svg>
                </div>

                <div className="relative z-10">
                   <Counter value={97.8} />
                   <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Conversion Rate</div>
                </div>
             </motion.div>
          </div>

          <div className="lg:col-span-2">
             <FeatureCard 
              highlight
              icon={Layers}
              title="Integrações"
              desc="Cria uma rede de processos interligados."
              delay={5}
              iconAnimation={{ opacity: [1, 0.7, 1], scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 3 } }}
              decoration={
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {/* Connection line */}
                    <svg className="w-full h-full absolute inset-0">
                       <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-zinc-500" />
                    </svg>
                    
                    {/* Make logo/Icon on the right */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1, 1.2, 1],
                            backgroundColor: ["#27272a", "#27272a", "#ffffff", "#27272a"],
                            borderColor: ["#52525b", "#52525b", "#ffffff", "#52525b"]
                        }}
                        transition={{ 
                            duration: 2.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            times: [0, 0.7, 0.8, 1]
                        }}
                        className="absolute right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-600 z-10"
                    >
                       <motion.span 
                            animate={{ color: ["#ffffff", "#ffffff", "#000000", "#ffffff"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 0.8, 1] }}
                            className="text-white font-bold text-xs"
                        >M</motion.span>
                    </motion.div>

                    {/* Animated File moving between icons */}
                    <motion.div 
                       className="absolute top-1/2 -mt-3 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                       animate={{ 
                          left: ["15%", "85%"], 
                          opacity: [0, 1, 1, 0]
                       }}
                       transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                       }}
                    >
                       <FileText className="w-6 h-6 fill-white text-white" />
                    </motion.div>
                 </div>
              }
            />
          </div>

          <FeatureCard 
            icon={Smartphone}
            title={<>iOS & Android <br/> App Mobile</>}
            desc="Gere vendas em movimento, online ou offline."
            delay={6}
            iconAnimation={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 3 } }}
            decoration={
              <div className="absolute -bottom-6 -right-6 w-32 h-48 bg-zinc-800 rounded-3xl border-4 border-zinc-700 p-2 transform rotate-12 opacity-80 shadow-2xl overflow-hidden">
                {/* Mockup Screen content */}
                <div className="w-full h-full bg-zinc-900 rounded-xl flex flex-col p-2 space-y-2">
                   {/* Header mock */}
                   <div className="w-full h-3 bg-zinc-700 rounded-full opacity-50"></div>
                   {/* List items animating */}
                   <motion.div 
                     animate={{ opacity: [0.3, 1, 0.3] }} 
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-3/4 h-2 bg-zinc-700 rounded-full" 
                   />
                   <motion.div 
                     animate={{ opacity: [0.3, 1, 0.3] }} 
                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                     className="w-full h-8 bg-zinc-800 rounded-md border border-zinc-700/50" 
                   />
                   <motion.div 
                     animate={{ opacity: [0.3, 1, 0.3] }} 
                     transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                     className="w-full h-8 bg-zinc-800 rounded-md border border-zinc-700/50" 
                   />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-zinc-700 rounded-b-xl"></div>
              </div>
            }
          />

          <FeatureCard 
            icon={ShieldCheck}
            title="Segurança Total"
            desc="Apenas tu e a tua equipa acedem aos dados."
            delay={7}
            iconAnimation={{ scale: [1, 1.1, 1], transition: { duration: 3, repeat: Infinity } }}
            decoration={
               <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none flex items-center justify-center w-32 h-32">
                  <motion.div 
                     className="absolute border-2 border-zinc-400 rounded-full"
                     animate={{ width: ["80%", "150%"], height: ["80%", "150%"], opacity: [0.5, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                     className="absolute border-2 border-zinc-400 rounded-full"
                     animate={{ width: ["80%", "150%"], height: ["80%", "150%"], opacity: [0.5, 0] }}
                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  {/* Padlock Icon in Center */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center">
                    <Lock className="w-10 h-10 text-zinc-300 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-90" />
                    <LockOpen className="w-10 h-10 text-white absolute opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
               </div>
            }
          />
          <FeatureCard 
            icon={CalendarDays}
            title="Calendário"
            desc="Sincroniza reuniões e agendas automaticamente."
            delay={8}
            decoration={
               <div className="absolute top-4 right-4 w-16 h-16 bg-zinc-800 rounded-lg border border-zinc-700 p-1 flex flex-col items-center opacity-80">
                 {/* Calendar Header */}
                 <div className="w-full h-4 bg-red-900/50 rounded-sm mb-1"></div>
                 {/* Calendar Grid */}
                 <div className="grid grid-cols-3 gap-1 w-full flex-1">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-zinc-700 rounded-[1px]"
                        animate={{ backgroundColor: ["#3f3f46", "#e4e4e7", "#3f3f46"] }}
                        transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                      />
                    ))}
                 </div>
               </div>
            }
          />
          <FeatureCard 
            icon={Users}
            title="Captura de Leads"
            desc="Importa leads de múltiplas fontes."
            delay={9}
            iconAnimation={{ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }}
            decoration={
              <div className="absolute bottom-4 right-4 flex -space-x-3 opacity-90">
                 {[
                   "https://i.pravatar.cc/100?img=33",
                   "https://i.pravatar.cc/100?img=47", 
                   "https://i.pravatar.cc/100?img=12"
                 ].map((src, i) => (
                    <motion.img 
                       key={i}
                       src={src}
                       alt="User"
                       className="w-8 h-8 rounded-full border-2 border-zinc-900 object-cover"
                       animate={{ y: [0, -6, 0] }}
                       transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    />
                 ))}
              </div>
            }
          />
          <FeatureCard
            icon={Search}
            title="Pesquisa Smart"
            desc="Encontra facilmente contactos e histórico."
            delay={10}
            iconAnimation={{ x: [-2, 2, -2], y: [-2, 2, -2], transition: { duration: 3, repeat: Infinity } }}
            decoration={
               <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  <motion.div
                    className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Scan className="w-12 h-12 text-zinc-500" />
                  </div>
               </div>
            }
          />
          <FeatureCard
            icon={Brain}
            title={<>Decisões com <br/> base em AI</>}
            desc="Insights inteligentes para decisões mais rápidas e precisas."
            delay={11}
            iconAnimation={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1], transition: { duration: 2.5, repeat: Infinity } }}
            decoration={
               <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {/* Neural network nodes */}
                  <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 200 200">
                    <motion.circle
                      cx="30" cy="30" r="4" fill="#003099"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.circle
                      cx="170" cy="30" r="4" fill="#003099"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                    <motion.circle
                      cx="100" cy="100" r="6" fill="#003099"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.circle
                      cx="30" cy="170" r="4" fill="#003099"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.circle
                      cx="170" cy="170" r="4" fill="#003099"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                    />
                    {/* Connecting lines */}
                    <motion.line
                      x1="30" y1="30" x2="100" y2="100"
                      stroke="#003099" strokeWidth="1"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.line
                      x1="170" y1="30" x2="100" y2="100"
                      stroke="#003099" strokeWidth="1"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.line
                      x1="30" y1="170" x2="100" y2="100"
                      stroke="#003099" strokeWidth="1"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.line
                      x1="170" y1="170" x2="100" y2="100"
                      stroke="#003099" strokeWidth="1"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                    />
                  </svg>
               </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const MidSection = () => {
  return (
    <section id="servicos" className="py-32 bg-black relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Um Lugar Para Todas <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#003099] to-[#003099]/40 animate-shimmer bg-[length:200%_100%]">
                    As Tuas Necessidades
                  </span>
                </h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
                  A forma mais inteligente de implementar, comprar, integrar e escalar os teus sistemas comerciais.
                </p>
                <MetallicButton href="https://meetings-eu1.hubspot.com/miguel-marques?uuid=1fc2b9c6-f251-49b4-b6a5-fa9c1618af27">Começar Agora</MetallicButton>
            </motion.div>

            {/* Right Column: Graphics */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800/60 p-6 md:p-10 relative overflow-hidden shadow-xl shadow-zinc-900/50"
            >
              <div className="flex flex-col items-center">
                 <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2 py-1 text-[11px] text-zinc-300 ring-1 ring-zinc-800 uppercase tracking-tight mb-8">
                   <Plug className="w-3.5 h-3.5 mr-1" />
                   Integrations
                 </span>
                 
                 <div className="relative mx-auto mt-4 w-full">
                   <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap z-10 relative">
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Github className="h-6 w-6 text-zinc-400" /></div>
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Slack className="h-6 w-6 text-zinc-400" /></div>
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Trello className="h-6 w-6 text-zinc-400" /></div>
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Figma className="h-6 w-6 text-zinc-400" /></div>
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Database className="h-6 w-6 text-zinc-400" /></div>
                     <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-zinc-900 shadow-sm ring-1 ring-zinc-800 hover:scale-105 transition-transform"><Cloud className="h-6 w-6 text-zinc-400" /></div>
                   </div>

                   <div className="relative mt-8 h-48 md:h-64 w-full">
                      <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet">
                        {/* Light/Zinc strokes for dark mode */}
                        <path d="M450 300 C 450 200, 300 120, 150 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="600" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 210, 360 130, 270 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="520" strokeDashoffset="520" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 150, 420 80, 390 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="450" strokeDashoffset="450" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 150, 480 80, 510 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="450" strokeDashoffset="450" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 210, 540 130, 630 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="520" strokeDashoffset="520" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                        <path d="M450 300 C 450 200, 600 120, 750 30" stroke="#e4e4e7" strokeWidth="2" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="600" opacity="0.3">
                          <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <circle cx="150" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="270" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="390" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="510" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="630" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.8s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="750" cy="30" r="4" fill="#e4e4e7">
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
                        </circle>
                      </svg>

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 ring-1 ring-zinc-700 shadow-xl">
                          <Zap className="h-8 w-8 text-white fill-white/10" />
                        </span>
                      </div>
                   </div>

                   <div className="mx-auto mt-12 w-full">
                      <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-zinc-400">
                        <div className="inline-flex items-center gap-2">
                          <Workflow className="h-4 w-4 text-zinc-300" />
                          <span className="font-medium">Sincronização imediata</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
                        <div className="inline-flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-zinc-300" />
                          <span className="font-medium">Segurança total</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
                        <div className="inline-flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-zinc-300" />
                          <span className="font-medium">Dados ao vivo</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-zinc-700"></div>
                        <div className="inline-flex items-center gap-2">
                          <MousePointerClick className="h-4 w-4 text-zinc-300" />
                          <span className="font-medium">Setup instantâneo</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      id: "01",
      title: "Consultoria e Roadmap Personalizado",
      text: "Juntamos know-how sólido com metodologias comprovadas para elevar a tua estratégia comercial e operacional a outro nível.",
      icon: TrendingUp
    },
    {
      id: "02",
      title: "Sistema de Vendas Inteligente",
      text: "Instalamos plataformas de gestão comercial com IA que convertem o teu negócio numa operação previsível, com métricas e performance ao vivo.",
      icon: Database
    },
    {
      id: "03",
      title: "Workflow e Performance",
      text: "Colocamos em prática sistemas de coordenação que elevam drasticamente a capacidade de execução do teu negócio.",
      icon: CheckCircle2
    },
    {
      id: "04",
      title: "Integrações & Automação",
      text: "Ligamos as melhores ferramentas do mercado num ecossistema unificado. Automatizamos tarefas repetitivas para maximizar a produtividade da equipa.",
      icon: Workflow
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-zinc-950 scroll-mt-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-bold text-zinc-500 tracking-widest uppercase mb-2 block">SOLUÇÕES</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
             As Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#003099] to-[#003099]/40 animate-shimmer bg-[length:200%_100%]">Soluções</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-lg">Soluções completas para transformar o teu negócio.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {solutions.map((sol, index) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-sm hover:shadow-xl hover:border-white/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2 text-5xl font-light text-zinc-700 group-hover:text-white transition-colors">
                  {sol.id}
                </div>
                <div className="md:col-span-10">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                       <sol.icon className="w-6 h-6 text-zinc-200" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">{sol.title}</h3>
                   </div>
                   <p className="text-zinc-400 text-lg leading-relaxed">{sol.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
   const testimonials = [
    {
      quote:
        "Transformamos processos complexos em sistemas simples que escalam, eliminando fricção e multiplicando resultados através da tecnologia certa.",
      name: "Miguel Marques",
      designation: "CEO & Estrategista de Vendas",
      src: "https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/693fe59639d9a13bbaa0b87d_MiguelMarques.avif",
    },
    {
      quote:
        "Criamos integrações e automações que funcionam silenciosamente em segundo plano, assegurando que a tecnologia trabalha por ti e não contra ti.",
      name: "Francisco Santos",
      designation: "Engenheiro de IA",
      src: "https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/693fe5961b7f8575579d28d9_FranciscoSantos.avif",
    },
    {
      quote:
        "O especialista que vai garantir que a tua equipa domina cada ferramenta através de formação prática e suporte contínuo.",
      name: "[Em Breve]",
      designation: "Sales Specialist",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Conectamos marketing e vendas através de automação inteligente, garantindo que cada lead tem uma jornada personalizada e sem atritos até ao fecho.",
      name: "Xavier Oliveira",
      designation: "Marketing Specialist",
      src: "https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/693fe59613aa0b4d80b611f6_Xavier%20Oliveira.avif",
    },
    {
      quote:
        "Garanto implementações rápidas e sem surpresas, entregando cada projeto com prazos claros, comunicação constante e resultados que podes medir.",
      name: "Cristiana Silva",
      designation: "Project Manager",
      src: "https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/693fe596a874efc5bd273886_Cristiana_Silva.avif",
    },
    {
      quote:
        "O design não é apenas visual, é sobre remover todas as barreiras entre o cliente e a conversão, apostando numa simplicidade que realmente converte.",
      name: "Leandro Reis",
      designation: "Designer de Experiência",
      src: "https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/693fe5962b9ee35a6ab108c2_Leandro_Reis.avif",
    },
  ];

  return (
    <section id="equipa" className="py-24 bg-zinc-950 scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            A Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#003099] to-[#003099]/40 animate-shimmer bg-[length:200%_100%]">Equipa</span>
          </h2>
          <p className="text-zinc-400">Especialistas em transformação digital de vendas.</p>
        </motion.div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <>
      <section id="contactos" className="relative py-32 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden scroll-mt-28">
        {/* subtle spotlight glow from center/top to match the 'dark void' look */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zinc-900/40 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Pronto Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#003099] to-[#003099]/40 animate-shimmer bg-[length:200%_100%]">Crescer?</span>
              </h2>
              <p className="text-zinc-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                Agenda uma consultoria gratuita de 30 minutos e descobre o potencial da tua empresa.
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <MetallicButton href="https://meetings-eu1.hubspot.com/miguel-marques?uuid=1fc2b9c6-f251-49b4-b6a5-fa9c1618af27">
                  AGENDAR AGORA
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </MetallicButton>
                
                <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    Resposta em 24h
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    Sem compromisso
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    Consultoria gratuita
                  </span>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 pb-12">
        <div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
          {/* Newsletter Section - Moved to Top */}
          <div className="border-b border-white/10 pb-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-lg font-medium text-white mb-4">Mantém-te atualizado</h4>
              <p className="text-sm text-white/60 mb-6">Recebe insights de tecnologia, novas features e inspiração para o crescimento do teu negócio.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="O teu email" className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-zinc-500/50 focus:outline-none transition-all duration-300 bg-white/5" />
                <button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-white/10 hover:border-white/30 transition-all duration-300 bg-white/5 hover:bg-white/10">Subscrever</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                 <img 
                    alt="Unlocking Logo" 
                    className="h-8 w-auto object-contain" 
                    src="https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/6929cce7d212c922e37aa97d_unlocking%20logo%20branco.png" 
                  />
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                Transformamos negócios através de tecnologia, automação e estratégia comercial. Implementamos o futuro, hoje.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/unlocking-tech/" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.instagram.com/theunlockingtech" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.facebook.com/unlockingtech" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" aria-label="Facebook">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.youtube.com/@UnlockingTechHub" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" aria-label="YouTube">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href="https://x.com/ThinkUnlocking" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" aria-label="X (Twitter)">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Empresa</h4>
              <ul className="space-y-4">
                <li><a href="https://www.unlockingtech.com/pt/about-us/company" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Sobre Nós</a></li>
                <li><a href="https://www.unlockingtech.com/pt/about-us/our-expertise" className="text-sm text-white/60 hover:text-white transition-colors duration-300">A nossa Experiência</a></li>
                <li><a href="https://www.unlockingtech.com/pt/about-us/development-philosophy" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Filosofia do Desenvolvimento</a></li>
                <li><a href="https://www.unlockingtech.com/pt/about-us/careers-philosophy" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Filosofia da Carreira</a></li>
                <li><a href="https://www.unlockingtech.com/pt/blog" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Soluções</h4>
              <ul className="space-y-4">
                <li><a href="https://www.unlockingtech.com/pt/services-group/ai-services" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Serviços de IA</a></li>
                <li><a href="https://www.unlockingtech.com/pt/ai-agents" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Agentes de IA</a></li>
                <li><a href="https://www.unlockingtech.com/pt/core-services" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Serviços de Desenvolvimento</a></li>
                <li><a href="https://www.unlockingtech.com/pt/software-development-services/staff-augmentation" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Extensões de Equipa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Contacte-nos</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:miguel.marques@unlockingtech.com" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>miguel.marques@unlockingtech.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+351912178888" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+351 912 178 888</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
            <span>Designed by Distinct Agency © 2025 Unlocking Tech.</span>
            <a href="#" className="hover:text-white/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors duration-300">Terms of Service</a>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-white/70" />
              Secure Data
            </span>
            <span className="flex items-center gap-2">
              <Server className="w-3 h-3 text-green-400" />
              High Performance
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <img 
              alt="Unlocking Logo" 
              className="h-12 w-auto object-contain" 
              src="https://cdn.prod.website-files.com/6478bc682b0c0435582bea36/6929cce7d212c922e37aa97d_unlocking%20logo%20branco.png" 
            />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#funcionalidades" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Funcionalidades</a>
            <a href="#servicos" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Serviços</a>
            <a href="#solucoes" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Soluções</a>
            <a href="#equipa" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Equipa</a>
            <div className="scale-90 origin-right">
              <MetallicButton href="https://meetings-eu1.hubspot.com/miguel-marques?uuid=1fc2b9c6-f251-49b4-b6a5-fa9c1618af27">Fale Connosco</MetallicButton>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <MidSection />
        <Solutions />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default App;