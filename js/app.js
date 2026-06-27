/* =====================================================
   URBANWELLNESS SMART CITY — app.js
   Full-Featured Stress Release Zone System
   Depok/Sleman, DIY | SIG Terapan UAS 2026
   ===================================================== */

/* ------ CESIUM TOKEN ------ */
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOGY5MDc1YS04ZDdkLTQ3NWEtOGY4Yi1jNzExOGZlMTYzOGQiLCJpZCI6NDQ5MDg2LCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3ODI0MDUzNzF9.ryph_Se5u0VPkhvN5q1iXI6dMpMdcU1dULqBlXhnF1E';

/* =====================================================
   DATABASE SPASIAL LENGKAP
   ===================================================== */
const locations = [
    // HIBURAN MALAM
    { name: "Top40 Karaoke Keluarga", coord: [-7.749167, 110.398333], type: "night", rating: 4.3, jam: "Minggu–Jumat 10:00–01:00", alamat: "Jl. Sukoharjo No.1A, Sanggrahan", desc: "Karaoke keluarga dengan koleksi lagu lengkap, suasana nyaman dan harga terjangkau.", image: "data/images/Top40 Karaoke Keluarga.jpg" },
    { name: "Happy Puppy Karaoke Seturan", coord: [-7.771888, 110.408602], type: "night", rating: 4.8, jam: "Setiap Hari 11:00–02:00", alamat: "Plaza Seturan Blok B No.12", desc: "Karaoke premium dengan sound system terbaik. Cocok untuk bersantai bersama teman.", image: "data/images/Happy Puppy Karaoke Keluarga Seturan.jpg" },
    { name: "Glow Karaoke Jogja", coord: [-7.7716, 110.4087], type: "night", rating: 4.1, jam: "Senin–Minggu 14:00–22:00", alamat: "Jl. Seturan Raya No.2–3", desc: "Karaoke modern dengan pencahayaan LED warna-warni dan sistem audio berkualitas.", image: "data/images/Glow Karaoke Jogja.jpg" },
    { name: "Terrace Jogja Club", coord: [-7.77176, 110.40853], type: "night", rating: 4.5, jam: "Senin–Minggu 19:00–03:00", alamat: "Jl. Seturan Raya No.4, Kledokan", desc: "Club & Karaoke dengan rooftop terrace, live DJ, dan pemandangan kota yang memukau.", image: "data/images/Terrace Jogja Club & Karaoke.jpg" },
    { name: "NAV Karaoke Keluarga", coord: [-7.783081, 110.409752], type: "night", rating: 4.4, jam: "Senin–Minggu 12:00–00:00", alamat: "Jl. Laksda Adisucipto No.155A", desc: "NAV Karaoke dengan ratusan ribu lagu Indonesia dan mancanegara, ruang VIP tersedia.", image: "data/images/NAV Karaoke Keluarga Yogyakarta.jpg" },
    { name: "Queen Bar Jogja", coord: [-7.783, 110.3967], type: "night", rating: 4.0, jam: "Door open 19:00–Selesai", alamat: "Jl. Laksda Adisucipto No.163", desc: "Bar dengan live music malam dan minuman pilihan. Tempat relaksasi favorit warga kota.", image: "data/images/Queen Bar Jogja.jpg" },
    { name: "Hyperbox Family Karaoke", coord: [-7.77915, 110.41515], type: "night", rating: 4.1, jam: "Senin–Minggu 10:30–02:30", alamat: "Jl. Babarsari Raya No.15", desc: "Karaoke keluarga dengan berbagai pilihan ruangan, cocok untuk gathering kantor maupun keluarga.", image: "data/images/Hyperbox Family Karaoke & Cafe-Resto.png" },
    { name: "Blackjack Executive Karaoke", coord: [-7.78105, 110.41413], type: "night", rating: 4.9, jam: "Senin–Minggu 19:00–04:00", alamat: "Jl. Babarsari No.44", desc: "Karaoke eksekutif premium dengan lounge, cocktail bar, dan sound system kelas atas.", image: "data/images/Blackjack Executive Karaoke & Lounge.png" },
    { name: "ST.BIER Bar & Kitchen", coord: [-7.7679, 110.4006], type: "night", rating: 4.4, jam: "Senin–Minggu 20:00–03:00", alamat: "Ruko Gatic, Jl. Perumnas No.83", desc: "Bar & Kitchen dengan menu Barat dan Asia, cocok untuk makan malam sambil bersantai.", image: "data/images/ST.BIER Bar & Kitchen.jpg" },
    { name: "The Gardens Jogja", coord: [-7.7705, 110.4089], type: "night", rating: 4.4, jam: "Senin–Minggu 11:00–03:00", alamat: "Jl. Seturan Raya, Kledokan", desc: "Tempat hiburan malam dengan taman outdoor, live music, dan cocktail premium.", image: "data/images/The Gardens Jogja.jpg" },

    // RUANG TERBUKA HIJAU & REKREASI
    { name: "Wisdom Park UGM", coord: [-7.770780, 110.381618], type: "leisure", rating: 4.8, jam: "Senin–Minggu 06:00–18:00", alamat: "Jl. Prof. Dr. Drs. Notonagoro", desc: "Taman filosofi UGM dengan koleksi tumbuhan langka, patung budaya, dan jalur refleksi. Favorit untuk meditasi pagi.", image: "data/images/Wisdom Park UGM.jpg" },
    { name: "Lembah UGM", coord: [-7.769121, 110.382466], type: "leisure", rating: 4.7, jam: "Setiap Hari 06:00–20:00", alamat: "Kawasan Lembah UGM", desc: "Ruang terbuka hijau ikonik UGM. Sering digunakan untuk jogging, piknik, dan kegiatan outdoor kampus.", image: "data/images/Lembah UGM.jpg" },
    { name: "Sendang Somobetri", coord: [-7.771834, 110.420872], type: "leisure", rating: 4.6, jam: "Sabtu–Kamis 07:00–16:30", alamat: "Padukuhan Sombomerten", desc: "Sendang alami dengan air jernih dan suasana pedesaan yang menenangkan. Spot healing tersembunyi.", image: "data/images/Sendang Somobetri.jpg" },
    { name: "Embung Tambakboyo", coord: [-7.756185, 110.414962], type: "leisure", rating: 4.4, jam: "Buka 24 Jam", alamat: "Jl. Tambakboyo, Condongcatur", desc: "Waduk mini dengan pemandangan sunset indah. Spot favorit untuk jogging pagi dan relaksasi sore.", image: "data/images/Embung Tambakboyo.jpg" },
    { name: "Taman PTBB FT UNY", coord: [-7.768752, 110.387858], type: "leisure", rating: 4.0, jam: "Senin–Minggu 06:00–17:00", alamat: "Area Fakultas Teknik UNY", desc: "Taman asri di lingkungan kampus UNY dengan bangku taman dan area bermain yang sejuk.", image: "data/images/Taman PTBB FT UNY.png" },
    { name: "Taman Kearifan UGM", coord: [-7.775313, 110.380432], type: "leisure", rating: 4.6, jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Olahraga UGM", desc: "Taman kearifan lokal dengan instalasi seni budaya dan lanskap alami yang harmonis.", image: "data/images/Taman Kearifan UGM.jpg" },
    { name: "Hutan Kota", coord: [-7.773366, 110.396701], type: "leisure", rating: 4.7, jam: "Senin–Minggu 06:00–18:00", alamat: "Kawasan Klaster Agro UGM", desc: "Hutan kota mini yang menyejukkan dengan koleksi pohon besar dan jalur setapak yang teduh.", image: "data/images/Hutan Kota.png" },
    { name: "Taman Winasutan Asri", coord: [-7.767686, 110.442079], type: "leisure", rating: 4.6, jam: "Senin–Minggu 08:00–18:00", alamat: "Jl. Singosutan Barat", desc: "Taman komunitas warga dengan arena bermain anak, gazebo, dan kebun bunga yang terawat.", image: "data/images/Taman Winasutan Asri.png" },
    { name: "Sendang Mulyo", coord: [-7.776039, 110.428233], type: "leisure", rating: 3.0, jam: "Buka 24 Jam", alamat: "Padukuhan Nayan", desc: "Sumber air alami yang menjadi ruang terbuka hijau komunitas warga sekitar.", image: "data/images/Sendang Mulyo Kali Grojokan.jpg" },
    { name: "Bendung Glendongan", coord: [-7.777250, 110.419562], type: "leisure", rating: 4.0, jam: "Buka 24 Jam", alamat: "Tambakbayan", desc: "Bendung alami dengan nuansa sungai yang menenangkan, cocok untuk terapi suara air.", image: "data/images/Bendung Glendongan.png" },
    { name: "Taman Randu Alas UNY", coord: [-7.777506, 110.386980], type: "leisure", rating: 4.8, jam: "Buka 24 Jam", alamat: "Area Kampus UNY", desc: "Taman kampus UNY yang rindang dengan pohon randu berusia ratusan tahun. Spot meditasi ideal.", image: "data/images/Taman Randu Alas UNY.jpg" },
    { name: "Taman Auditorium UNY", coord: [-7.777274, 110.387819], type: "leisure", rating: 4.7, jam: "Buka 24 Jam", alamat: "Kampus UNY Karangmalang", desc: "Taman luas di depan Auditorium UNY, sering digunakan untuk senam pagi dan acara komunitas.", image: "data/images/Taman Auditorium UNY.jpg" },
    { name: "Taman Payung Maskan UGM", coord: [-7.774717, 110.380989], type: "leisure", rating: 4.5, jam: "Buka 24 Jam", alamat: "Bulaksumur", desc: "Taman dengan instalasi payung warna-warni ikonik UGM, spot foto dan relaksasi populer.", image: "data/images/Taman Payung Seberang Maskan UGM.jpg" },
    { name: "Kolam Detensi Lembah UGM", coord: [-7.776189, 110.380444], type: "leisure", rating: 4.8, jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Sayap Barat UGM", desc: "Danau buatan yang indah di lembah UGM. Habitat burung dan spot mancing sekaligus taman refleksi.", image: "data/images/Taman Kolam Detensi Lembah UGM.jpg" },

    // TEMPAT IBADAH
    { name: "Perpustakaan Grhatama Pustaka", coord: [-7.7928, 110.4088], type: "leisure", rating: 4.8, jam: "08:00–16:00", alamat: "Grhatama Pustaka, Janti", desc: "Perpustakaan daerah DIY dengan koleksi 300.000+ buku, ruang baca premium, dan area meditasi literasi.", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" },
    { name: "Masjid Kampus UGM", coord: [-7.7750, 110.3810], type: "worship", rating: 4.9, jam: "24 Jam", alamat: "Bulaksumur UGM", desc: "Masjid kampus UGM yang megah dengan arsitektur indah. Tempat sholat dan dzikir yang menenangkan jiwa.", image: "https://images.unsplash.com/photo-1542898716-16016149f1db?w=400" },
    { name: "Gereja Kristen Jawa Gondokusuman", coord: [-7.7890, 110.3760], type: "worship", rating: 4.7, jam: "Minggu 07:00 & 09:30", alamat: "Jl. Sudirman No.17, Yogyakarta", desc: "Gereja bersejarah dengan arsitektur indah. Memberikan ketenangan jiwa bagi jemaatnya.", image: "https://images.unsplash.com/photo-1513171920216-2640b288471b?w=400" }
];

/* =====================================================
   SMART CITY PARAMETERS DATA
   ===================================================== */
const smartCityParams = [
    { id: 'sc-stress',   icon: '🧠', label: 'Urban Stress Index', value: 42.8, unit: '%',    color: '#10b981', sub: 'Terkendali', desc: 'Indeks stres perkotaan berdasarkan kepadatan lalu lintas, kebisingan, dan RTH' },
    { id: 'sc-hubs',     icon: '📍', label: 'Relief Hubs Aktif',  value: 28,    unit: ' Spot', color: '#6366f1', sub: 'Tersinkronisasi', desc: 'Jumlah lokasi relaksasi aktif terdaftar dalam sistem' },
    { id: 'sc-green',    icon: '🌿', label: 'Green Space Ratio',  value: 31.5,  unit: '%',    color: '#22c55e', sub: 'Di atas standar WHO', desc: 'Rasio ruang terbuka hijau terhadap luas kota (WHO min. 30%)' },
    { id: 'sc-noise',    icon: '🔊', label: 'Noise Level Index',  value: 68,    unit: ' dB',  color: '#f59e0b', sub: 'Moderat–Ramai', desc: 'Rata-rata kebisingan kota siang hari (ambang WHO: 55 dB)' },
    { id: 'sc-aqi',      icon: '💨', label: 'Air Quality (AQI)',  value: 42,    unit: '',     color: '#38bdf8', sub: 'Kualitas Baik', desc: 'Indeks Kualitas Udara harian (0–50 = Baik, 51–100 = Sedang)' },
    { id: 'sc-happy',    icon: '😊', label: 'Happiness Score',    value: 72,    unit: '/100', color: '#ec4899', sub: 'Cukup Bahagia', desc: 'Skor kebahagiaan warga berdasarkan agregasi mood check harian' },
    { id: 'sc-lod',      icon: '🏙️', label: '3D Coverage (LOD)',  value: 98.5,  unit: '%',    color: '#8b5cf6', sub: 'Geometri Valid', desc: 'Cakupan pemodelan 3D bangunan kota (Level of Detail)' },
    { id: 'sc-access',   icon: '🎯', label: 'RTH Accessibility',  value: 84.2,  unit: '%',    color: '#14b8a6', sub: 'Jangkauan Tinggi', desc: 'Persentase warga dalam radius 1km dari RTH terdekat' },
];

/* =====================================================
   STATE VARIABLES
   ===================================================== */
let leafletMap, leafletCluster, leafletGeometries = [], boundaryLayer2D;
let analyticsLayersGroup;
let cesiumViewer, cesiumEntities = [], currentEngine = '2d';
let distancePointA = null, distancePointB = null;
let distanceMarkerA = null, distanceMarkerB = null, distanceLine = null;
let distanceModeActive = false;
let routingLayer2D = null, routingLayer3D = null, userLocationMarker = null;
let currentBasemap = 'voyager';
let basemapLayerRef = null;
let isDarkMode = false;
let breathInterval = null, breathCountInterval = null, sessionInterval = null;
let breathCycles = 0, sessionSeconds = 0;
let currentBreathMode = '4-7-8';
let notifications = [];
let moodData = { buruk: 35, sedang: 40, baik: 25, total: 47 };
let weatherData = {};
let searchResults = [];
let notifPanelOpen = false;

/* =====================================================
   TOAST NOTIFICATION SYSTEM
   ===================================================== */
function showToast(title, msg, type = 'success', duration = 4000) {
    const container = document.getElementById('toast-container');
    const id = 'toast-' + Date.now();
    const icons = { success: '✅', warning: '⚠️', error: '❌', info: '💡' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = id;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '📢'}</span>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-msg">${msg}</div>
        </div>
        <span class="toast-close" onclick="removeToast('${id}')">×</span>
    `;
    toast.onclick = (e) => { if (!e.target.classList.contains('toast-close')) removeToast(id); };
    container.appendChild(toast);

    if (duration > 0) setTimeout(() => removeToast(id), duration);
}

function removeToast(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('removing');
        setTimeout(() => el.remove(), 300);
    }
}

/* =====================================================
   NOTIFICATIONS SYSTEM
   ===================================================== */
function addNotification(icon, title, msg, type = 'info') {
    const id = Date.now();
    notifications.unshift({ id, icon, title, msg, type, time: new Date() });
    renderNotifications();
    updateNotifBadge();
}

function renderNotifications() {
    const list = document.getElementById('notif-list');
    if (!list) return;
    if (notifications.length === 0) {
        list.innerHTML = '<p class="text-center text-xs text-slate-400 py-4">Belum ada notifikasi</p>';
        return;
    }
    list.innerHTML = notifications.map(n => `
        <div class="p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition cursor-pointer">
            <div class="flex items-start gap-2">
                <span class="text-lg flex-shrink-0">${n.icon}</span>
                <div>
                    <span class="text-[10px] font-black text-slate-700 block">${n.title}</span>
                    <span class="text-[10px] font-medium text-slate-500">${n.msg}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function updateNotifBadge() {
    const badge = document.getElementById('notif-badge');
    if (!badge) return;
    if (notifications.length > 0) {
        badge.textContent = Math.min(notifications.length, 9);
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

window.toggleNotifPanel = function() {
    const panel = document.getElementById('notif-panel');
    notifPanelOpen = !notifPanelOpen;
    panel.classList.toggle('hidden', !notifPanelOpen);
};

window.clearNotifications = function() {
    notifications = [];
    renderNotifications();
    updateNotifBadge();
    document.getElementById('notif-panel').classList.add('hidden');
    notifPanelOpen = false;
};

/* =====================================================
   CLOCK WIDGET
   ===================================================== */
function updateClock() {
    const now = new Date();
    const timeEl = document.getElementById('live-time');
    const dateEl = document.getElementById('live-date');
    if (timeEl) timeEl.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
    if (dateEl) dateEl.textContent = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();

/* =====================================================
   DARK MODE
   ===================================================== */
window.toggleDarkMode = function() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    const icon = document.getElementById('dark-mode-icon');
    const iconM = document.getElementById('dark-mode-icon-mobile');
    if (icon) icon.textContent = isDarkMode ? '☀️' : '🌙';
    if (iconM) iconM.textContent = isDarkMode ? '☀️' : '🌙';

    if (isDarkMode && currentBasemap !== 'satellite') {
        switchBasemap('dark', document.getElementById('bm-dark'));
    } else if (!isDarkMode && currentBasemap === 'dark') {
        switchBasemap('voyager', document.getElementById('bm-voyager'));
    }

    showToast(isDarkMode ? 'Mode Malam Aktif' : 'Mode Terang Aktif',
        isDarkMode ? 'Tampilan gelap lebih nyaman di malam hari' : 'Tampilan terang optimal untuk siang hari',
        'info', 3000);
};

/* =====================================================
   INITIALIZE 2D MAP (LEAFLET)
   ===================================================== */
leafletMap = L.map('map-leaflet', { zoomControl: true, attributionControl: false }).setView([-7.7712, 110.3995], 14);
basemapLayerRef = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 20 });
basemapLayerRef.addTo(leafletMap);

leafletCluster = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    maxClusterRadius: 60
});
leafletMap.addLayer(leafletCluster);

analyticsLayersGroup = L.layerGroup().addTo(leafletMap);

/* =====================================================
   BASEMAP SWITCHER
   ===================================================== */
const basemaps = {
    voyager:   'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    dark:      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    terrain:   'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
};

window.switchBasemap = function(type, btnEl) {
    currentBasemap = type;
    if (basemapLayerRef) leafletMap.removeLayer(basemapLayerRef);
    basemapLayerRef = L.tileLayer(basemaps[type] || basemaps.voyager, { maxZoom: 20 });
    basemapLayerRef.addTo(leafletMap);
    basemapLayerRef.bringToBack();

    document.querySelectorAll('.basemap-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
};

/* =====================================================
   INITIALIZE 3D ENGINE (CESIUM)
   ===================================================== */
cesiumViewer = new Cesium.Viewer('map-cesium', {
    baseLayerPicker: false, animation: false, timeline: false,
    sceneModePicker: false, navigationHelpButton: false,
    geocoder: false, fullscreenButton: false,
    infoBox: true, requestRenderMode: false
});

cesiumViewer.imageryLayers.removeAll();
cesiumViewer.imageryLayers.addImageryProvider(
    new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    })
);

cesiumViewer.scene.globe.enableLighting = false;
cesiumViewer.scene.globe.depthTestAgainstTerrain = false;
cesiumViewer.cesiumWidget.creditContainer.style.display = 'none';

try {
    Cesium.createOsmBuildingsAsync().then(tileset => {
        cesiumViewer.scene.primitives.add(tileset);
        tileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('rgb(255,255,255)', 0.92)"
        });
    });
} catch(e) { console.warn('OSM Buildings:', e); }

cesiumViewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(110.3995, -7.79, 3000.0),
    orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-40.0), roll: 0.0 }
});

/* =====================================================
   FETCH LIVE WEATHER (Open-Meteo API — Free, No Key)
   Koordinat: Sleman/Depok area
   ===================================================== */
function fetchWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-7.77&longitude=110.39&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,uv_index,weather_code&timezone=Asia%2FJakarta';
    fetch(url)
        .then(r => r.json())
        .then(data => {
            const c = data.current;
            weatherData = {
                temp: Math.round(c.temperature_2m),
                humid: c.relative_humidity_2m,
                wind: Math.round(c.wind_speed_10m),
                rain: c.precipitation,
                uv: c.uv_index !== undefined ? c.uv_index.toFixed(1) : '–',
                code: c.weather_code
            };
            const { icon, desc } = weatherCodeToIcon(c.weather_code, weatherData.temp);
            updateWeatherUI(icon, desc);
        })
        .catch(() => {
            // Fallback data jika API gagal
            weatherData = { temp: 28, humid: 75, wind: 12, rain: 0, uv: 5.2, code: 1 };
            updateWeatherUI('🌤️', '28°C — Cerah Berawan');
        });
}

function weatherCodeToIcon(code, temp) {
    if (code === 0) return { icon: '☀️', desc: `${temp}°C — Cerah` };
    if (code <= 2)  return { icon: '🌤️', desc: `${temp}°C — Cerah Berawan` };
    if (code <= 3)  return { icon: '☁️', desc: `${temp}°C — Berawan` };
    if (code <= 49) return { icon: '🌫️', desc: `${temp}°C — Berkabut` };
    if (code <= 67) return { icon: '🌧️', desc: `${temp}°C — Hujan` };
    if (code <= 79) return { icon: '🌨️', desc: `${temp}°C — Salju Ringan` };
    if (code <= 82) return { icon: '🌦️', desc: `${temp}°C — Hujan Ringan` };
    if (code >= 95) return { icon: '⛈️', desc: `${temp}°C — Badai` };
    return { icon: '🌡️', desc: `${temp}°C` };
}

