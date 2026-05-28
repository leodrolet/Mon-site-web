import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Props {
  onOpenPrivacy: () => void;
  onOpenMentions: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenMentions }: Props) => (
  <footer className="border-t border-white/[0.06] py-10 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <div className="text-base font-black tracking-[-0.03em] mb-1">
            NOVIO<span className="text-accent">STUDIO</span>
          </div>
          <p className="text-[11px] text-gray-700">
            © 2026 · Gatineau, Québec
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a href="#" aria-label="GitHub" className="text-gray-700 hover:text-gray-400 transition-colors">
            <Github size={17} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-400 transition-colors">
            <Linkedin size={17} />
          </a>
          <a href="#contact" aria-label="Email" className="text-gray-700 hover:text-gray-400 transition-colors">
            <Mail size={17} />
          </a>
        </div>

        {/* Legal + nav */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] text-gray-700">
          <a href="#home" className="hover:text-gray-400 transition-colors">Accueil</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          <button onClick={onOpenPrivacy} className="hover:text-gray-400 transition-colors">Confidentialité</button>
          <button onClick={onOpenMentions} className="hover:text-gray-400 transition-colors">Mentions légales</button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-white/[0.04]">
        <p className="text-[10px] text-gray-800 text-center uppercase tracking-[0.2em]">
          Zones desservies · Gatineau · Hull · Aylmer · Ottawa · Kanata · Orléans · Outaouais
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
