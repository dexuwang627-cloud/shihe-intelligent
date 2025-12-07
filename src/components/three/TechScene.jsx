
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere = () => {
    const mesh = useRef();

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            mesh.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Sphere args={[1, 64, 64]} scale={2.4} ref={mesh}>
            <MeshDistortMaterial
                color="#22c55e"
                attach="material"
                distort={0.4}
                speed={1.5}
                wireframe
                transparent
                opacity={0.2}
            />
        </Sphere>
    );
};

const MovingParticles = ({ count = 200 }) => {
    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * 10;
            let y = (Math.random() - 0.5) * 10;
            let z = (Math.random() - 0.5) * 10;
            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            const time = state.clock.getElapsedTime();
            points.current.rotation.y = time * 0.05;

            // Optional: make particles pulsate
            const scale = 1 + Math.sin(time) * 0.1;
            points.current.scale.set(scale, scale, scale);
        }
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#4ade80"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    );
}

const TechScene = ({ className }) => {
    return (
        <div className={className}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} key="tech-scene-canvas">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ParticleSphere />
                <MovingParticles count={300} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default TechScene;
