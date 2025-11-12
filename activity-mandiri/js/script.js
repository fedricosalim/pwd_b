function fn_ValForm() {
  var sMsg = "";
  var sEmail = document.getElementById("email").value;
  
  // Validasi Nama
  if (document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  
  // Validasi Email
  if (sEmail == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else {
    // Menambahkan validasi email dengan regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(sEmail)) {
      sMsg += "\n* Format email tidak valid";
    }
  }
  
  // Validasi Pesan
  if (document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }
  
  // Tampilkan Peringatan
  if (sMsg != "") {
    alert("Peringatan: \n" + sMsg);
    return false;
  } else {
    return true;
  }
}