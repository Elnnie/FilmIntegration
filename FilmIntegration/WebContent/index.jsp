<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="check" uri="/WEB-INF/tlds/checkSession.tld"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>

<link href="css/index.css" rel='stylesheet' type='text/css' />
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />

</head>
<body>
	<check:checkList />
	<jsp:useBean id="filmList" type="business.FilmListBean" scope="session"></jsp:useBean>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12 index_header"></div>
		</div>

		<div class="row-fluid">
			<div class="span1"></div>
			<div class="span10">
				<ul class="nav nav-tabs index_navigation">
					<li class="active"><a href="#">正在热映</a></li>
				</ul>

				<%
					for (int i = 0; i < filmList.getFilmList().size() / 4; i++) {
				%>
				<div class="row-fluid">
					<%
						for (int j = 0; j < 4; j++) {
					%>
					<div class="span3 film_card">
						<div class="film_poster">
							<img alt="#" src="<%=filmList.getFilm(i*4+j).getImgPath() %>" />
						</div>
						<div class="film_info">
							<p><%=filmList.getFilm(i*4+j).getFname() %></p>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_maoyan.jpg"> <span><%=filmList.getFilm(i*4+j).getPoint_maoyan() %></span>
							</div>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_taopp.jpg"> <span><%=filmList.getFilm(i*4+j).getPoint_taopp() %></span>
							</div>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_nuomi.jpg"> <span><%=filmList.getFilm(i*4+j).getPoint_nuomi() %></span>
							</div>
						</div>
					</div>
					<%
						}
					%>
				</div>
				<%
					}
				%>
				<%
					int j = filmList.getFilmList().size() % 4;
				int i = filmList.getFilmList().size();
					if (j > 0){
						%>
				<div class="row-fluid">
					<%
						while (j > 0){
						%>
					<div class="span3 film_card">
						<div class="film_poster">
							<img alt="#" src="<%=filmList.getFilm(i-j).getImgPath() %>" />
						</div>
						<div class="film_info">
							<p><%=filmList.getFilm(i-j).getFname() %></p>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_maoyan.jpg"> <span><%=filmList.getFilm(i-j).getPoint_maoyan() %></span>
							</div>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_taopp.jpg"> <span><%=filmList.getFilm(i-j).getPoint_taopp() %></span>
							</div>
							<div style="height: 20px; margin-left: 5px;">
								<img alt="#" src="img/icon_nuomi.jpg"> <span><%=filmList.getFilm(i-j).getPoint_nuomi() %></span>
							</div>
						</div>
					</div>
					<%
						j--;
						}
						%>
				</div>
				<%
					}
				%>
				
			</div>
			<div class="span1"></div>
		</div>
	</div>
</body>
</html>