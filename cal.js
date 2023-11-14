function display(num){
    // id.value=get value
  text.value +=num;  


}
function clearAll(){
    text.value=''
}
function evaluateExp(){
    text.value=eval(text.value)
}
function removeLast(){
  currentExp=text.value
  text.value=currentExp.slice(0,-1)
}