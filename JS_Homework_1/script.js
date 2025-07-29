document.addEventListener("DOMContentLoaded",function() {
  const isim = prompt("Lütfen adınızı giriniz:");
  const mesajElement = document.getElementById("mesaj");
  const zamanElement = document.getElementById("zaman");

  if (!isim || isim.trim() === "") {
    mesajElement.textContent = "Merhaba, Ziyaretçi!";
  } else {
    mesajElement.textContent = `Merhaba, ${isim.trim()}!`;
  }

  function guncelleZaman() {
    const tarih = new Date();
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = gunler[tarih.getDay()];
    const saat = tarih.toLocaleTimeString("tr-TR");

    zamanElement.textContent = `Bugün ${gun} - Saat: ${saat}`;
  }

  guncelleZaman();
  setInterval(guncelleZaman, 1000);
});
