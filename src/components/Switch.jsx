"use client";
import PokeDetail from "@/app/pokemon/[name]";
import PokeApi from "@/app/pokemon/page";
import { useGLTF, Html } from "@react-three/drei";
import { useState } from "react";
export function Switch(props) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [hoverDwn, setHoverDwn] = useState(false);
  const [hoverIzq, setHoverIzq] = useState(false);
  const [hoverDer, setHoverDer] = useState(false);
  const [hoverSup, setHoverSup] = useState(false);
  const [hoverB, setHoverB] = useState(false)
  const [hoverA, setHoverA] = useState(false)
  const [hoverMenos, setHoverMenos] = useState(false)
  const [hoverMas, setHoverMas] = useState(false)

  const { nodes, materials } = useGLTF("/Switch.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="joystick_izq"
        castShadow
        receiveShadow
        geometry={nodes.joystick_izq.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_flex_dwn"
        castShadow
        receiveShadow
        geometry={nodes.btn_flex_dwn.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverDwn(true)}
        onPointerLeave={() => setHoverDwn(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverDwn ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_fle_izq"
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_izq.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverIzq(true)}
        onPointerLeave={() => setHoverIzq(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverIzq ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_fle_sup"
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_sup.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverSup(true)}
        onPointerLeave={() => setHoverSup(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverSup ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_fle_der"
        castShadow
        receiveShadow
        geometry={nodes.btn_fle_der.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverDer(true)}
        onPointerLeave={() => setHoverDer(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverDer ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_captura"
        castShadow
        receiveShadow
        geometry={nodes.btn_captura.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_menos"
        castShadow
        receiveShadow
        geometry={nodes.btn_menos.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverMenos(true)}
        onPointerLeave={() => setHoverMenos(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverMenos ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="joystick_der"
        castShadow
        receiveShadow
        geometry={nodes.joystick_der.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_b"
        castShadow
        receiveShadow
        geometry={nodes.btn_b.geometry}
        material={materials["Negro Mate"]}
        onPointerDown={() => setSelectedPokemon(null)}
        onPointerOver={() => setHoverB(true)}
        onPointerLeave={() => setHoverB(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverB ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_y"
        castShadow
        receiveShadow
        geometry={nodes.btn_y.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_x"
        castShadow
        receiveShadow
        geometry={nodes.btn_x.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_a"
        castShadow
        receiveShadow
        geometry={nodes.btn_a.geometry}
        material={materials["Negro Mate"]}
        onPointerOver={() => setHoverA(true)}
       onPointerLeave={() => setHoverA(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverA ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="btn_home"
        castShadow
        receiveShadow
        geometry={nodes.btn_home.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="btn_mas"
        castShadow
        receiveShadow
        geometry={nodes.btn_mas.geometry}
        material={materials["Negro Mate"]}
         onPointerOver={() => setHoverMas(true)}
        onPointerLeave={() => setHoverMas(false)}
      >
        <meshStandardMaterial
          roughness={0.95}
          color={hoverMas ? "#ffff00" : "#2B2F32"}
        />
      </mesh>
      <mesh
        name="trigger_sup"
        castShadow
        receiveShadow
        geometry={nodes.trigger_sup.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="trigger_down"
        castShadow
        receiveShadow
        geometry={nodes.trigger_down.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="mando_1"
        castShadow
        receiveShadow
        geometry={nodes.mando_1.geometry}
        material={materials.Mando_1}
      />
      <mesh
        name="btn_pan"
        castShadow
        receiveShadow
        geometry={nodes.btn_pan.geometry}
        material={materials.botones_grises}
      />
      <mesh
        name="mando_2"
        castShadow
        receiveShadow
        geometry={nodes.mando_2.geometry}
        material={materials.Mando_2}
      />
      <mesh
        name="visualizador"
        castShadow
        receiveShadow
        geometry={nodes.visualizador.geometry}
        material={materials["Negro Mate"]}
      >
        <Html
          className="bg-gray-800 flex justify-center relative items-center flex-wrap"
          transform
          occlude
          style={{ width: "331px", height: "188px", overflowY: "auto" }}
          position={[0, 0.7, 0]}
          rotation={[-1.58, 0, 0]}
        >
          {selectedPokemon ? (
            <PokeDetail name={selectedPokemon} />
          ) : (
            <PokeApi onSelect={setSelectedPokemon} />
          )}
        </Html>
      </mesh>
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Negro Mate"]}
      />
      <mesh
        name="Plane_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.Pantalla}
      />
    </group>
  );
}

useGLTF.preload("/Switch.gltf");
