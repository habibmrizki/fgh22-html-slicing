function checkSignIn(e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  // console.log(email);
  // console.log(password);

  if (email === "habib@mail.com" && password === "1234") {
    alert("Anda dialihkan ke homepage");
    window.location.href = "Home-page.html";
  } else if (email === "" || password === "") {
    alert("Semua field harus diisi. Silakan coba lagi.");
  } else {
    alert("Data yang Anda masukkan salah. Silakan coba lagi.");
  }
}
