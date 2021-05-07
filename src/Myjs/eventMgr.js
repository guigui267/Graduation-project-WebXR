import{_TJS}from './global.js';

var event_Mg = {
    init: function () {
        // window.addEventListener('resize', this.WindowResize, false);
        console.log("事件监听已开启。。。。。");
        // console.log(windowResize);
        // this.WindowResize();
        this.skt();

      
    },



    ///////////////////////窗口自适应/////////////////////////
    WindowResize: function () {
        _TJS.camera.aspect = window.innerWidth / window.innerHeight;
        _TJS.camera.updateProjectionMatrix();
        _TJS.renderer.setSize(window.innerWidth,window.innerHeight);
        // console.log("窗口自适应");
    },



    skt: function () {
        console.log("ok");
    },







}
export default event_Mg;