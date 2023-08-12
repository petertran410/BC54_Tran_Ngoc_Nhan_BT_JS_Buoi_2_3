// Tính Tiền Lương Nhân Viên
function tinhLuong() {
  const luongMotNgay = 100000;
  const soNgayLam = parseFloat(document.getElementById("soNgayLam").value);
  const luong = luongMotNgay * soNgayLam;

  const ketQuaLuong = document.getElementById("ketQuaLuong");
  ketQuaLuong.innerHTML = `Tiền lương của bạn là: ${luong} đồng`;
}

// Tính Giá Trị Trung Bình Của 5 Số
function tinhTrungBinh() {
  const input = document.getElementById("numbers").value;
  const numbersArray = input.split(",").map(number => parseFloat(number.trim()));

  const tong = numbersArray.reduce((sum, number) => sum + number, 0);
  const giaTriTrungBinh = tong / numbersArray.length;

  const ketQuaTB = document.getElementById("ketQuaTB");
  ketQuaTB.innerHTML = `Giá trị trung bình của 5 số là: ${giaTriTrungBinh}`;
}

// Quy Đổi USD Sang VND
const USDToVND = 23500;
function quyDoi() {
  const usd = parseFloat(document.getElementById("usd").value);
  const vnd = usd * USDToVND;

  const ketQuaVND = document.getElementById("ketQuaVND");
  ketQuaVND.innerHTML = `Số tiền sau quy đổi là: ${vnd} VND`;
}

// Tính diện tích, chu vi hình chữ nhật
function tinhToan() {
  const chieuDai = parseFloat(document.getElementById("chieuDai").value);
  const chieuRong = parseFloat(document.getElementById("chieuRong").value);

  const dienTich = chieuDai * chieuRong;
  const chuVi = (chieuDai + chieuRong) * 2;

  const ketQuaDienTich = document.getElementById("dienTich");
  ketQuaDienTich.innerHTML = `Diện tích: ${dienTich}`;

  const ketQuaChuVi = document.getElementById("chuVi");
  ketQuaChuVi.innerHTML = `Chu vi: ${chuVi}`;
}

// Tính tổng 2 ký số
function tinhTong() {
  const soNhap = parseInt(document.getElementById("soNhap").value);

  if (soNhap >= 10 && soNhap <= 99) {
    const soHangChuc = Math.floor(soNhap / 10);
    const soHangDonVi = soNhap % 10;

    const tong = soHangChuc + soHangDonVi;

    const ketQua2KySo = document.getElementById("ketQua2KySo");
    ketQua2KySo.innerHTML = `Tổng 2 ký số: ${soHangChuc} + ${soHangDonVi} = ${tong}`;
  } else {
    const ketQua2KySo = document.getElementById("ketQua2KySo");
    ketQua2KySo.innerHTML = "Vui lòng nhập số có 2 ký số.";
  }
}