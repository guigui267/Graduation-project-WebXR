import { TWEEN } from "../../node_modules/three/examples/jsm/libs/tween.module.min.js";
import { _Global } from "./global.js";
import { KZTposi, KBupdate } from './controlpanel.js';

//////////////////////传送机器人位置//////////////////////////////
let pos = { x: 18.533, z: 46.079, name: "设备1" };//模型0
let pos1 = { x: -7.622, z: 45.714, name: "设备2" };//模型1
let pos2 = { x: -7.622, z: 40.017, name: "设备3" };//模型2
let pos3 = { x: -7.622, z: 18.506, name: "设备4" };//模型3
let pos4 = { x: -7.622, z: 10.17, name: "设备5" };//模型4
let pos5 = { x: -0.513, z: -30.522, name: "飞机模型" };//模型飞机观察
let pos6 = { x: -2.686, z: -25.543, name: "拆解室" };//解体室
let pos7 = { x: 46, z: -36, name: "初始位置" };//回归场景原点





function CSequipment(s) {
    console.log(_Global.buttondown, "aniu aiodoiahdlkjadhoaehdiueahlidhauhdlkhaeidheajjdnwd");
    if (_Global.buttondown == 0) {
        let speed = 2;
        // console.log("sssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddd");
        KBupdate("正在前往" + s.name);
        let n = { x: 0, y: 0, z: 0 };
        n.x = _Global.dollyMod.position.x;
        n.y = _Global.dollyMod.position.y;
        n.z = _Global.dollyMod.position.z;
        console.log(_Global.dollyMod, "传送位置");
        //时间
        let t1 = Math.abs(_Global.dollyMod.position.z - 53) / speed;
        let t2 = Math.abs(_Global.dollyMod.position.x - s.x) / speed;
        let t3 = Math.abs(53 - s.z) / speed;

        let CS = new TWEEN.Tween(n);
        CS.to({ z: 53 }, t1 * 1000);
        CS.onUpdate(function () {
            _Global.dollyMod.position.z = n.z;
            KZTposi();
        })



        let CS1 = new TWEEN.Tween(n);
        CS1.to({ x: s.x }, t2 * 1000);
        CS1.onUpdate(function () {
            _Global.dollyMod.position.x = n.x;
            KZTposi();
        })

        let CS2 = new TWEEN.Tween(n);
        CS2.to({ z: s.z }, t3 * 1000);
        CS2.onUpdate(function () {
            _Global.dollyMod.position.z = n.z;
            KZTposi();
        })





        if (_Global.dollyMod.position.x == s.x) {

            if (_Global.dollyMod.position.z == s.z) {
                console.log("当前位置不变");
            } else {
                CS2.start();
            }

        } else {

            CS.start();
            CS.chain(CS1);
            CS1.chain(CS2);
        }
        _Global.buttondown = 1;

        setTimeout(function () {
            _Global.buttondown = 0;
            KBupdate("当前任务执行完成");
        }, 15000);

    }
    else if (_Global.buttondown == 1) {
        // console.log('cscscscscsccscscscs');
    }

}

export { CSequipment, pos, pos1, pos2, pos3, pos4, pos5, pos6, pos7, };