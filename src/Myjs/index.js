// import { _TJS } from '.three/Myjs/global.js'; // import './src/Myjs/testscene.js'; 
import { camerapos } from './testscene.js';
import { KTYL, openDoor } from './ControlplanedollyMove.js';
// import { ChangeScene } from './src/Myjs/scene2.js';
import { M8_JT } from './M8JT.js';
import { RobotMov } from './robotMove.js';
import { fly } from './fly.js';
document.getElementById("controlplane").onclick = KTYL;
document.getElementById("disintegrate").onclick = M8_JT;
document.getElementById("Nowcameraposition").onclick = camerapos;
document.getElementById("danger").onclick = RobotMov;
document.getElementById("Door").onclick = openDoor;
document.getElementById("kk1").onclick = fly;
//    import { init } from './src/Myjs/init.js';
import { Rendering } from './Render.js';
import { _TJS, _Global } from './global.js';
(function () { // init(); 
    Rendering();
})();
console.log("====================index.html=======================")
           // console.log(_TJS) // console.log(_Global)
