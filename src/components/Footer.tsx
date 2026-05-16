import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter mb-2">
              LÉO<span className="text-accent">DROLET</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Léo Drolet. Créateur d'expériences numériques d'élite.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>

          <div className="flex gap-6 text-xs font-medium text-gray-500">
            <a href="#home" className="hover:text-white transition-colors">Accueil</a>
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
