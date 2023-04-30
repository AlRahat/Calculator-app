let currentTheme = 1;


// if (currentTheme==1) {
    
    document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)"
    document.querySelector(".equal").style.backgroundColor = " hsl(6, 63%, 50%)";
    document.querySelector(".del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.querySelector(".reset").style.color = "white"
    document.querySelector(".equal").style.color = " white";
    document.querySelector(".del").style.color = "white";

    
//   }

//   if (currentTheme==2) {
    
//     document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
//     document.querySelector(".equal").style.backgroundColor = " hsl(25, 98%, 40%)";
//     document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";

//   }if(currentTheme==3){
   
//     document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";
//     document.querySelector(".equal").style.backgroundColor = "hsl(185, 42%, 37%) ";
//     document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";
//   }








function toggleTheme() {

    currentTheme++;

  if (currentTheme==2) {
    document.querySelector('body').style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".equal").style.backgroundColor = " hsl(25, 98%, 40%)";
    document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";


  }if(currentTheme==3){
    document.querySelector('body').style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".equal").style.backgroundColor = "hsl(185, 42%, 37%) ";
    document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";
 
  } 

  if (currentTheme > 3) {
    currentTheme = 1;
    document.querySelector('body').style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)"
    document.querySelector(".equal").style.backgroundColor = " hsl(6, 63%, 50%)";
    document.querySelector(".del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.querySelector(".reset").style.color = "white"
    document.querySelector(".equal").style.color = " white";
    document.querySelector(".del").style.color = "white";

  }



  document.querySelector('.calculator').className = 'calculator theme-' + currentTheme;
  
}
function deleteInput(){
     var str= document.getElementById('result').value;
     str= str.substring(0, str.length - 1);
     document.getElementById('result').value = str;
     
}
function addToInput(value) {
  document.getElementById('result').value += value;
}
function clearInput() {
  document.getElementById('result').value = '';
}
function calculateResult() {
  let input = document.getElementById('result').value;
  let result = eval(input);
  document.getElementById('result').value = result;
}