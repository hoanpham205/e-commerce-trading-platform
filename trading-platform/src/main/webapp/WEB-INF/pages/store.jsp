<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:url value="/store/"  var="action"/>
<div class="container mt-3">
    <h2> <a href="<c:url value="/store/create_product"/>"><button type="button" class="btn btn-dark">ADD PRODUCT</button></a>
    </h2>
  
    <c:if test="${counter > 1}">
        <ul class="pagination mt-1">
            <li class="page-item"><a class="page-link" href="${action}">T?t c?</a></li>
                <c:forEach begin="1" end="${counter}" var="i">
                    <c:url value="/store/" var="pageUrl">
                        <c:param name="page" value="${i}" />
                    </c:url>
                <li class="page-item"><a class="page-link" href="${pageUrl}">${i}</a></li>
                </c:forEach>
          
        </ul>
    </c:if>
    <table class="table">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${product}" var="p">
                <tr>
                    <td>${p.productName}</td>
                    <td>${p.productName}</td>
                    <td>${p.productName}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</div>