import { _TJS } from './global.js';
import *as THREE from '../../node_modules/three/build/three.module.js';
import { clonemod } from './clonemod.js';
// import { T1_4pos, KB_pos } from './modelpos_rot.js';


let KB_pos = [
    // { x: 26, y: 4.5, z: 46, r: 0 },
    { x: -1.7, y: 11.5, z: 46, r: 0 },
    { x: -1.7, y: 5, z: 40, r: 0 },
    { x: -1.4, y: 4.6, z: 11, r: 0 },
    { x: -1.4, y: 5, z: 18, r: 0 },

];


let ps_mat1 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('./src/resources/textures/paizi/设备展示板1.png'),
    transparent: true,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.4
})


let ps_mat2 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('./src/resources/textures/paizi/设备展示板2.png'),
    transparent: true,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.4
})

let ps_mat3 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('./src/resources/textures/paizi/设备展示板3.png'),
    transparent: true,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.4
})

let ps_mat4 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('./src/resources/textures/paizi/设备展示板4.png'),
    transparent: true,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.4
})

let ps_mat5 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('./src/resources/textures/paizi/设备展示板5.png'),
    transparent: true,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.4
})



function KBcreate() {

    const geometry = new THREE.PlaneGeometry(4, 3, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(geometry, material);
    _TJS.scene.add(plane);
    // plane.looks = "camera";
    plane.name = "choosecamera";
    plane.position.set(26, 4.5, 46);
    plane.lookAt(_TJS.camera.position);
    clonemod(KB_pos, plane, 0, 'choosecamera');
    //////////////////////////////////////////////
    _TJS.scene.traverse(s => {
        if (s.name == "choosecamera") {
            s.material = ps_mat1;
        }
        else if (s.name == "choosecamera0") {
            s.material = ps_mat2;
        }
        else if (s.name == "choosecamera1") {
            s.material = ps_mat3;
        }
        else if (s.name == "choosecamera2") {
            s.material = ps_mat4;
        }
        else if (s.name == "choosecamera3") {
            s.material = ps_mat5;
        }
    })


}
export { KBcreate }