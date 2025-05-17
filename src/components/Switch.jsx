"use client";
import PokeDetail from "@/app/pokemon/[name]";
import PokeApi from "@/app/pokemon/page";
import { useGLTF, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
export function Switch(props) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverDwn, setHoverDwn] = useState(false);
  const [hoverIzq, setHoverIzq] = useState(false);
  const [hoverDer, setHoverDer] = useState(false);
  const [hoverSup, setHoverSup] = useState(false);
  const [hoverB, setHoverB] = useState(false);
  const [hoverA, setHoverA] = useState(false);
  const [hoverMenos, setHoverMenos] = useState(false);
  const [hoverMas, setHoverMas] = useState(false);

  const { nodes, materials } = useGLTF("/Switch2.2.glb");
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
        onPointerDown={() => {
          setCurrentIndex((prev) => {
            if (pokemonList.length === 0) return 0;
            let next = prev + 3;
            if (next >= pokemonList.length) {
              // Si se pasa, vuelve al principio
              next = prev % 3;
            }
            return next;
          });
        }}
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
        onPointerDown={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? pokemonList.length - 1 : prev - 1
          )
        }
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
        onPointerDown={() =>
          setCurrentIndex((prev) => {
            if (pokemonList.length === 0) return 0;
            let next = prev - 3;
            if (next < 0) {
              // Si es negativo, salta al último grupo posible
              const mod = prev % 3;
              next = pokemonList.length - (pokemonList.length % 3 || 3) + mod;
              if (next >= pokemonList.length) next -= 3;
              if (next < 0) next = 0;
            }
            return next;
          })
        }
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
        onPointerDown={() =>
          setCurrentIndex((prev) =>
            prev === pokemonList.length - 1 ? 0 : prev + 1
          )
        }
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
        name="Texto"
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={nodes.Texto.material}
        position={[6.266, 0.904, -1.376]}
        rotation={[0, -0.017, 0]}
        scale={[0.287, 1.859, 0.287]}
      />
      <mesh
        name="Texto001"
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={nodes.Texto001.material}
        position={[5.804, 0.901, -0.913]}
        scale={[0.351, 2.408, 0.322]}
      />
      <mesh
        name="Texto002"
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={nodes.Texto002.material}
        position={[5.356, 0.91, -1.374]}
        scale={[0.281, 1, 0.267]}
      />
      <mesh
        name="Texto003"
        castShadow
        receiveShadow
        geometry={nodes.Texto003.geometry}
        material={nodes.Texto003.material}
        position={[5.819, 0.91, -1.813]}
        scale={[0.255, 2.753, 0.255]}
      />
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
        onPointerDown={() => setSelectedPokemon(pokemonList[currentIndex])}
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
            <PokeApi
              onSelect={(name) => {
                const index = pokemonList.findIndex((p) => p.name === name);
                if (index !== -1) setCurrentIndex(index);
              }}
              currentIndex={currentIndex}
              setPokemonList={setPokemonList}
            />
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
      <mesh
        name="Cono"
        castShadow
        receiveShadow
        geometry={nodes.Cono.geometry}
        material={materials["Negro Mate"]}
        position={[-6.396, 0.896, 0.178]}
        rotation={[-Math.PI, 0, -1.595]}
        scale={[-0.006, -0.07, -0.085]}
      />
      <mesh
        name="Cono001"
        castShadow
        receiveShadow
        geometry={nodes.Cono001.geometry}
        material={materials["Negro Mate.001"]}
        position={[-5.911, 0.901, -0.257]}
        rotation={[0, 1.532, 1.546]}
        scale={[-0.006, -0.07, -0.085]}
      />
      <mesh
        name="Cono002"
        castShadow
        receiveShadow
        geometry={nodes.Cono002.geometry}
        material={materials["Negro Mate.002"]}
        position={[-5.902, 0.906, 0.633]}
        rotation={[0, -1.527, 1.546]}
        scale={[-0.006, -0.07, -0.085]}
      />
      <mesh
        name="Cono003"
        castShadow
        receiveShadow
        geometry={nodes.Cono003.geometry}
        material={materials["Negro Mate.003"]}
        position={[-5.424, 0.904, 0.178]}
        rotation={[0, 0.014, 1.546]}
        scale={[-0.006, -0.07, -0.085]}
      />
    </group>
  );
}

useGLTF.preload("/Switch2.2.glb");
