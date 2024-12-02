import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { ShaderMaterial, UniformsUtils, ShaderLib, TextureLoader } from 'three';

// Import cloud textures
import cloudTexture1 from '../../assets/images/1.jpg';
import cloudTexture2 from '../../assets/images/2.jpg';

const fragmentShader = `
  uniform sampler2D uTxtShape;
  uniform sampler2D uTxtCloudNoise;
  uniform float uTime;
  uniform float uFac1;
  uniform float uFac2;
  uniform float uTimeFactor1;
  uniform float uTimeFactor2;
  uniform float uDisplStrenght1;
  uniform float uDisplStrenght2;
  varying vec2 vUv;

  void main() {
    vec2 newUv = vUv;
    
    vec4 txtNoise1 = texture2D(uTxtCloudNoise, vec2(vUv.x + uTime * 0.0001, vUv.y - uTime * 0.00014));
    vec4 txtNoise2 = texture2D(uTxtCloudNoise, vec2(vUv.x - uTime * 0.00002, vUv.y + uTime * 0.000017 + 0.2));
    
    float noiseBig = (sin(uTime * uTimeFactor1 + vUv.x * uFac1) + sin(uTime * uTimeFactor1 + vUv.y * uFac1)) * 0.5;
    newUv += noiseBig * uDisplStrenght1;
    
    float noiseSmall = (sin(uTime * uTimeFactor2 + newUv.x * uFac2) + sin(uTime * uTimeFactor2 + newUv.y * uFac2)) * 0.5;
    newUv += noiseSmall * uDisplStrenght2;
    
    vec4 txtShape = texture2D(uTxtShape, newUv);
    float alpha = ((txtNoise1 + txtNoise2) * 0.6).r;
    alpha *= txtShape.r;
    
    gl_FragColor = vec4(vec3(1.0, 1.0, 1.0), alpha * 0.9);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export function Cloud({ size }) {
  const mesh = useRef();
  const [width, height] = size;

  const textureLoader = useMemo(() => new TextureLoader(), []);
  const [texture1, texture2] = useMemo(() => {
    return [
      textureLoader.load(cloudTexture1),
      textureLoader.load(cloudTexture2)
    ];
  }, [textureLoader]);

  const material = useMemo(() => {
    const uniforms = {
      ...UniformsUtils.clone(ShaderLib.sprite.uniforms),
      uTime: { value: 0 },
      uTxtShape: { value: texture1 },
      uTxtCloudNoise: { value: texture2 },
      uFac1: { value: 18.0 },
      uFac2: { value: 2.7 },
      uTimeFactor1: { value: 0.002 },
      uTimeFactor2: { value: 0.0015 },
      uDisplStrenght1: { value: 0.08 },
      uDisplStrenght2: { value: 0.12 },
    };

    return new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });
  }, [texture1, texture2]);

  useFrame(() => {
    if (material) {
      material.uniforms.uTime.value += 1;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0.3, 0]}
      scale={[width, height, 1]}
    >
      <planeGeometry args={[1.0, 1.0, 5, 5]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}