function updateWeatherUI(icon, desc) {
    const wIcon = document.getElementById('weather-icon');
    const wText = document.getElementById('weather-text');
    if (wIcon) wIcon.textContent = icon;
    if (wText) wText.textContent = desc;

    // Env Monitor
    const eTemp  = document.getElementById('env-temp');
    const eHumid = document.getElementById('env-humid');
    const eUV    = document.getElementById('env-uv');
    const eWind  = document.getElementById('env-wind');
    const eRain  = document.getElementById('env-rain');
    if (eTemp)  eTemp.textContent  = (weatherData.temp  || '–') + '°C';
    if (eHumid) eHumid.textContent = (weatherData.humid || '–') + '%';
    if (eUV)    eUV.textContent    = weatherData.uv || '–';
    if (eWind)  eWind.textContent  = (weatherData.wind  || '–') + ' km/h';
    if (eRain)  eRain.textContent  = weatherData.rain > 0 ? `${weatherData.rain} mm — Ada Hujan` : 'Tidak Ada Hujan';

    // Weather modal
    const wib = document.getElementById('weather-icon-big');
    const wtb = document.getElementById('weather-temp-big');
    const wdb = document.getElementById('weather-desc-big');
    const wdh = document.getElementById('wd-humid');
    const wdw = document.getElementById('wd-wind');
    const wdu = document.getElementById('wd-uv');
    if (wib) wib.textContent = icon;
    if (wtb) wtb.textContent = (weatherData.temp || '–') + '°C';
    if (wdb) wdb.textContent = desc;
    if (wdh) wdh.textContent = (weatherData.humid || '–') + '%';
    if (wdw) wdw.textContent = (weatherData.wind || '–');
    if (wdu) wdu.textContent = weatherData.uv || '–';

    // Weather stress tip
    const tip = document.getElementById('weather-stress-tip');
    if (tip) {
        if (weatherData.temp > 33) tip.textContent = '🌡️ Suhu tinggi. Hindari outdoor siang hari — pilih RTH yang teduh atau beristirahat di dalam ruangan.';
        else if (weatherData.rain > 0) tip.textContent = '🌧️ Cuaca hujan. Cocok untuk relaksasi di dalam ruangan, membaca buku, atau meditasi.';
        else if (weatherData.uv > 7) tip.textContent = '☀️ UV tinggi. Gunakan sunscreen jika beraktivitas outdoor lebih dari 30 menit.';
        else tip.textContent = '🌿 Kondisi cuaca mendukung aktivitas relaksasi outdoor. Waktu yang sempurna untuk mengunjungi RTH!';
    }
}

window.showWeatherDetail = function() {
    openModal('weather-modal');
};

fetchWeather();
setInterval(fetchWeather, 10 * 60 * 1000); // Refresh tiap 10 menit

/* =====================================================
   ANALYTICS BANNER INJECTION (Smart City Dashboard)
   ===================================================== */
function injectAnalyticsDashboard() {
    const banner = document.getElementById('analytics-banner');
    if (!banner) return;

    banner.innerHTML = `
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl pointer-events-none opacity-40"></div>
        ${smartCityParams.map(p => `
        <div class="param-card hover:border-[${p.color}]/30 cursor-pointer group" onclick="showParamDetail('${p.id}')" title="${p.desc}">
            <div class="flex items-center justify-between">
                <span class="param-label">${p.label}</span>
                <span class="text-base group-hover:scale-110 transition-transform">${p.icon}</span>
            </div>
            <span class="param-value stat-value" style="color:${p.color}" id="${p.id}">${p.value}${p.unit}</span>
            <div class="flex items-center justify-between">
                <span class="param-sub">${p.sub}</span>
                <div class="flex items-end gap-0.5 h-4" style="color:${p.color}">
                    ${Array.from({length:5}, (_,i) => `<span class="mini-bar" style="height:${(i+1)*18}%; animation-delay:${i*0.1}s;"></span>`).join('')}
                </div>
            </div>
        </div>
        `).join('')}
    `;
}

window.showParamDetail = function(id) {
    const p = smartCityParams.find(x => x.id === id);
    if (!p) return;
    showToast(p.icon + ' ' + p.label, p.desc + ` — Nilai saat ini: ${p.value}${p.unit}`, 'info', 5000);
};

/* =====================================================
   ANIMATED SMART CITY COUNTERS
   ===================================================== */
function animateCounters() {
    smartCityParams.forEach(p => {
        const el = document.getElementById(p.id);
        if (!el) return;
        const target = parseFloat(p.value);
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = (Number.isInteger(p.value) ? Math.round(current) : current.toFixed(1)) + p.unit;
            if (current >= target) clearInterval(timer);
        }, 30);
    });
}

/* =====================================================
   MOOD AGGREGATOR
   ===================================================== */
