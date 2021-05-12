import { _Global, _TJS } from './global.js';
import *as THREE from '../../node_modules/three/build/three.module.js';
import { FBXLoader } from '../../node_modules/three/examples/jsm/loaders/FBXLoader.js';
import { group, dolly, objects } from './VRGUI.js';
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { KTYL, openDoor } from './ControlplanedollyMove.js';
import { M8_JT } from './M8JT.js';
import { RobotMov } from './robotMove.js';
import { CSequipment, pos, pos1, pos2, pos3, pos4, pos5, pos6, pos7, } from './CSshow.js'
import { fly } from './fly.js';

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


    ////////////////////小按钮///////////////////////
    let button = new THREE.TextureLoader().load('./src/resources/textures/button/控制台漫游.png');
    let button1 = new THREE.TextureLoader().load('./src/resources/textures/button/设备解体重组.png');
    let button2 = new THREE.TextureLoader().load('./src/resources/textures/button/预警系统.png');
    let button3 = new THREE.TextureLoader().load('./src/resources/textures/button/直升机启动.png');
    let button4 = new THREE.TextureLoader().load('./src/resources/textures/button/opendoor.png');



    var KZT_button1 = new THREE.MeshStandardMaterial({
        // color: "#008080",
        map: button1,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_button2 = new THREE.MeshStandardMaterial({
        // color: "#008080",
        map: button2,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })


    var KZT_button3 = new THREE.MeshStandardMaterial({
        // color: "#008080",
        map: button3,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var KZT_button4 = new THREE.MeshStandardMaterial({
        // color: "#008080",
        map: button4,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var KZT_button = new THREE.MeshStandardMaterial({
        // color: "#008080",
        map: button,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })


    let kanban = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备1.png');
    let kanban1 = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备2.png');
    let kanban2 = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备3.png');
    let kanban3 = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备4.png');
    let kanban4 = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备5.png');
    let kanban5 = new THREE.TextureLoader().load('./src/resources/textures/paizi/原点.png');
    let kanban6 = new THREE.TextureLoader().load('./src/resources/textures/paizi/直升机.png');
    let kanban7 = new THREE.TextureLoader().load('./src/resources/textures/paizi/设备分解室.png');



    var p = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p1 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban1,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p2 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban2,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p3 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",

        map: kanban3,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p4 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban4,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p5 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban5,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })

    var p6 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban6,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })
    var p7 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: kanban7,
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5
    })


    let shishikanbanBG = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./src/resources/textures/paizi/实时看板.png'),

        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.5
    })

    let shishikanban = new THREE.MeshStandardMaterial({
        map: new THREE.CanvasTexture(getTextCanvas("当前无任务")),
        transparent: true,
        side: THREE.DoubleSide,
        metalness: 0,
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
                else if (child.name == "KZT_buttondoor") {
                    child.material = KZT_button4;
                    group.children.push(child);
                }
                else if (child.name == "p") {
                    child.material = p;
                    group.children.push(child);
                }
                else if (child.name == "p1") {

                    child.material = p1;
                    group.children.push(child);
                }
                else if (child.name == "p2") {
                    child.material = p2;
                    group.children.push(child);
                }
                else if (child.name == "p3") {
                    child.material = p3;
                    group.children.push(child);
                }
                else if (child.name == "p4") {
                    child.material = p4;
                    group.children.push(child);
                }
                else if (child.name == "p5") {
                    child.material = p5;
                    group.children.push(child);
                }
                else if (child.name == "p6") {
                    child.material = p6;
                    group.children.push(child);
                }
                else if (child.name == "p7") {
                    child.material = p7;
                    group.children.push(child);
                }
                else if (child.name == "kanban") {
                    child.material = shishikanban;
                    child.material.depthWrite = false;
                    // child.material.renderOrder = 2;
                    _Global.kanbanmap = child.material;

                }
                else if (child.name == "kanbanBG") {
                    child.material.depthWrite = false;
                    child.material.renderOrder = 5;
                    child.material = shishikanbanBG;

                    // child.material[0].depthWrite = false;
                    // child.material[0].renderOrder = 5;
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



// let imgs = new THREE.TextureLoader().load('');
// let imgs = new Image();
// imgs.src = "./src/resources/textures/paizi/看板.png";

//////////////////////创建实时视窗//////////////////////////
function getTextCanvas(s) {


    var width = 128, height = 64;
    var canvas = document.createElement('canvas');


    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle ="#fff";
    // ctx.fillRect(0, 0, width, height);
    ctx.font = 15 + 'px " bold';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    _Global.canvased = ctx;
    _Global.canvasA = canvas;
    // ctx.drawImage(imgs);
    // ctx.drawImage(imgs, 0, 0, 1024, 1024);888888
    ctx.fillText(s, width / 2, height / 1.4);
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // console.dir(canvas)
    return canvas;
}


////////////////////////看板内容更新方法/////////////////////////////
function KBupdate(s) {
    _Global.canvased.clearRect(0, 0, _Global.canvasA.width, _Global.canvasA.height);
    _Global.kanbanmap.map = new THREE.CanvasTexture(getTextCanvas(s));
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






    /////////////////控制台其他按钮///////////////////////
    if (objects.name == "KZT_button") {
        KTYL();//控制台漫游
    } else if (objects.name == "KZT_button1") {
        M8_JT();//机器人解体
    }
    else if (objects.name == "KZT_button2") {
        RobotMov();//预警系统
    }
    else if (objects.name == "KZT_button3") {
        fly();//飞机飞行
    }
    else if (objects.name == "KZT_buttondoor") {
        openDoor();//开门
    }
    else if (objects.name == "p") {
        CSequipment(pos);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
    else if (objects.name == "p1") {
        CSequipment(pos1);
    }
    else if (objects.name == "p2") {
        CSequipment(pos2);
    }
    else if (objects.name == "p3") {
        CSequipment(pos3);
    }
    else if (objects.name == "p4") {
        CSequipment(pos4);
    }
    else if (objects.name == "p5") {
        CSequipment(pos5);
    }
    else if (objects.name == "p6") {
        CSequipment(pos6);
    }
    else if (objects.name == "p7") {
        CSequipment(pos7);
    }
    else if (objects.name == "KZT_before" || objects.name == "KZT_after" || objects.name == "KZT_left" || objects.name == "KZT_right") {
        _Global.movestart = 1;
    }

    //////////////////////////////////////////////////////////////
    if (_Global.buttondown == 0) {
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
            // if()
            KZTposi();
        })
        GD_move.start();
    }
    // }
    else if (_Global.buttondown == 1) {

    }
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

    if (_Global.movestart == 1) {
        _Global.buttondown = 0;
        _Global.movestart = 0;
    }

}







export { KZT, Move, Movestop, KZTposi, KBupdate };