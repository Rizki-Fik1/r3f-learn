import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import AnimatedBox from "./AnimatedBox";
import { useControls } from "leva";
import { FirstPersonControls, OrbitControls, GizmoHelper, GizmoViewport, GizmoViewcube } from "@react-three/drei";

function App() {

  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vw'}}>
      <Canvas camera={{ position: [2,2,2]}}> 
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
          </GizmoHelper>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10,10,10]} />
        <gridHelper/>
        <axesHelper args={[50]}/>
        <OrbitControls />
        <AnimatedBox/>
        <ambientLight/>
      </Canvas>
    </div>
  )
}

export default App
