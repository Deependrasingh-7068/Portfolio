import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDCard = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b132b);

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Card Geometry
    const geometry = new THREE.BoxGeometry(3.5, 2, 0.1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6f00 });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      card.rotation.y += 0.01;
      card.rotation.x += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '400px',
        margin: '0 auto',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeDCard;
