function showSection(sectionId) {
    document.getElementById('main').style.display = 'none';
    document.getElementById('thongTinMonHoc').style.display = 'none';
    document.getElementById('congNgheWeb').style.display = 'none';
    document.getElementById('thongTinSinhVien').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
  }

  // Event listeners for navigation buttons
  document.getElementById('logo').addEventListener('click', function() {
    showSection('main');
  });
  document.getElementById('btnThongTinMonHoc').addEventListener('click', function() {
    showSection('thongTinMonHoc');
  });
  document.getElementById('btnCongNgheWeb').addEventListener('click', function() {
    showSection('congNgheWeb');
  });
  document.getElementById('btnThongTinSinhVien').addEventListener('click', function() {
    showSection('thongTinSinhVien');
  });

  // Display "Thông tin môn học" by default on page load
  window.onload = function() {
    showSection('thongTinMonHoc');
  };