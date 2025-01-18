import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  // Références pour les éléments à animer
  const galerieRef = useRef(null);
  const boxRefs = useRef<any>([]);

  useLayoutEffect(() => {
    // Création du contexte GSAP
    const ctx = gsap.context(() => {
      // Animation de la galerie
      gsap.from('.galerie .box', {
        scrollTrigger: {
          trigger: '.galerie',
          start: 'top center', // Commence quand le haut de la galerie atteint le centre
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          // markers: true, // Utile pour le debugging
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

     // Animation du compteur
    //   gsap.from('.conteur-item', {
    //     scrollTrigger: {
    //       trigger: '.conteur',
    //       start: 'top center',
    //     },
    //     y: 50,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: 0.3
    //   });
    });

    // Nettoyage
    return () => ctx.revert();
  }, []);

  return (
    
      <div className="container w-screen  h-96 text-black mt-5">
        <div className="galerie flex gap-10 justify-center items-center mt-10">
            <div className="w-40 h-40 bg-black box teal" ref={el => boxRefs.current[0] = el}></div>
            <div className="w-40 h-40 bg-black box orange" ref={el => boxRefs.current[1] = el}></div>
            <div className="w-40 h-40 bg-black box pink" ref={el => boxRefs.current[2] = el}></div>
            <div className="w-40 h-40 bg-black box red" ref={el => boxRefs.current[3] = el}></div>
        </div>

        <div className="conteur ">
            <div className="conteur-item flex flex-col gap-5 m-auto  content-center">
                <span className="nombre text-black">100</span>
                <span className="libelle">Clients</span>
            </div>
        {/* Autres éléments du compteur */}
      </div>
      </div>
    
  );
};

export default Animation;