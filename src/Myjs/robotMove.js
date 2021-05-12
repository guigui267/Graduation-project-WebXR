import { TWEEN } from "../../node_modules/three/examples/jsm/libs/tween.module.min.js";
import { _Global, _TJS } from "./global.js";
import { KZTposi, KBupdate } from './controlpanel.js'
import *as THREE from '../../node_modules/three/build/three.module.js';



let m1 = 5;
let m2 = 5;
let m3 = 5;
let m4 = 1;
let m5 = 6;
let m6 = 1;
let m7 = 5;
let m8 = 7;
let m9 = 2;
let m10 = 1;
let m11 = 8;
let m12 = 5;
let m13 = 3;
let m14 = 2;
let m15 = 2;
let m16 = 4;
let m17 = 1;
let m18 = 6;
function RobotMov() {
    if (_Global.buttondown == 0) {
        _Global.buttondown = 1;
        KBupdate("当前任务执行中");
        // console.log(_Global.robot119, "119机器人----------------------------------------");

        // console.log(_Global.MQGMod, "煤气罐。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。");

        // console.log(_Global.CFDOOR, "厂房xxxxxxxxxxxxxxxxxxx");
        // console.log(_Global.CLJ, "垃圾处理机器");
        // console.log(_Global.dollyMod,"sssssss");

        let t1 = 1;
        let t2 = 1;
        let t3 = 7;
        let t4 = 1;
        let t5 = 4;
        let t6 = 1;
        let t7 = 7;
        let t8 = 1;
        let t9 = 2;
        let t10 = 1;
        let t11 = 1;
        let t12 = 1;
        ///////////////////M系列//////////////////////////
        let t13 = 1;
        let t14 = 1;
        let t15 = 2;
        let t16 = 1;
        let t17 = 7;
        let t18 = 1;
        let t19 = 5;
        let t20 = 3;
        let t21 = 1;
        let t22 = 5;
        let t23 = 2;
        let t24 = 3;
        let t25 = 2;
        let t26 = 1;
        let t27 = 3;
        let t28 = 1;
        let t29 = 4;
        let t30 = 1;
        let t31 = 7;
        let t32 = 1;
        let t33 = 2;


















        dollycatch();
        let m = {
            x: 0,
            y: 0,
            z: 0,
            r: 0,
            s: 0,
            g: 0,
            h: 0,
            q: 0,
            p: 0,
            ///////////////////////////煤气罐///////////////////////////
            w: 0,
            t: 0,
            i: 0,
            u: 0,
            f: 0,
            c: 0
        };
        m.x = _Global.robot119.position.x;
        m.y = _Global.robot119.position.y;
        m.z = _Global.robot119.position.z;
        m.r = _Global.robot119.rotation._x;
        m.s = _Global.robot119.children[0].rotation._y;
        m.g = _Global.robot119.rotation._z;
        //////////////////////////子对象/////////////////////////
        m.h = _Global.robot119.children[0].children[0].children[0].rotation._z;
        m.q = _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation._z;
        ////////////////////////////////////煤气罐坐标/////////////////////////////////
        m.w = _Global.MQGMod.position.x;
        m.t = _Global.MQGMod.position.y;
        m.i = _Global.MQGMod.position.z;
        m.u = _Global.MQGMod.rotation._x;
        m.f = _Global.MQGMod.rotation._y;
        m.c = _Global.MQGMod.rotation._z;

        ///////////////////////补间1//////////////////////////


        let s1 = new TWEEN.Tween(m);//平移
        s1.to({ x: 4.6 }, t1 * 1000);
        s1.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            robot119KB();
            // robotKBupdate()
        })

        let s2 = new TWEEN.Tween(m);//旋转
        s2.to({ s: -Math.PI / 2 }, t2 * 1000);
        s2.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })

        let s3 = new TWEEN.Tween(m);//平移
        s3.to({ z: 103.75 }, t3 * 1000);
        s3.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            robot119KB();
        })

        let s4 = new TWEEN.Tween(m);//旋转
        s4.to({ z: 104.656, s: 0 }, t4 * 1000);
        s4.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.robot119.position.z = m.z;

        })


        let s5 = new TWEEN.Tween(m);//平移
        s5.to({ x: 49.227, s: 0 }, t5 * 1000);
        s5.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            robot119KB();
        })

        let s6 = new TWEEN.Tween(m);//旋转
        s6.to({ s: Math.PI / 2 }, t6 * 1000);
        s6.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })

        let s7 = new TWEEN.Tween(m);//平移
        s7.to({ z: -0.095 }, t7 * 1000);
        s7.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            robot119KB();
        })

        let s8 = new TWEEN.Tween(m);//旋转
        s8.to({ s: 0 }, t8 * 1000);
        s8.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })

        let s9 = new TWEEN.Tween(m);//平移
        s9.to({ x: 63.134 }, t9 * 1000);
        s9.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            robot119KB();
        })

        let s10 = new TWEEN.Tween(m);//旋转
        s10.to({ s: Math.PI / 2 }, t10 * 1000);
        s10.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })


        ////////////////关节动//////////////////////////////
        let s11 = new TWEEN.Tween(m);//平移
        s11.to({ z: -2.503 }, t11 * 1000);
        s11.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            robot119KB();

        })

        let s12 = new TWEEN.Tween(m);//旋转
        s12.to({ h: -(Math.PI / (180 / 6.65)), q: Math.PI / (180 / 8.515) }, t12 * 1000);
        s12.onUpdate(function () {
            _Global.robot119.children[0].children[0].children[0].rotation.z = m.h;
            _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation.z = m.q;
        })

        //////////////////////////////机器人返回Back//////////////////////////////////////////

        let M1 = new TWEEN.Tween(m);//关节旋转
        M1.to({ h: 0, q: 0, t: 3.661 }, t13 * 1000);
        M1.onUpdate(function () {
            _Global.robot119.children[0].children[0].children[0].rotation.z = m.h;
            _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation.z = m.q;
            _Global.MQGMod.position.y = m.t;
        })

        let M2 = new TWEEN.Tween(m);//旋转
        M2.to({ s: Math.PI, f: Math.PI / 2 }, t14 * 1000);
        M2.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })


        let M3 = new TWEEN.Tween(m);//平移
        M3.to({ w: 19.069, x: 50.5 }, t15 * 1000);
        M3.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            _Global.MQGMod.position.x = m.w;
            robot119KB();
        })

        let M4 = new TWEEN.Tween(m);//旋转
        M4.to({ s: (Math.PI / 2) * 3, f: Math.PI }, t16 * 1000);
        M4.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })


        let M5 = new TWEEN.Tween(m);//平移
        M5.to({ i: 53.738, z: 102.936 }, t17 * 1000);
        M5.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            _Global.MQGMod.position.z = m.i;
            robot119KB();
        })


        let M6 = new TWEEN.Tween(m);//旋转
        M6.to({ s: Math.PI, f: Math.PI / 2 }, t18 * 1000);
        M6.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })


        let M7 = new TWEEN.Tween(m);//平移
        M7.to({ w: -30.266, x: 1.165 }, t19 * 1000);
        M7.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            _Global.MQGMod.position.x = m.w;
            robot119KB();
        })


        let M9 = new TWEEN.Tween(m);//平移
        M9.to({ w: -49.428, x: -18 }, t20 * 1000);
        M9.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            _Global.MQGMod.position.x = m.w;
            robot119KB();
        })


        let M10 = new TWEEN.Tween(m);//旋转
        M10.to({ s: Math.PI / 2, f: 0 }, t21 * 1000);
        M10.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })

        let M11 = new TWEEN.Tween(m);//平移
        M11.to({ i: 31.252, z: 80.45 }, t22 * 1000);
        M11.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            _Global.MQGMod.position.z = m.i;
            robot119KB();
        })

        let M12 = new TWEEN.Tween(m);//旋转
        M12.to({ s: 0, f: -Math.PI / 2 }, t23 * 1000);
        M12.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })

        let M14 = new TWEEN.Tween(m);//平移
        M14.to({ w: -44.134, x: -12.706 }, t24 * 1000);
        M14.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            _Global.MQGMod.position.x = m.w;
            robot119KB();
        })
        ////////////////////返航////////////////////

        let M15 = new TWEEN.Tween(m);//平移
        M15.to({ x: -18.331 }, t25 * 1000);
        M15.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            robot119KB();
        })

        let M16 = new TWEEN.Tween(m);//旋转
        M16.to({ s: -Math.PI / 2 }, t26 * 1000);
        M16.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })

        let M17 = new TWEEN.Tween(m);//平移
        M17.to({ z: 102.145 }, t27 * 1000);
        M17.onUpdate(function () {
            robot119KB();
            _Global.robot119.position.z = m.z;
        })


        let M18 = new TWEEN.Tween(m);//旋转
        M18.to({ s: 0 }, t28 * 1000);
        M18.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
        })


        let M19 = new TWEEN.Tween(m);//平移
        M19.to({ x: 4.88 }, t29 * 1000);
        M19.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            robot119KB();
        })

        let M20 = new TWEEN.Tween(m);//旋转+煤气罐下沉
        M20.to({ s: Math.PI / 2, t: -0.6 }, t30 * 1000);
        M20.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.position.y = m.t;
        })

        let M21 = new TWEEN.Tween(m);//平移+煤气罐平移
        M21.to({ z: 0, w: 31.706, i: -51.701 }, t31 * 1000);
        M21.onUpdate(function () {
            _Global.robot119.position.z = m.z;
            _Global.MQGMod.position.x = m.w;
            _Global.MQGMod.position.z = m.i;
            robot119KB();
        })

        let M22 = new TWEEN.Tween(m);//旋转
        M22.to({ s: 0, f: 0 }, t32 * 1000);
        M22.onUpdate(function () {
            _Global.robot119.children[0].rotation.y = m.s;
            _Global.MQGMod.rotation.y = m.f;
        })


        let M23 = new TWEEN.Tween(m);//平移+煤气罐上移
        M23.to({ x: 0, t: 3.348 }, t33 * 1000);
        M23.onUpdate(function () {
            _Global.robot119.position.x = m.x;
            _Global.MQGMod.position.y = m.t;
            robot119KB();
        })



        ///////////////////////////////////////////厂房门/////////////////////////////////

        let d = { x: 0, y: 0, z: 0 };
        d.x = _Global.CFDOOR.children[16].position.x;
        d.y = _Global.CFDOOR.children[16].position.y;
        d.z = _Global.CFDOOR.children[16].position.z;

        let D8 = new TWEEN.Tween(d);//平移
        D8.to({ x: -0.315, z: -7.774 }, 5000);
        D8.onUpdate(function () {
            _Global.CFDOOR.children[12].position.x = d.x;
            _Global.CFDOOR.children[12].position.z = d.z;
        })

        let D19 = new TWEEN.Tween(d);//平移
        D19.to({ x: 0, z: 0 }, 5000);
        D19.onUpdate(function () {
            _Global.CFDOOR.children[12].position.x = d.x;
            _Global.CFDOOR.children[12].position.z = d.z;
        })
        /////////////////////////////////////////////////垃圾处理机器////////////////////////////////

        let g = { x: 0, y: 0, z: 0 };
        g.y = _Global.CLJ.children[1].position.y;
        let G13 = new TWEEN.Tween(g);
        G13.to({ y: 3.756 }, 2000);
        G13.onUpdate(function () {
            _Global.CLJ.children[1].position.y = g.y;
        })

        let G14 = new TWEEN.Tween(g);
        G14.to({ y: 0 }, 2000);
        G14.onUpdate(function () {
            _Global.CLJ.children[1].position.y = g.y;
        })




        ////////////////////////////////////分界线///////////////////////////////////////////


        // setTimeout(function () {

        // }, 3000);
        s1.delay((m1 + m2 + m3) * 1000);
        setTimeout(function () {
            robotKBupdate("收到预警指令");
        }, (m1 + m2 + m3 - 1) * 1000);

        setTimeout(function () {
            robotKBupdate("正在执行指令");
        }, (m1 + m2 + m3 + 2) * 1000);
        s1.start();
        // p2.chain(s1);
        s1.chain(s2);
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
        // s12.chain(s13);
        ////////////////Back(机器人返回)///////////////////////////////
        s12.chain(M1);
        M1.chain(M2);
        M2.chain(M3);
        M3.chain(M4);
        M4.chain(M5);
        M5.chain(M6);
        M6.chain(M7);
        M7.chain(D8);
        D8.chain(M9);
        M9.chain(M10);
        M10.chain(M11);
        M11.chain(M12);
        M12.chain(G13);
        G13.chain(M14);
        M14.chain(M15);
        M15.chain(G14);
        G14.chain(M16);
        /////////////////事件分岔//////////////////////
        // M15.chain(M16);
        M16.chain(M17);
        M17.chain(M18);
        M18.chain(M19);
        M19.chain(D19);
        D19.chain(M20);
        M20.chain(M21);
        M21.chain(M22);
        M22.chain(M23);



        setTimeout(function () {
            _Global.buttondown = 0;
            KBupdate("任务执行完成");
            robotKBupdate("处理完成");
            setTimeout(function () {
                robotKBupdate("当前无任务");
            }, 2000);
        }, 82000);

    }
    else if (_Global.buttondown == 1) {

    }

}


