// Variabel untuk menentukan jumlah pesanan
let jumlahPesanan = 5;

// If-else statement
if (jumlahPesanan > 0) {
  console.log("Pesanan diterima. Memasak sekarang!");
  let jenisMakanan = "nasi goreng"; // Jenis makanan yang dipesan
  if (jenisMakanan === "nasi goreng") {
    console.log("Memasak nasi goreng.");
  } else if (jenisMakanan === "mie goreng") {
    console.log("Memasak mie goreng.");
  } else {
    console.log("Makanan tidak tersedia.");
  }
  // For statement untuk memasak dalam jumlah tertentu
  for (let i = 1; i <= jumlahPesanan; i++) {
    console.log("Mengolah pesanan ke-" + i);
  }
} else {
  console.log("Tidak ada pesanan saat ini.");
}

// While loop untuk memeriksa kesiapan pesanan
let pesananSiap = false;
let waktuMenunggu = 0;

while (!pesananSiap) {
  console.log("Menunggu pesanan selesai...");
  waktuMenunggu++;
  if (waktuMenunggu === 3) {
    pesananSiap = true;
    console.log("Pesanan sudah siap!");
  }
}

// Do-while loop untuk mengecek kembali pesanan
do {
  console.log("Memeriksa pesanan sekali lagi...");
} while (!pesananSiap);

// Function untuk menghitung waktu memasak
function hitungWaktuMemasak(jumlahPesanan) {
  let waktuMemasak = jumlahPesanan * 5;
  return waktuMemasak;
}

let waktuTotalMemasak = hitungWaktuMemasak(jumlahPesanan);
console.log("Waktu total memasak: " + waktuTotalMemasak + " menit.");
