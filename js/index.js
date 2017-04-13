"use strict";

function GetValue() {
  var myarray = new Array("item1", "item2", "item3");
  var random = myarray[Math.floor(Math.random() * myarray.length)];
  //alert(random);
  document.getElementById("message").innerHTML = random;
}

function copyToClipboard(elementId) {

  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).textContent);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");

  document.body.removeChild(aux);
}

$(document).ready(function () {

  /* thanks to csstricks.com: 
  https://goo.gl/9lRSlJ
  */
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 140
          }, 1000);
          return false;
        }
      }
    });
  });
});