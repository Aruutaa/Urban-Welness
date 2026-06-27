# PROJECT REVISI - WebGIS RTH dan Hiburan

Isi revisi utama:

1. Fitur dibuat lebih jelas dan semua tombol aktif.
2. Marker bisa diklik dan langsung menampilkan hasil analisis.
3. Heatmap memakai titik data aktual, bukan sebaran acak.
4. Buffer memakai radius meter yang terlihat jelas melalui slider.
5. Toggle memakai tombol ON/OFF dan ditempatkan di panel samping agar tidak menutup muka peta.
6. Backsound menyenangkan ditambahkan dengan tombol Musik ON/OFF.

Cara menjalankan:

- Buka `index.html` langsung di browser.
- Lebih stabil jika dijalankan lewat server lokal, misalnya:
  `python -m http.server 8000`
  lalu buka `http://localhost:8000/PROJECT/`.

Catatan:

- Karena file inti dalam RAR tidak bisa diekstrak penuh oleh environment ini, versi ini dibuat ulang sebagai project bersih dengan struktur yang sama.
- Data titik tersedia di `data/dataset.json` dan juga ditanam di `js/app.js` agar tetap berjalan ketika file HTML dibuka langsung.
- Koordinat dapat kamu sesuaikan lagi jika punya data koordinat final dari Excel asli.
