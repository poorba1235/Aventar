// // ModelLoader.js
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model() {
//   // Point to the GLTF file in the public folder
//   const { scene } = useGLTF('3d/Model/model.gltf');
//   return <primitive object={scene} scale={0.5} />;
// }

// export default function ModelLoader() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }
