"use client";

import { useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  useEffect(() => {
    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create Particle Effect
    const geometry = new THREE.BufferGeometry();
    const particles = 50000;
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x888888,
      size: 2,
      sizeAttenuation: true,
    });

    const particlesSystem = new THREE.Points(geometry, material);
    scene.add(particlesSystem);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesSystem.rotation.x += 0.0001;
      particlesSystem.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No visible JSX needed, it's just rendering the Three.js scene
};

export default ThreeBackground;
