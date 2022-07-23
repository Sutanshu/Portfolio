import React, { useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { useSpring } from 'react-spring'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function Controls(props) {
    const { camera, gl } = useThree();
    useSpring({
        from: {
            z: 300
        },
        z: 2,
        onFrame: ({ z }) => {
            camera.position.z = z
        }
    })
    return <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />;
}

export const TestFunctionReact3D = () => {
    function Box(props) {
        // This reference will give us direct access to the mesh
        const mesh = useRef()
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={mesh}
                scale={active ? [1, 1, 1] : [1, 5, 2]}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        )
    }
    return (
        <Canvas>
            <ambientLight />
            <Controls />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
        </Canvas>)
}