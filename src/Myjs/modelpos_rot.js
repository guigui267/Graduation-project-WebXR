///////////////////目前模型旋转有问题，存在bug暂时不让旋转//////////////////////
let modelrotation = 0;//Math.PI



//////////////////模型复制坐标数据/////////////////////////////
let T1_4pos = [
    { x: 0, y: 0, z: -7.144, r: 0 },
    { x: 0, y: 0, z: -14.287, r: 0 },
    { x: -10.643, y: 0, z: 2.692, r: modelrotation },
    { x: -10.643, y: 0, z: -4.452, r: modelrotation },
    { x: -10.643, y: 0, z: -11.596, r: modelrotation },
    { x: -10.643, y: 0, z: -18.793, r: modelrotation },
    { x: -29.968, y: 0, z: -21.131, r: 0 },
    { x: -29.968, y: 0, z: -28.446, r: 0 }
];

let M3_3pos = [
    { x: 0, y: 0, z: -7.962, r: 0 },
    { x: 0, y: 0, z: -15.923, r: 0 },
    { x: 0, y: 0, z: -25.685, r: 0 },
    { x: 0, y: 0, z: -33.258, r: 0 },
    { x: 0, y: 0, z: -40.831, r: 0 },
    { x: 0, y: 0, z: -48.404, r: 0 },
    { x: 0, y: 0, z: -55.978, r: 0 },
    { x: 0, y: 0, z: -63.551, r: 0 },
    { x: 0, y: 0, z: -76.138, r: 0 },
    { x: -16.641, y: 0, z: 0, r: 0 },
    { x: -16.641, y: 0, z: -6.818, r: 0 },
    { x: -16.641, y: 0, z: -13.541, r: 0 },
    { x: -16.641, y: 0, z: -20.567, r: 0 },
    { x: -16.641, y: 0, z: -28.289, r: 0 },
    { x: -16.641, y: 0, z: -35.535, r: 0 },
    { x: -16.641, y: 0, z: -42.913, r: 0 },
    { x: -16.641, y: 0, z: -50.804, r: 0 },
    { x: -16.641, y: 0, z: -58.694, r: 0 },
    { x: -16.641, y: 0, z: -66.585, r: 0 }

];

let VMC850pos = [
    { x: -11.659, y: 0, z: 2.692, r: modelrotation }
];


let M1_4pos = [
    { x: 0, y: 0, z: -4.25, r: 0 },
    { x: 0, y: 0, z: -8.5, r: 0 },
    { x: 0, y: 0, z: -12.75, r: 0 },
    { x: 0, y: 0, z: -17, r: 0 },
    { x: -11.659, y: 0, z: 2.692, r: modelrotation },
    { x: -11.659, y: 0, z: -1.559, r: modelrotation },
    { x: -11.659, y: 0, z: -5.809, r: modelrotation },
    { x: -11.659, y: 0, z: -10.059, r: modelrotation },
    { x: -11.659, y: 0, z: -14.309, r: modelrotation },
    { x: -18.215, y: 0, z: -5.809, r: 0 },
    { x: -18.215, y: 0, z: -9.695, r: 0 },
    { x: -18.215, y: 0, z: -13.582, r: 0 },
    { x: -18.215, y: 0, z: -17.469, r: 0 },
    { x: -18.215, y: 0, z: -21.356, r: 0 },
    { x: -18.215, y: 0, z: -25.243, r: 0 },
    { x: -18.215, y: 0, z: -35.48, r: 0 },
    { x: -18.215, y: 0, z: -40.011, r: 0 },
    { x: -18.215, y: 0, z: -49.511, r: 0 },
    { x: -18.215, y: 0, z: -56.91, r: 0 },
    { x: -18.215, y: 0, z: -64.95, r: 0 }

];


let TC500pos = [
    { x: 0, y: 0, z: 38.968, r: 0 },
    { x: 0, y: 0, z: 42.959, r: 0 },
    { x: 0, y: 0, z: 53.424, r: 0 },
    { x: 0, y: 0, z: 57.486, r: 0 },
    { x: 0, y: 0, z: 38.968, r: 0 },
    { x: 0, y: 0, z: 61.223, r: 0 }
];


let h = 0;

let GClightpos = [
    { x: -13.844, y: h, z: 0 },
    { x: -27.678, y: h, z: 0 },
    { x: -41.531, y: h, z: 0 },
    { x: -55.374, y: h, z: 0 },
    { x: 0, y: h, z: 13.212 },
    { x: 0, y: h, z: 26.424 },
    { x: 0, y: h, z: 39.636 },
    { x: 0, y: h, z: 52.849 },
    { x: 0, y: h, z: 66.061 },
    { x: 0, y: h, z: 79.273 },
    { x: 0, y: h, z: 92.485 },
    { x: -55.374, y: h, z: 13.212 },
    { x: -41.531, y: h, z: 13.212 },
    { x: -27.687, y: h, z: 13.212 },
    { x: -13.844, y: h, z: 13.212 },
    { x: -55.374, y: h, z: 26.424 },
    { x: -41.531, y: h, z: 26.424 },
    { x: -27.687, y: h, z: 26.424 },
    { x: -13.844, y: h, z: 26.424 },
    { x: -55.374, y: h, z: 39.636 },
    { x: -41.531, y: h, z: 39.636 },
    { x: -27.687, y: h, z: 39.636 },
    { x: -13.844, y: h, z: 39.636 },
    { x: -55.374, y: h, z: 52.849 },
    { x: -41.531, y: h, z: 52.849 },
    { x: -27.687, y: h, z: 52.849 },
    { x: -13.844, y: h, z: 52.849 },
    { x: -55.374, y: h, z: 66.061 },
    { x: -41.531, y: h, z: 66.061 },
    { x: -27.687, y: h, z: 66.061 },
    { x: -13.844, y: h, z: 66.061 },
    { x: -55.374, y: h, z: 79.273 },
    { x: -41.531, y: h, z: 79.273 },
    { x: -27.687, y: h, z: 79.273 },
    { x: -13.844, y: h, z: 79.273 },
    { x: -55.374, y: h, z: 92.485 },
    { x: -41.531, y: h, z: 92.485 },
    { x: -27.687, y: h, z: 92.485 },
    { x: -13.844, y: h, z: 92.485 },





]


export { T1_4pos, M3_3pos, M1_4pos, TC500pos, VMC850pos };