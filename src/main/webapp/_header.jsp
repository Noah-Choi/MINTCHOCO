<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
/*
	:: 헤더 ::
	담당자 : 김정호
*/
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<% request.setCharacterEncoding("UTF-8"); %>
<c:set var="contextPath" value="${ pageContext.request.contextPath }" />
<header>
	<ul id="navList">
		<li><a href="${ contextPath }/my_page.do">마이페이지</a></li>
		<li><a href="${ contextPath }/service.do">서비스 안내</a></li>
		<li><a href="${ contextPath }/movie/recommand.do">영화목록</a></li>
		<li><a href="${ contextPath }/rank.do">영화순위</a></li>
		<li><a href="${ contextPath }/main.do">로고</a></li>
		<li><%@ include file="./_search_form.jsp" %></li>
	</ul>
	<div id="barsBtn">
		<i class="fas fa-bars"></i>
	</div>
	<div id="mobSearchBtn">
		<i class="fas fa-search"></i>
	</div>
	<div id="mobSearchWrap">
		<%@ include file="./_search_form.jsp" %>
	</div>
	<ul id="mobNavList">
		<li><a href="${ contextPath }/my_page.do">마이페이지</a></li>
		<li><a href="${ contextPath }/service.do">서비스 안내</a></li>
		<li><a href="${ contextPath }/movie/recommand.do">영화목록</a></li>
		<li><a href="${ contextPath }/rank.do">영화순위</a></li>
		<li><a href="${ contextPath }/main.do">로고</a></li>
	</ul>
</header>