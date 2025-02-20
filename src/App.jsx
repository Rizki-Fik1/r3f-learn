import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import AnimatedBox from "./AnimatedBox";
import { FirstPersonControls, OrbitControls } from "@react-three/drei";

function App() {

  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vw'}}>
      <Canvas camera={{ position: [2,2,2]}}> 
        <ambientLight intensity={0.5}/>
        <pointLight position={[10,10,10]} />
        <OrbitControls />
        <FirstPersonControls />
        <AnimatedBox/>
      </Canvas>
    </div>
  )
}

export default App