function updateMoodUI() {
    const total = moodData.buruk + moodData.sedang + moodData.baik;
    const pBuruk  = Math.round(moodData.buruk  / total * 100);
    const pSedang = Math.round(moodData.sedang / total * 100);
    const pBaik   = Math.round(moodData.baik   / total * 100);

    const bBuruk  = document.getElementById('mood-bar-buruk');
    const bSedang = document.getElementById('mood-bar-sedang');
    const bBaik   = document.getElementById('mood-bar-baik');
    const cBuruk  = document.getElementById('mood-count-buruk');
    const cSedang = document.getElementById('mood-count-sedang');
    const cBaik   = document.getElementById('mood-count-baik');
    const mTotal  = document.getElementById('mood-total');
    const insight = document.getElementById('mood-insight');

    if (bBuruk)  bBuruk.style.width  = pBuruk + '%';
    if (bSedang) bSedang.style.width = pSedang + '%';
    if (bBaik)   bBaik.style.width   = pBaik + '%';
    if (cBuruk)  cBuruk.textContent  = pBuruk + '%';
    if (cSedang) cSedang.textContent = pSedang + '%';
    if (cBaik)   cBaik.textContent   = pBaik + '%';
    if (mTotal)  mTotal.textContent  = moodData.total;

    // Dynamic insight
    if (insight) {
        if (pBuruk > 50) {
            insight.textContent = '🚨 Mayoritas warga melaporkan stres tinggi. Rekomendasi: Tambah program relaksasi di kawasan padat.';
            insight.className = 'text-[10px] text-red-600 font-bold leading-relaxed';
        } else if (pBaik > 50) {
            insight.textContent = '🎉 Mayoritas warga merasa rileks! Program RTH & aktivitas warga berjalan efektif.';
            insight.className = 'text-[10px] text-emerald-600 font-bold leading-relaxed';
        } else {
            insight.textContent = '💡 Mood warga beragam. Aktifkan layer "Peta Sentimen" untuk melihat distribusi spasial mood.';
            insight.className = 'text-[10px] text-indigo-600 font-bold leading-relaxed';
        }
    }

    // Update happiness score in banner
    const happyEl = document.getElementById('sc-happy');
    if (happyEl) {
        const score = Math.round(pBaik + pSedang * 0.5);
        happyEl.textContent = score + '/100';
    }
}

/* =====================================================
   FITUR: SIDEBAR INFO BOARD
   ===================================================== */
window.updateSidebarInfo = function(loc) {
    const board = document.getElementById('info-board-content');
    if (!board) return;
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeMap = {
        leisure: { label: 'ZONA ANTI-STRES', color: 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' },
        night:   { label: 'HIBURAN MALAM',   color: 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;' },
        worship: { label: 'TEMPAT IBADAH',   color: 'color:#6d28d9; background:#ede9fe; border:1px solid #c4b5fd;' }
    };
    const t = typeMap[loc.type] || typeMap.leisure;
    const stars = '⭐'.repeat(Math.round(loc.rating));

    board.className = "flex-1 flex flex-col w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-3 transition-all fade-in-up";
    board.innerHTML = `
        <div class="w-full text-left flex flex-col h-full">
            <div class="w-full h-32 rounded-xl overflow-hidden mb-3 relative shadow-sm border border-slate-200">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div class="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-black text-slate-800 shadow-sm">${loc.rating} ⭐</div>
            </div>
            <div class="mb-2">
                <span style="${t.color}" class="text-[9px] font-black px-2.5 py-1 rounded-xl uppercase tracking-wider">${t.label}</span>
            </div>
            <h3 class="text-sm font-black text-slate-800 leading-tight mb-1">${loc.name}</h3>
            <p class="text-[10px] text-slate-500 font-medium mb-2 leading-relaxed">${loc.desc || ''}</p>
            <p class="text-[10px] text-slate-600 font-semibold flex items-center gap-1 mb-1"><span class="text-sky-500">🕒</span> ${loc.jam}</p>
            <div class="mt-auto pt-2 border-t border-slate-100">
                <p class="text-[10px] text-slate-400 font-medium flex items-start gap-1"><span class="text-rose-400">📍</span> ${loc.alamat}</p>
            </div>
            <div class="flex gap-2 mt-3">
                <button onclick="calculateRoute(${loc.coord[0]}, ${loc.coord[1]}, '${loc.name.replace(/'/g, "\\'")}')" 
                    class="flex-1 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white text-[10px] font-black rounded-xl shadow-md transition-transform active:scale-95 flex justify-center items-center gap-1 cursor-pointer">
                    🚗 Rute Kesini
                </button>
                <button onclick="shareLocation('${loc.name}', ${loc.coord[0]}, ${loc.coord[1]})"
                    class="px-3 py-2 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-xl transition cursor-pointer" title="Bagikan lokasi">
                    📤
                </button>
                <button onclick="addToFavorite('${loc.name}')"
                    class="px-3 py-2 bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-500 text-[10px] font-bold rounded-xl transition cursor-pointer" title="Tambah favorit">
                    ❤️
                </button>
            </div>
        </div>
    `;
};

window.shareLocation = function(name, lat, lng) {
    const url = `https://maps.google.com/?q=${lat},${lng}`;
    if (navigator.share) {
        navigator.share({ title: name, text: `Yuk ke ${name}! Spot relaksasi anti-stres di kota.`, url });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link Disalin!', `Link Google Maps ${name} berhasil disalin ke clipboard.`, 'success', 3000);
        });
    }
};

window.addToFavorite = function(name) {
    showToast('Favorit Ditambah!', `${name} berhasil ditambahkan ke daftar favorit Anda.`, 'success', 3000);
    addNotification('❤️', 'Favorit Baru', `${name} ditambahkan ke favorit.`, 'success');
};

// Event listener Cesium
cesiumViewer.selectedEntityChanged.addEventListener(function(selectedEntity) {
    if (selectedEntity && selectedEntity.customData) {
        updateSidebarInfo(selectedEntity.customData);
    }
});

/* =====================================================
   SMART ROUTING (OSRM)
   ===================================================== */
window.calculateRoute = function(destLat, destLng, destName) {
    const statusEl = document.getElementById('system-status');
    const mode = document.querySelector('input[name="route-mode"]:checked')?.value || 'driving';

    statusEl.textContent = "🛰️ Melacak lokasi GPS...";
    showToast('Menghitung Rute', `Menghitung rute ${mode === 'foot' ? 'jalan kaki' : 'kendaraan'} ke ${destName}...`, 'info', 3000);

    if (!navigator.geolocation) {
        showToast('Error', 'Browser tidak mendukung geolokasi.', 'error');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const { latitude: uLat, longitude: uLng } = pos.coords;
            statusEl.textContent = "🛣️ Menghitung rute OSRM...";

            const url = `https://router.project-osrm.org/route/v1/${mode}/${uLng},${uLat};${destLng},${destLat}?overview=full&geometries=geojson`;
            fetch(url)
                .then(r => r.json())
                .then(data => {
                    if (data.routes?.length > 0) {
                        drawNetworkRoute(data.routes[0], uLat, uLng, destName, mode);
                    } else {
                        statusEl.textContent = "❌ Rute tidak ditemukan.";
                        showToast('Rute Tidak Ditemukan', 'Coba ubah mode transportasi atau periksa koneksi.', 'error');
                    }
                })
                .catch(() => {
                    statusEl.textContent = "❌ Gagal memuat rute.";
                    showToast('Gagal', 'Server rute tidak merespons. Coba lagi.', 'error');
                });
        },
        () => {
            showToast('Izin Lokasi Ditolak', 'Aktifkan izin lokasi di browser untuk menggunakan fitur ini.', 'warning');
            statusEl.textContent = "❌ Izin lokasi ditolak.";
        }
    );
};

function drawNetworkRoute(routeData, uLat, uLng, destName, mode) {
    if (routingLayer2D) leafletMap.removeLayer(routingLayer2D);
    if (userLocationMarker) leafletMap.removeLayer(userLocationMarker);
    if (routingLayer3D) cesiumViewer.dataSources.remove(routingLayer3D);

    const geoJson = routeData.geometry;
    const distKm  = (routeData.distance / 1000).toFixed(2);
    const durMin  = Math.round(routeData.duration / 60);
    const routeColor = mode === 'foot' ? '#10b981' : '#3b82f6';
    const routeDash  = mode === 'foot' ? '10, 10' : '';

    routingLayer2D = L.geoJSON(geoJson, {
        style: { color: routeColor, weight: 5, opacity: 0.9, dashArray: routeDash, lineJoin: 'round' }
    }).addTo(leafletMap);

    userLocationMarker = L.circleMarker([uLat, uLng], {
        radius: 10, fillColor: routeColor, color: '#fff', weight: 3, fillOpacity: 1
    }).addTo(leafletMap).bindPopup('<b>📍 Posisi Anda</b>').openPopup();

    leafletMap.fitBounds(routingLayer2D.getBounds(), { padding: [50, 50] });

    Cesium.GeoJsonDataSource.load(geoJson, {
        stroke: mode === 'foot' ? Cesium.Color.SPRINGGREEN : Cesium.Color.DODGERBLUE,
        strokeWidth: 8, clampToGround: true
    }).then(ds => {
        routingLayer3D = ds;
        cesiumViewer.dataSources.add(ds);
    });

    const modeText = mode === 'foot' ? 'Jalan Kaki' : 'Kendaraan';

    // Estimasi kalori
    if (mode === 'foot') {
        const kkal = Math.round(routeData.distance / 1000 * 60); // ~60 kkal/km jalan
        const calEl = document.getElementById('calorie-value');
        const calInfo = document.getElementById('calorie-info');
        if (calEl) calEl.textContent = `🔥 ~${kkal} kkal`;
        if (calInfo) calInfo.classList.remove('hidden');
    } else {
        document.getElementById('calorie-info')?.classList.add('hidden');
    }

    document.getElementById('system-status').textContent = `✅ Rute ${modeText} ke ${destName}: ${distKm} km · ${durMin} mnt`;
    showToast('Rute Ditemukan! 🗺️', `${modeText} ke ${destName}: ${distKm} km · ${durMin} menit`, 'success', 5000);
    addNotification('🗺️', 'Rute Aktif', `Rute ke ${destName} sejauh ${distKm} km berhasil dihitung.`, 'success');
}

