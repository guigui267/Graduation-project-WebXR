import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { _Global, _TJS } from "./global.js";

function RobotMov() {

    console.log(_Global.robot119, "119机器人----------------------------------------");

    console.log(_Global.MQGMod, "煤气罐。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。");

    console.log(_Global.CFDOOR, "厂房xxxxxxxxxxxxxxxxxxx");
    console.log(_Global.CLJ, "垃圾处理机器");



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
    s1.to({ x: 4.6 }, 1000);
    s1.onUpdate(function () {
        _Global.robot119.position.x = m.x;
    })

    let s2 = new TWEEN.Tween(m);//旋转
    s2.to({ s: -Math.PI / 2 }, 1000);
    s2.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })

    let s3 = new TWEEN.Tween(m);//平移
    s3.to({ z: 103.75 }, 7000);
    s3.onUpdate(function () {
        _Global.robot119.position.z = m.z;
    })

    let s4 = new TWEEN.Tween(m);//旋转
    s4.to({ z: 104.656, s: 0 }, 1000);
    s4.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.robot119.position.z = m.z;
    })


    let s5 = new TWEEN.Tween(m);//平移
    s5.to({ x: 49.227, s: 0 }, 4000);
    s5.onUpdate(function () {
        _Global.robot119.position.x = m.x;
    })

    let s6 = new TWEEN.Tween(m);//旋转
    s6.to({ s: Math.PI / 2 }, 1000);
    s6.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })

    let s7 = new TWEEN.Tween(m);//平移
    s7.to({ z: -0.095 }, 7000);
    s7.onUpdate(function () {
        _Global.robot119.position.z = m.z;
    })

    let s8 = new TWEEN.Tween(m);//旋转
    s8.to({ s: 0 }, 1000);
    s8.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })

    let s9 = new TWEEN.Tween(m);//平移
    s9.to({ x: 63.134 }, 2000);
    s9.onUpdate(function () {
        _Global.robot119.position.x = m.x;
    })

    let s10 = new TWEEN.Tween(m);//旋转
    s10.to({ s: Math.PI / 2 }, 1000);
    s10.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })


    ////////////////关节动//////////////////////////////
    let s11 = new TWEEN.Tween(m);//平移
    s11.to({ z: -2.503 }, 1000);
    s11.onUpdate(function () {
        _Global.robot119.position.z = m.z;

    })

    let s12 = new TWEEN.Tween(m);//旋转
    s12.to({ h: -(Math.PI / (180 / 6.65)), q: Math.PI / (180 / 8.515) }, 1000);
    s12.onUpdate(function () {
        _Global.robot119.children[0].children[0].children[0].rotation.z = m.h;
        _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation.z = m.q;
    })

    //////////////////////////////机器人返回Back//////////////////////////////////////////

    let M1 = new TWEEN.Tween(m);//关节旋转
    M1.to({ h: 0, q: 0, t: 3.661 }, 1000);
    M1.onUpdate(function () {
        _Global.robot119.children[0].children[0].children[0].rotation.z = m.h;
        _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation.z = m.q;
        _Global.MQGMod.position.y = m.t;
    })

    let M2 = new TWEEN.Tween(m);//旋转
    M2.to({ s: Math.PI, f: Math.PI / 2 }, 1000);
    M2.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })


    let M3 = new TWEEN.Tween(m);//平移
    M3.to({ w: 19.069, x: 50.5 }, 2000);
    M3.onUpdate(function () {
        _Global.robot119.position.x = m.x;
        _Global.MQGMod.position.x = m.w;
    })

    let M4 = new TWEEN.Tween(m);//旋转
    M4.to({ s: (Math.PI / 2) * 3, f: Math.PI }, 1000);
    M4.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })


    let M5 = new TWEEN.Tween(m);//平移
    M5.to({ i: 53.738, z: 102.936 }, 7000);
    M5.onUpdate(function () {
        _Global.robot119.position.z = m.z;
        _Global.MQGMod.position.z = m.i;
    })


    let M6 = new TWEEN.Tween(m);//旋转
    M6.to({ s: Math.PI, f: Math.PI / 2 }, 1000);
    M6.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })


    let M7 = new TWEEN.Tween(m);//平移
    M7.to({ w: -30.266, x: 1.165 }, 5000);
    M7.onUpdate(function () {
        _Global.robot119.position.x = m.x;
        _Global.MQGMod.position.x = m.w;
    })


    let M9 = new TWEEN.Tween(m);//平移
    M9.to({ w: -49.428, x: -18 }, 3000);
    M9.onUpdate(function () {
        _Global.robot119.position.x = m.x;
        _Global.MQGMod.position.x = m.w;
    })


    let M10 = new TWEEN.Tween(m);//旋转
    M10.to({ s: Math.PI / 2, f: 0 }, 1000);
    M10.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })

    let M11 = new TWEEN.Tween(m);//平移
    M11.to({ i: 31.252, z: 80.45 }, 5000);
    M11.onUpdate(function () {
        _Global.robot119.position.z = m.z;
        _Global.MQGMod.position.z = m.i;
    })

    let M12 = new TWEEN.Tween(m);//旋转
    M12.to({ s: 0, f: -Math.PI / 2 }, 2000);
    M12.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })

    let M14 = new TWEEN.Tween(m);//平移
    M14.to({ w: -44.134, x: -12.706 }, 3000);
    M14.onUpdate(function () {
        _Global.robot119.position.x = m.x;
        _Global.MQGMod.position.x = m.w;
    })
    ////////////////////返航////////////////////

    let M15 = new TWEEN.Tween(m);//平移
    M15.to({ x: -18.331 }, 2000);
    M15.onUpdate(function () {
        _Global.robot119.position.x = m.x;
    })

    let M16 = new TWEEN.Tween(m);//旋转
    M16.to({ s: -Math.PI / 2 }, 1000);
    M16.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })

    let M17 = new TWEEN.Tween(m);//平移
    M17.to({ z: 102.145 }, 3000);
    M17.onUpdate(function () {
        _Global.robot119.position.z = m.z;
    })


    let M18 = new TWEEN.Tween(m);//旋转
    M18.to({ s: 0 }, 1000);
    M18.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
    })


    let M19 = new TWEEN.Tween(m);//平移
    M19.to({ x: 4.88 }, 4000);
    M19.onUpdate(function () {
        _Global.robot119.position.x = m.x;
    })

    let M20 = new TWEEN.Tween(m);//旋转+煤气罐下沉
    M20.to({ s: Math.PI / 2, t: -0.6 }, 1000);
    M20.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.position.y = m.t;
    })

    let M21 = new TWEEN.Tween(m);//平移+煤气罐平移
    M21.to({ z: 0, w: 31.706, i: -51.701 }, 7000);
    M21.onUpdate(function () {
        _Global.robot119.position.z = m.z;
        _Global.MQGMod.position.x = m.w;
        _Global.MQGMod.position.z = m.i;
    })

    let M22 = new TWEEN.Tween(m);//旋转
    M22.to({ s: 0, f: 0 }, 1000);
    M22.onUpdate(function () {
        _Global.robot119.children[0].rotation.y = m.s;
        _Global.MQGMod.rotation.y = m.f;
    })


    let M23 = new TWEEN.Tween(m);//平移+煤气罐上移
    M23.to({ x: 0, t: 3.348 }, 2000);
    M23.onUpdate(function () {
        _Global.robot119.position.x = m.x;
        _Global.MQGMod.position.y = m.t;
    })



    ///////////////////////////////////////////厂房门/////////////////////////////////

    let d = { x: 0, y: 0, z: 0 };
    d.x = _Global.CFDOOR.children[16].position.x;
    d.y = _Global.CFDOOR.children[16].position.y;
    d.z = _Global.CFDOOR.children[16].position.z;

    let D8 = new TWEEN.Tween(d);//平移
    D8.to({ x: -0.315, z: -7.774 }, 5000);
    D8.onUpdate(function () {
        _Global.CFDOOR.children[16].position.x = d.x;
        _Global.CFDOOR.children[16].position.z = d.z;
    })

    let D19 = new TWEEN.Tween(d);//平移
    D19.to({ x: 0, z: 0 }, 5000);
    D19.onUpdate(function () {
        _Global.CFDOOR.children[16].position.x = d.x;
        _Global.CFDOOR.children[16].position.z = d.z;
    })
    /////////////////////////////////////////////////垃圾处理机器////////////////////////////////

    let g = { x: 0, y: 0, z: 0 };
    g.y = _Global.CLJ.children[1].position.y;
    let G13 = new TWEEN.Tween(g);
    G13.to({ y: 3.756 }, 5000);
    G13.onUpdate(function () {
        _Global.CLJ.children[1].position.y = g.y;
    })

    let G14 = new TWEEN.Tween(g);
    G14.to({ y: 0 }, 5000);
    G14.onUpdate(function () {
        _Global.CLJ.children[1].position.y = g.y;
    })




    ////////////////////////////////////分界线///////////////////////////////////////////
    s1.start();
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




}

