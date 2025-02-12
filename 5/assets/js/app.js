$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
    // #headerにopenクラスがあれば削除
    if($('#header').hasClass('open')){
      //openクラスを削除
      $('#header').removeClass('open');
    }
    // #headerにopenクラスが存在しない場合
    else{
      $('#header').addClass('open');
    }
  });

  // メニュー表示中に画面をクリックした場合
  $('#mask').on('click', function(){
    //openクラスを削除してメニューを閉じる
    $('#header').removeClass('open');
  });
});