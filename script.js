function compute()
{
	var principal = document.getElementById("principal").value ;
    	var rate = document.getElementById("rate").value ;
	var years = document.getElementById("years").value ;
	var interest = principal * years * rate / 100 ;

	var year = new Date().getFullYear() + parseInt(years) ;
//alert( "Principal : " + principal + "; Rate : " + rate + "; No. of Years : " + years + "; Interest : " + interest ) ;
	
	
	if( principal <= 0 ) {
		alert("Enter a positive number") ;
		document.getElementById("result").innerHTML = " " ;
		document.getElementById("principal").focus() ;
		return false ;
	} else {
		document.getElementById("result").innerHTML = "If you deposite &#8377;\<mark>" + principal + "\</mark>,\<br\>at an interest rate of \<mark>" + rate + "%\</mark>.\<br\>You will receive an amount of &#8377;\<mark>" + interest + "\</mark>,\<br\>in the year \<mark>" + year + "\</mark>" ;
	}
	return true ;
}

function updateRate() {
	var rateval = document.getElementById("rate").value ;
	document.getElementById("rate_val").innerText = rateval ;
 }       