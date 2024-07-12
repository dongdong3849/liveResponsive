// // Noto Sans CJK KR CDN
// var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
// koreanFont.load().then(function(loadedFont) {
//   document.fonts.add(loadedFont);
//   document.body.style.fontFamily = "'Noto Sans CJK KR'";
// });


// // mobile menu - 사이트 네비게이션 열김함수
// // openNav() - id="myNav" rkwudhk sjql 100%설정,
// // closeNav() - id="myNav" 가져와 너비0%설정 - 닫기
// // getElementById() 메서드 - 특정 ID를 가진 요소 선택하는 기능
// function openNav() {
//   document.getElementById("myNav").style.width="100%";
// }
// function closeNav() {
//   document.getElementById("myNav").style.width="0%";
// }

// // jQuery 위에 와 같은 결과값
// /*******************************
// function openNav(){
//   $("#myNav").css("width","100%");
// }
// function closeNav(){
//   $("#myNav").css("width","0%");
// }
//  *****************************/


// toggle line => X
function toggleMenu(){
  var $myNav = $('#myNav'); // 메뉴 감싸는 전체 컨테이너 변수저장
  if ($mtNav.css("width") == "0px"){   // 만약 가로사이즈가 0이면,
    $('.toggle-dontainer').addClass('active');  //토글 버튼에 액티브 클래스 추가하고
    $myNav.css("width", "100%"); // 메뉴 너비 100%로 열기
  } else { //그렇지 않으면
    $('.toggle-container').removeClass('active'); // 액티브 클래스 제거하고
    $myNav.css("width", "0%"); // 메뉴 너비 0으로 설정후 메뉴 닫기
  }
}










// jQuery
$(function(){
  //레이어팝업
  $(".layerPopup").on("click",function(){
    $(".popup, .bg").fadeIn();
  })
  $(".close, .bg").on("click",function(){
    $(".popup, .bg").fadeOut();
  });
})




