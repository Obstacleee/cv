import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Fonction de secours si le contexte n'est pas disponible
const useThemeFallback = () => {
  const [theme, setTheme] = useState(() => {
    // Détecte la préférence système si disponible
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Défaut
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  return { theme };
};

// Composant des particules
const ParticleSystem = () => {
  let themeHook;

  // Essaye d'utiliser le contexte de thème, sinon utilise le fallback
  try {
    const { useTheme } = require('../../context/ThemeContext');
    themeHook = useTheme();
  } catch (error) {
    themeHook = useThemeFallback();
  }

  const { theme } = themeHook;

  const pointsRef = useRef();
  const linesRef = useRef();

  // Création des particules et connexions en une seule fois (mémorisées)
  const [particles, connections] = useMemo(() => {
    // Générer des positions aléatoires sur une sphère
    const count = 120;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const points = [];

    for (let i = 0; i < count; i++) {
      // Distribution uniforme sur une sphère
      const radius = 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      sizes[i] = Math.random() * 1.5 + 0.5;

      points.push(new THREE.Vector3(x, y, z));
    }

    // Créer les connexions entre points proches
    const linePositions = [];
    const maxConnections = 180;
    const maxDistance = 6;

    let connectionCount = 0;

    for (let i = 0; i < count && connectionCount < maxConnections; i++) {
      for (let j = i + 1; j < count && connectionCount < maxConnections; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < maxDistance) {
          linePositions.push(points[i].x, points[i].y, points[i].z);
          linePositions.push(points[j].x, points[j].y, points[j].z);
          connectionCount++;
        }
      }
    }

    return [
      { positions, sizes },
      new Float32Array(linePositions)
    ];
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.1;
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    }

    if (linesRef.current) {
      linesRef.current.rotation.y = time * 0.1;
      linesRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    }
  });

  const particleColor = theme === 'dark' ? '#4B8BFF' : '#3B82F6';
  const lineColor = theme === 'dark' ? '#6366F1' : '#818CF8';

  return (
      <>
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={particles.positions.length / 3}
                array={particles.positions}
                itemSize={3}
            />
            <bufferAttribute
                attach="attributes-size"
                count={particles.sizes.length}
                array={particles.sizes}
                itemSize={1}
            />
          </bufferGeometry>
          <pointsMaterial
              size={0.5}
              sizeAttenuation={true}
              color={particleColor}
              transparent
              opacity={0.8}
              depthWrite={false}
          />
        </points>

        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={connections.length / 3}
                array={connections}
                itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
              color={lineColor}
              transparent
              opacity={0.4}
              depthWrite={false}
          />
        </lineSegments>
      </>
  );
};

// Composant principal
const HeroCanvas = () => {
  let themeHook;

  // Essaye d'utiliser le contexte de thème, sinon utilise le fallback
  try {
    const { useTheme } = require('../../context/ThemeContext');
    themeHook = useTheme();
  } catch (error) {
    themeHook = useThemeFallback();
  }

  const { theme } = themeHook;

  const backgroundColor = theme === 'dark'
      ? 'radial-gradient(circle at center, #1E1E25 0%, #111827 100%)'
      : 'radial-gradient(circle at center, #F9FAFB 0%, #EFF6FF 100%)';

  return (
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Canvas
            camera={{ position: [0, 0, 20], fov: 60 }}
            dpr={[1, 2]}
            style={{
              width: '100%',
              height: '100%',
              background: backgroundColor,
            }}
        >
          <ambientLight intensity={0.5} />
          <ParticleSystem />
          <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.2}
              enableDamping
              dampingFactor={0.05}
          />
        </Canvas>
      </div>
  );
};

export default HeroCanvas;
