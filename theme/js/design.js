// head.html, tail.html 페이지 불러오기
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
};

// 모바일버전(해상도 768px) 햄버거버튼 클릭시 Main Navigation Drop 이벤트
function mbmenuFunction() {
  var x = document.getElementById("main-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


// 스크롤값에 따라 Navigation 최상단에 고정 & TOP 버튼 생성
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-navigation").classList.add("fixed-top");
    document.getElementById("btn_top").style.display = "block";
  } else {
    document.getElementById("main-navigation").classList.remove("fixed-top");
    document.getElementById("btn_top").style.display = "none";
  }
};

// TOP 버튼 클릭시 도큐먼트 최상단으로 위치 이동
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
