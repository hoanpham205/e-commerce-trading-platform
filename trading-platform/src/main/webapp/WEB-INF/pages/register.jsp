

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<c:url value="/register/" var="action"/>




<form:form action="${action}" method="post" modelAttribute="user">
  <label for="name">Name:</label>
  <form:input path="username" id="name" />



  <label for="password">Password:</label>
  <form:password path="password" id="password" />

  <input type="submit" value="Register" />
</form:form>
    
    


