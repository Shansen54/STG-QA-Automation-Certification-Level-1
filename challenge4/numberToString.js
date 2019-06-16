module.exports = {
    toWords: toWords
}

function toWords(number){
var singleNum_array = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens_array = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var th = ['','thousand','million', 'billion','trillion'];

var s = s_number = number.toString();
var x = s.length; 
var n = s.split(''); 
var str = ''; 
var scount = 0; 
   for (var i=0; i < x; i++) 
	{
    	if ((x-i)%3==2) 
	{if (n[i] == '1') 
		{str += singleNum_array[Number(n[i+1])] + ' ';i++; scount=1;}
		else if (n[i]!=0) 
		{str += tens_array[n[i]] + ' ';scount=1;}
    } 
	else if (n[i]!=0) 
		{str += singleNum_array[n[i]] +' '; 
		if ((x-i)%3==0) str += 'hundred ';scount=1;} 
        if ((x-i)%3==1) 
		{if (scount) str += th[(x-i-1)/3] + ' ';scount=0;}
    } 
return str;
}
