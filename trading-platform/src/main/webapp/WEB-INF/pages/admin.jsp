<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="search">
    <form action="<c:url value="/admin/"/>" class="form-search">
        <input name="username" type="text" placeholder="Nhập tên tài khoản để tìm..." />
        <button type="submit"><i class="fas fa-search"></i></button>
    </form>
</div>
<div class="main-table">
    <div class="main-title">
        <h2 class="text-uppercase text-center text-info">DANH SÁCH TÀI KHOẢN HỆ THỐNG</h2>
    </div>
    <h1>${re}</h1>
    <div class="user-table">
        <table class="table">
            <thead class="table-primary">
                <tr class="text-uppercase text-center">
                    <th></th>
                    <th class="name">User Name</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${user}" var="u">
                    <tr>
                        <td>
                            <div class="avtar">
                                <div class="avtar-img">
                                    <c:if test="${u.avatar != null}">
                                        <img src="${u.avatar}" style="height: 50px" />
                                    </c:if>
                                    
                                </div>
                            </div>
                        </td>

                        <td>${u.username}</td>
                        <td>${u.fullname}</td>
                        <td>${u.phone}</td>
                         <td>
                        <c:url value="/api/user/${u.userId}" var="api" />
                        <button class="btn btn-danger" onclick="deleteProduct('${api}')">Delete</button>
                    </td>

                </c:forEach>
            </tbody>
        </table>
    </div>
</div>