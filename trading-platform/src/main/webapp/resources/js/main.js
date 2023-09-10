function deleteProduct(path) {
    console.log(path);
    if (confirm("Bạn chắc chắn xóa không?") === true) {
        fetch(path, {method: "delete"}).then(res => {
            if (res.status === 204)
                location.reload();
            else
                alert("Hệ thống có lỗi! Vui lòng quay lại sau!");
        });
    }
}


function request(path) {
    console.log(path);
    if (confirm("Bạn chắc chắn xóa không?") === true) {
        fetch(path, {method: "post"}).then(res => {
            if (res.status === 204)
                location.reload();
            else
                alert("Hệ thống có lỗi! Vui lòng quay lại sau!");
        });
    }
}
