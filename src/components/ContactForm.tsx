import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown, Clock, Shield, Zap, MessageSquare } from 'lucide-react';

// ── Validation ──────────────────────────────────────────────────────────────
const rules: Record<string, (v: string) => string> = {
  full_name:   v => v.trim().length < 2      ? 'Veuillez entrer votre nom complet.' : '',
  email:       v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Adresse email invalide.',
  phone:       v => v.replace(/\D/g, '').length < 8 ? 'Numéro de téléphone invalide.' : '',
  company:     v => v.trim().length < 2      ? "Veuillez entrer un nom d'entreprise." : '',
  description: v => v.trim().length < 20     ? 'Décrivez votre projet (20 caractères min.).' : '',
};

const validate = (name: string, value: string) => rules[name]?.(value) ?? '';

// ── Field components ─────────────────────────────────────────────────────────
const fieldBase = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg bg-black/30 border text-white outline-none transition-all placeholder:text-[#444] text-sm ${
    hasError
      ? 'border-red-500/70 focus:border-red-400 focus:ring-2 focus:ring-red-500/20'
      : 'border-white/[0.1] focus:border-accent focus:ring-2 focus:ring-accent/20'
  }`;

const FieldError = ({ msg }: { msg: string }) => (
  <motion.p
    initial={{ opacity: 0, y: -4 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-xs text-red-400 mt-1 ml-1"
  >
    {msg}
  </motion.p>
);

// ── Main component ────────────────────────────────────────────────────────────
const INITIAL = {
  full_name: '', email: '', phone: '', company: '',
  site_type: 'Landing Page', description: '',
};

const ContactForm = () => {
  const [fields, setFields]       = useState(INITIAL);
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [touched, setTouched]     = useState<Record<string, boolean>>({});
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (touched[name]) setErrors(err => ({ ...err, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required = ['full_name', 'email', 'phone', 'company', 'description'];
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    let hasError = false;

    required.forEach(name => {
      newTouched[name] = true;
      newErrors[name] = validate(name, fields[name as keyof typeof fields]);
      if (newErrors[name]) hasError = true;
    });

    setTouched(t => ({ ...t, ...newTouched }));
    setErrors(err => ({ ...err, ...newErrors }));
    if (hasError) return;

    setLoading(true);
    setServerError(null);

    try {
      const res = await fetch('https://formspree.io/f/xykvgwnz', {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
      if (res.ok) { setSubmitted(true); }
      else setServerError('Une erreur est survenue. Veuillez réessayer.');
    } catch {
      setServerError('Erreur de connexion. Vérifiez votre internet.');
    } finally {
      setLoading(false);
    }
  };

  const trustItems = [
    { icon: <Clock size={15} className="text-accent" />, text: 'Réponse garantie sous 24h' },
    { icon: <Shield size={15} className="text-accent" />, text: 'Devis 100 % gratuit' },
    { icon: <Zap size={15} className="text-accent" />, text: 'Livraison en 14 jours' },
    { icon: <MessageSquare size={15} className="text-accent" />, text: 'Sans engagement' },
  ];

  // Success screen
  if (submitted) {
    return (
      <section id="contact" className="py-32 border-t border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-secondary border border-white/[0.07] p-14 rounded-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
              className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 size={32} className="text-green-400" />
            </motion.div>
            <h3 className="font-display text-3xl text-white mb-3">Demande envoyée !</h3>
            <p className="text-[#777] mb-2">Je reviens vers vous sous <span className="text-white font-semibold">24h</span> avec une proposition adaptée à votre projet.</p>
            <p className="text-[#555] text-sm mb-8">Vérifiez vos spams si vous ne recevez rien.</p>
            <button
              onClick={() => { setSubmitted(false); setFields(INITIAL); setTouched({}); setErrors({}); }}
              className="px-7 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm"
            >
              Envoyer une autre demande
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] text-[#444] tracking-[0.3em]">07</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="font-mono text-[10px] text-[#444] uppercase tracking-[0.3em]">Contact</span>
        </motion.div>

        {/* Header */}
        <div className="grid md:grid-cols-[7fr_5fr] gap-8 mb-16 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-white"
          >
            Démarrons votre projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#666] text-base leading-relaxed"
          >
            Remplissez le formulaire et recevez une proposition personnalisée sous 24h.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[5fr_7fr] gap-8 items-start">

          {/* Left — dynamic panel */}
          {(() => {
            const firstName = fields.full_name.trim().split(' ')[0];
            const hasName    = fields.full_name.trim().length >= 2;
            const hasCompany = fields.company.trim().length >= 2;
            const hasDesc    = fields.description.trim().length >= 5;
            const priceMap: Record<string, string> = {
              'Landing Page': '999 $',
              'Site Vitrine': '1 899 $',
              'Site Web Complet': '3 999 $',
              'Refonte Complète': '3 699 $',
            };
            const price = priceMap[fields.site_type] ?? 'Sur devis';

            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary border border-white/[0.07] rounded-xl p-8 space-y-6 sticky top-24"
              >
                {/* Greeting / header */}
                <div className="min-h-[56px]">
                  <AnimatePresence mode="wait">
                    {hasName ? (
                      <motion.h3
                        key="greeting"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="font-display text-xl text-white mb-1"
                      >
                        Bonjour, {firstName} !
                      </motion.h3>
                    ) : (
                      <motion.h3
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-display text-xl text-white mb-1"
                      >
                        Parlons de votre projet
                      </motion.h3>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {hasCompany ? (
                      <motion.p
                        key="company"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[#666] text-sm"
                      >
                        {fields.company}
                      </motion.p>
                    ) : (
                      <p className="text-[#555] text-sm">
                        Chaque projet commence par une conversation.
                      </p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project card — updates live */}
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-mono text-[10px] text-[#444] uppercase tracking-[0.2em] mb-1">Projet</p>
                      <p className="text-white text-sm font-medium">{fields.site_type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] text-[#444] uppercase tracking-[0.2em] mb-1">À partir de</p>
                      <p className="text-accent font-semibold text-sm">{price}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hasDesc && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-3 border-t border-white/[0.06]"
                      >
                        <p className="font-mono text-[10px] text-[#444] uppercase tracking-[0.2em] mb-1">Description</p>
                        <p className="text-[#666] text-xs leading-relaxed line-clamp-3">
                          {fields.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Trust items */}
                <ul className="space-y-3">
                  {trustItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#888]">
                      <span className="w-7 h-7 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })()}

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary border border-white/[0.07] rounded-xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="full_name" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2 block">Nom complet *</label>
                  <input
                    id="full_name" name="full_name" type="text" value={fields.full_name}
                    onChange={onChange}
                    placeholder="Jean Tremblay"
                    className={fieldBase(!!(errors.full_name && touched.full_name))}
                  />
                  <AnimatePresence>{errors.full_name && touched.full_name && <FieldError msg={errors.full_name} />}</AnimatePresence>
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2 block">Email *</label>
                  <input
                    id="email" name="email" type="email" value={fields.email}
                    onChange={onChange}
                    placeholder="jean@entreprise.com"
                    className={fieldBase(!!(errors.email && touched.email))}
                  />
                  <AnimatePresence>{errors.email && touched.email && <FieldError msg={errors.email} />}</AnimatePresence>
                </div>
              </div>

              {/* Row 2: Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2 block">Téléphone *</label>
                  <input
                    id="phone" name="phone" type="tel" value={fields.phone}
                    onChange={onChange}
                    placeholder="514 000-0000"
                    className={fieldBase(!!(errors.phone && touched.phone))}
                  />
                  <AnimatePresence>{errors.phone && touched.phone && <FieldError msg={errors.phone} />}</AnimatePresence>
                </div>
                <div>
                  <label htmlFor="company" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2 block">Entreprise *</label>
                  <input
                    id="company" name="company" type="text" value={fields.company}
                    onChange={onChange}
                    placeholder="Ma Compagnie Inc."
                    className={fieldBase(!!(errors.company && touched.company))}
                  />
                  <AnimatePresence>{errors.company && touched.company && <FieldError msg={errors.company} />}</AnimatePresence>
                </div>
              </div>

              {/* Row 3: Type de projet */}
              <div>
                <label htmlFor="site_type" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em] mb-2 block">Type de projet</label>
                <div className="relative">
                  <select
                    id="site_type" name="site_type" value={fields.site_type}
                    onChange={onChange}
                    className={`${fieldBase(false)} appearance-none pr-10 cursor-pointer`}
                  >
                    <option>Landing Page</option>
                    <option>Site Web Complet</option>
                    <option>Site Vitrine</option>
                    <option>Refonte Complète</option>
                    <option>Autre</option>
                  </select>
                  <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none" />
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="description" className="font-mono text-[10px] text-[#555] uppercase tracking-[0.2em]">Description du projet *</label>
                  <span className={`font-mono text-[10px] ${fields.description.length > 400 ? 'text-accent' : 'text-[#444]'}`}>
                    {fields.description.length} / 500
                  </span>
                </div>
                <textarea
                  id="description" name="description" value={fields.description}
                  onChange={onChange}
                  maxLength={500} rows={4}
                  placeholder="Décrivez vos objectifs, vos fonctionnalités souhaitées et vos inspirations..."
                  className={`${fieldBase(!!(errors.description && touched.description))} resize-none`}
                />
                <AnimatePresence>{errors.description && touched.description && <FieldError msg={errors.description} />}</AnimatePresence>
              </div>

              {/* Server error */}
              <AnimatePresence>
                {serverError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-300 text-sm text-center"
                  >
                    {serverError}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all text-white text-sm ${
                  loading
                    ? 'bg-[#333] cursor-not-allowed'
                    : 'bg-accent hover:bg-orange-600'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  <>Envoyer ma demande <Send size={16} /></>
                )}
              </button>

              <p className="text-center text-[#444] text-xs">
                Vos informations sont confidentielles et ne seront jamais partagées.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
