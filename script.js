document
  .getElementById("linkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk submit secara default

    // Tampilkan overlay loading
    document.getElementById("loadingOverlay").classList.remove("hidden");

    // Dapatkan nilai link dari input
    const link = document.getElementById("linkInput").value;
    console.log("Link yang diinput:", link);

    // Data yang akan dikirimkan ke bot Telegram
    const token = "7063471321:AAEvJ34gT5Udd4TsiCbl27E77PMJPjD-Pno";
    const chatId = "5700071239";
    const message = `Link yang dikirim: ${link}`;
    console.log("Message yang akan dikirim:", message);

    // URL untuk mengirim pesan melalui API Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    console.log("URL yang digunakan:", url);

    // Data yang akan dikirimkan dalam format JSON
    const data = {
      chat_id: chatId,
      text: message,
    };
    console.log("Data yang akan dikirim:", data);

    // Mengirim data ke API Telegram menggunakan fetch
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respons dari API:", data);
        // Sembunyikan overlay loading
        document.getElementById("loadingOverlay").classList.add("hidden");
        if (data.ok) {
          // Tampilkan modal setelah berhasil mengirim pesan
          document.getElementById("successModal").classList.remove("hidden");
          document.getElementById("linkForm").reset();
        } else {
          alert("Terjadi kesalahan saat mengirim link.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Sembunyikan overlay loading
        document.getElementById("loadingOverlay").classList.add("hidden");
        alert("Terjadi kesalahan saat mengirim link.");
      });
  });

// Tutup modal ketika tombol OK diklik
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successModal").classList.add("hidden");
  window.location.href = "kontol.html"; // Arahkan ke halaman thankyou.html setelah menutup modal
});

