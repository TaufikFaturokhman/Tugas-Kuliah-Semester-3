function submitOrder(event) {
    event.preventDefault(); // Menghentikan pengiriman form

    // Mengambil nilai input
    var nama = document.getElementById('nama').value;
    var pilihanMie = document.getElementById('pilihanMie');
    var pilihanMieText = pilihanMie.options[pilihanMie.selectedIndex].text;
    var hargaPerPorsi = parseInt(pilihanMie.value);
    var jumlah = document.getElementById('jumlah').value;
    var keterangan = document.getElementById('keterangan').value;

    // Menampilkan detail pesanan
    var totalHarga = hargaPerPorsi * jumlah;
    var message = `Terima kasih, ${nama}! Pesanan Anda untuk ${pilihanMieText} sebanyak ${jumlah} porsi sedang diproses. Total pembayaran: Rp ${totalHarga}. Keterangan: ${keterangan}`;

    // Menampilkan popup
    var popupMessage = document.getElementById('popup-message');
    popupMessage.innerHTML = message;
    document.getElementById('popup').style.display = 'block';

    // Mengosongkan form setelah pengiriman
    document.getElementById('orderForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}