function robot119KB() {
    _Global.robotKB.position.set(_Global.robot119.position.x - 31.428, 5, _Global.robot119.position.z - 49.198);
    _Global.robKBbg.position.set(_Global.robotKB.position.x, _Global.robotKB.position.y, _Global.robotKB.position.z);
}










///////////////////////////机器人移动///////////////////////////////
function dollycatch() {
    ///////////////////////////相机移动/////////////////////////////
    let s = { x: 0, y: 0, z: 0 };
    s.x = _Global.dollyMod.position.x;
    s.y = _Global.dollyMod.position.y;
    s.z = _Global.dollyMod.position.z;
    let p1 = new TWEEN.Tween(s);
    p1.to({ z: -53 }, m1 * 1000);
    p1.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p2 = new TWEEN.Tween(s);
    p2.to({ x: -20.547 }, m2 * 1000);
    p2.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p3 = new TWEEN.Tween(s);
    p3.to({ z: -46.186 }, m3 * 1000);
    p3.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p4 = new TWEEN.Tween(s);
    p4.to({ x: -26.323 }, m4 * 1000);
    p4.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p5 = new TWEEN.Tween(s);
    p5.to({ z: 50.4 }, m5 * 1000);
    p5.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p6 = new TWEEN.Tween(s);
    p6.to({ z: 54.984 }, m6 * 1000);
    p6.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p7 = new TWEEN.Tween(s);
    p7.to({ x: 17.923 }, m7 * 1000);
    p7.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })


    let p8 = new TWEEN.Tween(s);
    p8.to({ z: -40 }, m8 * 1000);
    p8.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })


    let p9 = new TWEEN.Tween(s);
    p9.to({ x: 26.418 }, m9 * 1000);
    p9.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p10 = new TWEEN.Tween(s);
    p10.to({ x: 17.923 }, m10 * 1000);
    p10.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p11 = new TWEEN.Tween(s);
    p11.to({ z: 53 }, m11 * 1000);
    p11.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p12 = new TWEEN.Tween(s);
    p12.to({ x: -21.41 }, m12 * 1000);
    p12.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p13 = new TWEEN.Tween(s);
    p13.to({ x: -49 }, m13 * 1000);
    p13.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })


    let p14 = new TWEEN.Tween(s);
    p14.to({ z: 43.155 }, m14 * 1000);
    p14.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })


    let p15 = new TWEEN.Tween(s);
    p15.to({ z: 53 }, m15 * 1000);
    p15.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })

    let p16 = new TWEEN.Tween(s);
    p16.to({ x: -14 }, m16 * 1000);
    p16.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p17 = new TWEEN.Tween(s);
    p17.to({ x: -26.238 }, m17 * 1000);
    p17.onUpdate(function () {
        _Global.dollyMod.position.x = s.x;
        KZTposi();
    })

    let p18 = new TWEEN.Tween(s);
    p18.to({ z: -43.112 }, m18 * 1000);
    p18.onUpdate(function () {
        _Global.dollyMod.position.z = s.z;
        KZTposi();
    })



    p1.start();
    p1.chain(p2);
    p2.chain(p3);
    p3.chain(p4);
    p4.delay(2000);
    p4.chain(p5);
    p5.chain(p6);
    p6.delay(1000);
    p6.chain(p7);
    p7.chain(p8);
    p8.chain(p9);
    p9.chain(p10);
    p10.delay(9000);
    p10.chain(p11);
    p11.chain(p12);
    p12.chain(p13);
    p13.delay(5000);
    p13.chain(p14);
    p14.chain(p15);
    p15.delay(17000);
    p15.chain(p16);
    p16.chain(p17);
    p17.delay(5000);
    p17.chain(p18);


    //     // p1.start();
    //     // p1.chain(p2);





}






