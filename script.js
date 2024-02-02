const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
$(document).ready(function () {
  $("#checkData").validate({
    rules: {
      hoten: {
        required: true,
        minlength: 5,
      },
      address: {
        required: true,
        minlength: 12,
      },
      note: {
        required: true,
      },
      phone: {
        required: true,
        number: true,
        digits: true,
      },
    },

    messages: {
      hoten: {
        required: "Vui lòng nhập ho ten nguoi nhan",
        minlength: "Tên nguoi nhan phải có ít nhất 5 ký tự",
      },
      address: {
        required: "Vui lòng nhập dia chi nguoi nhan",
        minlength: "Dia chi nguoi nhan phải có ít nhất 12 ký tự",
      },
      note: {
        required: "Vui long nhap ghi chu",
      },
      phone: {
        required: "Vui lòng nhập số",
        number: "Vui lòng chỉ nhập số",
        digits: "Vui lòng chỉ nhập các chữ số nguyên dương",
      },
      // password: {
      //     required: "Vui lòng nhập mật khẩu",
      //     minlength: "Mật khẩu phải có ít nhất 8 ký tự"
      // }
    },
  });
});
// Lấy tất cả các input radio
var radioInputs = document.querySelectorAll(
  "input[type=radio][name=payment-method]"
);

// Lặp qua từng input radio và thêm sự kiện onchange
radioInputs.forEach(function (radio) {
  radio.addEventListener("change", function () {
    // Lấy giá trị của input radio được chọn
    var selectedOption = this.value;

    // Hiển thị thông báo tương ứng
    var messageSpan = document.getElementById("message");
    messageSpan.innerText = "Bạn đã chọn: " + selectedOption;
  });
});
