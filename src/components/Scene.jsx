"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Switch } from "./Switch";

const Scene = () => {
  return (
    <div className="w-screen h-screen bg-amber-950">
      <Canvas
        camera={{ position: [0, 6, 25], fov: 50 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
          <Switch rotation={[1.5, 0, 0]} />
        <ambientLight intensity={1} position={[0, 0, 5]} />
        <OrbitControls target={[0, 0, 0]} enableZoom={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene;
