  // ボタン押下後Ajax通信を開始
$('#button').on('click', function(){
  alert("通信開始");
  $.ajax({
    url: 'test.js',　//接続するクラス名(phpでもok)
    type: 'GET',　　　　　　　 //GET通信なのか、POST通信なのか
    // dataType: 'json'　　　　 //javaに送信するデータのタイプ
    //     data: {　　　　　　    //この形式の書き方をjsonと言います。
    //     userid: 1,           //useridという変数名に1という情報を保持
    //     password: 'hoge',
    // },
    success: function (result) {
      alert("通信OK！");
    },
    error: function (result) {
      alert("通信NG！");
    }
  })
});

$('#button2').on('click', function(){
  alert("通信開始２");
  $.ajax({
    url: 'test.js',
    type:'GET'
  }).done(function(result){
    // 「done」オプションは通信が成功したとき
      alert("通信OK2！");
    }).fail(function(result){
      // 「fail」オプションは通信が失敗したとき
      alert("通信NG2！");
    }).always(function(result){
      alert("通信を終了しました！");
    })
});
