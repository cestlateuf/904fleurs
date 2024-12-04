import React, { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import '../../styles/PhotoGrid.css';
import vignette1 from "../../assets/images/vignettes/1.png";
import vignette2 from "../../assets/images/vignettes/2.png";
import vignette3 from "../../assets/images/vignettes/3.png";
import vignette4 from "../../assets/images/vignettes/4.png";
import vignette5 from "../../assets/images/vignettes/5.png";
import vignette6 from "../../assets/images/vignettes/6.png";
import vignette7 from "../../assets/images/vignettes/7.png";
import vignette8 from "../../assets/images/vignettes/8.png";
import vignette9 from "../../assets/images/vignettes/5-min.gif";
import vignette10 from "../../assets/images/vignettes/5_1-min.gif";
import vignette11 from "../../assets/images/vignettes/5_2-min.gif";
import vignette12 from "../../assets/images/vignettes/nass_shop-min.gif";
import vignette13 from "../../assets/images/vignettes/nass_shop_1-min.gif";
import vignette14 from "../../assets/images/vignettes/3-min.gif";


gsap.registerPlugin(ScrollTrigger);

const getGrid = selector => {
  let elements = gsap.utils.toArray(selector),
    bounds,
    getSubset = (axis, dimension, alternating, merge) => {
      let a = [], 
        subsets = {},
        onlyEven = alternating === "even",
        p;
      bounds.forEach((b, i) => {
        let position = Math.round(b[axis] + b[dimension] / 2),
          subset = subsets[position];
        subset || (subsets[position] = subset = []);
        subset.push(elements[i]);
      });
      for (p in subsets) {
        a.push(subsets[p]);
      }
      if (onlyEven || alternating === "odd") {
        a = a.filter((el, i) => !(i % 2) === onlyEven);
      }
      if (merge) {
        let a2 = [];
        a.forEach(subset => a2.push(...subset));
        return a2;
      }
      return a;
    };
  elements.refresh = () => bounds = elements.map(el => el.getBoundingClientRect());
  elements.columns = (alternating, merge) => getSubset("left", "width", alternating, merge);
  elements.rows = (alternating, merge) => getSubset("top", "height", alternating, merge);
  elements.refresh();

  return elements;
};

const PhotoGrid = () => {
  const gridRef = useRef(null);
  const lenis = useLenis();

  const applyAnimation = (grid, animationType) => {
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
        scrub: true,
        // markers: true, // Uncomment to see the trigger points
      }
    });

    grid.style.setProperty('--perspective', '1000px');
    grid.style.setProperty('--grid-inner-scale', '0.5');

    timeline
      .set(gridWrap, {
        rotationY: 25
      })
      .set(gridItems, {
        z: () => gsap.utils.random(-1600,200)
      })
      .fromTo(gridItems, {
        xPercent: () => gsap.utils.random(-1000,-500)
      }, {
        xPercent: () => gsap.utils.random(500,1000)
      }, 0)
      .fromTo(gridItemsInner, {
        scale: 2
      }, {
        scale: .5
      }, 0);
      disappearTimeline
      .to(gridItems, {
        opacity: 0,
        scale: 0,
        yPercent: -100,
        stagger: {
          amount: 0.5,
          from: "random"
        }
      });
  };


  useEffect(() => {
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }
    imagesLoaded(gridRef.current, { background: true }, () => {
      applyAnimation(gridRef.current, 'type1');
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [lenis]);

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
    vignette12,
    vignette13,
    vignette14
  ];

  return (

      <div className="content">
        <div className="grid" ref={gridRef}>
          <div className="grid-wrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="grid__item">
                <div 
                  className="grid__item-inner" 
                  style={{
                    backgroundImage: `url(${photos[i]})`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
export default PhotoGrid;