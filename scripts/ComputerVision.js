

function calculate_percentage(){
	var redc=0,bluec=0,greenc=0,whitec=0,blackc=0,yellowc=0,silverc=0;
	for(var x=0;x<640;x++){
		for(var y=0;y<480;y++){
			var context = canvas.getContext('2d');
   		    var pixelData = context.getImageData(x, y, 1, 1).data;
   		    var auxColor =  getColor(pixelData[0],pixelData[1],pixelData[2]);
   		    if(auxColor == "red")
   		    	redc++;
   		    if(auxColor == "blue")
   		    	bluec++;
   		    if(auxColor == "green")
   		    	greenc++;
   		    if(auxColor == "white")
   		    	whitec++;
   		    if(auxColor == "black")
   		    	blackc++;
			if(auxColor == "yellow")
				yellowc++;
			if(auxColor == "silver")
				silverc++;
   		    //blue+=pixelData[1];
   		    //green+=pixelData[1];
		}
	}
	var total=redc+bluec+greenc+whitec+blackc+yellowc+silverc;
	redc = (redc/total)*100;
	bluec = (bluec/total)*100;
	greenc = (greenc/total)*100;
	whitec = (whitec/total)*100;
	blackc = (blackc/total)*100;
	yellowc = (yellowc/total)*100;
	silverc = (silverc/total)*100;
	document.getElementById("status").innerHTML = "red: " +  redc 
													+"<br> blue: "+ bluec 
													+ " <br> "+ "green: "+greenc
													+ " <br> white: "+whitec 
													+ " <br> black: "+ blackc 
													+ " <br> yellow: "+yellowc
													+ " <br> silver: "+silverc;

	
	
	
	
}



function drawVisionImage(){

/* computer vision now*/
	
	var img_table="";
	var context = canvas.getContext('2d');
	var pixelData,auxColor;
	
	
	console.log("line 233");
	//for (var i = 0, num = 200 / 10; i <= num; i+=.01) {
	for (var i = 0; i < 640; i=i+10) {
		for (var j = 480; j > 0; j=j-10){
		//console.log("still running"+i+" "+j);
			
   		    pixelData = context.getImageData(i, j, 1, 1).data;
   		    auxColor =  getColor(pixelData[0],pixelData[1],pixelData[2]);
			Image_Matrix[j][i]=auxColor;
		//img_table+='<div style="width:1px; height:1px; float:right; background-color: rgb(255,255,255);"><div>';
		//document.getElementById("draw_here").innerHTML+='<div style="width:10px; height:10px; float:left; background-color: rgb('+pixelData[0]+','+pixelData[1]+','+pixelData[2]+');"></div>';
		document.getElementById("draw_here").innerHTML+='<div style="width:10px; height:10px; float:left; background-color:'+auxColor+'"></div>';
		
		// use a color triad of Microsofts million dollar color
		//p.buffer[p.index(i,j)] = p.color(pixelData[0],pixelData[1],pixelData[2],250);
		}
		console.log(i);
		document.getElementById("draw_here").innerHTML+="<br>";
		//img_table+="<br>";
		//document.getElementById("draw_here").innerHTML+="<br>";
		//console.log("still running");
		//console.log(img_table);
		//document.getElementById("draw_here").innerHTML+=img_table;
		//img_table=" ";
		
	}

	//document.getElementById("draw_here").innerHTML=img_table;
	console.log("done");
	
	
document.getElementById("draw_here").style="transform: rotate(-90deg); margin-top:-600px;"
}