/* =====================================================
   CARI RELAKSASI TERDEKAT
   ===================================================== */
window.findNearestRelaxation = function() {
    document.getElementById('system-status').textContent = "🔍 Mencari Ruang Hijau Terdekat...";
    showToast('Mencari Lokasi', 'Sistem memindai RTH terdekat dari posisi Anda...', 'info', 3000);

    if (!navigator.geolocation) { showToast('Error', 'Browser tidak mendukung geolokasi.', 'error'); return; }

    navigator.geolocation.getCurrentPosition((pos) => {
        const uLat = pos.coords.latitude;
        const uLng = pos.coords.longitude;
        let nearestLoc = null, minDist = Infinity;

        locations.filter(l => l.type === 'leisure').forEach(loc => {
            const d = haversineDistance(uLat, uLng, loc.coord[0], loc.coord[1]);
            if (d < minDist) { minDist = d; nearestLoc = loc; }
        });

        if (nearestLoc) {
            const distKm = (minDist / 1000).toFixed(2);
            updateSidebarInfo(nearestLoc);

            const mode = minDist < 1500 ? 'foot' : 'driving';
            document.querySelector(`input[name="route-mode"][value="${mode}"]`).checked = true;

            // Green coverage analysis
            analyzeGreenCoverage(uLat, uLng);

            calculateRoute(nearestLoc.coord[0], nearestLoc.coord[1], nearestLoc.name);
            showToast('🌿 RTH Terdekat Ditemukan!', `${nearestLoc.name} berjarak ${distKm} km dari Anda.`, 'success', 5000);
            addNotification('🌿', 'RTH Terdekat', `${nearestLoc.name} — ${distKm} km dari posisi Anda`, 'success');
        }
    }, () => {
        showToast('Lokasi Tidak Tersedia', 'Aktifkan GPS/lokasi di browser Anda.', 'warning');
    });
};

/* =====================================================
   GREEN COVERAGE ANALYZER
   ===================================================== */
function analyzeGreenCoverage(uLat, uLng) {
    const radius = 1000; // 1km
    const rthNearby = locations.filter(l => l.type === 'leisure' && haversineDistance(uLat, uLng, l.coord[0], l.coord[1]) <= radius);
    const ratio = Math.min(100, Math.round((rthNearby.length / locations.filter(l => l.type === 'leisure').length) * 100 * 2));

    const prog = document.getElementById('green-progress');
    const perc = document.getElementById('green-percent');
    const label = document.getElementById('green-label');

    if (prog) prog.style.width = ratio + '%';
    if (perc) perc.textContent = ratio + '%';
    if (label) {
        label.textContent = rthNearby.length > 0
            ? `${rthNearby.length} RTH dalam radius 1km dari posisi Anda`
            : 'Tidak ada RTH dalam radius 1km';
    }

    // Update banner green ratio
    const greenEl = document.getElementById('sc-green');
    if (greenEl) greenEl.textContent = ratio + '%';
}

/* =====================================================
   ANALYTICS LAYERS (HEATMAP, BUFFER, NOISE, MOOD)
   ===================================================== */
window.toggleAnalyticsLayers = function() {
    analyticsLayersGroup.clearLayers();
    const showHeat  = document.getElementById('layer-heatmap')?.checked;
    const showBuf   = document.getElementById('layer-buffer')?.checked;
    const showNoise = document.getElementById('layer-noise')?.checked;
    const showMood  = document.getElementById('layer-mood')?.checked;

    // A. Heatmap Stres & Kebisingan
    if (showHeat && typeof L.heatLayer !== 'undefined') {
        let pts = [];
        // Stress hotspots: kawasan jalan raya, persimpangan, area komersil
        const stressZones = [
            [-7.7700, 110.4100, 0.9], [-7.7720, 110.4080, 0.85], [-7.7750, 110.4120, 0.8],
            [-7.7800, 110.4140, 0.88], [-7.7790, 110.4050, 0.75], [-7.7680, 110.4000, 0.7],
            [-7.7650, 110.3980, 0.65], [-7.7710, 110.4090, 0.92], [-7.7760, 110.4130, 0.78]
        ];
        stressZones.forEach(([lat, lng, intensity]) => {
            for (let i = 0; i < 20; i++) {
                pts.push([lat + (Math.random()-0.5)*0.012, lng + (Math.random()-0.5)*0.012, intensity * Math.random()]);
            }
        });
        L.heatLayer(pts, {
            radius: 40, blur: 30,
            gradient: { 0.2: '#22c55e', 0.4: '#84cc16', 0.6: '#facc15', 0.8: '#f97316', 1.0: '#ef4444' }
        }).addTo(analyticsLayersGroup);
        document.getElementById('system-status').textContent = "🔥 Heatmap Prediksi Stres Kota Aktif";
        showToast('Layer Aktif', 'Heatmap tingkat stres & kebisingan kota ditampilkan.', 'info', 3000);
    }

    // B. Buffer RTH
    if (showBuf) {
        locations.filter(l => l.type === 'leisure').forEach(loc => {
            L.circle(loc.coord, { radius: 1000, color: '#0ea5e9', weight: 1, fillOpacity: 0.04, dashArray: '5,5' }).addTo(analyticsLayersGroup);
            L.circle(loc.coord, { radius: 500,  color: '#10b981', weight: 1.5, fillOpacity: 0.07 }).addTo(analyticsLayersGroup);
            L.circle(loc.coord, { radius: 300,  color: '#059669', weight: 2, fillOpacity: 0.15 }).addTo(analyticsLayersGroup);
        });
        document.getElementById('system-status').textContent = "🎯 Analisis Radius RTH (300m, 500m, 1km) Aktif";
        showToast('Layer Aktif', 'Buffer zona akses RTH (300m/500m/1km) ditampilkan.', 'info', 3000);
    }

    // C. Noise Pollution Map (simulasi)
    if (showNoise && typeof L.heatLayer !== 'undefined') {
        let noisePts = [];
        // Area kebisingan: sekitar jalan raya Seturan, Babarsari, Adisucipto
        const noiseZones = [
            [-7.7720, 110.4085, 0.95], [-7.7800, 110.4140, 0.9],
            [-7.7830, 110.3970, 0.85], [-7.7790, 110.4080, 0.8],
            [-7.7670, 110.4010, 0.75]
        ];
        noiseZones.forEach(([lat, lng, intensity]) => {
            for (let i = 0; i < 18; i++) {
                noisePts.push([lat + (Math.random()-0.5)*0.008, lng + (Math.random()-0.5)*0.008, intensity * Math.random()]);
            }
        });
        L.heatLayer(noisePts, {
            radius: 35, blur: 25,
            gradient: { 0.2: '#bfdbfe', 0.5: '#7c3aed', 0.8: '#6d28d9', 1.0: '#4c1d95' }
        }).addTo(analyticsLayersGroup);
        document.getElementById('system-status').textContent = "🔊 Peta Polusi Suara Zona Kota Aktif";
        showToast('Layer Aktif', 'Peta intensitas kebisingan per zona ditampilkan.', 'info', 3000);
    }

    // D. Mood Heatmap (agregasi sentimen warga)
    if (showMood && typeof L.heatLayer !== 'undefined') {
        let moodPts = [];
        // Simulasi: warga dekat RTH lebih happy; dekat hiburan malam & jalan besar lebih stres
        locations.forEach(loc => {
            const isStress = loc.type === 'night';
            const intensity = isStress ? 0.8 + Math.random() * 0.2 : 0.1 + Math.random() * 0.3;
            for (let i = 0; i < 12; i++) {
                moodPts.push([loc.coord[0] + (Math.random()-0.5)*0.005, loc.coord[1] + (Math.random()-0.5)*0.005, intensity]);
            }
        });
        L.heatLayer(moodPts, {
            radius: 30, blur: 20,
            gradient: { 0.0: '#22c55e', 0.4: '#86efac', 0.6: '#fbbf24', 0.8: '#f97316', 1.0: '#ef4444' }
        }).addTo(analyticsLayersGroup);
        document.getElementById('system-status').textContent = "😊 Peta Sentimen Warga Aktif — Data Mood Teragregasi";
        showToast('Layer Aktif', 'Peta distribusi spasial mood warga ditampilkan. Hijau = rileks, Merah = stres.', 'info', 4000);
        addNotification('😊', 'Peta Sentimen', `${moodData.total} data mood warga divisualisasikan di peta.`, 'info');
    }
};

