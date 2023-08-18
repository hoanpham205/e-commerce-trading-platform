<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="container">
    <h1 class="text-center text-danger">CHI TIET SAN PHAM</h1>

    <div class="row">

        <div class="col-md-5">
            <img src="${product.imageUrl}" alt="${product.productName}" class="img-fluid" />
        </div>
        <div class="col-md-7">
            <h1>${product.productName}</h1>
            <h3>${product.price} VND</h3>
        </div>
        <c:url value="/api/products/${product.productId}/comments" var="endpoint" />

        <sec:authorize access="!isAuthenticated()">
            <strong>Vui lòng <a href="<c:url value="/login/" />">đăng nhập</a> để phản hồi!!!</strong>
        </sec:authorize>
        <sec:authorize access="isAuthenticated()">
            <div class="form-group">
                <textarea class="form-control feedback" placeholder="Nhập nội dung để phản hồi..." id="feedbackId"></textarea>
                <button class="btn btn-danger btn-feedback" onclick="addFeedback('${endpoint}', ${weddinghall.weddinghallId})">
                    <i class="fas fa-comments" style="margin: 5px; vertical-align: middle;"></i>   Thêm phản hồi
                </button>
            </div>

        </sec:authorize>
        <ul id="comments" class="list-group"">

        </ul>
    </div>
</div>





<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js"></script>
<script src="<c:url value="/js/product.js" />"></script>
<script>
            window.onload = function () {
                loadComments('${endpoint}');
            }
</script>