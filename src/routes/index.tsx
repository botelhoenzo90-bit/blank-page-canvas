import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, Brain, Check, ChevronDown, ClipboardList, Facebook, Heart, Instagram, Leaf, MapPin, MessageCircle, Puzzle, Sparkles, Sun, } from "lucide-react";
import logoAsset from "../assets/logo.png.asset.json";
import waAsset from "../assets/whatsapp.png.asset.json";
import sobrePhotoAsset from "../assets/francineia.png.asset.json";

const logo = logoAsset.url;
const waIcon = waAsset.url;
const sobrePhoto = sobrePhotoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Espaço Mente Brilhante | Neuropsicologia e Saúde Mental" },
    { name: "description", content: "Ciência, acolhimento e estratégias para promover desenvolvimento integral e qualidade de vida." },
  ] }), component: Index,
});

const wa = "https://wa.me/5592991819513";
const services: [LucideIcon, string, string][] = [
  [Puzzle, "Atendimento para TEA", "Acolhimento e estratégias individualizadas."],
  [Brain, "Atendimento para TDAH", "Compreensão e estratégias para diferentes necessidades."],
  [BookOpen, "Dificuldades de aprendizagem", "Investigação e intervenção individualizada."],
  [Heart, "Saúde Mental", "Escuta e cuidado para promover qualidade de vida."],
  [Sparkles, "TOD", "Atendimento com olhar individualizado."],
  [Leaf, "Ansiedade", "Acolhimento e desenvolvimento de recursos."],
  [Sun, "Depressão", "Cuidado humanizado durante o acompanhamento."],
  [ClipboardList, "Avaliação Neuropsicológica", "Compreensão de aspectos cognitivos, emocionais e funcionais."],
  [MessageCircle, "Atendimento Psicológico", "Escuta profissional em ambiente seguro."],
  [Puzzle, "Intervenção ABA", "Estratégias baseadas em princípios da Análise do Comportamento Aplicada."],
];
const testimonials = [
  ["Mariana", "Fui recebida com muito acolhimento e atenção. Me senti segura desde o primeiro atendimento."],
  ["Camila", "O atendimento foi muito cuidadoso e individualizado. Conseguimos entender melhor nossas necessidades."],
  ["Juliana", "A experiência foi muito positiva. Profissional atenciosa, clara e humana."],
  ["Fernanda", "Finalmente encontramos um espaço onde nossa família se sentiu realmente compreendida."],
  ["Patrícia", "Um atendimento delicado, profissional e acolhedor. Fez diferença para nossa família."],
];
const faqs = [
  ["O atendimento pode ser presencial e online?", "Sim. O Espaço Mente Brilhante oferece atendimento presencial e online, de acordo com a modalidade disponível e adequada ao acompanhamento."],
  ["Como saber qual atendimento é indicado?", "O primeiro contato é uma oportunidade para compreender a necessidade e orientar sobre o caminho de cuidado mais adequado."],
  ["A avaliação neuropsicológica é para qualquer idade?", "A indicação depende da demanda, do objetivo da avaliação e das características da pessoa. A orientação é feita de forma individualizada."],
  ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp da página e envie uma mensagem. A equipe poderá orientar os próximos passos."],
];

const btn = "btn-gold";
const outline = "btn-gold";

