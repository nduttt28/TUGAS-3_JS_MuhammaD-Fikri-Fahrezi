// =======================================
// Sistem Manajemen Produk Toko
// Menggunakan Array dan Function JavaScript
// =======================================

// Array produk toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];


// Fungsi menampilkan produk
function tampilkanProduk() {

    console.log("\n===== DAFTAR PRODUK TOKO =====");

    produkToko.forEach(function (produk) {

        console.log(
            `ID   : ${produk.id}
Nama : ${produk.nama}
Harga: Rp ${produk.harga}
Stok : ${produk.stok}
---------------------------`
        );

    });
}


// Fungsi menambah produk
function tambahProduk(nama, harga, stok) {

    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    console.log("\nProduk berhasil ditambahkan!");
}


// Fungsi menghapus produk
function hapusProduk(id) {

    let indexProduk = produkToko.findIndex(function (produk) {
        return produk.id === id;
    });

    if (indexProduk !== -1) {

        produkToko.splice(indexProduk, 1);
        console.log("\nProduk berhasil dihapus!");

    } else {

        console.log("\nProduk tidak ditemukan.");

    }
}


// ==============================
// Contoh penggunaan program
// ==============================

tampilkanProduk();

tambahProduk("Monitor", 1500000, 4);

tampilkanProduk();

hapusProduk(2);

tampilkanProduk();