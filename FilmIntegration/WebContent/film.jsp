<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>film</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/film.css" rel="stylesheet">
</head>
<body>
	<jsp:useBean id="film" type="model.FilmInfo"
		scope="session"></jsp:useBean>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span2"></div>
			<div class="span8">
				<div class="row-fluid">
					<div class="span12">
						<div class="cap4"></div>
						<ul class="breadcrumb">
							<li><a href="index.jsp">首页</a> <span class="divider">/</span></li>
							<li class="active"><jsp:getProperty name="film" property="fname" /></li>
						</ul>
						<div class="row-fluid">

							<div class="span2">
								<img alt="140x140"
									src="https://img.alicdn.com/bao/uploaded/i3/TB17nqdRXXXXXagXXXXXXXXXXXX_.jpg_300x300.jpg" />
							</div>
							<div class="span6">
								<h3 class="titleline"><jsp:getProperty name="film" property="fname" /></h3>
								<dl class="dl-horizontal dl-new">

									<dt>首映</dt>
									<dd><jsp:getProperty name="film" property="first_run" /></dd>

									<dt>类型</dt>
									<dd><jsp:getProperty name="film" property="type" /></dd>

									<dt>地区</dt>
									<dd><jsp:getProperty name="film" property="area" /></dd>

									<dt>时长</dt>
									<dd><jsp:getProperty name="film" property="time" /></dd>

									<dt>导演</dt>
									<dd><jsp:getProperty name="film" property="director" /></dd>

									<dt>主演</dt>
									<dd><jsp:getProperty name="film" property="leading" /></dd>

								</dl>
							</div>
							<div class="span4">
								<div class="offset2">
									<h4>评分</h4>
									<div class="maoyan point">
										<i class="icon-maoyan"></i> <jsp:getProperty name="film" property="point_maoyan" />
									</div>
									<div class="nuomi point">
										<i class="icon-nuomi"></i> <jsp:getProperty name="film" property="point_nuomi" />
									</div>
									<div class="taopp point">
										<i class="icon-taopp"></i> <jsp:getProperty name="film" property="point_taopp" />
									</div>
								</div>
							</div>
						</div>
						<div class="cap2"></div>
						<div class="row-fluid">
							<div class="span12 well well-small">
								<h4>剧情</h4>
								<p><jsp:getProperty name="film" property="story" /></p>
							</div>
						</div>
					</div>
				</div>
				<div class="row-fluid">
					<div class="span12">
						<h4>上映影院</h4>
						<table class="table">
							<tbody>
								<tr>
									<td>时间：</td>
									<td><a href="#" class="a-new a-active">6月8日（今天）</a> <a
										href="#" class="a-new">6月9日（周五）</a> <a href="#" class="a-new">6月10日（周六）</a>
										<a href="#" class="a-new">6月11日（周日）</a> <a href="#"
										class="a-new">6月12日（周一）</a> <a href="#" class="a-new">6月13日（周二）</a>
										<a href="#" class="a-new">6月14日（周三）</a></td>
								</tr>
								<tr>
									<td>地区：</td>
									<td class="td-new"><a href="#" class="a-new a-active">全部</a>
										<a href="#" class="a-new">江宁区</a> <a href="#" class="a-new">鼓楼区</a>
										<a href="#" class="a-new">玄武区</a> <a href="#" class="a-new">秦淮区</a>
										<a href="#" class="a-new">浦口区</a> <a href="#" class="a-new">雨花台区</a>
										<a href="#" class="a-new">溧水区</a> <a href="#" class="a-new">六合区</a>
										<a href="#" class="a-new">栖霞区</a> <a href="#" class="a-new">高淳区</a>
										<a href="#" class="a-new">建邺区</a></td>
								</tr>
								<tr>
									<td>影院：</td>
									<td class="td-new"><a href="#" class="a-new a-active">全部</a>
										<a href="#" class="a-new">万达影城</a> <a href="#" class="a-new">星美国际影城</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="row-fluid">
					<div class="span12">
						<table class="table table-hover">
							<tr>
								<td class="td7">
									<div>
										<h4>万达国际影城(河西店)</h4>
										<p>
											地址：<strong>建邺区江东中路98号建邺万达广场娱乐楼4楼（近水西门大街）</strong>
										</p>
									</div>
								</td>
								<td class="td1 min-price">￥30</td>
								<td class="td2">
									<div>
										<button class="btn btn-danger">查看详情</button>
									</div>
								</td>
							</tr>
							<tr>
								<td class="td7">
									<div>
										<h4>万达影城(太阳城店)</h4>
										<p>
											地址：<strong>江宁区双龙大道1539号太阳城广场五楼万达影城</strong>
										</p>
									</div>
								</td>
								<td class="td1 min-price">￥37</td>
								<td class="td2">
									<div>
										<button class="btn btn-danger">查看详情</button>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="span2"></div>
		</div>

	</div>
</body>
</html>