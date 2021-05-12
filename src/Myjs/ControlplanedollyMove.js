import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { _Global } from "./global.js";
import { KZTposi, KBupdate } from './controlpanel.js';



function KTYL() {//////////////控制台漫游/////////////

    let speed = 471.16 / 100;

    // _Global.dollyMod
    let t1 = Math.abs(19 - _Global.dollyMod.position.x) / speed;
    let t2 = Math.abs(-53.543 - _Global.dollyMod.position.y) / speed;
    let t3 = 39.223 / speed;
    let t4 = 16.534 / speed;
    let t5 = 6.423 / speed;
    let t6 = 87 / speed;
    let t7 = 19.046 / speed;
    let t8 = 62.4 / speed;
    let t9 = 9.952 / speed;
    let t10 = 66.4 / speed;
    let t11 = 15.837 / speed;
    let t12 = 90 / speed;
    let t13 = 13.775 / speed;










    console.log(_Global.buttondown, "cccccccccccccccccccccccccccccccccccccccccccccccc");
    if (_Global.buttondown == 0) {

        _Global.buttondown = 1;
        KBupdate("场景漫游中");


        console.log(_Global.dollyMod, "看台模型。。。。。。。。。。。。。。。。。。。。。。。。。。。。。");

        // function 
        let v = { x: 0, y: 0, z: 0 };
        v.x = _Global.dollyMod.position.x;
        v.y = _Global.dollyMod.position.y;
        v.z = _Global.dollyMod.position.z;

        let KZTMY = new TWEEN.Tween(v);
        KZTMY.to({ x: 19 }, t1 * 1000);
        KZTMY.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            // KZTposi();
            KZTposi();

        })

        let s2 = new TWEEN.Tween(v);
        s2.to({ z: -53.534 }, t2 * 1000);
        s2.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
            // KZTposi();
        })

        let s3 = new TWEEN.Tween(v);
        s3.to({ x: -20.223 }, t3 * 1000);
        s3.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
            // KZTposi();
        })

        let s4 = new TWEEN.Tween(v);
        s4.to({ z: -37 }, t4 * 1000);
        s4.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
        })


        let s5 = new TWEEN.Tween(v);
        s5.to({ x: -26.646 }, t5 * 1000);
        s5.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
        })

        let s6 = new TWEEN.Tween(v);
        s6.to({ z: 50 }, t6 * 1000);
        s6.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
        })



        let s7 = new TWEEN.Tween(v);
        s7.to({ x: -7.6 }, t7 * 1000);
        s7.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
        })



        let s8 = new TWEEN.Tween(v);
        s8.to({ z: -12.4 }, t8 * 1000);
        s8.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
        })

        let s9 = new TWEEN.Tween(v);
        s9.to({ x: 2.352 }, t9 * 1000);
        s9.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
        })

        let s10 = new TWEEN.Tween(v);
        s10.to({ z: 54 }, t10 * 1000);
        s10.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
        })

        let s11 = new TWEEN.Tween(v);
        s11.to({ x: 18.225 }, t11 * 1000);
        s11.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
        })

        let s12 = new TWEEN.Tween(v);
        s12.to({ z: -36 }, t12 * 1000);
        s12.onUpdate(function () {
            _Global.dollyMod.position.z = v.z;
            KZTposi();
        })

        let s13 = new TWEEN.Tween(v);
        s13.to({ x: 32 }, t13 * 1000);
        s13.onUpdate(function () {
            _Global.dollyMod.position.x = v.x;
            KZTposi();
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


        setTimeout(function () { _Global.buttondown = 0; KBupdate("任务完成"); }, (471.16 / speed + 1) * 1000);
    }
    else if (_Global.buttondown == 1) {



    }

}


function openDoor() {

    //////////////////////开门////////////////////////////
    if (_Global.opendoor == false) {
        let h = { x: 0, y: 0, z: 0 };
        let door = new TWEEN.Tween(h);
        door.to({ x: 0.402, y: 14.622, z: -9.474 }, 5000);
        door.onUpdate(function () {
            _Global.CFDOOR.children[0].position.x = h.x;
            _Global.CFDOOR.children[7].position.x = h.x;
            _Global.CFDOOR.children[0].position.z = h.y;
            _Global.CFDOOR.children[7].position.z = h.z;
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
            _Global.CFDOOR.children[7].position.x = h2.x;
            _Global.CFDOOR.children[0].position.z = h2.y;
            _Global.CFDOOR.children[7].position.z = h2.z;
        })
        door2.start();
        _Global.opendoor = false;
    }




}

export { KTYL, openDoor }