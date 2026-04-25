import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── Mouse-reactive icosahedron + wireframe overlay ─────────────────────── */
function IcoShape() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const wireRef = useRef<THREE.Mesh>(null!);
    const glowRef = useRef<THREE.Mesh>(null!);
    const targetRot = useRef({ x: 0, y: 0 });

    // Share the same geometry instance
    const geo = new THREE.IcosahedronGeometry(1.3, 1);

    useThree(({ gl }) => {
        gl.domElement.parentElement?.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = gl.domElement.parentElement!.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            targetRot.current.y = ((e.clientX - cx) / rect.width) * 0.8;
            targetRot.current.x = -((e.clientY - cy) / rect.height) * 0.8;
        });
    });

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        if (meshRef.current) {
            meshRef.current.rotation.x += (targetRot.current.x - meshRef.current.rotation.x) * 0.05;
            meshRef.current.rotation.y += (targetRot.current.y + t * 0.2 - meshRef.current.rotation.y) * 0.05;
        }
        if (wireRef.current) {
            wireRef.current.rotation.x = meshRef.current?.rotation.x ?? 0;
            wireRef.current.rotation.y = meshRef.current?.rotation.y ?? 0;
        }
        if (glowRef.current) {
            const s = 1 + Math.sin(t * 2) * 0.02;
            glowRef.current.scale.setScalar(s);
        }
    });

    return (
        <group>
            {/* Solid metallic body */}
            <mesh ref={meshRef} geometry={geo}>
                <meshStandardMaterial
                    color="#0d1117"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Wireframe overlay */}
            <mesh ref={wireRef} geometry={geo} scale={1.01}>
                <meshBasicMaterial
                    color="#63b3ed"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Pulsing outer glow sphere */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[1.7, 32, 32]} />
                <meshBasicMaterial
                    color="#63b3ed"
                    transparent
                    opacity={0.03}
                    side={THREE.FrontSide}
                />
            </mesh>
        </group>
    );
}

/* ── Orbiting torus rings ────────────────────────────────────────────────── */
function Rings() {
    const ring1Ref = useRef<THREE.Mesh>(null!);
    const ring2Ref = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (ring1Ref.current) ring1Ref.current.rotation.y = t * 0.4;
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = t * 0.3;
            ring2Ref.current.rotation.y = t * 0.2;
        }
    });

    return (
        <>
            <mesh ref={ring1Ref} rotation={[Math.PI / 2.8, 0, 0]}>
                <torusGeometry args={[2.1, 0.008, 8, 120]} />
                <meshBasicMaterial color="#63b3ed" transparent opacity={0.4} />
            </mesh>
            <mesh ref={ring2Ref} rotation={[Math.PI / 1.6, 0, Math.PI / 4]}>
                <torusGeometry args={[1.85, 0.006, 8, 120]} />
                <meshBasicMaterial color="#4fd1c7" transparent opacity={0.3} />
            </mesh>
        </>
    );
}

/* ── Floating particle cloud ─────────────────────────────────────────────── */
function Particles({ count = 200 }: { count?: number }) {
    const ref = useRef<THREE.Points>(null!);

    // Build positions once
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 2.5 + Math.random() * 1.5;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.y = t * 0.05;
            ref.current.rotation.x = t * 0.02;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#63b3ed"
                size={0.025}
                transparent
                opacity={0.6}
            />
        </points>
    );
}

/* ── Dynamic lights ──────────────────────────────────────────────────────── */
function SceneLights() {
    const light1Ref = useRef<THREE.PointLight>(null!);
    const light2Ref = useRef<THREE.PointLight>(null!);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (light1Ref.current) {
            light1Ref.current.position.x = Math.sin(t) * 4;
            light1Ref.current.position.z = Math.cos(t) * 4;
        }
        if (light2Ref.current) {
            light2Ref.current.position.x = Math.cos(t * 0.7) * 4;
            light2Ref.current.position.y = Math.sin(t * 0.7) * 3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight ref={light1Ref} color="#63b3ed" intensity={3} distance={20} position={[3, 3, 3]} />
            <pointLight ref={light2Ref} color="#4fd1c7" intensity={2} distance={20} position={[-3, -2, 2]} />
            <pointLight color="#ed64a6" intensity={1.5} distance={15} position={[0, -3, -2]} />
        </>
    );
}

/* ── Canvas loading fallback ─────────────────────────────────────────────── */
function CanvasFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[0.8rem] text-[#475569]">
            Loading 3D scene…
        </div>
    );
}

/* ── Public component ────────────────────────────────────────────────────── */
export default function HeroCanvas3D() {
    return (
        <div className="relative w-full h-full">
            <Suspense fallback={<CanvasFallback />}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 100 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                    style={{ background: "transparent" }}
                >
                    <SceneLights />
                    <IcoShape />
                    <Rings />
                    <Particles />
                    {/* Disabled OrbitControls — mouse rotation handled manually */}
                    {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
                </Canvas>
            </Suspense>
        </div>
    );
}