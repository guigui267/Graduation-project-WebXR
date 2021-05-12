import { _TJS, _Global } from '../Myjs/global.js';
import './loadmodels.js'

var load_Mgr = {
    modelList: [],//模型对象列表
    loadNum: 0,//模型加载数量
    counter: 0,//计数器
    // order: false,

    init: function () {

        _Global.loadtimestart = new Date().getTime();
        // this.AddModel(_Global.controlline);
        // this.AddModel(_Global.cube);
        // this.AddModel(_Global.sphereQ);
        // this.AddModel(_Global.sphereQs);
        this.AddModel(_Global.grass);//草地
        this.AddModel(_Global.CF);//厂房外观
        this.AddModel(_Global.plane);//加载工厂地面
        // this.AddModel(_Global.GC_light);//加载工厂灯
        this.AddModel(_Global.LJCL);//垃圾、危险品处理机
        ////////////////////加载设备///////////////////////////////
        this.AddModel(_Global.load_M8);

        this.AddModel(_Global.load_M1_4);//M1.4
        this.AddModel(_Global.load_M3_3);//M3.3
        this.AddModel(_Global.load_T1_4);//T1.4
        this.AddModel(_Global.load_TC500);
        // this.AddModel(_Global.load_TC700);
        this.AddModel(_Global.load_VMC850);

        this.AddModel(_Global.SaveMod119);//救援模型机器人
        this.AddModel(_Global.MQG);//煤气罐
        // this.AddModel(_Global.introduceKB);
        this.AddModel(_Global.Qifei);
        this.AddModel(_Global.Zhisheng);//直升机


        // this.AddModel(_Global.Mod8_scene2);//场景2M8模型的复制操作


        // _Global.cube();

        // this.orderLoad();
        // console.log(_Global.cube,"你好");
        this.Load();

        console.log("加载监听");



    },

    ///////////模型加载管理器/////
    AddModel: function (callback) {
        this.modelList.push(callback);
        this.loadNum += 1;
        // console.log("第"+this.loadNum+"个");
    },
    //异步加载
    Load: function () {
        var len = this.modelList.length;
        for (var e = 0; e < len; e++) {
            var callback = this.modelList.shift();
            if (callback) callback();
        }
    },
    //同步加载
    orderLoad: function () {
        var callback = this.modelList.shift();
        if (callback) callback();
    },


    loaded: function () {
        this.counter += 1;
        console.log("加载到：第" + this.counter + "个,/一共" + this.loadNum + "个");

        if (this.counter >= this.loadNum) {
            _Global.loadtimeover = new Date().getTime();
            var loadmodelpaytime = _Global.loadtimeover - _Global.loadtimestart;
            console.log("加载需要时间" + loadmodelpaytime + "s");

        }



    }


}
export default load_Mgr;
