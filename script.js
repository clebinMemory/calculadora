var valores ="";

function addVal(i){

    valores += i;
    document.getElementById("resultados").value = valores;

}
function operation(x){

    valores+=x;
        if(x=="C"){
            valores="";
    }
    document.getElementById("resultado").value = valores 


}

function calculate(){

    try{
   valores= eval(valores);
   document.getElementById("resultado").value = valores 

    }
    catch(e){
alert("reveja sua operação")
    }

} 