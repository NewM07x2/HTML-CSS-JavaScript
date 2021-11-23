'use strict;'
//厳密なエラーチェックを行なってくれる
// jqueryの基本的な書き方は以下になる
{
  // $(document).ready(
  //   function(){
  //     $("#title").css("background","pink");
  //   }
  // );
  // ↓短縮系
  $(function(){
    // $(".title").css("color","#3366FF");
    // // タグ名
    // $("li").css("color","green");
    // // クラス名
    // $("#java").css("color","red");

// ◯階層セレクタで要素を絞り込む
    // $("#compile ul").css("color","red");
    // $("#compile > ul").css("color","blue");
    // $("#cpp + li").css("color","green");
    // $("#Youtube ~ li").css("color","#FF00FF");

// ◯フィルタで要素を絞り込む
    // $("#compile li:first").css("color","red");
    // $("#compile li:last").css("color","green");
    // $("#compile li:even").css("color","red");
    // $("#compile li:odd").css("color","green");
    // $("#compile li:eq(1)").css("color","red");
    // $("#compile li:contains('C')").css("color","red");
    // $("li:has(ul)").css("color","red");
    // $("#compile li:first").css("color","red");

// ◯属性フィルタで要素を絞り込む
    // $("a[href='#Yahoo']").css("color","gray");
    // 部分一致
    // $("a[href*='o'][target='amazon']").css("color","red");

// ◯メソッドを使った要素指定
     // $("#facebook").prev().css("color","red")
     // $("#LINE").next().css("color","red")
     // $("#twitter").nextAll().css("color","red")
     // $("#twitter").parent().css("color","red")
     // →#twitterの親要素＝ulタグをさす

// ◯要素内のテキストの操作
    // console.log($("#title").text());
    // console.log($("#title").html());
    // console.log($("#title").text("<h1>こんにちは！</h1>"));

    // console.log($("#title").vol());

// ◯要素の挿入・置換・削除
    // $("p").append("変更")
    // $("p").prepend("変更")
    // $("p").before("<p>変更</p>")
    // $("p").after("<p>変更</p>")
    // $("h1").replaceWith("<h1>変更</h1>")
    // $("div").empty();

// ◯要素の表示・非表示
    // $("#rect").hide(1000);
    // 1000msかけて消えていく
    // $("#rect").show(1000);
    // $("#rect").toggle(1000);
    // 表示するされていたらhide(),
    // 非表示ならshow()

// ◯スライドとフェード
    // $("#rect").slideUp(1000);
    // $("#rect").slideDown(1000);
    // $("#rect").slideToggle();

    // $("#rect").fadeOut(1000);
    // $("#rect").fadeIn(1000);
    // 1000msかけて30%の濃度になる
    // $("#rect").fadeTo(1000,0.3);

// ◯click,hoverイベント
    // $("#rect").click(function(){
    //   $("#rect").css("background","pink");
    // });

    // $("#rect").hover(
    //   function(){
    //     $("#rect").css("background","pink");
    // },
    //   function(){
    //     $("#rect").css("background","red");
    // });

// ◯focus, blur, changeイベント
      // $("#form").focus(
      //   function(){
      //     console.log("フォーカスが当たりました");
      //   }
      // );
      // $("#form").blur(
      //   function(){
      //     console.log("フォーカスが外れました");
      //   }
      // );
      // $("#form").change(
      //   function(){
      //     console.log($(this).val());
      //   }
      // );

// ◯submitイベント
    $("form").submit(
      function(e){
          if(confirm("送信しますか？")){
            // OK
              var text = $("#text").val();
              if(text === ""){
                // 送信不可
                e.preventDefault();
                // console.log("NG");
                alert("入力してください")
              }else{
                // 送信！
                console.log("送信しました");
                console.log(text);
              }
          }else{
            // キャンセル
            e.preventDefault();
            console.log("NG");
          }
        }
    );
























  });
}
