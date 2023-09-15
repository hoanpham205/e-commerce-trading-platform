
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<div class="main-table  container">
    <div class="search">
        <form action="<c:url value="/stat/"/>" class="form-search">
            <input name="month" type="text"  />
            <input name="year" type="text"  />

            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>

    <canvas id="myChart"></canvas>
</div>



<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>

<script>

    let datas = [];
    let labels = [];

    <c:forEach items="${chartData}" var="d">
    labels.push('${d[0]}');
    datas.push(${d[1]});
    </c:forEach>
    // Get chart data from the model
    var chartData = datas;
    console.log(chartData);

    // Create a chart using Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar', // Specify chart type (e.g., bar, line, pie)
        data: {
            labels,
            datasets: [{
                    label: 'My Chart',
                    data: datas,
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




</script>
