
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<div class="container">


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
</div>