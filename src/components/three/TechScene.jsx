
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
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

const MovingParticles = ({ count = 100 }) => {
    const points = useRef();
    const { viewport } = useThree();

    // Store original positions to return to
    const [positions, originalPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const orig = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * 10;
            let y = (Math.random() - 0.5) * 10;
            let z = (Math.random() - 0.5) * 10;
            pos.set([x, y, z], i * 3);
            orig.set([x, y, z], i * 3);
        }

        return [pos, orig];
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;

        const time = state.clock.getElapsedTime();
        // Mouse position in world space (approximate at z=0)
        const mouseX = (state.pointer.x * viewport.width) / 2;
        const mouseY = (state.pointer.y * viewport.height) / 2;

        const positionsArray = points.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Get original position
            const ox = originalPositions[i3];
            const oy = originalPositions[i3 + 1];
            const oz = originalPositions[i3 + 2];

            // Calculate distance to mouse
            const dx = mouseX - positionsArray[i3];
            const dy = mouseY - positionsArray[i3 + 1];
            // We ignore Z distance for mouse interaction to make it feel like a 2D force field on screen
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            // Repulsion force
            const force = Math.max(0, 5 - dist); // 5 is the radius of influence

            // Target position (original + movement + mouse repulsion)
            // Add gentle wave movement
            const waveX = Math.sin(time * 0.3 + oy * 0.5) * 0.2;
            const waveY = Math.cos(time * 0.2 + ox * 0.5) * 0.2;

            let tx = ox + waveX;
            let ty = oy + waveY;
            let tz = oz;

            if (force > 0) {
                const angle = Math.atan2(dy, dx);
                const pushX = -Math.cos(angle) * force * 0.5;
                const pushY = -Math.sin(angle) * force * 0.5;

                tx += pushX;
                ty += pushY;
            }

            // Simple lerp for smooth movement
            positionsArray[i3] += (tx - positionsArray[i3]) * 0.1;
            positionsArray[i3 + 1] += (ty - positionsArray[i3 + 1]) * 0.1;
            positionsArray[i3 + 2] += (tz - positionsArray[i3 + 2]) * 0.1;
        }

        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#4ade80"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

const TechScene = ({ className }) => {
    return (
        <div className={className}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} key="tech-scene-canvas" dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ParticleSphere />
                <MovingParticles count={400} />
            </Canvas>
        </div>
    );
};

export default TechScene;
