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

function area() {
	$.ajax({
		url : 'http://localhost:8890/cinema/areaList',
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			for (var i = 0; i < result.data.length; i++){
				$("#area").append("<a href=\"javascript:changearea("+i+")\" id='area"+i+"' class='area-new'>"+result.data[i]+"</a>");
			}
		}
	})
}


function week() {
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

function changeday(day){
	$(".day-new.day-active").removeClass("day-active");
	$("#day"+day).addClass("day-active");
}

function changearea(area){
	$(".area-new.area-active").removeClass("area-active");
	$("#area"+area).addClass("area-active");
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
							+"			<div id='info"+i+"' class='hidden'>"
							+"				<p>"
							+"					电话：<strong>"+result.data[i].phone+"</strong>"
							+"				</p>"
							+"			</div>"
							+"		</div>"
							+"	</td>"
							+"	<td class='td1'><span class='min-price'>￥"+result.data[i].lowestPriceInNuomi+"</span>&nbsp;起</td>"
							+"	<td class='td2'>"
							+"		<div>"
							+"			<button id='button"+i+"' class='btn btn-danger' onclick='show("+i+")'>展开&nbsp;&darr;</button>"
							+"		</div>"
							+"	</td>"
							+"</tr>"
							+"<tr id='detailtr"+i+"' class='hidden'>"
							+"  <td id='detail"+i+"' colspan='3'>"
									
							+"  <td>"
							+"</tr>"				
				);
			}
		}
	})
}

function show(i){
	if ($("#detailtr"+i).attr('class')=='hidden'){
		$("#info"+i).removeClass("hidden");
		$("#info"+i).addClass("nohidden");
		$("#detailtr"+i).removeClass("hidden");
		$("#detail"+i).load("detail.html");
		$("#detailtr"+i).addClass("nohidden");
		$("#button"+i).html("收起&nbsp;&uarr;");
	}
	else{
		$("#detailtr"+i).removeClass("nohidden");
		$("#detailtr"+i).addClass("hidden");
		$("#info"+i).removeClass("nohidden");
		$("#info"+i).addClass("hidden");
		$("#button"+i).html("展开&nbsp;&darr;");
	}
		
	
	
	
}

window.onload = function() {
	b();
	week();
	area();
	cinema("1","2017-06-10","浦口区");
}

