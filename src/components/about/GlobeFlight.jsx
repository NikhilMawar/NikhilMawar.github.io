import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Ring({
  rotation = [0, 0, 0],
  radius = 1.55,
  color,
  opacity = 0.18,
  thickness = 0.002,
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, thickness, 8, 180]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function GlobeLines({ color }) {
  const latitudes = [-45, -25, 0, 25, 45];
  const longitudes = Array.from({ length: 8 }, (_, i) => i * 22.5);

  return (
    <group>
      <Ring radius={1.55} color={color} opacity={0.55} thickness={0.0026} />

      {latitudes.map((lat) => {
        const y = Math.sin((lat * Math.PI) / 180) * 1.55;
        const r = Math.cos((lat * Math.PI) / 180) * 1.55;

        return (
          <mesh key={lat} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[r, 0.0016, 8, 180]} />
            <meshBasicMaterial color={color} transparent opacity={0.16} />
          </mesh>
        );
      })}

      {longitudes.map((lng) => (
        <Ring
          key={lng}
          radius={1.55}
          rotation={[0, (lng * Math.PI) / 180, 0]}
          color={color}
          opacity={0.18}
          thickness={0.0018}
        />
      ))}
    </group>
  );
}

function FlightPath({ color }) {
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(0.95, -0.08, 1.15),
      new THREE.Vector3(0.2, 0.35, 1.65),
      new THREE.Vector3(-0.95, 0.45, 1.08),
    ];

    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(100));
  }, []);

  return (
    <line geometry={geometry}>
      <lineDashedMaterial
        color={color}
        dashSize={0.035}
        gapSize={0.035}
        transparent
        opacity={0.9}
      />
    </line>
  );
}

function Plane({ color }) {
  return (
    <group position={[0.18, 0.33, 1.55]} rotation={[0.2, 0.3, -1.05]}>
      <mesh>
        <coneGeometry args={[0.045, 0.17, 3]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function Marker({ position, label, color, textColor }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 24, 24]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <Html center distanceFactor={7}>
        <div
          style={{ color: textColor }}
          className="whitespace-nowrap font-['Inter'] text-[11px] font-medium uppercase tracking-[-0.01em]"
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function RotatingGlobe({ theme }) {
  const groupRef = useRef();

  const isDark = theme === "dark";
  const lineColor = isDark ? "#808080" : "#5D5C59";
  const textColor = isDark ? "#949490" : "#5D5C59";
  const accent = "#F95019";

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0022;
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeLines color={lineColor} />

      <FlightPath color={accent} />
      <Plane color={accent} />

      <Marker
        position={[0.95, -0.08, 1.15]}
        label="India"
        color={accent}
        textColor={textColor}
      />

      <Marker
        position={[-0.95, 0.45, 1.08]}
        label="Canada"
        color={accent}
        textColor={textColor}
      />
    </group>
  );
}

export default function GlobeFlight({ theme = "light" }) {
  return (
    <div className="h-[520px] w-[520px]">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 38 }}>
        <RotatingGlobe theme={theme} />
      </Canvas>
    </div>
  );
}