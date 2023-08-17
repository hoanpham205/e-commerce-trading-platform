<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<c:url value="/store/"  var="action"/>



<div class="container mt-3">
    <h2> <a href="<c:url value="/store/product"/>"><button type="button" class="btn btn-dark">ADD PRODUCT</button></a>
    </h2>

    <c:if test="${counter > 1}">
        <ul class="pagination mt-1">
            <li class="page-item"><a class="page-link" href="${action}">ALL</a></li>
                <c:forEach begin="1" end="${counter}" var="i">
                    <c:url value="/store/" var="pageUrl">
                        <c:param name="page" value="${i}" />
                    </c:url>
                <li class="page-item"> <a class="page-link" href="${pageUrl}">${i}</a></li>
                </c:forEach>

        </ul>
    </c:if>
    <form action="<c:url value="/store/"/>" class="form-search">
        <div class="form-floating">
            <select class="form-select" onchange="redirectToCategory(this.value)">
                <option value="">Choose a category</option>

                <c:forEach items="${cate}" var="c">               
                    <option value="${c.categoryId}" >${c.categoryName} </option>
                </c:forEach>
            </select>
            <label for="cate" class="form-label">Danh mục sản phẩm</label>
        </div>
    </form>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${product}" var="p">
                <tr>
                    <td>${p.productId}</td>
                    <td>${p.productName}</td>
                    <td>${p.price}</td>
                    <td><img src="${p.imageUrl}" style="width: 100px" /></td>


                    <td>
                        <a href="<c:url value="/store/product/${p.productId}"/>" class="btn btn-info">Update</a>
                        <c:url value="/api/store/product/${p.productId}" var="api" />
                        <button class="btn btn-danger" onclick="deleteProduct('${api}')">Delete</button>
                    </td>

                </tr>
            </c:forEach>
        </tbody>
    </table>
</div>


<script>
    function redirectToCategory(categoryId) {
        if (categoryId) {
            var url = "/trading-platform/store/?cateId=" + categoryId;
            window.location.href = url;
        }
    }
</script>
