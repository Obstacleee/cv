import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, OrbitControls } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

const SkillNode = ({ position, label, size, color }: { position: [number, number, number], label: string, size: number, color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Make nodes "breathe" slightly
      ref.current.scale.setScalar(
        1 + Math.sin(state.clock.getElapsedTime() * 0.5 + position[0]) * 0.05
      );
    }
  });
  
  return (
    <group position={position}>
      <Sphere ref={ref} args={[size, 16, 16]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.7} 
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Text
        position={[0, -size - 0.3, 0]}
        fontSize={0.35}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const SkillsNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  // Define skills with positions in 3D space
  const skills = [
    { label: 'Moi', position: [0, 0, 0], size: 1.2, color: '#3B82F6' },
    { label: 'Rust', position: [-3, 1, -1], size: 0.9, color: '#8B5CF6' },
    { label: 'React', position: [2.5, -1.5, 1], size: 0.8, color: '#8B5CF6' },
    { label: 'Flask', position: [-2, -2, 2], size: 0.7, color: '#3B82F6' },
    { label: 'Pandas', position: [3, 2, -2], size: 0.8, color: '#3B82F6' },
    { label: 'Python', position: [1, 3, 1], size: 0.6, color: '#8B5CF6' },
    { label: 'Mysql', position: [-3, -1, -3], size: 0.6, color: '#8B5CF6' },
    { label: 'InfluxDB', position: [0, -3, -1], size: 0.7, color: '#3B82F6' },
  ];
  
  // Connect nodes with lines
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [1, 2], [1, 4], [2, 5], [3, 7], [4, 6]
  ];
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Skill nodes */}
      {skills.map((skill, i) => (
        <SkillNode
          key={i}
          position={skill.position}
          label={skill.label}
          size={skill.size}
          color={skill.color}
        />
      ))}
      
      {/* Connections between skills */}
      {connections.map(([i, j], index) => {
        const start = new THREE.Vector3(...skills[i].position);
        const end = new THREE.Vector3(...skills[j].position);
        
        const points = [start, end];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={`line-${index}`} geometry={lineGeometry}>
            <lineBasicMaterial 
              color={theme === 'dark' ? '#4B5563' : '#9CA3AF'} 
              opacity={0.4} 
              transparent 
              linewidth={1} 
            />
          </line>
        );
      })}
    </group>
  );
};

const SkillsCanvas = () => {
  const { theme } = useTheme();
  
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SkillsNetwork />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      
      {/* Background gradient */}
      <color 
        attach="background" 
        args={[theme === 'dark' ? '#0F172A' : '#EFF6FF']} 
      />
    </Canvas>
  );
};

export default SkillsCanvas;