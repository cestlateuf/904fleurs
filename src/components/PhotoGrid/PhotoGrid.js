import React, { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import '../../styles/PhotoGrid.css';

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
  // grid.style.setProperty('--grid-width', '105%');
	// 		grid.style.setProperty('--grid-columns', '8');
	// 		grid.style.setProperty('--perspective', '1500px');
	// 		grid.style.setProperty('--grid-inner-scale', '0.5');
			
	// 		timeline
	// 		.set(gridItems, {
	// 			transformOrigin: '50% 0%',
	// 			z: () => gsap.utils.random(-5000,-2000),
	// 			rotationX: () => gsap.utils.random(-65,-25),
	// 			filter: 'brightness(0%)'
	// 		})	
	// 		.to(gridItems, {
	// 			xPercent: () => gsap.utils.random(-150,150),
	// 			yPercent: () => gsap.utils.random(-300,300),
	// 			rotationX: 0,
	// 			filter: 'brightness(200%)'
	// 		}, 0)
	// 		.to(gridWrap, {
	// 			z: 6500
	// 		}, 0)
	// 		.fromTo(gridItemsInner, {
	// 			scale: 2
	// 		}, {
	// 			scale: 0.5
	// 		}, 0);
  //   }


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

  return (

      <div className="content">
        <div className="grid" ref={gridRef}>
          <div className="grid-wrap">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="grid__item">
                <div 
                  className="grid__item-inner" 
                  style={{
                    backgroundImage: `url(https://picsum.photos/400/300?random=${i})`
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