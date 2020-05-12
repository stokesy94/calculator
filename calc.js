function display(val){
  document.getElementById("visual").value+=val;
}

function calculate(val){
  let x = document.getElementById("visual").value
  let y = eval(x);
  document.getElementById("visual").value = y;
}

function clr(){
  document.getElementById("visual").value = "";
}
