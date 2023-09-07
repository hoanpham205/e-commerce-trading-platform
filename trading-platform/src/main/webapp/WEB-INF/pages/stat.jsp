<%-- 
    Document   : stat
    Created on : Sep 6, 2023, 12:34:14 AM
    Author     : ADMIN
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="main-table  container">
    <div class="search">
        <form action="<c:url value="/stat/"/>" class="form-search">
            <input name="month" type="month"  />
<!--            <select name="quarter">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>-->
            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>
    <canvas id="myChart"></canvas>
</div>



<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>

<script>

    let data = [];
    let labels = [];
    <c:forEach items="${chartData}" var="d">
    data.push(${d.total});
    labels.push('${d.productsProductId.productName}');
    </c:forEach>
    // Get chart data from the model
    var chartData = data;

    // Create a chart using Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar', // Specify chart type (e.g., bar, line, pie)
        data: {
            labels,
            datasets: [{
                    label: 'My Chart',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize colors
                    borderColor: 'rgba(75, 192, 192, 1)', // Customize colors
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    // Lấy tham số truy vấn từ URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

// Lấy giá trị tháng từ tham số truy vấn
    const monthParam = urlParams.get("month");

    if (monthParam) {
        // Tách tháng từ chuỗi tham số truy vấn
        const parts = monthParam.split("-");
        if (parts.length === 2) {
            const month = parts[1];
            const  year = parts[0];
            console.log(parts);

            // Tạo một tham số truy vấn mới với giá trị tháng
            const newQueryString = "?month=" + month + "&year=" + year;
            const newUrl = window.location.pathname + newQueryString;

            // Chuyển hướng đến URL mới với tham số truy vấn mới
            window.location.href = newUrl;
        }
    }

</script>