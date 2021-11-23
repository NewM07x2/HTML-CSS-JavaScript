'use strict';

{
  function draw() {
  const canvas = document.querySelector('canvas');
//   ブラウザがcanvasをサポートしているかを確認
  if (typeof canvas.getContext==='undefined'){
    return;
  }
  // 描画に必要な描写を取得する
  // getContext('2d')→平面
  const ctx = canvas.getContext('2d');

//   四角を描写するための型
// ctx.fillRect(x , y , width ,height);

// // デフォルトだと黒で塗りつぶされている
// ctx.fillStyle = 'pink';
// // で色を指定できる
// // 枠線の色を変える場合
// ctx.strokeStyle = 'red';
// // 線の太さを変える 単位はいらない
// ctx.lineWidth = 6;
// // 角を修正
// // 丸み
// // ctx.lineJoin = 'round';
// // 角を斜めにする
// ctx.lineJoin = 'bevel';

// // Canvas内に塗り潰した四角を描写
// ctx.fillRect(50, 50 , 50 ,50);

// // Canvas内に枠だけを描写
// ctx.strokeRect(50, 50 , 50 ,50);

// // 上記のスタイルはこの後の全ての描写にも適応される
// // 異なるスタイルにしたい場合、その都度修正してやる必要がある
// // 後から書かれる描写は重なっていく

// ctx.fillStyle = 'skyblue';
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 6;
// ctx.fillRect(70, 70 , 50 ,50);
// ctx.strokeRect(70, 70 , 50 ,50);

// 線形グラデーションを設定しよう
// ここから
// // ctx.createLinearGradient(x0,y0 x1,y1);
// const g = ctx.createLinearGradient(0, 0, canvas.width, 0);
// // g.addColorStop(始点の位置、’始点の色を指定’);
// g.addColorStop(0, '#f00');
// g.addColorStop(0.5, '#0f0');
// g.addColorStop(1, '#00f');
// ctx.fillStyle = g;
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ここまで

// ここから
// 円形のクラデーション
// const g = ctx.createRadialGradient(
//     x0,y0,r0, :始点
//     x1,y1,r1　:終点
// );
// const g = ctx.createRadialGradient(
//     canvas.width/2,canvas.height/2,50, 
//     canvas.width/2-400,canvas.height/2-200,500
// );
// g.addColorStop(0, '#00f');
// g.addColorStop(0.2, '#0f0');
// g.addColorStop(0.3, '#fff');
// g.addColorStop(0.4, '#000');
// ctx.fillStyle = g;
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ここまで

// 影をつける
// ここから
// ctx.shadowOffsetX = 4;
// ctx.shadowOffsetY = 4;
// ctx.shadowBlur = 4;
// ctx.shadowColor = 'rgba(0, 0 ,0, 0.3)';
// // 四角を作成
// ctx.fillRect(50, 50, 50, 50);
// ここまで

// 線の描写
// ここから
// 線を引くことを宣言
// ctx.beginPath();
// // 始点が50-50
// ctx.moveTo(50,50);
// // xに100線を引く
// ctx.lineTo(100,50);

// ctx.lineTo(100,100);
// ctx.lineTo(200,100);
// ctx.lineTo(200,200);
// ctx.lineTo(400,200);
// ctx.lineTo(400,400);
// ctx.closePath();
// // ctx.stroke();
// ctx.fill();
// ここまで

// ここから
// // 線のスタイルを設定
// ctx.beginPath();
// // 始点
// ctx.moveTo(100,50);
// // 終点
// ctx.lineTo(200,50);
// // 点線
// // ctx.setLineDash([線の長さ,空白の長さ]);
// ctx.setLineDash([1,5]);
// // 始点・終点の位置の点を結ぶ
// ctx.stroke();

// ctx.beginPath();
// // 始点
// ctx.moveTo(100,100);
// // 終点
// ctx.lineTo(200,100);
// // 点線
// // 前の状態が引き継がれてしまうので、空の配列を指定してやる
// ctx.setLineDash([]);
// // 始点・終点の位置の点を結ぶ
// ctx.stroke();

// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(100,150);
// ctx.lineTo(200,150);
// ctx.lineWidth =50;
// // 線の状態を修正
// ctx.lineCap ="butt";
// ctx.stroke();
// ここまで

// 円弧を描画
// ここから
    // ctx.arc(x, y, r, start, end);
    // ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    // ctx.arc(100, 200, 100, 0, 2 * Math.PI);
    // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
    // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI);
    // ctx.moveTo(100, 100);
    // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
    
    // ctx.stroke();
    // ctx.fill();
// ここまで

// ここから
// 楕円を描画
// ctx.ellipse(x,y,rx,ry,rotation,start,end);
// ctx.ellipse(100,100,50,30,0,0,2 * Math.PI);
// 四角を描写
// ctx.rect(50,60,40,60);
// 実行
// ctx.stroke();
// ここまで

// ここから
// テキストを描画
// ctx.beginPath();
// ctx.moveTo(0, 100);
// ctx.lineTo(canvas.width, 100);
// ctx.moveTo(100, 0);
// ctx.lineTo(100, canvas.height);
// ctx.stroke();

// テキストのCSSを指定
// ctx.font = 'bold 64px Verdana';
// ctx.textAlign = 'right';
// ctx.textBaseline = 'top';
// テキストを記載
// ctx.fillText('Tokyo', 100, 100);
// テキストの最大幅を指定してやる
// ctx.fillText('Tokyo', 100, 100, 100);
// テキスト表示
// ctx.strokeText('Tokyo', 100, 100, 100);
// 実行
// ctx.stroke();
// ここまで

// ここから
// 画像を描画
// const img = document.createElement('img');
// img.src = 'img/mnitta.PNG';
// // 画像の場合は読み込み後に描写したい。
// img.addEventListener('load',()=>{
//   // ctx.drawImage(表示する画像 ,横,縦,横幅,縦幅);
//   // ctx.drawImage(img ,1,1,10,5 );
//   // const pattern = ctx.createPattern(img,'repeat');
//   // repeat-x, repeat-y, no-repeat
//   // x方向のみにに繰り返しの場合
//   const pattern = ctx.createPattern(img, 'repeat-x');

//   ctx.fillStyle = pattern;
//   ctx.fillRect(0,0,canvas.width,canvas.height);
// });
// ここまで

// ここから
// 画像の一部を切り出し 
// const img = document.createElement('img');
// img.src = 'img/sprite.png';

// img.addEventListener('load',()=>{
//   // ctx.drawImage(img,0,0); 
//   // 切り出し
//   ctx.drawImage(
//     img,
//     // sx,sy,sw,sh,
//     70*2,70*2,70,70,
//     // dx,dy,dw,dh
//     0,0,100,100
//   );
// });
// ここまで

// ここから
// キャラクターを描いてみよう
// ctx.beginPath();
// ctx.ellipse(100,100,40,30,0,0,2*Math.PI);
// ctx.fillStyle = 'black';
// ctx.fill();

// ctx.beginPath();
// ctx.ellipse(80,100,8,8,0,0,2*Math.PI);
// ctx.ellipse(120,100,8,8,0,0,2*Math.PI);
// ctx.fillStyle = 'skyblue';
// ctx.fill();

// // scaleを使用することです座標空間ごと半分にしている。
// ctx.scale(0.5,0.5);
// ctx.beginPath();
// ctx.ellipse(100,100,40,30,0,0,2*Math.PI);
// ctx.fillStyle = 'black';
// ctx.fill();

// ctx.beginPath();
// ctx.ellipse(80,100,8,8,0,0,2*Math.PI);
// ctx.ellipse(120,100,8,8,0,0,2*Math.PI);
// ctx.fillStyle = 'skyblue';
// ctx.fill();

// ここまで

// 高解像度ディスプレイに対応
// 解像度の密度に応じて、いったん大きな領域に描画したあとに、
// それをぎゅっと縮小して表示してあげればきれいになるはず
// ディスプレイの密度なのですが、 window.devicePixelRatio で取得できる

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 240;
const dpr = window.devicePixelRatio || 1;
canvas.width = CANVAS_WIDTH * dpr;
canvas.height = CANVAS_HEIGHT * dpr;
ctx.scale(dpr, dpr);
canvas.style.width = CANVAS_WIDTH + 'px';
canvas.style.height = CANVAS_HEIGHT + 'px';

ctx.font = 'bold 48px Verdana';
ctx.strokeText('Tokyo', 100, 100);

  }

  draw();
}