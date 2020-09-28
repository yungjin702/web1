/* eslint no-unused-vars: "error"*/
/* eslint-disable no-unused-vars */
/* eslint-env browser */
var text;

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

function Check(){
    var a = 10;
    var b = 20;
    var c = a + b;
    
    document.getElementById('test').innerHTML = c;
    
    var x = "10";
    var y = "20";
    var z = x + y; 
    
    document.getElementById('test2').innerHTML = z;
    
    z = "30";
    var result = a + b + z;
    
    document.getElementById('test3').innerHTML = result;
    
    x = "100";
    y = "10";
    z = x / y;
    
    document.getElementById('test4').innerHTML = z;
    
    z = x * y;
    
    document.getElementById('test5').innerHTML = z;
    
    z = x - y;
    
    document.getElementById('test6').innerHTML = z;
    
    z = x + y;
    
    document.getElementById('test7').innerHTML = z;
    
}

function For()
{
    var name = ["유신이", "성봉이", "우성이", "씹덕"];
    var text = "<ul>";
    for(var i = 0; i < name.length; ++i)
    {
        text += "<li>" + name[i] + "</li>";    
    }
    text += "</ul>";
    
    document.getElementById('first').innerHTML = text;
}

function Foreach()
{
    var name = ["유신이", "성봉이", "우성이", "씹덕"];
    text = "<ul>";
    name.forEach(myFunction);
    text += "</ul>";
    
    document.getElementById('second').innerHTML = text;
}

function myFunction(value)
{
    text += "<li>" + value + "</li>";    
}
