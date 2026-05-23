// Alert form kontak
const form = document.querySelector(".contact-form");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Pesan berhasil dikirim!");
  });
}