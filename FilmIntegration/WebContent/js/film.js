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

function b(movieId) {
	$.ajax({
		url : 'http://182.254.210.229:8890/movie/' + movieId,
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			document.title = result.data.name;
			$("#url").attr("src", result.data.url); 
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

function area(movieId) {
	var area;
	$.ajax({
		async:false,
		url : 'http://182.254.210.229:8890/cinema/areaList',
		type : 'GET',
		dataType : 'json',
		data:{movieId:movieId},
		success : function(result) {
			for (var i = 0; i < result.data.length; i++){
				$("#area").append("<a href=\"javascript:changearea("+i+","+result.data[i].id+")\" id='area"+i+"' class='area-new'>"+result.data[i].name+"</a>");
			}
			$("#area0").addClass("area-active");
			area = result.data[0].id;
		}
	})
	return area;
	
}


function week() {
	 var date;
	 $.ajax({
		async:false,
		url : 'http://182.254.210.229:8890/cinema/nextWeek',
		type : 'GET',
		dataType : 'json',
		success : function(result) {
			date = result.data[0];
			$("#day1").text(result.data[0]);
			$("#day2").text(result.data[1]);
			$("#day3").text(result.data[2]);
			$("#day4").text(result.data[3]);
			$("#day5").text(result.data[4]);
			$("#day6").text(result.data[5]);
			$("#day7").text(result.data[6]);
		}
	});
	return date;
	
}

function changeday(day){
	$(".day-new.day-active").removeClass("day-active");
	$("#day"+day).addClass("day-active");
	date = $("#day"+day).text();
	cinema(movieId,date,areaId);
}

function changearea(i,area){
	$(".area-new.area-active").removeClass("area-active");
	$("#area"+i).addClass("area-active");
	areaId = area;
	cinema(movieId,date,areaId);
}


function next(){
	pageNum++;
	var k = pageSize * pageNum;
	$.ajax({
		async:false,
		url : 'http://182.254.210.229:8890/cinema/cinemaList',
		type : 'GET',
		dataType : 'json',
		data: { movieId: movieId, date: date ,pageNum:pageNum, areaId:areaId },
		success : function(result) {
			for (var i = 0; i < result.data.length; i++){
				$("#cinema").append(
							 "<tr id='tr"+(k+i)+"'>"
							+"	<td class='td6'>"
							+"		<div>"
							+"			<h4>"+result.data[i].name+"</h4>"
							+"			<p>"
							+"				地址："+result.data[i].address
							+"			</p>"
							+"			<div id='info"+(k+i)+"' class='hidden'>"
							+"				<p>"
							+"					电话：<strong>"+result.data[i].tel+"</strong>"
							+"				</p>"
							+"				<div id='icon"+(k+i)+"'>"
							+"				</div>"
							+"			</div>"
							+"		</div>"
							+"	</td>"
							+"	<td class='td2'><span class='min-price'>￥"+result.data[i].lowestPrice+"</span>&nbsp;起</td>"
							+"	<td class='td2'>"
							+"		<div>"
							+"			<button id='button"+(k+i)+"' class='btn btn-danger' onclick='show("+(k+i)+","+result.data[i].id+")'>展开&nbsp;&darr;</button>"
							+"		</div>"
							+"	</td>"
							+"</tr>");
				$("#cinema").append(
							"<tr id='detailtr"+(k+i)+"' class='hidden'>"
							+"  <td id='detail"+(k+i)+"' colspan='3'>"
							+"<div>"
							+"		<table class='table table-striped table-hover table-defined'>"
							+"			<thead>"
							+"				<tr>"
							+"					<th>放映时间</th>"
							+"					<th>语言版本</th>"
							+"					<th>放映厅</th>"
							+"					<th>座位情况</th>"
							+"					<th>票价</th>"
							+"					<th>平台</th>"
							+"				</tr>"
							+"			</thead>"		
							+"<tbody id='body"+(k+i)+"'></tbody>"
							+"		</table>"	
							+"</div>"
							+"  </td>"
							+"</tr>"				
				);
			}
			if (result.data.length != 6){$("#searchMore")[0].style.display = 'none'; }
		}
	})
}

function cinema(movieId,date,areaId) {
	$.ajax({
		async:false,
		url : 'http://182.254.210.229:8890/cinema/cinemaList',
		type : 'GET',
		dataType : 'json',
		data: { movieId: movieId, date: date ,areaId:areaId },
		success : function(result) {
			$("#cinema").empty();
			for (var i = 0; i < result.data.length; i++){
				$("#cinema").append(
							 "<tr id='tr"+i+"'>"
							+"	<td class='td6'>"
							+"		<div>"
							+"			<h4>"+result.data[i].name+"</h4>"
							+"			<p>"
							+"				地址："+result.data[i].address
							+"			</p>"
							+"			<div id='info"+i+"' class='hidden'>"
							+"				<p>"
							+"					电话：<strong>"+result.data[i].tel+"</strong>"
							+"				</p>"
							+"				<div id='icon"+i+"'>"
							+"				</div>"
							+"			</div>"
							+"		</div>"
							+"	</td>"
							+"	<td class='td2'><span class='min-price'>￥"+result.data[i].lowestPrice+"</span>&nbsp;起</td>"
							+"	<td class='td2'>"
							+"		<div>"
							+"			<button id='button"+i+"' class='btn btn-danger' onclick='show("+i+","+result.data[i].id+")'>展开&nbsp;&darr;</button>"
							+"		</div>"
							+"	</td>"
							+"</tr>");
				$("#cinema").append(
							"<tr id='detailtr"+i+"' class='hidden'>"
							+"  <td id='detail"+i+"' colspan='3'>"
							+"<div>"
							+"		<table class='table table-striped table-hover table-defined'>"
							+"			<thead>"
							+"				<tr>"
							+"					<th>放映时间</th>"
							+"					<th>语言版本</th>"
							+"					<th>放映厅</th>"
							+"					<th>座位情况</th>"
							+"					<th>票价</th>"
							+"					<th>平台</th>"
							+"				</tr>"
							+"			</thead>"		
							+"<tbody id='body"+i+"'></tbody>"
							+"		</table>"	
							+"</div>"
							+"  </td>"
							+"</tr>"				
				);
			}
			if (result.data.length == 6){pageNum = 0; $("#searchMore")[0].style.display = ''; }
		}
	})
}
function showIcon(i,id){
	$.ajax({
		async:false,
		url : 'http://182.254.210.229:8890/cinema/cinemaInfo',
		type : 'GET',
		dataType : 'json',
		data:{cinemaId:id},
		success : function(result) {
			for (var k = 0; k < result.data.length; k++){
				if (result.data[k].key=="3D眼镜"){
					$("#icon"+i).append("<i title='"+result.data[k].value+"' class='icon-3D' />");
					continue;
				}
				if (result.data[k].key=="停车信息"){
					$("#icon"+i).append("<i title='"+result.data[k].value+"' class='icon-parking' />");
					continue;
				}
				if (result.data[k].key=="WIFI"){
					$("#icon"+i).append("<i title='"+result.data[k].value+"' class='icon-wifi' />");
					continue;
				}
				if (result.data[k].key=="儿票"){
					$("#icon"+i).append("<i title='"+result.data[k].value+"' class='icon-child' />");
					continue;
				}
				if (result.data[k].key=="交通方式"){
					$("#icon"+i).append("<i title='"+result.data[k].value+"' class='icon-traffic' />");
					continue;
				}
			}
		}
	})
}
function show(i,id){
	if ($("#detailtr"+i).attr('class')=='hidden'){
		cinemaId = id;
		showIcon(i,id);
		$.ajax({
			async:false,
			url : 'http://182.254.210.229:8890/cinema/cinemaItemList',
			type : 'GET',
			dataType : 'json',
			data:{movieId:movieId,date:date,cinemaId:cinemaId},
			success : function(result) {
				for (var j = 0; j < result.data.length; j++){
					$("#body"+i).append(
							"	<tr>"
							+"		<td>"
							+"			<div style='font-weight: bold;'>"+result.data[j].startAt+"</div>"
							+"			<div style='font-size: 12px;'>预计"+result.data[j].endAt+"散场</div>"
							+"		</td>"
							+"		<td>"+result.data[j].language+"&nbsp;"+result.data[j].version+"</td>"
							+"		<td>"+result.data[j].roomName+"</td>"
							+"		<td>剩余"+result.data[j].seatNowAvailable+"/"+result.data[j].seatTotal+"</td>"
							+"		<td>"
							+"			<div style='font-size:14px; line-height:14px;'>"
							+"				<p>￥</p>"
							+"				<p>￥"+result.data[j].priceInNuomi+"</p>"
							+"				<p>￥</p>"
							+"			</div>"
							+"		</td>"
							+"		<td>"
							+"		<div style='font-size:14px; line-height:14px;'>"
							+"				<p>淘票票</p>"
							+"				<p>百度糯米</p>"
							+"				<p>猫眼电影</p>"
							+"			</div>"
							+"		</td>"
							+"	</tr>"
					);
				
				}
			}
		});
	
		$("#info"+i).removeClass("hidden");
		$("#info"+i).addClass("nohidden");
		$("#detailtr"+i).removeClass("hidden");	
		$("#detailtr"+i).addClass("nohidden");
		$("#button"+i).html("收起&nbsp;&uarr;");
	}
	else{
		$("#body"+i).empty();
		$("#icon"+i).empty();
		$("#detailtr"+i).removeClass("nohidden");
		$("#detailtr"+i).addClass("hidden");
		$("#info"+i).removeClass("nohidden");
		$("#info"+i).addClass("hidden");
		$("#button"+i).html("展开&nbsp;&darr;");
	}
}


var movieId;
var date;
var areaId;
var cinemaId;
var pageNum;
var pageSize = 6;
window.onload = function() {
	movieId =  getQueryVariable("id");
	b(movieId);
	date = week();
	areaId = area(movieId);
	cinema(movieId,date,areaId);
}

