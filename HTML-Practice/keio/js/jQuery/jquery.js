'use strict;'//厳密なエラーチェックを行なってくれる
{
  $(function(){
    var $win = $(window);
    var winW = $win.width();
    // 初期表示　読み込み時
    if(winW < 720){
      $('#headerMenu').css({'transform':'translateX('+winW+'px)'});
    }


    $("#open_btn").on('click',function(e){
      e.preventDefault();
      $("#headerMenu").show(0, function(){
        $(this).css({'transform':'translateX('+winW+'px)'});
      });
      $('body').css({'transform':'translateX(-'+winW+'px)'});
      $('#header').css({'padding-top':'0'});
      }
    );

    $("#headerMenuClose").on('click',function(e){
      e.preventDefault();
      $("#headerMenu").show(0, function(){
        $(this).css({'transform':'translateX('+winW+'px)'});
        $(this).css({'display':'none'});
      });
      $('body').css({'transform':'translateX('+0+'px)'});
      $('#header').css({'padding-top':'5px'});
      }
    );
      // 病院からのおしらせ
    $('.info1').on('click', function(e) {
      e.preventDefault();
      $("#info_list1").toggleClass("crrent");
      }
    );
    // 医療関係者の方へのお知らせ
    $('.info2').on('click', function(e) {
      e.preventDefault();
      $("#info_list2").toggleClass("crrent");
      }
    );
    // 採用情報
    $('.info3').on('click', function(e) {
      e.preventDefault();
      $("#info_list3").toggleClass("crrent");
      }
    );

  });

}
