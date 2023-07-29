
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<c:url value="/store/create_product" var="action" />
<form:form method="post" modelAttribute="product" action="${action}">
    <div class="form-group">

        <input name="productName" 
               class="form-control" />
    </div>
    <div class="form-group">
        <label for="description">
        </label>
        <input id="descriptionID" name="price"
               class="form-control"/>
    </div>
    <div class="form-floating">
        <form:select class="form-select" id="cate" name="cate" path="categoriesCategoryId">
                <c:forEach items="${cate}" var="c">
                <c:choose>
                    <c:when test="${c.categoryId !=0}"><option value="${c.categoryId}" selected>${c.categoryName}</option></c:when>
                </c:choose>

            </c:forEach>
        </form:select>
        <label for="cate" class="form-label">Danh mục sản phẩm</label>
    </div>
    <div class="form-group">
        <input type="submit"/>

    </div>  

</form:form>


