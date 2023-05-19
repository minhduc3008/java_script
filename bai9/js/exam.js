function nhapHoadon() {
    let Hoadon = prompt('nhập số tiền bạn đã tiêu')

    if (Hoadon > 500) {
        alert('Bạn được tặng 25% giá trị đơn hàng')
    } else if (Hoadon < 500 && Hoadon >= 200) {
        alert('Bạn được tặng 10% giá trị đơn hàng')
    } else if (Hoadon < 500 && Hoadon >= 200) {
        alert('Bạn được tặng 10% giá trị đơn hàng')
    }else if (Hoadon < 200 && Hoadon >= 50) {
        alert('Bạn được tặng 5% giá trị đơn hàng')
    } else {
        alert('Rất tiếc bạn không được khuyến mại, hãy mua sắm thêm nhé!!!')
    }
}





