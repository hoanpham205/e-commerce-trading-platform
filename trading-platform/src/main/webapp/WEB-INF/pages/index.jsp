
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<div class="container">


    <div class="search">
        <form action="<c:url value="/"/>" class="form-search">
            <input name="username" type="text" placeholder="Nhập tên tài khoản để tìm..." />
            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>
    <h1>${comment}</h1>

    <c:if test="${products.size() == 0}">
        <p><em>KHONG CO SAN PHAM NAO!!!</em></p>
    </c:if>




    <div class="row">
        <c:forEach items="${products}" var="p">
            <div class="col-md-3 col-xs-12" style="padding: 5px;">
                <div class="card">
                    <img class="card-img-top" class="img-fluid" src="${p.imageUrl}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${p.productName}</h4>
                        <p class="card-text">
                        <fmt:formatNumber type = "number" maxFractionDigits = "3" value = "${p.price}" /> VND
                        </p>
                        <a href="<c:url value="/products/${p.productId}" />" class="btn btn-primary">Xem chi tiet</a>
                        <a href="<c:url value="javascript:;" />" class="btn btn-danger" onclick="addCart(${p.productId})">Them Vao Gio Hàng</a>

                    </div>
                </div>
            </div>
        </c:forEach>
    </div>


</div>