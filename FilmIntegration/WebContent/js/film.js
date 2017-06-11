function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function b() {
	var id =  getQueryVariable("id");
	$.ajax({
		url : 'http://localhost:8890/movie/' + id,
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			document.title = result.data.name;
			$("#bcname").text(result.data.name);
			$("#name").text(result.data.name);
			$("#des").text(result.data.des);
			$("#time").text(result.data.time);
			$("#director").text(result.data.director);
			$("#roles").text(result.data.roles);
			$("#country").text(result.data.country);
			$("#length").text(result.data.length);
			$("#content").text(result.data.content);
			$("#marksInMaoyan").append(result.data.marksInMaoyan);
			$("#marksInNuomi").append(result.data.marksInNuomi);
			$("#marksInTaopiaopiao").append(result.data.marksInTaopiaopiao);
		}
	})
}

function week() {
	$.ajax({
		url : 'http://localhost:8890/cinema/areaList',
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			for (var i = 0; i < result.data.length; i++){
				$("#area").append("<a href='#' class='a-new'>"+result.data[i]+"</a>");
			}
		}
	})
}


function area() {
	$.ajax({
		url : 'http://localhost:8890/cinema/nextWeek',
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			$("#day1").text(result.data[0]);
			$("#day2").text(result.data[1]);
			$("#day3").text(result.data[2]);
			$("#day4").text(result.data[3]);
			$("#day5").text(result.data[4]);
			$("#day6").text(result.data[5]);
			$("#day7").text(result.data[6]);
		}
	})
}


function cinema(id,date,area) {
	$.ajax({
		url : 'http://localhost:8890/cinema/cinemaList',
		type : 'GET',
		dataType : 'json',
		data: { movieId: id, date: date ,area:area },
		success : function(result) {
			for (var i = 0; i < result.data.length; i++){
				$("#cinema").append(
						"<tr id='tr"+i+"'>"
							+"<td class='td7'>"
							+"	<div>"
							+"			<h4>"+result.data[i].name+"</h4>"
							+"			<p>"
							+"				地址：<strong>"+result.data[i].address+"</strong>"
							+"			</p>"
							+"		</div>"
							+"	</td>"
							+"	<td class='td1 min-price'>￥"+result.data[i].lowestPriceInNuomi+"起</td>"
							+"	<td class='td2'>"
							+"		<div>"
							+"			<button class='btn btn-danger' onclick='show("+i+")'>查看详情∨</button>"
							+"		</div>"
							+"	</td>"
							+"</tr>");
			}
		}
	})
}

function show(i){
	$("#tr"+i).load("detail.html");
}

window.onload = function() {
	b();
	week();
	area();
	cinema("1","2017-06-10","浦口区");
}

