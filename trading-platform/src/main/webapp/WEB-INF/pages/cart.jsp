<%-- 
    Document   : cart
    Created on : Aug 10, 2023, 7:33:47 PM
    Author     : ADMIN
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<table class="table">
    <tr>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Đơn giá</th>
        <th>Số lượng</th>
        <th></th>
    </tr>
      <h1>${cart}</h1>
    <c:forEach items="${cart}" var="c">
        <tr id="cart${c.productId}" ">
            <td>${c.productId}</td>
            <td>${c.name}</td>
            <td>                        
            <fmt:formatNumber type = "number" maxFractionDigits = "3" value = "${p.price}" /> VND
            </td>
    <td>
        <input type="number"
               value="${c.count}" class="form-control" />
    </td>
    <c:url value="/api/cart/delete/${c.productId}" var="api"/>
    <td>
        <input type="button" onclick="deleteCart('${api}','${c.productId}')" value="Xóa" class="btn btn-danger" />
    </td>
</tr>
</c:forEach>

</table>

<!--<div class="alert alert-info">
    <h3>Tổng sản phẩm: <span class="cart-counter">{{ cart.total_quantity }}</span></h3>
    <h3>Tổng tiền: <span class="cart-amount">{{ "{:,.0f}".format(cart.total_amount) }}</span> VNĐ</h3>
</div>-->

<div>
    <input type="button" class="btn btn-success" value="Thanh toán" />
</div>
