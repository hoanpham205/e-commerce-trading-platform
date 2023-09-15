<%-- 
    Document   : products
    Created on : Jul 21, 2023, 1:18:29 PM
    Author     : admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<div class="container">
    <c:url value="/" var="action"/>
    <form:form method="post" action="${action}" modelAttribute="user" enctype="multipart/form-data">


        <form:hidden path="userId" />
        <form:hidden path="password" />

        <form:hidden path="email" />

        <form:hidden path="avatar" />
        <form:hidden path="role" />

        <form:hidden path="active" />


        <div class="form-floating mb-3 mt-3">
            <form:input type="text" class="form-control" 
                        path="username" id="name" placeholder="Tên sản phẩm..." />
            <label for="name">Username</label>
        </div>


        <div class="form-floating mb-3 mt-3">
            <form:input type="text" class="form-control" 
                        path="fullname" id="name" placeholder="Tên sản phẩm..." />
            <label for="name">Họ Và Tên</label>
        </div>

        <div class="form-floating mb-3 mt-3">
            <form:input type="text" class="form-control" 
                        path="phone" id="name" placeholder="Tên sản phẩm..." />
            <label for="name">SDT</label>
        </div>

        <div class="form-floating mb-3 mt-3">
            <form:input type="file" class="form-control" 
                        path="file" id="file"  />
            <label for="file">Ảnh sản phẩm</label>
            <c:if test="${user.avatar != null}">
                <img src="${user.avatar}" width="120" />
            </c:if>
        </div>

        <div class="form-floating mb-3 mt-3">
            <button class="btn btn-info" type="submit">
                Cập nhật sản phẩm
                </buttn>
        </div>


    </form:form> 

</div>
