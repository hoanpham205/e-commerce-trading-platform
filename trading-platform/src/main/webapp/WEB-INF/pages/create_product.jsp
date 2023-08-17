
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>




    <form:form action="${action}" method="post" enctype="multipart/form-data" modelAttribute="product">
        <form:hidden path="productId"/>
        <form:hidden path="imageUrl"/>
        <form:hidden path="storeStoreId"/>
        <div class="form-floating mb-3 mt-3">
            <form:input type="text" class="form-control" path="productName" id="productName" placeholder="Tên sản phẩm" name="productName" />
            <label for="name">Tên sản phẩm</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <form:input type="text" class="form-control" path="price" id="price" placeholder="Giá sản phẩm" name="price" />
            <label for="name">Giá sản phẩm</label>
        </div>
        <div class="form-floating">
            <form:select class="form-select" id="cate"  name="categoriesCategoryId" path="categoriesCategoryId">
                <c:forEach items="${cate}" var="c">
                    <c:choose>
                        <c:when test="${c.categoryId==product.categoriesCategoryId.categoryId}">            
                            <option value="${c.categoryId}"  selected>${c.categoryName}</option>
                        </c:when>
                        <c:otherwise>
                            <option value="${c.categoryId}" selected>${c.categoryName}</option>
                        </c:otherwise>
                    </c:choose>

                </c:forEach>
            </form:select>

            <label for="cate" class="form-label">Danh mục sản phẩm</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <form:input type="file" class="form-control" path="file"  />
            <label for="name">Ảnh sản phẩm</label>
            <c:if test="${product.imageUrl != null}">
                <img src="${product.imageUrl}" width="120" />
            </c:if>
        </div>

        <div class="form-floating mb-3 mt-3">
            <button type="submit" class="btn btn-info">
                <c:choose>
                    <c:when test="${product.productId != null}">Cập nhật sản phẩm</c:when>
                    <c:otherwise>Thêm sản phẩm</c:otherwise>
                </c:choose>
            </button>
        </div>

    </div>  
</form:form>










