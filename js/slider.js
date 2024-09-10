'use strict';
//----スライドショー-----

//画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 800) {
  var responsiveImage = [//PC用の画像
    { src: './image/kimura01.jpg' },
    { src: './image/kimura01_2.jpg' },
    { src: './image/kimura01_3.jpg' }
  ];
} else {
  var responsiveImage = [//タブレットサイズ（800px）以下用の画像
    { src: './image/kimura01_4.jpg' },
    { src: './image/kimura01_5.jpg' },
    { src: './image/kimura01_6.jpg' }
  ];
}

//Vegas全体の設定

$('#slider').vegas({
  overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 3000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 7000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 6000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage,//画像設定を読む
  timer: false,
});