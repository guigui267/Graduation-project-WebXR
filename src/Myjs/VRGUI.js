import *as THREE from '../../node_modules/three/build/three.module.js';
import { _TJS, _Global } from './global.js';
import { XRControllerModelFactory } from '../../node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js';
import { Movestop, KZT, Move } from './controlpanel.js';




var controllerL, controllerR;
let controllerLGrip, controllerRGrip;
let raycaster = new THREE.Raycaster();

const intersected = [];
const tempMatrix = new THREE.Matrix4();//四元数
// var line;


var group = new THREE.Group();
// var group2 = new THREE.Group();
var dolly;
var dumyCam;
var workingVector = new THREE.Vector3();
var line;
var objects;

///////////////////////控制器///////////////////////
var XRcontrol = function () {





    // group = new THREE.Group();
    _TJS.scene.add(group);
    // _TJS.scene2.add(group);
    // console.log(group,"组");

    //////////////////////左手控制器添加///////////////////////
    controllerL = _TJS.renderer.xr.getController(0);
    controllerL.addEventListener('selectstart', onSelectStart);
    controllerL.addEventListener('selectend', onSelectEnd);




    //////////////////////////////////////////右手控制器添加//////////////////////////////
    controllerR = _TJS.renderer.xr.getController(1);
    controllerR.addEventListener('selectstart', onSelectStart);
    controllerR.addEventListener('selectend', onSelectEnd);


    // _TJS.scene.add(controllerR);
    // controllerR.position.set(100, 184, 208);
    // console.log(controllerR, "右手控制器");
    const controllerModelFactory = new XRControllerModelFactory();

    //////////////////////////////////左手握持////////////////////////////
    controllerLGrip = _TJS.renderer.xr.getControllerGrip(0);
    controllerLGrip.add(controllerModelFactory.createControllerModel(controllerLGrip));
    // _TJS.scene.add(controllerLGrip);
    // console.log(controllerLGrip, "左手握持器");
    // controllerLGrip.position.set(100, 184, 208);



    ///////////////////////////////右手握持//////////////////
    controllerRGrip = _TJS.renderer.xr.getControllerGrip(1);
    controllerRGrip.add(controllerModelFactory.createControllerModel(controllerRGrip));
    // _TJS.scene.add(controllerRGrip);
    // controllerRGrip.position.set(100, 184, 208);
    // ////////////////////////////控制手柄线延长//////////////////////////////
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, - 1)]);

    line = new THREE.Line(geometry);
    line.name = 'line';
    line.scale.z = 5;

    controllerL.add(line.clone());
    controllerR.add(line.clone());
    // console.log(_TJS.camera.position, "PScamera");


    VRCameras();
    KZT();

}

function VRCameras() {
    _TJS.VRcamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000000);

    _TJS.VRcamera.focus = 1;
    ///////////////////////////平移VR相机位置/////////////////////////////
    dolly = new THREE.Object3D();
    // dolly.position.set(10, 14, 20);
    dolly.position.set(46, 1.6, -36);
    // _Global.KZTtz.position.set(dolly.position.x, dolly.position.y - 0.2, dolly.position.z + 1);
    //  dolly.scale.set(10,10,10);

    dolly.add(_TJS.VRcamera);
    dolly.add(controllerR);
    dolly.add(controllerL);
    dolly.add(controllerRGrip);
    dolly.add(controllerLGrip);
    // dolly.add(_Global.KZTtz);
    dolly.name = "dolly";
    _TJS.scene.add(dolly);
    // _TJS.scene2.add(dolly);
    _Global.dollyMod = dolly;

}










///////////////////////////////获取交叉点////////////////////////////
function getIntersections(controller) {

    tempMatrix.identity().extractRotation(controller.matrixWorld);

    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix);

    return raycaster.intersectObjects(group.children);

}


// function raycasterss() {
//     if (_Global.sceneChangeNum == "scene") {
//         group.children
//     }
//     else if (_Global.sceneChangeNum == "scene2") {
//         group2.children
//     }
// }

//////////////////开始选择（点击）功能//////////////////////
function onSelectStart(event) {

    const controller = event.target;

    const intersections = getIntersections(controller);

    if (intersections.length > 0) {

        const intersection = intersections[0];

        const object = intersection.object;
        object.material.emissive.r = 1;
        Move();


        // object.material.wireframe = true;
        // console.log(object, "模型s");
        // if (_Global.sceneChangeNum == "scene") {

        // } else if (_Global.sceneChangeNum == "scene2") {
        //     if (object.catch == true) {
        //         controller.attach(object);//模型移动位置（点击模型随之位移）
        //         _Global.JT = 0;
        //     }

        // }
        // _TJS.camera.position = object.position;
        // console.log(object.position);
        // _TJS.camera.position.x = object.position.x;
        // _TJS.camera.position.y = object.position.y;
        // _TJS.camera.position.z = object.position.z;

        controller.userData.selected = object;

    }

}
////////////////////选择结束（松开）功能////////////////
function onSelectEnd(event) {

    const controller = event.target;

    if (controller.userData.selected !== undefined) {
        const object = controller.userData.selected;
        object.material.emissive.r = 0;
        // object.material.wireframe = false;
        // if (_Global.sceneChangeNum == "scene") {

        // } else if (_Global.sceneChangeNum == "scene2") {
        //     if (object.catch == true) {
        //         group.attach(object);//模型移动位置（松开之后模型不动）
        //     }

        // }

        Movestop();
        controller.userData.selected = undefined;

    }


}

////////////////头戴式镜头漫游/////////////
function VRcameraroaming() {

    const wallLimit = 1.3;
    let pos = dolly.position.clone();
    pos.y += 1;


    const speed = 2;
    const quaternion = dolly.quaternion.clone();
    dolly.quaternion.copy(dumyCam.getWorldQuaternion());
    dolly.getWorldDirection(workingVector);
    workingVector.negate();

    raycaster.set(pos, workingVector);
    let blocked = false;


    dolly.translateZ(-dt * speed);
    dolly.position.y = 0;
    dolly.quaternion.copy(quaternion);
}










/////////////////////控制器选中物体变色//////////////////////
function intersectObjects(controller) {
    // console.log(_TJS.camera.position,"未选中");

    if (controller.userData.selected !== undefined) return;




    const lines = controller.getObjectByName('line');
    const intersections = getIntersections(controller);
    if (intersections.length > 0) {
        const intersection = intersections[0];
        objects = intersection.object;
        objects.material.emissive.b = 1;

        intersected.push(objects);
        lines.scale.z = intersection.distance;

        // console.log(dolly, "当前场景相机位置");
        // console.log(controller,"s22");
        // console.log(lines, "线");//////线//////////
    } else {
        lines.scale.z = 5;
    }

}


function cleanintersected() {
    while (intersected.length) {
        const objectss = intersected.pop();
        objectss.material.emissive.b = 0;
    }
}












export { XRcontrol, intersectObjects, cleanintersected, controllerL, dolly, objects, controllerR, group };