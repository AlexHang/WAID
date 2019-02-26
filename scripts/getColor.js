
		Array.matrix = function(numrows, numcols, initial){
		   var arr = [];
		   for (var i = 0; i < numrows; ++i){
			  var columns = [];
			  for (var j = 0; j < numcols; ++j){
				 columns[j] = initial;
			  }
			  arr[i] = columns;
			}
			return arr;
		}



		function Color(r,g,b){
			this.red=r;
			this.green=g;
			this.blue=b;
		}

		function indexOfMin(arr) {
		    if (arr.length === 0) {
		        return -1;
		    }

		    var min = arr[0];
		    var minIndex = 0;

		    for (var i = 1; i < arr.length; i++) {
		        if (arr[i] < min) {
		            minIndex = i;
		            min = arr[i];
		        }
		    }

		    return minIndex;
		}


		function getColorDistance(main,sec){
			var d=0;
			d=(Math.pow(main.red-sec.red,2)+Math.pow(main.blue-sec.blue,2)+Math.pow(main.green-sec.green,2));
			return d;
		}

		const red=new Color(255,0,0);
		const realRed=new Color(165,42,42);
		//const brown=new Color(165,42,42);
		const blue=new Color(0,0,255);
		const lightBlue = new Color(173,216,230);
		const realBlue=new Color(0,0,128);
		const green=new Color(0,255,0);
		const realGreen=new Color(0,128,0);
		const yellow=new Color(255,255,0);
		const skin=new Color(197,173,157);
		const silver=new Color(128,0,0);
		const white=new Color(255,255,255);
		const black=new Color(0,0,0);
		
		//var canvas = document.getElementById("canvas");
		var Image_Matrix =  Array.matrix(640,480,0);

		function getColor(r,g,b){

			var aux = new Color(r,g,b);
			var distances = new Array(	getColorDistance(red,aux),
										getColorDistance(blue,aux),
										getColorDistance(green,aux),
										getColorDistance(white,aux),
										getColorDistance(black,aux),
										getColorDistance(yellow,aux),
										getColorDistance(silver,aux),
										getColorDistance(realRed,aux),
										getColorDistance(realGreen,aux),
										getColorDistance(realBlue,aux),
										getColorDistance(skin,aux),
										getColorDistance(lightBlue,aux),
										);
			var minim_distance = indexOfMin(distances);
			switch(minim_distance){
				case 0:
					return "red";
					break;
				case 1: 
					return "blue";
					break;
				case 2:
					return "green";
					break;
				case 3:
					return "white";
					break;
				case 4:
					return "black";
					break;
				case 5:
					return "yellow";
					break;
				case 6:
					return "silver";
					break;
				case 7:
					return "red";
					break;
				case 8:
					return "green";
					break;
				case 9: 
					return "blue";
					break;
				case 10: 
					return "white";
					break;	
				case 11: 
					return "blue";
					break;
					
					
			}

		}

function getColorDraw(r,g,b){

			var aux = new Color(r,g,b);
			var distances = new Array(	getColorDistance(red,aux),
										getColorDistance(blue,aux),
										getColorDistance(green,aux),
										getColorDistance(white,aux),
										getColorDistance(yellow,aux),
										getColorDistance(silver,aux),
										);
			var minim_distance = indexOfMin(distances);
			switch(minim_distance){
				case 0:
					return "red";
					break;
				case 1: 
					return "blue";
					break;
				case 2:
					return "green";
					break;
				case 3:
					return "white";
					break;
				case 4:
					return "yellow";
					break;
				case 5:
					return "silver";
					break;
			}

		}


		