import { Canvas, useFrame } from "@react-three/fiber"
import { Edges, Grid, Html, Sparkles, useHelper } from "@react-three/drei"
import { useMemo, useRef } from "react"
import { DirectionalLightHelper } from "three"
import * as THREE from 'three'
import { motion } from "framer-motion";
/* 
Mesh
Figure
Camera
Light
*/
// 1. Extract your scene contents into a child component

interface RingMeshProps {
    numAtoms?: number;
}

function RingMesh({ numAtoms }: RingMeshProps) {
    const groupRef = useRef<THREE.Group>(null);
    const actualNumAtoms = (!numAtoms || numAtoms === 0)
        ? Math.floor(Math.random() * 5) + 1
        : numAtoms;

    const radius = useMemo(() => {
        return (Math.random() * 0.6) + 1.8;
    }, []);

    const initialRotation = useMemo<[number, number, number]>(() => {
        return [
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        ];
    }, []);

    // Calculate positions for the atoms evenly around the ring
    const atomPositions = useMemo(() => {
        const positions: [number, number, number][] = [];

        for (let i = 0; i < actualNumAtoms; i++) {
            // Calculate the angle for this specific atom
            const angle = (i / actualNumAtoms) * Math.PI * 2;

            // Convert polar coordinates to X and Y positions
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            positions.push([x, y, 0]);
        }
        return positions;
    }, [actualNumAtoms, radius]);



    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.05;
            groupRef.current.rotation.y -= delta * 0.05;
            groupRef.current.rotation.z += delta * 0.08;
        }
    });
    return (
        <group ref={groupRef} rotation={initialRotation}>

            <mesh>
                <torusGeometry args={[radius, 0.008, 3, 100]} />
                <meshStandardMaterial color="#4A6984" flatShading={true} />
                <Edges color={'#4A6984'} />
            </mesh>

            {atomPositions.map((pos, index) => (
                <mesh key={index} position={pos}>
                    <dodecahedronGeometry args={[0.05, 1]} />
                    <meshStandardMaterial color="#0A0D14" flatShading={true} />

                </mesh>
            ))}

        </group>
    )
}

function SceneGeometry() {
    const lightRef = useRef<THREE.DirectionalLight>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            const targetRotationX = state.pointer.y * 1;
            const targetRotationY = state.pointer.x * -1;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
        }

        if (lightRef.current && meshRef.current) {
            lightRef.current.target = meshRef.current;
            const time = state.clock.elapsedTime;
            lightRef.current.position.x = Math.sin(time * 0.2) * 3;
            lightRef.current.position.z = Math.cos(time * 0.2) * 3;
            lightRef.current.position.y = 0;
        }

    });

    return (
        <group position={[3, 0, 1]}>
            <mesh position={[2.2, 0, -3]} scale={2.6}>
                <circleGeometry args={[1.2, 64]} />
                <meshBasicMaterial
                    color="#141E2D"
                    transparent={true}
                    opacity={0.6}
                    depthWrite={false}
                />
            </mesh>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[1.3, 6]} />
                <meshStandardMaterial color="#0A0D14" flatShading={true} roughness={0.9} />
                <Edges color={'#4A6984'} scale={1} lineWidth={1} threshold={0} />
            </mesh>

            <RingMesh numAtoms={4} />
            <RingMesh numAtoms={4} />
            <ambientLight intensity={4} />
            <directionalLight
                intensity={50}
                ref={lightRef}
                color="#ffffff"
            />
        </group>
    )
}

function Hero3DCanvas() {
    return (
        <div className="absolute inset-0 h-screen w-full z-0">

            <Canvas camera={{ position: [0, 0, 6] }}>

                {/* 1. BACKGROUND ELEMENTS */}
                <color attach="background" args={["#0A0D14"]} />

                {/* Pushed the grid to Z: -8 and made it much larger (60x60) so it acts as a deep wall */}
                <Grid
                    position={[0, 0, -8]}
                    rotation={[Math.PI / 2, 0, 0]}
                    args={[60, 60]}
                    cellSize={0.7}
                    cellColor="#4A6984"
                    cellThickness={0.8}
                    sectionSize={0}
                    sectionColor="#5CE1FF"
                    sectionThickness={0}
                    fadeDistance={20}
                    fadeStrength={1}
                />
                <Sparkles
                    count={150}
                    scale={20}
                    size={10}
                    speed={0.4}
                    opacity={0.3}
                    color="#5CE1FF"
                />
                <SceneGeometry />

            </Canvas>
        </div>
    );
}
export default Hero3DCanvas;