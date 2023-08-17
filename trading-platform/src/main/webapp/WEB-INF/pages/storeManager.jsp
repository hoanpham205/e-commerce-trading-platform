<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="container mt-3">
    <h1>${mes}</h1>

    <div class="search">
        <form action="<c:url value="/admin/store-manager"/>" class="form-search">
            <input name="storeName" type="text" placeholder="Nhập tên tài khoản để tìm..." />
            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th></th>


            </tr>
        </thead>
        <tbody>
            <c:forEach items="${store}" var="s">
                <tr>
                    <td>${s.storeName}</td>
                    <td>${s.description}</td>


                    <td>
                        <a href="#" class="btn btn-info">Update</a>
                        <button class="btn btn-danger" >Delete</button>
                    </td>

                </tr>
            </c:forEach>
        </tbody>
    </table>
</div>

<script src="<c:url value="/js/main.js" />"></script>