import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import { FirstPersonControls, OrbitControls, GizmoHelper, GizmoViewport, GizmoViewcube } from "@react-three/drei";


function AnimatedBox() {
  const boxRef = useRef();

  const { speed } = useControls({
    speed: {
      value: 0.005,
      min: 0.0,
      max: 0.03,
      step: 0.00,
    },
  })

  useFrame((state, delta) => {
     boxRef.current.rotation.x += speed * delta;
     boxRef.current.rotation.y += speed * delta;
     boxRef.current.rotation.z += speed * delta;
  })

  return (
    <mesh ref={boxRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshToonMaterial color={"red"} />
        <axesHelper args={[10]}/>
    </mesh>
  )
}
function App() {

  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vw'}}>
      <Canvas camera={{ position: [2,2,2]}}> 
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
          </GizmoHelper>
        <gridHelper/>
        <OrbitControls />
        <AnimatedBox/>
        <ambientLight/>
      </Canvas>
    </div>
  )
}

export default App
