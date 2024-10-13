

function tinhKetQua(){
    // lấy giá trị từ input
  
    const so1 = document.getElementById('so1').value;
    const so2 = document.getElementById('so2').value;
    const ketqua = document.getElementById('ketqua');
    const thongbao = document.getElementById('thongbao');
    const error = document.getElementById('error');

       // Reset giá trị kết quả và thông báo lỗi
    ketqua.value = '';
    error.textContent = '';  // Clear previous error messages

    const  isValid = true;
    if(so1==''&& so2==""){
        error.textContent='Vui lòng nhập vào giá trị cho Số thứ nhất và Số thứ hai';
        isValid = false;
    }

    if(so1==''){
        error.textContent='Vui lòng nhập vào giá trị cho Số thứ nhất';
        isValid = false;
    }
    if(so2==''){
        error.textContent='Vui lòng nhập vào giá trị cho Số thứ hai ';
        isValid = false;
    }
     // Kiểm tra dữ liệu đầu vào có phải là số không
     if (isNaN(so1)) {
        error.textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số';
        isValid = false;

    }

    if (isNaN(so2) ) {
        error.textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số';
        isValid = false;
    }

     // Kiểm tra nếu không có phép tính được chọn
     const phepTinh = document.querySelector('input[name="phep_tinh1"]:checked');
     if (!phepTinh) {
         error.textContent = 'Vui lòng chọn phép tính';
         isValid = false;
     }

     // Nếu dữ liệu hợp lệ, thực hiện tính toán
    if (isValid) {
        let result;
        const num1 = parseFloat(so1);
        const num2 = parseFloat(so2);

        switch (phepTinh.value) {
            case 'Cộng':
                result = num1 + num2;
                break;
            case 'Trừ':
                result = num1 - num2;
                break;
            case 'Nhân':
                result = num1 * num2;
                break;
            case 'Chia':
                result = num1 / num2;
                break;
        }

        // Hiển thị kết quả
        ketqua.value = result;
    }



}