'use strict';
//-------ハンバーガーナビ--------
$(function () {
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
  });
});

//------スティッキーヘッダー------
$(function(){
  let win = $(window);
  let nav = $('#nav');
  let navPosi = $('#nav').offset().top;
  win.on('scroll',function(){
    let scr = win.scrollTop();
    if(scr > navPosi){
      nav.addClass('sticky');
    }else{
      nav.removeClass('sticky');
    }
  });
});

//------ページトップリンク------
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  let scroll = $(window).scrollTop();
  if (scroll >= 300) {//上から300pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  } else {
    if ($('#page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

//----お知らせ更新-----
const API = "https://api.sssapi.app/QSgDGo3ttzJXCc3enfD3h";
$(function () {
  $.ajax({
    type: "GET",
    url: API,
    dataType: "json",
  })
    .done((data, textStatus, jqXHR) => {
      // APIの呼び出しが成功した場合
      data.forEach((v) => {
        let dt;
        let dd;

        // 各項目の設定
        dt = (`<dt>${v.date}</dt>`);
        dd = (`<dd>${v.details}</dd>`);

        // 要素の追加
        $("#news_contents").append(dt, dd);
      });
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      // APIの呼び出しが失敗した場合
      window.alert(JSON.stringify(jqXHR.responseJSON, null, 2));
    });
});

// -----メールフォーム-----
$(function () {
  $("input[name='name']").val('名字名前').css('color', '#ccc').focus(function () {
    $(this).val('').css('color', '#000');
  });
  $("input[name='kana']").val('みょうじなまえ').css('color', '#ccc').focus(function () {
    $(this).val('').css('color', '#000');
  });
  $("textarea[name='message']").val('お問い合わせ・ご予約内容をご記入ください').css('color', '#ccc').focus(function () {
    $(this).val('').css('color', '#000');
  });
});
// メールフォーム送信前チェック
$(function () {
  $("form").submit(function () {
    $('#error_message p').remove();
    $('dl span').remove();
    let err = 0;
    if ($("input[name='name']").val() === '' || $("input[name='name']").val() === '名字名前') {
      $("#name").append("<span>※名前を入力してください</span>");
      err = 1;
    }
    if ($("input[name='kana']").val() === '' || $("input[name='kana']").val() === 'みょうじなまえ') {
      $("#kana").append("<span>※ふりがなを入力してください</span>");
      err = 1;
    }
    if ($("input[name='email']").val() === '') {
      $("#email").append("<span>※メールアドレスを入力してください</span>");
      err = 1;
    }
    if ($("input[name='tel']").val() === '') {
      $("#tel").append("<span>※お電話番号を入力してください</span>");
      err = 1;
    }
    if ($("input[name='address']").val() === '') {
      $("#address").append("<span>※ご住所を入力してください</span>");
      err = 1;
    }
    if ($("textarea[name='message']").val() === '' || $("textarea[name='message']").val() === 'お問い合わせ・ご予約内容をご記入ください') {
      $("#message").append("<span>※お問い合わせを入力してください</span>");
      err = 1;
    }
    if (err == 1) {
      $("#error_message").append("<p>※未入力箇所があります。入力してください</p>");
      return false;
    }

  }); // end of submit
});


// グーグルマップのスクロール禁止
$(function () {
  let map = $('.location-map iframe');
  //あらかじめiframeにpointer-events:noneを掛け、マウスイベントを無効にしておく
  map.css('pointer-events', 'none');
  //一度クリックされたらマウスイベントを有効にする
  $('.location-map').click(function () {
    map.css('pointer-events', 'auto');
  });
  //iframeからマウスが離れたら再度pointer-events:noneを効かせる
  map.mouseout(function () {
    map.css('pointer-events', 'none');
  });
})