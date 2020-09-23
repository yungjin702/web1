/* eslint no-unused-vars: "error"*/
/* eslint-disable no-unused-vars */
/* eslint-env browser */

function viewCurrDate() { //eslint-disable-lineno-unused-vars
    "use strict";
    document.getElementById('demo').innerHTML = Date();
    //alert("안녕하세요");
    var name = prompt("이름을 입력하세요");
    alert("입력한 이름은" + name);
    
    var ret = confirm("다시 입력하겠습니까?");
    alert(ret);
}

function changeColor()
{
    document.getElementById('test').style.color = "red";
}