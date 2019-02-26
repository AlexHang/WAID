function Color(r,g,b){
	this.red=r;
	this.green=g;
	this.blue=b;
}

function getColor(r,g,b){

	

	if(r>b && r>g){
		return "red";
	}
	if(g>b && g>r){
		return "green";
	}
	if(b>g && b>r){
		return "blue";
	}
}




