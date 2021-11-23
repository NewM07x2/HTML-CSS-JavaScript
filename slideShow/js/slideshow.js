'use strict'
// 厳密なエラーチェックを行う
// ↓処理開始
{
  const images = [
    'img/main.jpg',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg'
  ]


  // 今何番目の画像を表示してしているかを示す
  var currentNum = 0;

  // mainの画像を設定してく
  // まずは表示する領域をしていく
  // mainタグのimgタグにimages配列のcurrentNum(0番目)を配置する
  setMainImage(images[currentNum]);

  // 同じ要領でサムネイル画像を表示されるしていく
  // まずはサムネイル画像を取得する(当てこむ場所の生成)
  // thumbnails クラスと指定してあげると、サムネイルクラスの ul が取得できる
  const thumbnails = document.querySelector('.thumbnails');
  // 画像分ループを回しli要素を生成する
  // 配列内それぞれの画像のファイル名を image としつつ
  // 次の処理をしてね、と書く
  images.forEach((image, index) => {
    // li要素を作成
    const li = document.createElement('li');
    // currentクラスとつけていく
    if(index === currentNum){
      li.classList.add('current');
    }

    // サムネイル画像クリック後にメイン画像を
    // 交代するように設定してやる
    li.addEventListener('click',() =>{
      // クリックしたら次の処理
      // セットしたい画像を引数として渡してやる
      setMainImage(image);

      // クリックに応じてcurrentクラスも移動してやる
      // ①付与されていたタグからクラスをとる＝函数にまとめる
      removeCurrentClass();

      // ②現在のcurrentNumを更新してやる
      currentNum = index;

      // ③選択されたimageに付与
      addCurrentClass();
    });

    // img要素を作成
    const img = document.createElement('img');
    // さらにimgのsrc属性にそれぞれの画像を入れる設定
    img.src = image;
    // li要素に追加
    li.appendChild(img);
    thumbnails.appendChild(li);

  });
  // メイン画像の設定
  // imageが渡ってくる
    function setMainImage(image){
      // メイン画像の src 属性を受け取った image で
      // 書き換えれば良いので、
      // まずは querySelector() で要素を特定してやる
      document.querySelector('main img').src = image;
    }
   function removeCurrentClass() {
     document.querySelectorAll('.thumbnails li')[currentNum].classList.remove('current');
    }
   function addCurrentClass() {
     document.querySelectorAll('.thumbnails li')[currentNum].classList.add('current');
   }

   // 次へボタン押下時に画像を進める処理
   // ボタン押下後に現在のcurrentクラスを次にずらす
   // 1:どこのボタンかを指定する
   const next = document.getElementById('next');

   // next:クリック後の処理
    next.addEventListener('click',() =>{
      // 1:クラスが更新される前に取り除く
      removeCurrentClass();
      // 2:メインの画像を差し替える
      currentNum++;
      // 3:選択されたimageに付与
      // 4:画像数以上になった場合、currentNumを0にする
      if (currentNum === images.length){
        currentNum = 0;
      }
      addCurrentClass();
      setMainImage(images[currentNum]);
    });
   // prev:クリック後の処理
   const prev = document.getElementById('prev');
    prev.addEventListener('click',() =>{
      // 1:クラスが更新される前に取り除く
      // 2:メインの画像を差し替える
      // 3:選択されたimageに付与
      // 4:画像数以上になった場合、currentNumを0にする
      removeCurrentClass();
      currentNum--;
      if (currentNum < 0){
        currentNum = images.length-1;
      }
      addCurrentClass();
      setMainImage(images[currentNum]);
    });

    // playボタン押下後に自動的にスライドされるようにする
    // まず、要素の取得
    const play = document.getElementById('play');
    play.addEventListener('click', () => {
      // 一定時間ごとに写真をスライドさせる
      playSlideshow();
    });

      function playSlideshow() {
        // setTimeout():一定時間ごとに繰り返すことのできる関数
        setTimeout(() => {
          // nextと同じ処理
        next.click();
        playSlideshow();
      }, 10000); //1000ミリ秒後
    }

}
