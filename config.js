var a = "Lorem";
var b = "Larom";
var spl1 = a.split("");
var spl2 = b.split("");

for(i=0;i<a.length;i++){
	for(j=0;j<b.length;j++){
		if(spl1[i] == spl2[j]){
			console.log(spl1[i], i+1, "of variable a to ", spl2[j], j+1, "of variable b");
			document.write(spl1[i]);
			}
	}
}