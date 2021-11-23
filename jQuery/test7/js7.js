$(function() {
  $('.btn').click(function() {
    // 「#title」のjQueryオブジェクトを変数$titleに代入してください
    $('#title').html('jQuery');
    var $title = $('#title');
    
    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);
    
    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $('#text').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
  });
});