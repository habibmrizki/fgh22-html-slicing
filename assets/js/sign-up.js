function checkSignUp(e) {
  e.preventDefault();
  const firstname = e.target.firstname.value;
  const lastname = e.target.lastname.value;
  const phonenumber = e.target.phonenumber.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (
    firstname === "Habib" &&
    lastname === "Rizki" &&
    phonenumber === "081542872384" &&
    email === "habib@mail.com" &&
    password === "1234"
  ) {
    alert(`Selamat, Anda sukses signup. Hai ${firstname}!`);
    window.location.href = "sign-in.html";
  } else if (
    firstname === "" ||
    lastname === "" ||
    phonenumber === "" ||
    email === "" ||
    password === ""
  ) {
    alert("Semua field harus diisi. Silakan coba lagi.");
  } else {
    alert("Data yang Anda masukkan salah. Silakan coba lagi.");
  }
}
