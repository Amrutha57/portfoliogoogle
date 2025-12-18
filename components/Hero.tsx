
/// <reference types="@react-three/fiber" />
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const FluidShader = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree();
  
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2() },
    u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    u_isDark: { value: isDarkMode ? 1.0 : 0.0 }
  }), []);

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_isDark.value = isDarkMode ? 1.0 : 0.0;
    }
  }, [isDarkMode]);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.u_time.value = clock.getElapsedTime();
        material.uniforms.u_mouse.value.lerp(new THREE.Vector2(mouse.x, mouse.y), 0.05);
        material.uniforms.u_resolution.value.set(size.width, size.height);
      }
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_isDark;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      vec2 st = vUv;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 mousePos = vec2(u_mouse.x * aspect * 0.5 + 0.5, u_mouse.y * 0.5 + 0.5);
      
      float d = distance(st, mousePos);
      float noise = random(st * 800.0 + u_time * 0.05);
      float color = smoothstep(0.35, 0.45, d + noise * 0.08);
      
      float final;
      if (u_isDark > 0.5) {
        final = 1.0 - color;
      } else {
        final = color;
      }
      
      float scanline = sin(st.y * 600.0 + u_time * 1.5) * 0.015;
      
      if (u_isDark > 0.5) {
        gl_FragColor = vec4(vec3(final * 0.15 + scanline), 1.0);
      } else {
        gl_FragColor = vec4(vec3(1.0 - (final * 0.04) + scanline), 1.0);
      }
    }
  `;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

const Hero: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <section className={`relative h-screen w-full flex items-center justify-center overflow-hidden border-b transition-colors duration-700 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <FluidShader isDarkMode={isDarkMode} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-blue-500/20 rounded-full animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-blue-500">
                System_Online // Core_Active
            </span>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-extralight tracking-tighter leading-none mb-8 transition-transform hover:scale-[1.02] cursor-default">
          AMRUTHA<br/>LAKSHMI
        </h1>
        
        <p className={`text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
          Synthesizing logic and aesthetics. Specialized in 
          computational intelligence and high-fidelity interfaces.
        </p>
        
        <div className="mt-16 flex justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center group cursor-crosshair">
                <span className={`mono text-[9px] mb-2 transition-colors ${isDarkMode ? 'text-neutral-600 group-hover:text-blue-400' : 'text-neutral-400 group-hover:text-blue-600'}`}>DOMAIN</span>
                <span className="mono text-[11px] font-light">AI_AGENT_SYS</span>
            </div>
            <div className="flex flex-col items-center group cursor-crosshair">
                <span className={`mono text-[9px] mb-2 transition-colors ${isDarkMode ? 'text-neutral-600 group-hover:text-blue-400' : 'text-neutral-400 group-hover:text-blue-600'}`}>TECH</span>
                <span className="mono text-[11px] font-light">PYTHON/REACT</span>
            </div>
            <div className="flex flex-col items-center group cursor-crosshair">
                <span className={`mono text-[9px] mb-2 transition-colors ${isDarkMode ? 'text-neutral-600 group-hover:text-blue-400' : 'text-neutral-400 group-hover:text-blue-600'}`}>LOCATION</span>
                <span className="mono text-[11px] font-light">IN_AP_VZA</span>
            </div>
        </div>
      </div>
      
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 p-12 hidden lg:block opacity-20 mono text-[8px] vertical-text tracking-[1em] uppercase">
        Amrutha_Lakshmi_Archive_2024
      </div>
    </section>
  );
};

export default Hero;