/* =====================================================
   HAVERSINE DISTANCE
   ===================================================== */
window.haversineDistance = function(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
};

/* =====================================================
   DISTANCE MEASURE TOOL
   ===================================================== */
window.toggleDistanceMode = function() {
    distanceModeActive = !distanceModeActive;
    const btn   = document.getElementById('btn-distance-mode');
    const panel = document.getElementById('distance-result-panel');

    if (distanceModeActive) {
        btn.innerHTML = '❌ Batalkan Mode Ukur';
        btn.className = 'w-full text-[11px] bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-4 rounded-xl cursor-pointer transition shadow-md';
        document.getElementById('system-status').textContent = 'Mode Ukur: Klik titik pertama di peta...';
        resetDistancePins();
        showToast('Mode Ukur Aktif', 'Klik 2 titik di peta 2D untuk mengukur jarak.', 'info', 4000);
    } else {
        btn.innerHTML = '📏 Mode Ukur Jarak Manual';
        btn.className = 'w-full text-[11px] bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-2.5 px-4 rounded-xl cursor-pointer transition shadow-md flex justify-center items-center gap-2 active:scale-95';
        if (panel) panel.classList.add('hidden');
        resetDistancePins();
        document.getElementById('system-status').textContent = 'Spatial Engine: Standby';
    }
};

window.resetDistancePins = function() {
    distancePointA = null; distancePointB = null;
    if (distanceMarkerA) leafletMap.removeLayer(distanceMarkerA);
    if (distanceMarkerB) leafletMap.removeLayer(distanceMarkerB);
    if (distanceLine)    leafletMap.removeLayer(distanceLine);
    distanceMarkerA = distanceMarkerB = distanceLine = null;
};

leafletMap.on('click', function(e) {
    if (!distanceModeActive) return;
    const { lat, lng } = e.latlng;
    if (!distancePointA) {
        distancePointA = [lat, lng];
        distanceMarkerA = L.circleMarker([lat, lng], { radius: 8, fillColor: '#818cf8', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        document.getElementById('system-status').textContent = 'Mode Ukur: Klik titik kedua di peta...';
    } else if (!distancePointB) {
        distancePointB = [lat, lng];
        distanceMarkerB = L.circleMarker([lat, lng], { radius: 8, fillColor: '#fb7185', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        distanceLine = L.polyline([distancePointA, distancePointB], { color: '#818cf8', weight: 4, dashArray: '8, 8' }).addTo(leafletMap);

        const jarak = haversineDistance(...distancePointA, ...distancePointB);
        const jarakText = jarak >= 1000 ? (jarak/1000).toFixed(2) + ' km' : Math.round(jarak) + ' m';

        document.getElementById('distance-value').textContent = jarakText;
        document.getElementById('distance-result-panel').classList.remove('hidden');
        document.getElementById('system-status').textContent = `📏 Jarak: ${jarakText}`;
        distanceModeActive = false;
        document.getElementById('btn-distance-mode').innerHTML = '📏 Mode Ukur Jarak Manual';
        document.getElementById('btn-distance-mode').className = 'w-full text-[11px] bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-2.5 px-4 rounded-xl cursor-pointer transition shadow-md flex justify-center items-center gap-2 active:scale-95';
        showToast('Pengukuran Selesai 📏', `Jarak antara 2 titik: ${jarakText}`, 'success', 4000);
    }
});

/* =====================================================
   MAP SEARCH
   ===================================================== */
window.handleMapSearch = function(e) {
    const query = document.getElementById('map-search-input')?.value.toLowerCase().trim();
    const resultsEl = document.getElementById('search-results');
    if (!query || !resultsEl) { resultsEl?.classList.add('hidden'); return; }

    const matches = locations.filter(l => l.name.toLowerCase().includes(query) || l.alamat.toLowerCase().includes(query));

    if (matches.length === 0) {
        resultsEl.innerHTML = '<p class="text-xs text-slate-400 p-3 text-center">Tidak ditemukan</p>';
        resultsEl.classList.remove('hidden');
        return;
    }

    resultsEl.innerHTML = matches.map(l => `
        <div onclick="focusOnLocation(${l.coord[0]}, ${l.coord[1]}, '${l.name.replace(/'/g, "\\'")}')" 
            class="flex items-center gap-2 p-2.5 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0">
            <span class="text-lg">${l.type === 'leisure' ? '🌿' : l.type === 'night' ? '🎤' : '🕌'}</span>
            <div>
                <span class="text-xs font-bold text-slate-800 block">${l.name}</span>
                <span class="text-[9px] text-slate-400 font-medium">${l.alamat}</span>
            </div>
        </div>
    `).join('');
    resultsEl.classList.remove('hidden');

    if (e.key === 'Escape') clearMapSearch();
};

window.focusOnLocation = function(lat, lng, name) {
    leafletMap.flyTo([lat, lng], 17, { duration: 1 });
    document.getElementById('search-results')?.classList.add('hidden');
    document.getElementById('map-search-input').value = name;

    const loc = locations.find(l => l.name === name);
    if (loc) updateSidebarInfo(loc);
};

window.clearMapSearch = function() {
    const inp = document.getElementById('map-search-input');
    if (inp) inp.value = '';
    document.getElementById('search-results')?.classList.add('hidden');
};

// Close search on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('#map-search-container') && !e.target.closest('#search-results')) {
        document.getElementById('search-results')?.classList.add('hidden');
    }
});

/* =====================================================
   POPUP HTML GENERATOR
   ===================================================== */
function generatePremiumPopupHTML(loc) {
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeMap = {
        leisure: { label: 'ZONA ANTI-STRES', color: 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' },
        night:   { label: 'HIBURAN MALAM',   color: 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;' },
        worship: { label: 'TEMPAT IBADAH',   color: 'color:#6d28d9; background:#ede9fe; border:1px solid #c4b5fd;' }
    };
    const t = typeMap[loc.type] || typeMap.leisure;

    // Mini star bar
    const starBar = Array.from({length:5}, (_,i) =>
        `<span style="color:${i < Math.round(loc.rating) ? '#fbbf24' : '#e2e8f0'}; font-size:12px;">★</span>`
    ).join('');

    return `
        <div style="width:280px; font-family:'Inter',sans-serif; background:#fff; border-radius:20px; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.12); border:1px solid #f1f5f9;">
            <div style="position:relative; width:100%; height:140px; overflow:hidden;">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" style="width:100%; height:100%; object-fit:cover;">
                <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.3), transparent);"></div>
                <div style="position:absolute; top:10px; right:10px; background:rgba(255,255,255,0.95); backdrop-filter:blur(4px); padding:3px 10px; border-radius:10px; font-size:11px; font-weight:900; color:#1e293b;">${loc.rating} ⭐</div>
            </div>
            <div style="padding:14px;">
                <div style="margin-bottom:8px;">
                    <span style="font-size:9px; font-weight:900; padding:3px 10px; border-radius:10px; text-transform:uppercase; letter-spacing:0.06em; ${t.color}">${t.label}</span>
                </div>
                <h4 style="font-size:14px; font-weight:900; color:#1e293b; margin:0 0 4px 0; line-height:1.2;">${loc.name}</h4>
                <div style="margin-bottom:6px;">${starBar}<span style="font-size:11px; color:#94a3b8; margin-left:4px; font-weight:600;">${loc.rating}</span></div>
                <p style="font-size:11px; color:#64748b; margin:0 0 6px 0; font-weight:600;">🕒 ${loc.jam}</p>
                <p style="font-size:10px; color:#94a3b8; line-height:1.4; border-top:1px dashed #e2e8f0; padding-top:8px; font-weight:500;">📍 ${loc.alamat}</p>
                <button onclick="calculateRoute(${loc.coord[0]}, ${loc.coord[1]}, '${loc.name.replace(/'/g, "\\'")}')" 
                    style="width:100%; margin-top:12px; padding:9px; background:linear-gradient(90deg, #38bdf8, #6366f1); color:#fff; border:none; border-radius:12px; font-size:12px; font-weight:800; cursor:pointer; box-shadow:0 4px 12px rgba(99,102,241,0.25); transition:transform 0.2s;"
                    onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                    🚗 Rute Navigasi Kesini
                </button>
            </div>
        </div>
    `;
}

/* =====================================================
   RENDER LEAFLET MARKERS (CLUSTER)
   ===================================================== */
function renderLeafletFeatures() {
    leafletCluster.clearLayers();
    leafletGeometries.forEach(g => leafletMap.removeLayer(g));
    leafletGeometries = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight   = document.getElementById('check-night')?.checked;
    const showWorship = document.getElementById('check-worship')?.checked;

    locations.forEach(loc => {
        const vis = (loc.type === 'leisure' && showLeisure) ||
                    (loc.type === 'night'   && showNight)   ||
                    (loc.type === 'worship' && showWorship);
        if (!vis) return;

        const colorMap = { leisure: '#10b981', night: '#f43f5e', worship: '#8b5cf6' };
        const markerColor = colorMap[loc.type] || '#10b981';
        const emojiMap = { leisure: '🌿', night: '🎤', worship: '🕌' };
        const emoji = emojiMap[loc.type] || '📍';

        const pulseIcon = L.divIcon({
            className: 'smart-pulse-marker',
            html: `<div style="width:18px; height:18px; background:${markerColor}; border-radius:50%; --marker-color:${markerColor}99; display:flex; align-items:center; justify-content:center; font-size:10px;">${emoji}</div>`,
            iconSize: [18, 18], iconAnchor: [9, 9]
        });

        const marker = L.marker(loc.coord, { icon: pulseIcon });
        marker.on('click', () => {
            updateSidebarInfo(loc);
            // Scroll sidebar ke info board
            document.getElementById('info-board-content')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        marker.bindPopup(generatePremiumPopupHTML(loc), { maxWidth: 300, minWidth: 280, offset: [0, -5] });
        leafletCluster.addLayer(marker);
    });
}

/* =====================================================
   RENDER CESIUM FEATURES
   ===================================================== */
function renderCesiumFeatures() {
    cesiumEntities.forEach(e => cesiumViewer.entities.remove(e));
    cesiumEntities = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight   = document.getElementById('check-night')?.checked;
    const showWorship = document.getElementById('check-worship')?.checked;

    locations.forEach(loc => {
        const vis = (loc.type === 'leisure' && showLeisure) ||
                    (loc.type === 'night'   && showNight)   ||
                    (loc.type === 'worship' && showWorship);
        if (!vis) return;

        const colorMap = {
            leisure: Cesium.Color.SPRINGGREEN,
            night:   Cesium.Color.CRIMSON,
            worship: Cesium.Color.MEDIUMPURPLE
        };

        const entity = cesiumViewer.entities.add({
            name: '📍 ' + loc.name,
            position: Cesium.Cartesian3.fromDegrees(loc.coord[1], loc.coord[0], 50),
            point: {
                pixelSize: 16, color: colorMap[loc.type] || Cesium.Color.SPRINGGREEN,
                outlineColor: Cesium.Color.WHITE, outlineWidth: 3,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY
            },
            description: generatePremiumPopupHTML(loc),
            customData: loc,
            label: {
                text: loc.name, font: '800 12px Inter, sans-serif',
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK, outlineWidth: 3,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, -22),
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2500)
            }
        });
        cesiumEntities.push(entity);
    });
}

/* =====================================================
   CORE: ENGINE SWITCH (2D / 3D)
   ===================================================== */
window.switchEngine = function(type) {
    currentEngine = type;
    const btn2d   = document.getElementById('btn-2d');
    const btn3d   = document.getElementById('btn-3d');
    const elLeaf  = document.getElementById('map-leaflet');
    const elCes   = document.getElementById('map-cesium');
    const searchC = document.getElementById('map-search-container');
    const bmSw    = document.getElementById('basemap-switcher');

    const activeClass   = "px-4 py-1.5 text-[11px] font-bold rounded-lg bg-white text-indigo-600 shadow-md cursor-pointer transition-all";
    const inactiveClass = "px-4 py-1.5 text-[11px] font-bold rounded-lg text-slate-500 cursor-pointer hover:text-indigo-600 hover:bg-white/50 transition-all";

    if (type === '2d') {
        elLeaf.style.zIndex = '10'; elLeaf.style.display = 'block';
        elCes.style.zIndex  = '0';  elCes.style.display  = 'none';
        btn2d.className = activeClass; btn3d.className = inactiveClass;
        if (searchC) searchC.style.display = 'flex';
        if (bmSw) bmSw.style.display = 'flex';
    } else {
        elCes.style.zIndex  = '10'; elCes.style.display  = 'block';
        elLeaf.style.zIndex = '0';  elLeaf.style.display = 'none';
        btn3d.className = activeClass; btn2d.className = inactiveClass;
        if (searchC) searchC.style.display = 'none';
        if (bmSw) bmSw.style.display = 'none';
        setTimeout(() => { cesiumViewer.resize(); cesiumViewer.scene.requestRender(); }, 200);
    }
};

/* =====================================================
   FLY TO LOCATION (CESIUM)
   ===================================================== */
window.cesiumFlyTo = function(lat, lng) {
    switchEngine('3d');
    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 700),
        orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-45.0), roll: 0.0 },
        duration: 2.0
    });
};

