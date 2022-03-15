function onDigito(boton){
  let teclaNumero = parseInt(Number(boton.innerHTML));
  if(digitosPulsados.length < 14){
      digitosPulsados.push(teclaNumero);
      showResult();
  }else{
      document.getElementsByClassName("result")[0].innerHTML = "err";
  }
}
function back(){
    if(document.getElementsByClassName("result")[0].innerHTML === "err"){
        showResult();
    }else{
        if(digitosPulsados.length > 0){
            digitosPulsados.splice(digitosPulsados.length -1, 1);
            showResult();
        }
    }
}
function comma(){
    if(!digitosPulsados.find(",")){
        digitosPulsados.push(",");
        showResult();
    }
}
function showResult(){
    result = "";
    digitosPulsados.forEach((item) => {
        result += item;
    });
    result = result === "" ? "0" : result;
    document.getElementsByClassName("result")[0].innerHTML = result;
}
let result = 0;
let digitosPulsados = [];
showResult()
