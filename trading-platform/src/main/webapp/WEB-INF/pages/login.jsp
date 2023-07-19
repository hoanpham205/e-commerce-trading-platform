<%-- 
    Document   : login
    Created on : Jul 18, 2023, 9:33:25 PM
    Author     : ADMIN
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<c:url value="/login/" var="action" />


<form:form method="post" modelAttribute="user" action="${action}">

      
     <h1>${msg}</h1>
    <div class="form-group">
        <label for="usernameId">
        </label>
        <input name="username" id="usernameId"
               class="form-control" />
    </div>
    <div class="form-group">
        <label for="passwordId">
        </label>
        <input id="passwordId" name="password"
               class="form-control" type="password" />
    </div>
    <div class="form-group">
        <input type="submit"/>
    </div> 

</form:form>

