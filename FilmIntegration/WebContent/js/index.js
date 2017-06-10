function a(){
		$.ajax({ 
		    url: 'http://localhost:8890/movie/all', 
		    type: 'GET', 
		    dataType: 'json', 
		    success: function(result){   
		    	 var num = result.data.length;
		    	 for (var i = 0; i < Math.floor(num/4); i++){
		    		 var str ="";
		    		 for (var j = 0; j < 4; j++){
		    			 str +=
		    			 "<div class='span3 film_card'>"
		    					 +"<div class='film_poster'>"
		    					 	+"<a href='ShowDetail?fid='test'' target='_black'><img alt='#' src='"+result.data[i*4+j].imgUrl+"' /></a>"
		    					 +"</div>"
		    					 +"<div class='film_info'>"
		    					 	+"	<p>"+result.data[i*4+j].name+"</p>"
		    					 		+"<div style='height: 20px; margin-left: 5px;'>"
		    					 			+"<img alt='#' src='img/icon_maoyan.jpg'> <span>"+result.data[i*4+j].marksInMaoyan+"</span>"
		    					 		+"</div>"
		    					 		+"<div style='height: 20px; margin-left: 5px;'>"
		    					 			+"<img alt='#' src='img/icon_taopp.jpg'> <span> "+result.data[i*4+j].marksInTaopiaopiao+"</span>"
		    					 		+"</div>"
		    					 		+"<div style='height: 20px; margin-left: 5px;'>"
		    					 			+"<img alt='#' src='img/icon_nuomi.jpg'> <span>"+result.data[i*4+j].marksInNuomi+" </span>"
		    					 		+"</div>"
		    					 +"</div>"
		    			+"</div>";
		    		 }
		    		 $("#filmdata").append("<div class='row-fluid'>" + str+"</div>");
		    	 }
		    	 var j = num % 4;
		    	 if (j > 0){
		    		 var str ="";
		    		 while (j > 0){
		    		   str += "<div class='span3 film_card'>"
						+"<div class='film_poster'>"
						+"<a href='ShowDetail?fid='test''><img alt='#' src='"+result.data[num-j].imgUrl+"' /></a>"
						+"</div>"
						+"<div class='film_info'>"
						+"	<p>"+result.data[num-j].name+"</p>"
						+"<div style='height: 20px; margin-left: 5px;'>"
						+"		<img alt='#' src='img/icon_maoyan.jpg'> <span>"+result.data[num-j].marksInMaoyan+"</span>"
						+"	</div>"
						+"	<div style='height: 20px; margin-left: 5px;'>"
						+"		<img alt='#' src='img/icon_taopp.jpg'> <span> "+result.data[num-j].marksInTaopiaopiao+"</span>"
						+"	</div>"
						+"	<div style='height: 20px; margin-left: 5px;'>"
						+"		<img alt='#' src='img/icon_nuomi.jpg'> <span>"+result.data[num-j].marksInNuomi+" </span>"
						+"	</div>"
						+"	</div>"
						+"</div>";
		    			 j--;
		    		 }
		    		 $("#filmdata").append("<div class='row-fluid'>" + str+"</div>");
		    	 }
		    	 
		    }
		   })
	}
	window.onload=function(){
	 a();
	}