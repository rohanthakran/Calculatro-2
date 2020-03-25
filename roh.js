function insert(num){
    document.form.textview.value += num; 
}
function zero(){
    document.form.textview.value = "";
}
function equal(){
   var exp = document.form.textview.value;
   if(exp){
       document.form.textview.value = eval(exp);
    }
}

function clean(){
    var exp = document.form.textview.value;
    document.form.textview.value= exp.substring(0, exp.length-1);
}
