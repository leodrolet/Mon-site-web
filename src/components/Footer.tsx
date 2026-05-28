import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Props {
  onOpenPrivacy: () => void;
  onOpenMentions: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenMentions }: Props) => (
  <footer className="border-t border-white/[0.06] py-10 bg-primary">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <div className="text-base font-bold tracking-tighter mb-1">
            NOVIO<span className="text-accent">STUDIO</span>
          </div>
          <p className="font-mono text-[10px] text-[#333]">
            © 2026 · Gatineau, Québec
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a href="#" aria-label="GitHub" className="text-[#333] hover:text-[#777] transition-colors">
            <Github size={17} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-[#333] hover:text-[#777] transition-colors">
            <Linkedin size={17} />
          </a>
          <a href="#contact" aria-label="Email" className="text-[#333] hover:text-[#777] transition-colors">
            <Mail size={17} />
          </a>
        </div>

        {/* Legal + nav */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-[10px] text-[#333]">
          <a href="#home" className="hover:text-[#777] transition-colors">Accueil</a>
          <a href="#contact" className="hover:text-[#777] transition-colors">Contact</a>
          <button onClick={onOpenPrivacy} className="hover:text-[#777] transition-colors">Confidentialité</button>
          <button onClick={onOpenMentions} className="hover:text-[#777] transition-colors">Mentions légales</button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-white/[0.04]">
        <p className="font-mono text-[10px] text-[#222] text-center uppercase tracking-[0.2em]">
          Zones desservies · Gatineau · Hull · Aylmer · Ottawa · Kanata · Orléans · Outaouais
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
