import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { _Global } from "./global.js";



function KTYL() {//////////////控制台漫游/////////////

    console.log(_Global.dollyMod, "看台模型。。。。。。。。。。。。。。。。。。。。。。。。。。。。。");

    // function 
    let v = { x: 0, y: 0, z: 0 };
    v.x = _Global.dollyMod.position.x;
    v.y = _Global.dollyMod.position.y;
    v.z = _Global.dollyMod.position.z;

    let KZTMY = new TWEEN.Tween(v);
    KZTMY.to({ x: 19 }, 4000);
    KZTMY.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        // KZTposi();
        _Global.KZTtz.position.x = v.x;
    })

    let s2 = new TWEEN.Tween(v);
    s2.to({ z: -53.534 }, 4000);
    s2.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
        // KZTposi();
    })

    let s3 = new TWEEN.Tween(v);
    s3.to({ x: -20.223 }, 5000);
    s3.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
        // KZTposi();
    })

    let s4 = new TWEEN.Tween(v);
    s4.to({ z: -37 }, 4000);
    s4.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
    })


    let s5 = new TWEEN.Tween(v);
    s5.to({ x: -26.646 }, 4000);
    s5.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
    })

    let s6 = new TWEEN.Tween(v);
    s6.to({ z: 50 }, 7000);
    s6.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
    })



    let s7 = new TWEEN.Tween(v);
    s7.to({ x: -7.6 }, 4000);
    s7.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
    })



    let s8 = new TWEEN.Tween(v);
    s8.to({ z: -12.4 }, 6000);
    s8.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
    })

    let s9 = new TWEEN.Tween(v);
    s9.to({ x: 2.352 }, 1000);
    s9.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
    })

    let s10 = new TWEEN.Tween(v);
    s10.to({ z: 54 }, 6000);
    s10.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
    })

    let s11 = new TWEEN.Tween(v);
    s11.to({ x: 18.225 }, 2000);
    s11.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
    })

    let s12 = new TWEEN.Tween(v);
    s12.to({ z: -36 }, 7000);
    s12.onUpdate(function () {
        _Global.dollyMod.position.z = v.z;
        _Global.KZTtz.position.z = v.z;
    })

    let s13 = new TWEEN.Tween(v);
    s13.to({ x: 32 }, 2000);
    s13.onUpdate(function () {
        _Global.dollyMod.position.x = v.x;
        _Global.KZTtz.position.x = v.x;
    })








    KZTMY.start();
    KZTMY.chain(s2);
    s2.chain(s3);
    s3.chain(s4);
    s4.chain(s5);
    s5.chain(s6);
    s6.chain(s7);
    s7.chain(s8);
    s8.chain(s9);
    s9.chain(s10);
    s10.chain(s11);
    s11.chain(s12);
    s12.chain(s13);


}


function openDoor() {

    //////////////////////开门////////////////////////////
    if (_Global.opendoor == false) {
        let h = { x: 0, y: 0, z: 0 };
        let door = new TWEEN.Tween(h);
        door.to({ x: 0.402, y: 14.622, z: -9.474 }, 5000);
        door.onUpdate(function () {
            _Global.CFDOOR.children[0].position.x = h.x;
            _Global.CFDOOR.children[11].position.x = h.x;
            _Global.CFDOOR.children[0].position.z = h.y;
            _Global.CFDOOR.children[11].position.z = h.z;
        })
        door.start();
        
        _Global.opendoor = true;
    }
    else if (_Global.opendoor == true) {
        let h2 = { x: 0.402, y: 14.622, z: -9.474 };
        let door2 = new TWEEN.Tween(h2);
        door2.to({ x: 0, y: 0, z: 0 }, 5000);
        door2.onUpdate(function () {
            _Global.CFDOOR.children[0].position.x = h2.x;
            _Global.CFDOOR.children[11].position.x = h2.x;
            _Global.CFDOOR.children[0].position.z = h2.y;
            _Global.CFDOOR.children[11].position.z = h2.z;
        })
        door2.start();
        _Global.opendoor = false;
    }




}

export { KTYL, openDoor }