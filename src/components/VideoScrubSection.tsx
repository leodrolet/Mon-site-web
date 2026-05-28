import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoScrubSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for video metadata to load to get the duration
    const initScrub = () => {
      const duration = video.duration;

      // Timeline for scrubbing and text animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: true,
        },
      });

      // Animate video currentTime
      tl.to(video, {
        currentTime: duration,
        ease: 'none',
      }, 0);

      // Animate overlay/text
      tl.fromTo(overlayRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.2 },
        0.1
      ).to(overlayRef.current,
        { opacity: 0, y: -50, duration: 0.2 },
        0.8
      );
    };

    if (video.readyState >= 1) {
      initScrub();
    } else {
      video.addEventListener('loadedmetadata', initScrub);
    }

    return () => {
      video.removeEventListener('loadedmetadata', initScrub);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/videos/animation.mp4"
        muted
        playsInline
        preload="auto"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center pointer-events-none"
      >
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            L'art du <span className="text-gradient">mouvement</span> numérique
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Fusionner l'esthétique visuelle et la performance technique pour créer des expériences web immersives et mémorables.
          </p>
        </div>
      </div>

      {/* Gradient overlay for smooth transition from previous/next sections */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary via-transparent to-primary" />
    </section>
  );
};

export default VideoScrubSection;
