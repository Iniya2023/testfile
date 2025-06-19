let c=0;
let a ,r;
a=parseInt(prompt("Enter the number"));
let temp=a;
let digit = a.toString().length;
while(a!=0){
	r=a%10;
	c+=Math.pow(r,digit);
	a=parseInt(a/10);	
}
if(c==temp){
	
	
	console.log(temp + "This Number is Amstrong Number");
}
else{
	
	console.log(temp + "This Number is Not a Amstrong Number");
	
}


/*let amstrong = [1, 245, 153, 370, 456, 123, 270,3,8,9,7];

for (let i = 0; i < amstrong.length; i++) {
    let n = amstrong[i];
    let temp = n;
    let c = 0;
	let digit = n.toString().length;

    while (n !==0) {
        let r = n % 10;
        c += Math.pow(r,digit);
        n = parseInt(n / 10);
    }

    if (c === temp) {
        console.log(temp + " is an Armstrong number");
    }
}


let amstrong = [];
for (let i = 1; i < 1000; i++) {
    let n = i;
    let temp = n;
    let c = 0;
	let digit = n.toString().length;

    while (n != 0) {
        let r = n % 10;
       c += Math.pow(r,digit);
        n = parseInt(n / 10);
    }

    if (c === temp) {
       amstrong.push(i);
    }

}
console.log("Amstrong Numbers are 1-999");
console.log(amstrong);
*/
