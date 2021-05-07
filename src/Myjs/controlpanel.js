import { _Global, _TJS } from './global.js';
import *as THREE from '../../node_modules/three/build/three.module.js';
import { FBXLoader } from '../../node_modules/three/examples/jsm/loaders/FBXLoader.js';
import { group, dolly, objects } from './VRGUI.js';
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';

///////////创建控制台模型/////////////////////////
function KZT() {
    var KZloader = new FBXLoader();

    var KZT_mat = new THREE.MeshStandardMaterial({
        color: "#808080",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var KZT_waybefore = new THREE.MeshStandardMaterial({
        color: "#ff8000",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_wayafter = new THREE.MeshStandardMaterial({
        color: "#ff8000",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_wayleft = new THREE.MeshStandardMaterial({
        color: "#ff8000",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var KZT_wayright = new THREE.MeshStandardMaterial({
        color: "#ff8000",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_button1 = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_button2 = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })


    var KZT_button3 = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_button = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    KZloader.load('./src/resources/models/KZT.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "KZT_TZ") {
                    child.material = KZT_mat;

                }
                else if (child.name == "KZT_before") {
                    child.material = KZT_waybefore;
                    group.children.push(child);
                }
                else if (child.name == "KZT_after") {
                    child.material = KZT_wayafter;
                    group.children.push(child);
                }
                else if (child.name == "KZT_left") {
                    child.material = KZT_wayleft;
                    group.children.push(child);
                }
                else if (child.name == "KZT_right") {
                    child.material = KZT_wayright;
                    group.children.push(child);
                }
                else if (child.name == "KZT_button") {
                    child.material = KZT_button;
                    group.children.push(child);
                }
                else if (child.name == "KZT_button1") {
                    child.material = KZT_button1;
                    group.children.push(child);
                }
                else if (child.name == "KZT_button2") {
                    child.material = KZT_button2;
                    group.children.push(child);
                }
                else if (child.name == "KZT_button3") {
                    child.material = KZT_button3;
                    group.children.push(child);
                }

            }
            // group.children.push(child);


        })
        // console.log(object,"bbb");
        _TJS.scene.add(object);
        // _TJS.scene2.add(object);
        _Global.KZTtz = object;
        object.castShadow = true;
        object.receiveShaw = true;

        object.position.set(dolly.position.x, dolly.position.y - 0.2, dolly.position.z + 1);
        object.rotation.y = Math.PI;
    })
}



//////////////////////控制台位置绑定//////////////////////
function KZTposi() {
    _Global.KZTtz.position.set(dolly.position.x, dolly.position.y - 0.2, dolly.position.z + 1);
}




///////////////漫游移动补间//////////////////////
var m = { x: 0, y: 0 };
var GD_move = new TWEEN.Tween(m);
var speed
var b;

var ms = { x: 0, y: 0 };
// var GD_stmove = new TWEEN.Tween(ms);

function Move() {
    // var m = { x: 0 };
    b = 1
    if (b == 1) {
        speed = 0.01;
        // GD_stmove.to({ x: speeds }, 1000);
        // GD_stmove.onUpdate(function () {
        //     speed = ms.x;
        // })




    } else { speed }
    // var GD_move = new TWEEN.Tween(m);
    GD_move.to({ x: 0, y: 0 }, 50000);
    GD_move.onUpdate(function () {
        if (objects.name == "KZT_before") {
            dolly.position.z = dolly.position.z + speed;
        }
        if (objects.name == "KZT_after") {
            dolly.position.z = dolly.position.z - speed;
        }
        if (objects.name == "KZT_left") {
            dolly.position.x = dolly.position.x + speed;
        }
        if (objects.name == "KZT_right") {
            dolly.position.x = dolly.position.x - speed;
        }
        KZTposi();
    })
    GD_move.start();
}

var c = { x: 0, y: 0, z: 0 }
var GD_stopmove = new TWEEN.Tween(c);
function Movestop() {
    c.x = speed;
    GD_stopmove.to({ x: 0 }, 1000);
    GD_stopmove.onUpdate(function () {
        speed = c.x;
        KZTposi();
        if (speed == 0) {
            GD_move.stop();
        }
    })
    GD_stopmove.start();



}







export { KZT, Move, Movestop };