window.flyToEvent = function(lat, lng, name) {
    // Switch ke 3D dan fly
    switchEngine('3d');
    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 600),
        orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-40.0), roll: 0.0 },
        duration: 2.5
    });
    showToast('📍 Terbang ke ' + name, 'Kamera 3D diarahkan ke lokasi event.', 'info', 3000);
    document.getElementById('system-status').textContent = `📍 Zoom ke: ${name}`;

    // Also update 2D
    leafletMap.flyTo([lat, lng], 16, { duration: 1.5 });

    // Show location info
    const loc = locations.find(l => l.name === name || Math.abs(l.coord[0]-lat) < 0.001);
    if (loc) updateSidebarInfo(loc);
};

/* =====================================================
   LAYER TOGGLE
   ===================================================== */
window.toggleLayers = function() {
    renderLeafletFeatures();
    renderCesiumFeatures();
    // Update badge counts
    const leisureCount = locations.filter(l => l.type === 'leisure').length;
    const nightCount   = locations.filter(l => l.type === 'night').length;
    const worshipCount = locations.filter(l => l.type === 'worship').length;
    const bl = document.getElementById('badge-leisure');
    const bn = document.getElementById('badge-night');
    const bw = document.getElementById('badge-worship');
    if (bl) bl.textContent = leisureCount;
    if (bn) bn.textContent = nightCount;
    if (bw) bw.textContent = worshipCount;
};

/* =====================================================
   EXPORT MAP
   ===================================================== */
window.exportMapView = function() {
    showToast('📸 Export Peta', 'Fitur screenshot peta siap digunakan. Gunakan Ctrl+Shift+S untuk screenshot browser.', 'info', 5000);
};

/* =====================================================
   MODAL HELPERS
   ===================================================== */
window.openModal = function(id) {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'flex'; el.classList.remove('hidden'); }
};
window.closeModal = function(id) {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.classList.add('hidden'); }
};

window.showAQIDetail = function() { openModal('aqi-modal'); };
window.showComfortDetail = function() {
    showToast('🏙️ Indeks Kenyamanan', 'Nilai 85 — Sangat Baik. Dihitung dari AQI, noise level, green space ratio, dan mood warga.', 'info', 5000);
};

/* =====================================================
   BREATHING MODAL
   ===================================================== */
const breathExercises = {
    '4-7-8': {
        title: 'Tarik Nafas 🧘 — 4-7-8',
        desc: 'Inhale 4 detik → Hold 7 detik → Exhale 8 detik',
        phases: [
            { text: 'INHALE', duration: 4, strokeColor: '#10b981' },
            { text: 'HOLD',   duration: 7, strokeColor: '#6366f1' },
            { text: 'EXHALE', duration: 8, strokeColor: '#38bdf8' }
        ]
    },
    'box': {
        title: 'Box Breathing 📦',
        desc: 'Inhale 4 → Hold 4 → Exhale 4 → Hold 4 (4 sisi kotak)',
        phases: [
            { text: 'INHALE', duration: 4, strokeColor: '#10b981' },
            { text: 'HOLD',   duration: 4, strokeColor: '#6366f1' },
            { text: 'EXHALE', duration: 4, strokeColor: '#38bdf8' },
            { text: 'HOLD',   duration: 4, strokeColor: '#f59e0b' }
        ]
    },
    'calm': {
        title: 'Calm Mode 💆',
        desc: 'Nafas dalam & pelan, ikuti ritme alamiah',
        phases: [
            { text: 'INHALE', duration: 5, strokeColor: '#10b981' },
            { text: 'EXHALE', duration: 6, strokeColor: '#38bdf8' }
        ]
    }
};

window.switchBreathExercise = function(mode) {
    currentBreathMode = mode;
    const ex = breathExercises[mode];
    document.getElementById('breath-exercise-title').textContent = ex.title;
    document.getElementById('breath-exercise-desc').textContent  = ex.desc;
    clearInterval(breathInterval); clearInterval(breathCountInterval);
    breathCycles = 0;
    document.getElementById('breath-cycles').textContent = '0';
    startBreathingAnimation();
    ['478','box','calm'].forEach(m => {
        const btn = document.getElementById(`breath-btn-${m}`);
        if (!btn) return;
        btn.className = `flex-1 py-2 text-[11px] font-black rounded-xl cursor-pointer transition ${m === mode.replace('-','') ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`;
    });
};

