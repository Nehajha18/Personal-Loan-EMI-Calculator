function AmountChange(){
    document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
}
function YearsChange(){
    document.getElementById("txtYears").value=document.getElementById("rangeYears").value;

}
function RateChange(){
    document.getElementById("txtRate").value=document.getElementById("rangeRate").value;
}
function TextAmountChange(){
    document.getElementById("rangeAmount").value=document.getElementById("textAmount").value;
    
}
function CalculateClick(){
    var p= document.getElementById("txtAmount").value;
    var N=parseInt(document.getElementById("txtYears").value)*12;
    var R=parseFloat(document.getElementById("txtRate").value)/12/100;
    var Emi=p*R*(Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    document.getElementById("msg").innerHTML="your Monthly Installment Amount is<span class=fs-4 fe-bold> &#8377;"+Math.round(Emi).toLocaleString('en-in')+"</span> for Next" +(N/12)+"years";
}