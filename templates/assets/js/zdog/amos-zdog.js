$(function(){
  let isSpinning = true; // 是否开始动画
  // let TAU = Zdog.TAU;

  // 创建画布
  let newcanvas = new Zdog.Illustration({
      // 用id选择器设置画布
      element: '#amos-logo-zdog-canvas',
      scale: 0.7,
      dragRotate: true,
      onDragStart: function() {
        isSpinning = false;
      },
  });

  // 开始画画

  // 脸的组合
  let faceGroup = new Zdog.Group({
    addTo: newcanvas,
    translate: { z: 0 },
  });

  // 脸
  let face = new Zdog.Cylinder({
      addTo: faceGroup,
      translate: { z: 0 },
      diameter: 200,
      length: 32,
      stroke: false,
      color: '#EAEBE6',
      frontFace: '#F9F9F8',
      backface: '#C7C7C7',
      fill: true,
  });

  // 眉毛
  let eyebrow = new Zdog.Shape({
    addTo: faceGroup,
    translate: { x: 0, y: 0, z: 0 },
    path: [
      { x: -60, y: -40 },   // start
      { arc: [ // start next arc from last end point
        { x:  -32, y:  -48 }, // corner
        { x:  -24, y:  -40 }, // end point
      ]},
    ],
    closed: false,
    stroke: 7,
    color: '#31353A'
  });
  eyebrow.copy({
    // overwrite original options
    translate: { x: 74, y: 2, z: 0 },
    color: '#31353A',
  });

  // 眼睛
  let eye = new Zdog.Shape({
    addTo: faceGroup,
    translate: { x: -2, y: 28, z: 0 },
    path: [
      { x: -40, y: -46 },   // start
      { arc: [ // start next arc from last end point
        { x:  -48, y: -20  }, // corner
        { x:  -42, y: -20  }, // end point
      ]},
    ],
    closed: false,
    stroke: 7,
    color: '#31353A'
  });
  eye.copy({
    // overwrite original options
    translate: { x: 74, y: 28, z: 0 },
    color: '#31353A',
  });

  // 鼻子
  let nose = new Zdog.Shape({
    addTo: faceGroup,
    translate: { x:-36, y: 42, z: 0 },
    path: [
      { x: 30, y: -10 },   // start
      { arc: [ // start next arc from last end point
        { x:  2, y: -40  }, // corner
        { x:  10, y: -10  }, // end point
      ]},
    ],
    closed: false,
    stroke: 5,
    color: '#31353A'
  });

  // 嘴巴
  let mouth = new Zdog.Shape({
    addTo: faceGroup,
    translate: { x: 50, y: 100, z: 0 },
    path: [
      { x: -70, y: -40 },   // start
      { arc: [ // start next arc from last end point
        { x:  -32, y:  -40 }, // corner
        { x:  -24, y:  -48 }, // end point
      ]},
    ],
    closed: false,
    stroke: 7,
    color: '#31353A'
  });

  // 动画
  // let t = 0;
  // let tSpeed = 1/240;
  let ticker = 0;
  let cycleCount = 500;
  function animate() {
    // rotate
    // if ( isSpinning ) {
    //   let progress = ticker / cycleCount;
    //   let tween = Zdog.easeInOut( progress % 1, 3 );
    //   newcanvas.rotate.y = tween * Zdog.TAU;
    //   ticker++;

    //   // newcanvas.rotate.y -= 0.006;

    //   // t += tSpeed;
    //   // let theta = Zdog.easeInOut( t % 1.2 ) * TAU;
    //   // let delta = TAU * -3.5/64;
    //   // newcanvas.rotate.y = Math.sin( theta ) * delta;
    //   // newcanvas.rotate.x = ( Math.cos( theta ) * -0.2 + 0.2 ) * delta;
    // }
    newcanvas.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  // 开始动画，执行函数
  animate();

  // 没错误就显示zdog
  $(".amos-static-logo").css({"display":"none"});
  $(".amos-zdog-logo").css({"display":"block"});
});