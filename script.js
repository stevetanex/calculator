function buttonclick(val) {

    document.getElementById("screen").value=document.getElementById("screen").value+val;

}
function clearDisplay() {
    document.getElementById("screen").value="";
}
function equalClick() {
    var test=document.getElementById("screen").value
    var result=eval(test);
    document.getElementById("screen").value=result;
}