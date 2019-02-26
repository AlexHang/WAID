function indexOfMax(arr) {
		    if (arr.length === 0) {
		        return -1;
		    }

		    var max = arr[0];
		    var maxIndex = 0;

		    for (var i = 1; i < arr.length; i++) {
		        if (arr[i] > max) {
		            maxIndex = i;
		            max = arr[i];
		        }
		    }

		    return maxIndex;
		}
 
 
	function getColorQuadrant(quadrant){
		
		var redc=0,bluec=0,greenc=0,whitec=0,blackc=0,yellowc=0,silverc=0;
		var max,maxColor;
		
		if(quadrant==11){
		
			for(var x=0;x<320;x=x+10){
				for(var y=0;y<240;y=y+10){
					var context = canvas.getContext('2d');
					var pixelData = context.getImageData(x, y, 10, 10).data;
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
		}
		if(quadrant==12){
		
			for(var x=320;x<640;x=x+10){
				for(var y=0;y<240;y=y+10){
					var context = canvas.getContext('2d');
					var pixelData = context.getImageData(x, y, 10, 10).data;
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
		}
		
		if(quadrant==21){
		
			for(var x=0;x<320;x=x+10){
				for(var y=240;y<480;y=y+10){
					var context = canvas.getContext('2d');
					var pixelData = context.getImageData(x, y, 10, 10).data;
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
		}
		
		if(quadrant==22){
		
			for(var x=320;x<640;x=x+10){
				for(var y=240;y<480;y=y+10){
					var context = canvas.getContext('2d');
					var pixelData = context.getImageData(x, y, 10, 10).data;
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
		}
		var colorArr=new Array(redc,bluec,greenc,whitec,blackc,yellowc,silverc);
		max=indexOfMax(colorArr);
		switch(max){
			case 0:
				maxColor="red";
				break;
			case 1:
				maxColor="blue";
				break;
			case 2:
				maxColor="green";
				break;
			case 3:
				maxColor="white";
				break;
			case 4:
				maxColor="black";
				break;
			case 5:
				maxColor="yellow";
				break;
			case 6:
				maxColor="silver";
				break;
		}
		return maxColor;
		
		
		
		
		/*var total=redc+bluec+greenc+whitec+blackc+yellowc+silverc;
		redc = (redc/total)*100;
		bluec = (bluec/total)*100;
		greenc = (greenc/total)*100;
		whitec = (whitec/total)*100;
		blackc = (blackc/total)*100;
		yellowc = (yellowc/total)*100;
		silverc = (silverc/total)*100;*/
		
	}