function Index() {
  const [faq, setFaq] = useState<number | null>(null);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <div className="min-h-screen overflow-x-hidden bg-[#070605] text-[#f8f2e7]">
    <style>{`@keyframes belt{from{transform:translateX(0)}to{transform:translateX(-50%)}}.belt{animation:belt 38s linear infinite;width:max-content;will-change:transform}@media(max-width:640px){.belt{animation-duration:30s}}@keyframes shine{from{left:-120%}to{left:120%}}.btn-shine{position:relative;overflow:hidden}.btn-shine::before{content:"";position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.28),transparent);pointer-events:none;border-radius:inherit;z-index:1}.btn-shine::after{content:"";position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),rgba(255,255,255,.2),transparent);transform:skewX(-22deg);pointer-events:none;z-index:2}.btn-shine:hover::after{animation:shine .85s ease-in-out}`}</style>

    <main id="inicio">
      {/* Seção 1 — escura, logo grande centralizada */}
      <section className="relative overflow-hidden px-5 pb-16 pt-12 lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(212,175,55,.17),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(240,216,120,.05),transparent_28%)]"/><div className="absolute right-[-12%] top-20 h-96 w-96 rounded-full border border-[#D4AF37]/10 blur-3xl"/>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative mx-auto max-w-3xl text-center">
          <img src={logo} alt="Espaço Mente Brilhante — Psicologia e Neuropsicologia" className="mx-auto h-28 w-auto object-contain sm:h-36 lg:h-44"/>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-[#F0D878]"><Sparkles className="h-4 w-4"/> Presencial e online</span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Cuidar da mente é <span className="text-[#E6C158]">transformar vidas.</span></h1>
          <p className="mt-5 text-lg leading-relaxed text-white/65 sm:text-xl">Um espaço de acolhimento, compreensão e cuidado para você, sua família e suas necessidades.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href={wa} target="_blank" rel="noreferrer" className={btn}>Quero cuidar de mim <ArrowRight className="h-5 w-5"/></a><button onClick={() => go("servicos")} className={outline}>Conhecer os serviços</button></div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-white/50"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#E6C158]"/> Atendimento humanizado</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#E6C158]"/> Olhar individualizado</span></div>
        </motion.div>
      </section>

      {/* Faixa dourada — informações em movimento */}
      <section aria-label="Informações" className="relative overflow-hidden border-y border-[#F0D878]/40 bg-[linear-gradient(120deg,#8B6914,#D4AF37_35%,#F0D878_50%,#D4AF37_65%,#8B6914)] py-3.5 shadow-[0_10px_40px_rgba(212,175,55,.35)]">
        <div className="belt flex items-center gap-10">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10">
              {["Atendimento presencial e online","Psicóloga e Neuropsicóloga Clínica","CRP 10/06883","Crianças, adolescentes e adultos","Acolhimento e ciência","Atendimento humanizado"].map((info) => (
                <span key={info} className="flex items-center gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[.18em] text-[#17110a]">
                  {info} <Sparkles className="h-4 w-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Sua jornada — clara */}
      <section id="dor" className="relative overflow-hidden bg-[#eee5d7] px-5 py-16 text-[#19140e] lg:px-8"><div className="absolute left-0 top-0 h-40 w-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,105,20,.12),transparent_60%)]"/><div className="relative mx-auto max-w-7xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8B6914]">Sua jornada merece atenção</p><h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Quando algo não vai bem, buscar compreensão pode mudar a forma de viver essa fase.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#19140e]/65">Ansiedade, dificuldades de aprendizagem, desafios comportamentais, dúvidas sobre desenvolvimento ou aquela sensação de que algo precisa ser melhor compreendido podem trazer insegurança para a rotina.</p><div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">{["Você sente que não consegue organizar o que está acontecendo?","Seu filho apresenta dificuldades que precisam ser melhor compreendidas?","Há comportamentos, emoções ou aprendizagem gerando preocupação?","Você gostaria de ter orientação profissional para dar o próximo passo?"].map((t,i)=><div key={i} className="rounded-[1.7rem] border border-[#8B6914]/15 bg-white/70 p-6 text-center shadow-[0_12px_35px_rgba(80,55,10,.06)]"><span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A227]/15 font-serif text-lg text-[#8B6914]">0{i+1}</span><p className="mt-4 font-medium leading-relaxed">{t}</p></div>)}</div><a href={wa} target="_blank" rel="noreferrer" className={btn + " mt-8"}>Quero conversar sobre isso <ArrowRight className="h-5 w-5"/></a></div></section>

      {/* Serviços — escura */}
      <section id="servicos" className="overflow-hidden bg-[#0b0907] py-16 text-white"><div className="mx-auto max-w-7xl px-5 text-center lg:px-8"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#E6C158]">Nossos serviços</p><h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Cuidado pensado para diferentes necessidades</h2><p className="mx-auto mt-4 max-w-2xl text-white/50">Conheça algumas possibilidades de atendimento. Os cards passam continuamente como uma esteira.</p></div><div className="mt-8 overflow-hidden"><div className="belt flex gap-5">{[...services,...services].map(([Icon,title,text],i)=><a href={wa} target="_blank" rel="noreferrer" key={`${title}-${i}`} className="w-[290px] shrink-0 rounded-[1.8rem] border border-[#8B6914]/15 bg-[#f4ede2] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,.28)] transition hover:-translate-y-2 hover:border-[#D4AF37]/45"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/15"><Icon className="h-7 w-7 text-[#8B6914]"/></span><h3 className="mt-4 min-h-[48px] font-serif text-xl font-bold text-[#19140e]">{title}</h3><p className="mt-2 min-h-[56px] text-sm leading-relaxed text-[#19140e]/60">{text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#8B6914]">Agendar atendimento <ArrowRight className="h-4 w-4"/></span></a>)}</div></div><div className="mt-8 text-center"><a href={wa} target="_blank" rel="noreferrer" className={btn}>Quero encontrar o atendimento ideal <ArrowRight className="h-5 w-5"/></a></div></section>

      {/* Um novo caminho — clara */}
      <section className="bg-[#f4ede2] px-5 py-16 text-[#19140e] lg:px-8"><div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8B6914]">Um novo caminho pode começar aqui</p><h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Você não precisa ter todas as respostas para dar o primeiro passo.</h2><div className="mx-auto mt-8 grid gap-4 md:grid-cols-3">{[["Escuta", "Um espaço seguro para falar, ser compreendido e olhar para suas necessidades."],["Compreensão", "Quando necessário, a avaliação ajuda a organizar informações e ampliar a compreensão."],["Estratégias", "O cuidado busca caminhos individualizados que façam sentido para a vida real."]].map(([t,d],i)=><div key={t} className="rounded-[1.8rem] border border-[#8B6914]/15 bg-white/70 p-7 text-center shadow-[0_12px_35px_rgba(80,55,10,.06)]"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/15 font-serif text-lg text-[#8B6914]">0{i+1}</span><h3 className="mt-4 font-serif text-2xl">{t}</h3><p className="mt-2 leading-relaxed text-[#19140e]/60">{d}</p></div>)}</div><a href={wa} target="_blank" rel="noreferrer" className={btn + " mt-8"}>Falar pelo WhatsApp <MessageCircle className="h-5 w-5"/></a></div></section>

      {/* Quem sou eu — escura, foto abaixo do CRP e acima do texto */}
      <section id="sobre" className="bg-[#0b0907] px-5 py-16 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-white">Conheça a profissional</p><h2 className="mt-4 font-serif text-4xl text-[#F0D878] sm:text-5xl">Francineia Magalhães</h2><p className="mt-3 font-medium text-[#F0D878]">Psicóloga e Neuropsicóloga Clínica</p><p className="mt-1 font-semibold text-[#F0D878]">CRP: 10/06883</p>
        <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }} className="mx-auto mt-8 w-full max-w-[360px]"><div className="rounded-[2.4rem] border border-[#D4AF37]/35 bg-gradient-to-br from-[#2a2115] via-[#12100c] to-[#090807] p-3 shadow-[0_35px_100px_rgba(0,0,0,.65)]"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#14110d]"><img src={sobrePhoto} alt="Francineia Magalhães, neuropsicóloga clínica" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1280} loading="lazy"/><div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/60 via-transparent to-transparent"/></div></div></motion.div>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 leading-relaxed text-[#F0D878]"><p>Sou Francineia Magalhães, Neuropsicóloga Clínica, ABA — Análise do Comportamento Aplicada e Terapeuta em Psicanálise com ampla experiência no diagnóstico e intervenção em saúde mental. Meu compromisso é oferecer um atendimento humanizado, ético e baseado em evidências científicas para ajudar você a superar desafios emocionais e cognitivos.</p><p>Com registro ativo no Conselho Regional de Psicologia (CRP 10/06883), atuo com dedicação no cuidado de crianças, adolescentes, adultos e casal, utilizando abordagens terapêuticas personalizadas para cada necessidade.</p></div>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://www.facebook.com/n.mendesmagalhaes" target="_blank" rel="noreferrer" className={btn}>Facebook <Facebook className="h-5 w-5"/></a><a href="https://www.instagram.com/francineia_magalhaes/" target="_blank" rel="noreferrer" className={btn}>Instagram <Instagram className="h-5 w-5"/></a></div>
      </div></section>

      {/* Como funciona — linha do tempo vertical */}
      <section id="como" className="bg-[#eee5d7] px-5 py-16 text-[#19140e] lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8B6914]">Como funciona</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">Um caminho simples para começar</h2>
        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="absolute bottom-6 left-[27px] top-6 w-[3px] rounded-full bg-gradient-to-b from-[#B8860B] via-[#D4AF37] to-[#F0D878] shadow-[0_0_14px_rgba(212,175,55,.5)] sm:left-1/2 sm:-translate-x-1/2"/>
          <div className="space-y-8">
            {[[MessageCircle,"Converse conosco","Clique no WhatsApp e conte brevemente o que você procura."],[ClipboardList,"Entenda a necessidade","O primeiro contato ajuda a orientar o próximo passo."],[Heart,"Construa seu cuidado","O acompanhamento considera sua realidade e suas necessidades."],[Sparkles,"Avance com segurança","Você segue com orientação e acompanhamento profissional."]].map(([Icon,t,d],i)=>{
              const StepIcon = Icon as LucideIcon;
              return (
              <motion.div key={t as string} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .55, delay: i * .1 }} className={`relative flex items-center gap-5 text-left sm:w-1/2 ${i % 2 === 0 ? "sm:ml-auto sm:pl-12" : "sm:flex-row-reverse sm:pr-12 sm:text-right"}`}>
                <span className={`absolute left-0 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#F0D878] bg-[linear-gradient(135deg,#f3e5ab,#d4af37)] text-[#17110a] shadow-[0_0_22px_rgba(212,175,55,.55)] sm:static ${i % 2 === 0 ? "sm:absolute sm:-left-7 sm:right-auto" : "sm:absolute sm:-right-7 sm:left-auto"}`}><StepIcon className="h-6 w-6"/></span>
                <div className={`ml-20 flex-1 rounded-[1.5rem] border border-[#8B6914]/15 bg-white/80 p-5 shadow-[0_12px_35px_rgba(80,55,10,.08)] backdrop-blur transition hover:-translate-y-1 hover:border-[#D4AF37]/50 sm:ml-0`}>
                  <span className="font-serif text-sm font-bold text-[#C9A227]">Passo 0{i+1}</span>
                  <h3 className="mt-1 font-serif text-2xl">{t as string}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#19140e]/60">{d as string}</p>
                </div>
              </motion.div>
            );})}
          </div>
        </div>
        <a href={wa} target="_blank" rel="noreferrer" className={btn + " mt-10"}>Falar pelo WhatsApp <MessageCircle className="h-5 w-5"/></a></div></section>

      {/* Depoimentos — preto e dourado */}
      <section id="depoimentos" className="overflow-hidden bg-[#070605] py-16 text-white"><div className="mx-auto max-w-7xl px-5 text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#E6C158]">Depoimentos</p><h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl sm:text-5xl text-[#F0D878]">O que dizem sobre o atendimento</h2></div><div className="mt-8 overflow-hidden px-5"><div className="belt flex gap-6">{[...testimonials,...testimonials].map(([name,text],i)=><article key={`${name}-${i}`} className="group flex w-[350px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#0b0907] p-7 text-center shadow-[0_18px_50px_rgba(0,0,0,.5)] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] font-serif text-xl font-bold text-[#17110a] shadow-[0_8px_22px_rgba(212,175,55,.25)]">{(name ?? "?").charAt(0)}</div><h3 className="mt-4 font-serif text-2xl font-bold text-[#F0D878]">{name}</h3><div className="mt-3 flex justify-center gap-1" aria-label="5 estrelas">{[1,2,3,4,5].map(star=><span key={star} className="text-xl leading-none text-[#D4AF37]">★</span>)}</div><p className="mx-auto mt-5 max-w-[290px] text-[15px] leading-7 text-white/70">“{text}”</p></article>)}</div></div><div className="mt-8 text-center"><a href={wa} target="_blank" rel="noreferrer" className={btn}>Quero conversar pelo WhatsApp <MessageCircle className="h-5 w-5"/></a></div></section>

      {/* Localização — clara */}
      <section id="localizacao" className="bg-[#eee5d7] px-5 py-16 text-[#19140e] lg:px-8"><div className="mx-auto max-w-7xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8B6914]">Localização</p><h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Onde encontrar a clínica</h2><p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-[#19140e]/55"><MapPin className="h-5 w-5 shrink-0 text-[#8B6914]"/> Rua Marcelino Brasão, 477 — Curaxi I, Monte Alegre/PA</p><div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[2rem] border border-[#8B6914]/15 shadow-[0_25px_70px_rgba(80,55,10,.14)]"><iframe title="Mapa da clínica Espaço Mente Brilhante" src="https://www.google.com/maps?q=Rua+Marcelino+Brasão,+477,+Curaxi+I,+Monte+Alegre,+Pará,+Brasil&output=embed" className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div><p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#19140e]/65">O Espaço Mente Brilhante está localizado na <span className="font-semibold text-[#8B6914]">Rua Marcelino Brasão, 477, bairro Curaxi I, próximo ao campo do Corinthians, em Monte Alegre/PA</span> — CEP 68220-000. O local é de fácil acesso e oferece estrutura acolhedora para atendimento presencial, sempre com horário combinado previamente.</p><a href="https://www.google.com/maps?q=Rua+Marcelino+Brasão,+477,+Curaxi+I,+Monte+Alegre,+Pará,+Brasil" target="_blank" rel="noreferrer" className={btn + " mt-6"}>Abrir no Google Maps <MapPin className="h-5 w-5"/></a></div></section>

      {/* Dúvidas — escura */}
      <section id="faq" className="bg-[#0b0907] px-5 py-16 text-white lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#E6C158]">Dúvidas</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">Antes de dar o primeiro passo</h2><div className="mt-8 space-y-3 text-left">{faqs.map(([q,a],i)=><div key={q} className="overflow-hidden rounded-2xl border border-[#D4AF37]/18 bg-[#14110d]/70"><button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-semibold"><span>{q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#E6C158] transition ${faq===i?"rotate-180":""}`}/></button><AnimatePresence>{faq===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}><p className="px-6 pb-6 text-sm leading-relaxed text-white/60">{a}</p></motion.div>}</AnimatePresence></div>)}</div><a href={wa} target="_blank" rel="noreferrer" className={btn + " mt-8"}>Tirar minha dúvida pelo WhatsApp <MessageCircle className="h-5 w-5"/></a></div></section>

      {/* CTA final — clara */}
      <section className="relative overflow-hidden bg-[#eee5d7] px-5 py-24 text-[#19140e] lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,105,20,.14),transparent_45%)]"/><div className="relative mx-auto max-w-4xl rounded-[2.5rem] border border-[#8B6914]/20 bg-white/80 px-7 py-14 text-center shadow-[0_20px_60px_rgba(80,55,10,.1)] sm:px-12"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#8B6914]">Seu próximo passo</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Cuidar da mente também é uma forma de cuidar da vida.</h2><p className="mx-auto mt-5 max-w-2xl text-[#19140e]/60">Se você sente que chegou a hora de buscar orientação, fale conosco e saiba como começar.</p><a href={wa} target="_blank" rel="noreferrer" className={btn + " mt-8"}>Agendar atendimento pelo WhatsApp <ArrowRight className="h-5 w-5"/></a></div></section>
    </main>

    <footer className="border-t border-[#D4AF37]/15 bg-[#0d0b08] px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-[1.2fr_.8fr_.8fr] md:text-left"><div><div className="flex items-center justify-center md:justify-start"><img src={logo} alt="Espaço Mente Brilhante — Psicologia e Neuropsicologia" className="h-16 w-auto object-contain" loading="lazy"/></div><p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/45 md:mx-0">Ciência, acolhimento e cuidado para promover compreensão, desenvolvimento e qualidade de vida.</p></div><div><p className="font-semibold text-white">Navegação</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/50"><button onClick={() => go("sobre")}>Quem sou</button><button onClick={() => go("servicos")}>Serviços</button><button onClick={() => go("como")}>Como funciona</button><button onClick={() => go("depoimentos")}>Depoimentos</button><button onClick={() => go("localizacao")}>Localização</button></div></div><div><p className="font-semibold text-white">Fale conosco</p><a href={wa} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 text-sm text-[#E6C158] md:justify-start"><MessageCircle className="h-4 w-4"/> WhatsApp</a><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 text-sm text-white/50 md:justify-start"><Instagram className="h-4 w-4"/> Instagram</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-white/8 pt-7 text-center text-xs text-white/30">© {new Date().getFullYear()} Espaço Mente Brilhante. Todos os direitos reservados.</div></footer>

    <a href={wa} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-50 block h-16 w-16 overflow-hidden rounded-full shadow-[0_12px_35px_rgba(0,0,0,.35)] transition hover:scale-110"><img src={waIcon} alt="" className="h-full w-full object-cover"/></a>
  </div>;
}
