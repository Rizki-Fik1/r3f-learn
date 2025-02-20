import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AnimatedBox() {
    const boxRef = useRef();

    useFrame((state, delta) => {
       boxRef.current.rotation.x += delta;
       boxRef.current.rotation.y += delta;
       boxRef.current.rotation.z += delta;
    })
  
    return (
      <mesh ref={boxRef}>
          <sphereGeometry args={[1, 60, 60]} />
          <meshToonMaterial wireframe color="red" />
      </mesh>
    )
}

export default AnimatedBox;