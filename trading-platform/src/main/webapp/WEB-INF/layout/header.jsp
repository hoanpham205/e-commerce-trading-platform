
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<h1 class="site-heading text-center text-faded d-none d-lg-block">
    <span class="site-heading-upper text-primary mb-3">THƯƠNG MẠI ĐIỆN TỬ</span>
    <span class="site-heading-lower">SHOPPE OU</span>
</h1>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <div class="container-fluid mb-0">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto menubar">
                <li class="nav-item">
                    <a class="nav-link" href="<c:url value="/" />">
                        <i class="fa-solid fa-house" aria-hidden="true"></i> Trang chủ</a>
                </li>
                <sec:authorize access="hasAnyAuthority('EMPLOYEE')">
                    <div class="dropdown">                   
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="<c:url value="/store/" />">
                                <i class="fa-solid fa-shop" aria-hidden="true"></i> Cửa Hàng</a>
                        </li>
                    </div>
                </sec:authorize>
                <sec:authorize access="hasAnyAuthority('USER')">
                    <div class="dropdown">                   
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="<c:url value="/create_store" />">
                                Tạo Cửa Hàng</a>
                        </li>
                    </div>
                </sec:authorize>



            </ul>
            <ul class="navbar-nav align-center">       
                <c:choose>
                    <c:when test="${pageContext.request.userPrincipal.name == null}">
                        <li class="nav-item">
                            <a class="nav-link text-primary" href="<c:url value="/register/" />">
                                <i class="fa-solid fa-user-plus" aria-hidden="true"></i> Đăng ký</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-success" href="<c:url value="/login/" />">
                                <i class="fa fa-user" aria-hidden="true"></i>  Đăng nhập</a>
                        </li>
                    </c:when>

                    <c:when test="${pageContext.request.userPrincipal.name != null}">
                        <li class="nav-item" >
                            <a href="<c:url value="/cart" />"> <h1 class="nav-link text-danger" id="cart">0</h1></a>
                        </li>
                        <li class="nav-item" >
                            <img src="${sessionScope.currentUser.avatar}" class="rounded-circle" alt="Cinque Terre" style="height:  35px">
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-danger" href="<c:url value="/logout" />">
                                <i class="fa-solid fa-user-minus" aria-hidden="true"></i>  Đăng xuất</a>
                        </li>
                    </c:when>
                </c:choose>
            </ul>
        </div>
    </div>
</nav>

