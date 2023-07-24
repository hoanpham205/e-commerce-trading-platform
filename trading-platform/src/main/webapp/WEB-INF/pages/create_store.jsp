<%-- 
    Document   : login
    Created on : Jul 18, 2023, 9:33:25 PM
    Author     : ADMIN
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<c:url value="/create_store" var="action" />
<c:set var="user" value="${sessionScope.currentUser}"/>

<form:form method="post" modelAttribute="store" action="${action}">

    <h1>${user.userId}</h1>
    <div class="form-group">
        <label for="usernameId">
        </label>
        <input name="storeName" id="storeNameID"
               class="form-control" />
    </div>
    <div class="form-group">
        <label for="description">
        </label>
        <input id="descriptionID" name="description"
               class="form-control"  />
    </div>
    <div class="form-group">
        <input type="submit"/>

    </div> 

</form:form>


