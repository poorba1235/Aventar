// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ImageTo3D = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene, Camera, Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Load Texture (Height Map Image)
//     const textureLoader = new THREE.TextureLoader();
//     const heightMap = textureLoader.load('/Images/boy.jpg', (texture) => {
//       // Create a PlaneGeometry and use displacement map
//       const geometry = new THREE.PlaneGeometry(5, 5, 256, 256);
//       const material = new THREE.MeshStandardMaterial({
//         color: 0x888888,
//         displacementMap: texture, // Use heightmap for displacement
//         displacementScale: 1, // Adjust this value to control height
//       });

//       const mesh = new THREE.Mesh(geometry, material);
//       scene.add(mesh);

//       // Adjust plane rotation and camera position
//       mesh.rotation.x = -Math.PI / 2;
//       camera.position.set(0, 2, 5);
//       camera.lookAt(mesh.position);

//       // Lighting
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//       scene.add(ambientLight);
//       const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//       directionalLight.position.set(1, 1, 1);
//       scene.add(directionalLight);

//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);
//         mesh.rotation.z += 0.01;
//         renderer.render(scene, camera);
//       };
//       animate();
//     });

//     // Handle window resize
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ImageTo3D;