///////////////////////机器人返回///////////////////////////
// function robotBack() {

//     let e = {
//         x: 0,
//         y: 0,
//         z: 0,
//         r: 0,
//         s: 0,
//         g: 0,
//         h: 0,
//         q: 0,
//         p: 0,
//         ///////////////上面是机器人坐标/////////////分割线///////////下面是煤气罐坐标///////////////////
//         m: 0,
//         n: 0,
//         t: 0
//     };

//     e.x = _Global.robot119.position.x;
//     e.y = _Global.robot119.position.y;
//     e.z = _Global.robot119.position.z;
//     e.r = _Global.robot119.rotation._x;
//     e.s = _Global.robot119.rotation._y;
//     e.g = _Global.robot119.rotation._z;
//     //////////////////////////子对象/////////////////////////
//     e.h = _Global.robot119.children[0].children[0].children[0].rotation._z;
//     e.q = _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation._z;

//     let M1 = new TWEEN.Tween(e);
//     M1.to({ h: 0, q: 0 }, 5000);
//     M1.onUpdate(function () {
//         _Global.robot119.children[0].children[0].children[0].rotation.z = e.h;
//         _Global.robot119.children[0].children[0].children[0].children[0].children[0].rotation.z = e.q;
//     })



// }




export { RobotMov };