$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(
    function() {
      // 消えていた物を取得して出力
      $('.language-text').fadeIn();
    },
    function() {
      // 消す
      $('.language-text').fadeOut();
    }
  );
});