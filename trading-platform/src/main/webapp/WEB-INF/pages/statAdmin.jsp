
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<div class="main-table  container">
    <div class="search">
        <form action="<c:url value="/store/${store.storeId}"/>" class="form-search">
            <input name="month" type="text"  />
            <input name="year" type="text"  />

            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>

    <canvas id="myChart"></canvas>
</div>



<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>

<script>
    let labels = [];
    let datas = [];
    <c:forEach items="${stat}" var="d">
    labels.push('${d[0]}');
    datas.push('${d[1]}');
    </c:forEach>
    console.log(labels);
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset',
                data: datas,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Màu nền của dữ liệu
                borderColor: 'rgba(75, 192, 192, 1)', // Màu của đường
                pointStyle: 'circle', // Kiểu điểm (circle là hình tròn)
                pointRadius: 5, // Đường kính của điểm
                pointBackgroundColor: 'red', // Màu sắc của điểm
                pointBorderColor: 'blue', // Màu sắc của viền điểm
                pointBorderWidth: 10
            }
        ]
    };
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line', // Loại biểu đồ là line chart
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });




</script>