//////////////////////////////////////创建机器人上方提示看板//////////////////////////////////

function robotplane() {
    const geometry = new THREE.PlaneGeometry(4, 3, 1);
    const material = new THREE.MeshBasicMaterial({
        // color: 0xffff00,
        map: new THREE.CanvasTexture(getTextCanvass("当前无任务")),
        side: THREE.DoubleSide,
        transparent: true,
        metalness: 0.0,
        roughness: 0.5
    });
    const planes = new THREE.Mesh(geometry, material);
    _TJS.scene.add(planes);
    planes.name = "choosecamerarob";


    _Global.robotKB = planes;
    planes.position.set(-31.428, 5, -49.198);

    let BGb = planes.clone();
    BGb.material = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./src/resources/textures/paizi/机器人框框.png'),
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.5,
        metalness: 0
    })
    _TJS.scene.add(BGb);
    _Global.robKBbg = BGb;
    // console.log(_Global.robotKB,"dididididididididididididi");



}


function robotKBupdate(a) {
    _Global.canvased1.clearRect(0, 0, _Global.canvasA1.width, _Global.canvasA1.height);
    _Global.robotKB.material.map = new THREE.CanvasTexture(getTextCanvass(a));

}


function getTextCanvass(s) {


    let ims = new Image();
    ims.src = './src/resources/textures/paizi/机器人框框.png';

    var width = 128, height = 32;
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
    _Global.canvased1 = ctx;
    _Global.canvasA1 = canvas;
    // ctx.drawImage(imgs);
    ctx.drawImage(ims, 0, 0, 1024, 1024); //888888
    ctx.fillText(s, width / 2, height / 2);
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // console.dir(canvas)
    return canvas;
}













export { RobotMov, robotplane };