function startBreathingAnimation() {
    clearInterval(breathInterval); clearInterval(breathCountInterval);
    const ex = breathExercises[currentBreathMode];
    const ring = document.getElementById('breath-ring');
    const textEl = document.getElementById('breath-text');
    const countEl = document.getElementById('breath-count');
    const circumference = 2 * Math.PI * 65; // 408.4

    let phaseIdx = 0;

    function runPhase() {
        const phase = ex.phases[phaseIdx];
        let remaining = phase.duration;
        if (textEl) textEl.textContent = phase.text;
        if (ring)   { ring.style.stroke = phase.strokeColor; ring.style.strokeDashoffset = '0'; }

        if (countEl) countEl.textContent = remaining;
        breathCountInterval = setInterval(() => {
            remaining--;
            if (countEl) countEl.textContent = remaining;
            if (remaining <= 0) {
                clearInterval(breathCountInterval);
                phaseIdx = (phaseIdx + 1) % ex.phases.length;
                if (phaseIdx === 0) {
                    breathCycles++;
                    const cycleEl = document.getElementById('breath-cycles');
                    if (cycleEl) cycleEl.textContent = breathCycles;
                    if (breathCycles === 3) showToast('🧘 Luar Biasa!', '3 siklus selesai. Semoga lebih tenang ya!', 'success', 4000);
                }
                runPhase();
            }
        }, 1000);
    }
    runPhase();
}

let sessionTimer;
window.toggleBreathingModal = function() {
    const modal = document.getElementById('breathing-modal');
    const isHidden = modal.style.display === 'none' || modal.style.display === '';

    if (isHidden) {
        modal.style.display = 'flex';
        breathCycles = 0; sessionSeconds = 0;
        document.getElementById('breath-cycles').textContent = '0';
        document.getElementById('breath-session-min').textContent = '0:00';
        startBreathingAnimation();
        sessionTimer = setInterval(() => {
            sessionSeconds++;
            const m = Math.floor(sessionSeconds / 60);
            const s = sessionSeconds % 60;
            const el = document.getElementById('breath-session-min');
            if (el) el.textContent = `${m}:${s.toString().padStart(2,'0')}`;
        }, 1000);

        // Show random mental health tip
        const tips = [
            "💡 Berlatih nafas dalam 5 menit sehari terbukti mengurangi kortisol hingga 30%.",
            "🌿 Menghabiskan 20 menit di ruang hijau menurunkan tekanan darah dan detak jantung.",
            "🎵 Mendengarkan musik lembut selama relaksasi meningkatkan efektivitas meditasi.",
            "💧 Minum air putih cukup (2L/hari) membantu otak bekerja lebih jernih dan rileks.",
            "😴 Tidur 7-8 jam adalah stress reliever alami terbaik yang ada.",
            "🏃 30 menit olahraga ringan memicu endorfin — hormon kebahagiaan alami tubuh.",
            "📱 Detox gadget 1 jam sebelum tidur signifikan meningkatkan kualitas istirahat."
        ];
        const tip = tips[Math.floor(Math.random() * tips.length)];
        const tipBox = document.getElementById('mental-tip-box');
        const tipText = document.getElementById('mental-tip-text');
        if (tipBox && tipText) { tipText.textContent = tip; tipBox.classList.remove('hidden'); }

    } else {
        modal.style.display = 'none';
        clearInterval(breathCountInterval);
        clearInterval(sessionTimer);
    }
};

/* =====================================================
   MOOD SUBMIT
   ===================================================== */
const mentalHealthTips = {
    buruk: [
        "Ambil napas dalam, Anda tidak sendirian 💙. Coba kunjungi RTH terdekat — alam terbukti meredakan stres.",
        "Stres itu normal. Coba teknik 4-7-8 breathing selama 5 menit. Klik 'Mood & Relax' di header.",
        "Jalan kaki 15 menit di taman hijau terbukti menurunkan hormon kortisol secara signifikan."
    ],
    sedang: [
        "Hari yang biasa juga berharga. Coba stretching ringan atau minum teh hangat sambil istirahat.",
        "Mood netral? Kunjungi salah satu taman untuk upgrade mood jadi positif!",
        "Tips: 5 menit journaling tentang hal yang kamu syukuri hari ini bisa meningkatkan mood."
    ],
    baik: [
        "Senang sekali kamu merasa rileks! Bagikan energi positif ini ke orang-orang sekitar kamu.",
        "Mood baik = produktivitas meningkat! Manfaatkan energi ini untuk hal-hal kreatif.",
        "Pertahankan! Rutin kunjungi RTH dan lakukan aktivitas relaksasi setiap minggu."
    ]
};

window.submitMood = function(mood) {
    // Animate selected button
    ['buruk','sedang','baik'].forEach(m => {
        const btn = document.getElementById(`mood-btn-${m}`);
        if (btn) btn.style.filter = m === mood ? 'none' : 'grayscale(1)';
    });

    // Update data
    moodData[mood]++;
    moodData.total++;
    updateMoodUI();

    // Show tip
    const tips = mentalHealthTips[mood];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    const tipEl = document.getElementById('mood-tip');
    if (tipEl) { tipEl.textContent = tip; tipEl.classList.remove('hidden'); }

    const moodEmoji = { buruk: '😠', sedang: '😐', baik: '😃' };
    const moodText  = { buruk: 'Stres/Kurang Baik', sedang: 'Biasa Saja', baik: 'Rileks/Baik' };

    showToast(`Mood Tercatat ${moodEmoji[mood]}`, `Terima kasih! Mood "${moodText[mood]}" dicatat anonim. Yuk lihat tipsnya!`, 'success', 5000);
    addNotification(moodEmoji[mood], 'Mood Terekam', `${moodText[mood]} — data Anda membantu pemetaan sentimen kota.`, 'success');

    // Update Happiness score di banner
    const happyParam = smartCityParams.find(p => p.id === 'sc-happy');
    if (happyParam) {
        const total = moodData.buruk + moodData.sedang + moodData.baik;
        happyParam.value = Math.round((moodData.baik + moodData.sedang * 0.5) / total * 100);
        const el = document.getElementById('sc-happy');
        if (el) el.textContent = happyParam.value + '/100';
    }
};

/* =====================================================
   INTRO SCREEN
   ===================================================== */
window.exitIntroScreen = function() {
    const intro = document.getElementById('intro-screen');
    intro.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    intro.style.opacity = '0';
    intro.style.transform = 'scale(1.02)';
    setTimeout(() => { intro.style.display = 'none'; }, 900);
};

/* =====================================================
   FETCH GEOJSON BOUNDARY
   ===================================================== */
fetch('data/depok.geojson')
    .then(r => r.json())
    .then(geoData => {
        document.getElementById('system-status').textContent = "✅ Spatial Engine: Database Synced";
        boundaryLayer2D = L.geoJSON(geoData, {
            style: { color: "#10b981", weight: 2.5, fillColor: "#10b981", fillOpacity: 0.04, dashArray: "6, 5" }
        }).addTo(leafletMap);

        Cesium.GeoJsonDataSource.load(geoData, {
            stroke: Cesium.Color.SPRINGGREEN, fill: Cesium.Color.SPRINGGREEN.withAlpha(0.04),
            strokeWidth: 4, clampToGround: true
        }).then(ds => cesiumViewer.dataSources.add(ds));

        injectAnalyticsDashboard();
        renderLeafletFeatures();
        renderCesiumFeatures();
        setTimeout(animateCounters, 500);
        updateMoodUI();

        // Initial notifications
        setTimeout(() => {
            addNotification('🌿', 'Sistem Siap', 'Database 28 lokasi RTH & hiburan berhasil dimuat.', 'success');
        }, 1500);
        setTimeout(() => {
            addNotification('📅', 'Event Hari Ini', 'Yoga Pagi Gratis di Wisdom Park UGM — Minggu 06:00 WIB', 'info');
        }, 3000);
        setTimeout(() => {
            addNotification('💨', 'Kualitas Udara', 'AQI 42 — Kualitas udara baik. Cocok untuk aktivitas outdoor!', 'success');
        }, 5000);
    })
    .catch(() => {
        document.getElementById('system-status').textContent = "✅ Spatial Engine: Ready";
        injectAnalyticsDashboard();
        renderLeafletFeatures();
        renderCesiumFeatures();
        setTimeout(animateCounters, 500);
        updateMoodUI();
    });

/* =====================================================
   CLICK OUTSIDE MODAL TO CLOSE
   ===================================================== */
['aqi-modal', 'weather-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', function(e) {
            if (e.target === this) closeModal(id);
        });
    }
});

/* =====================================================
   BREATHING MODAL CLICK OUTSIDE
   ===================================================== */
document.getElementById('breathing-modal')?.addEventListener('click', function(e) {
    if (e.target === this) toggleBreathingModal();
});

/* =====================================================
   INITIAL NOTIFICATIONS
   ===================================================== */
setTimeout(() => {
    showToast('🌍 UrbanWellness Aktif', 'Selamat datang! Dashboard Smart City siap digunakan.', 'success', 5000);
}, 1200);