import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import '../../styles/PhotoGrid.css';

import vignette1 from "../../assets/images/vignettes/1.webp";
import vignette2 from "../../assets/images/vignettes/2.webp";
import vignette3 from "../../assets/images/vignettes/3.webp";
import vignette4 from "../../assets/images/vignettes/4.webp";
import vignette5 from "../../assets/images/vignettes/5.webp";
import vignette6 from "../../assets/images/vignettes/6.webp";
import vignette7 from "../../assets/images/vignettes/7.webp";
import vignette8 from "../../assets/images/vignettes/8.webp";
import vignette9 from "../../assets/images/vignettes/9.webp";
import vignette10 from "../../assets/images/vignettes/10.webp";
import vignette11 from "../../assets/images/vignettes/11.webp";
import vignette14 from "../../assets/images/vignettes/12.webp";
import vignette15 from "../../assets/images/vignettes/13.webp";
import vignette16 from "../../assets/images/vignettes/14.webp";
import vignette17 from "../../assets/images/vignettes/15.webp";
import vignette18 from "../../assets/images/vignettes/16.webp";
import vignette19 from "../../assets/images/vignettes/17.webp";

gsap.registerPlugin(ScrollTrigger);

const PhotoGrid = () => {
  const gridRef = useRef(null);
  const lenis = useLenis();

  const photos = [
    vignette1,
    vignette2,
    vignette3,
    vignette4,
    vignette5,
    vignette6,
    vignette7,
    vignette8,
    vignette9,
    vignette10,
    vignette11,
    vignette14,
    vignette15,
    vignette16,
    vignette17,
    vignette18,
    vignette19
  ];
  
  const totalItems = photos.length;
  
  // Pré-calculer les valeurs aléatoires pour chaque item
  const zValues = Array.from({ length: totalItems }, () => gsap.utils.random(-1600,200));
  const xStartValues = Array.from({ length: totalItems }, () => gsap.utils.random(-1000,-500));
  const xEndValues = Array.from({ length: totalItems }, () => gsap.utils.random(500,1000));

  const applyAnimation = (grid) => {
    const gridWrap = grid.querySelector('.grid-wrap');
    const gridItems = grid.querySelectorAll('.grid__item');
    const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));

    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: gridWrap,
        start: 'top bottom+=5%',
        end: 'bottom top-=5%',
        scrub: true
      }
    });

    const disappearTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: gridWrap,
        start: 'center center',
        end: 'bottom top',
        scrub: true
      }
    });

    grid.style.setProperty('--perspective', '1000px');
    grid.style.setProperty('--grid-inner-scale', '0.5');

    timeline
      .set(gridWrap, {
        rotationY: 25
      })
      .set(gridItems, {
        z: (i) => zValues[i]
      })
      .fromTo(gridItems, {
        xPercent: (i) => xStartValues[i]
      }, {
        xPercent: (i) => xEndValues[i]
      }, 0)
      .fromTo(gridItemsInner, {
        scale: 2
      }, {
        scale: 0.5
      }, 0);

    disappearTimeline.to(gridItems, {
      opacity: 0,
      scale: 0,
      yPercent: -100,
      stagger: {
        amount: 0.5,
        from: "random"
      }
    });
  };

  // Configurer ScrollTrigger avec Lenis via scrollerProxy
  useLayoutEffect(() => {
    if (!lenis) return;

    // Définir ScrollTrigger pour utiliser Lenis comme scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    // Boucle requestAnimationFrame pour synchroniser Lenis & ScrollTrigger
    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [lenis]);

  // Charger les images avant d'appliquer l'animation
  useEffect(() => {
    if (!gridRef.current) return;

    imagesLoaded(gridRef.current, { background: true }, () => {
      applyAnimation(gridRef.current);
      // Actualiser ScrollTrigger après l'initialisation de l'animation
      ScrollTrigger.refresh();
    });
  }, [gridRef]);

  return (
    <div className="content">
      <div className="grid" ref={gridRef}>
        <div className="grid-wrap">
          {Array.from({ length: totalItems }).map((_, i) => (
            <div key={i} className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: `url(${photos[i]})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PhotoGrid;