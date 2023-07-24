

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<c:url value="/register/" var="action"/>

<form:form action="${action}" method="post" modelAttribute="user"  enctype="multipart/form-data">
  <label for="name">Name:</label>
  <form:input path="username" id="name" />
  <label for="password">Password:</label>
  <form:password path="password" id="password" />
  
   <div class="form-floating mb-3 mt-3">
        <form:input type="file" class="form-control" path="file" id="file"  />
        <label for="file">Ảnh sản phẩm</label>
    </div>

  <input type="submit" value="Register"  />
</form:form>
    
    


