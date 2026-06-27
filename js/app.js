/* =========================
   TOKEN CESIUM ION ACCESS
========================= */
const CESIUM_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOGY5MDc1YS04ZDdkLTQ3NWEtOGY4Yi1jNzExOGZlMTYzOGQiLCJpZCI6NDQ5MDg2LCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3ODI0MDUzNzF9.ryph_Se5u0VPkhvN5q1iXI6dMpMdcU1dULqBlXhnF1E';

/* =========================
   DATABASE SPASIAL LENGKAP (24 + Tambahan Fasilitas Relaksasi)
========================= */
const locations = [
    { name: "Top40 Karaoke Keluarga", coord: [-7.749167, 110.398333], type: "night", rating: "4.3 ⭐", jam: "Minggu–Jumat 10:00–01:00", alamat: "Jl. Sukoharjo No.1A, Sanggrahan", image: "data/images/Top40 Karaoke Keluarga.jpg" },
    { name: "Happy Puppy Karaoke Seturan", coord: [-7.771888, 110.408602], type: "night", rating: "4.8 ⭐", jam: "Setiap Hari 11:00–02:00", alamat: "Plaza Seturan Blok B No.12", image: "data/images/Happy Puppy Karaoke Keluarga Seturan.jpg" },
    { name: "Glow Karaoke Jogja", coord: [-7.7716, 110.4087], type: "night", rating: "4.1 ⭐", jam: "Senin–Minggu 14:00–22:00", alamat: "Jl. Seturan Raya No.2–3", image: "data/images/Glow Karaoke Jogja.jpg" },
    { name: "Terrace Jogja Club", coord: [-7.77176, 110.40853], type: "night", rating: "4.5 ⭐", jam: "Senin–Minggu 19:00–03:00", alamat: "Jl. Seturan Raya No.4, Kledokan", image: "data/images/Terrace Jogja Club & Karaoke.jpg" },
    { name: "NAV Karaoke Keluarga", coord: [-7.783081, 110.409752], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 12:00–00:00", alamat: "Jl. Laksda Adisucipto No.155A", image: "data/images/NAV Karaoke Keluarga Yogyakarta.jpg" },
    { name: "Queen Bar Jogja", coord: [-7.783, 110.3967], type: "night", rating: "4.0 ⭐", jam: "Door open 19:00–Selesai", alamat: "Jl. Laksda Adisucipto No.163", image: "data/images/Queen Bar Jogja.jpg" },
    { name: "Hyperbox Family Karaoke", coord: [-7.77915, 110.41515], type: "night", rating: "4.1 ⭐", jam: "Senin–Minggu 10:30–02:30", alamat: "Jl. Babarsari Raya No.15", image: "data/images/Hyperbox Family Karaoke & Cafe-Resto.jpg" },
    { name: "Blackjack Executive Karaoke", coord: [-7.78105, 110.41413], type: "night", rating: "4.9 ⭐", jam: "Senin–Minggu 19:00–04:00", alamat: "Jl. Babarsari No.44", image: "data/images/Blackjack Executive Karaoke & Lounge.png" },
    { name: "ST.BIER Bar & Kitchen", coord: [-7.7679, 110.4006], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 20:00–03:00", alamat: "Ruko Gatic, Jl. Perumnas No.83", image: "data/images/ST.BIER Bar & Kitchen.jpg" },
    { name: "The Gardens Jogja", coord: [-7.7705, 110.4089], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 11:00–03:00", alamat: "Jl. Seturan Raya, Kledokan", image: "data/images/The Gardens Jogja.jpg" },
    { name: "Wisdom Park UGM", coord: [-7.770780, 110.381618], type: "leisure", rating: "4.8 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Jl. Prof. Dr. Drs. Notonagoro", image: "data/images/Wisdom Park UGM.jpg" },
    { name: "Lembah UGM", coord: [-7.769121, 110.382466], type: "leisure", rating: "4.7 ⭐", jam: "Setiap Hari 06:00–20:00", alamat: "Kawasan Lembah UGM", image: "data/images/Lembah UGM.jpg" },
    { name: "Sendang Somobetri", coord: [-7.771834, 110.420872], type: "leisure", rating: "4.6 ⭐", jam: "Sabtu–Kamis 07:00–16:30", alamat: "Padukuhan Sombomerten", image: "data/images/Sendang Somobetri.jpg" },
    { name: "Embung Tambakboyo", coord: [-7.756185, 110.414962], type: "leisure", rating: "4.4 ⭐", jam: "Buka 24 Jam", alamat: "Jl. Tambakboyo, Condongcatur", image: "data/images/Embung Tambakboyo.jpg" },
    { name: "Taman PTBB FT UNY", coord: [-7.768752, 110.387858], type: "leisure", rating: "4.0 ⭐", jam: "Senin–Minggu 06:00–17:00", alamat: "Area Fakultas Teknik UNY", image: "data/images/Taman PTBB FT UNY.png" },
    { name: "Taman Kearifan UGM", coord: [-7.775313, 110.380432], type: "leisure", rating: "4.6 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Olahraga UGM", image: "data/images/Taman Kearifan UGM.jpg" },
    { name: "Hutan Kota", coord: [-7.773366, 110.396701], type: "leisure", rating: "4.7 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Kawasan Klaster Agro UGM", image: "data/images/Hutan Kota.png" },
    { name: "Taman Winasutan Asri", coord: [-7.767686, 110.442079], type: "leisure", rating: "4.6 ⭐", jam: "Senin–Minggu 08:00–18:00", alamat: "Jl. Singosutan Barat", image: "data/images/Taman Winasutan Asri.png" },
    { name: "Sendang Mulyo", coord: [-7.776039, 110.428233], type: "leisure", rating: "3.0 ⭐", jam: "Buka 24 Jam", alamat: "Padukuhan Nayan", image: "data/images/Sendang Mulyo Kali Grojokan.jpg" },
    { name: "Bendung Glendongan", coord: [-7.777250, 110.419562], type: "leisure", rating: "4.0 ⭐", jam: "Buka 24 Jam", alamat: "Tambakbayan", image: "data/images/Bendung Glendongan.png" },
    { name: "Taman Randu Alas UNY", coord: [-7.777506, 110.386980], type: "leisure", rating: "4.8 ⭐", jam: "Buka 24 Jam", alamat: "Area Kampus UNY", image: "data/images/Taman Randu Alas UNY.jpg" },
    { name: "Taman Auditorium UNY", coord: [-7.777274, 110.387819], type: "leisure", rating: "4.7 ⭐", jam: "Buka 24 Jam", alamat: "Kampus UNY Karangmalang", image: "data/images/Taman Auditorium UNY.jpg" },
    { name: "Taman Payung Maskan UGM", coord: [-7.774717, 110.380989], type: "leisure", rating: "4.5 ⭐", jam: "Buka 24 Jam", alamat: "Bulaksumur", image: "data/images/Taman Payung Seberang Maskan UGM.png" },
    { name: "Kolam Detensi Lembah UGM", coord: [-7.776189, 110.380444], type: "leisure", rating: "4.8 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Sayap Barat UGM", image: "data/images/Taman Kolam Detensi Lembah UGM.JPG" },
    
    // DATA BARU: Fasilitas Relaksasi Anti Stres Tambahan
    { name: "Perpustakaan Daerah", coord: [-7.7928, 110.4088], type: "leisure", rating: "4.8 ⭐", jam: "08:00–16:00", alamat: "Grhatama Pustaka, Janti", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" },
    { name: "Masjid Kampus UGM", coord: [-7.7750, 110.3810], type: "leisure", rating: "4.9 ⭐", jam: "24 Jam", alamat: "Bulaksumur UGM", image: "https://images.unsplash.com/photo-1542898716-16016149f1db?w=400" }
];

/* =========================
   STATE VARIABLES LENGKAP
========================= */
let leafletMap, leafletMarkerGroup, leafletGeometries = [], boundaryLayer2D;
let cesiumViewer, cesiumEntities = [], currentEngine = '2d';
let cesiumReady = false;
let cesiumOsmBuildingEntities = [];
let cesiumFallbackBuildingEntities = [];
let avatarParts = [];
let avatarState = { lat: -7.7712, lng: 110.3995, heading: 0, speed: 0 };
let gameModeActive = false;
let gameLoopId = null;
let pressedKeys = new Set();
let lastDetectedZoneName = null;

// State Jarak Manual Asli
let distancePointA = null, distancePointB = null, distanceMarkerA = null, distanceMarkerB = null, distanceLine = null;
let distanceModeActive = false;

// State Network & Analytics
let routingLayer2D = null, routingLayer3D = null, userLocationMarker = null;
let analyticsLayersGroup = null;
let activeHeatmapLayer = null;
let activeBufferLayers = [];
const DEFAULT_BUFFER_RADIUS = 500;

/* =========================
   CLOCK WIDGET
========================= */
function updateClock() {
    const now = new Date();
    document.getElementById('live-time').textContent = now.toLocaleTimeString('id-ID', { hour12: false });
    document.getElementById('live-date').textContent = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();

/* =========================
   INITIALIZE 2D LEAFLET ENGINE (FRESH THEME)
========================= */
leafletMap = L.map('map-leaflet', { zoomControl: true }).setView([-7.7712, 110.3995], 14);
const basemapLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 20 });
basemapLight.addTo(leafletMap);

leafletMarkerGroup = L.layerGroup().addTo(leafletMap);
analyticsLayersGroup = L.layerGroup().addTo(leafletMap); // Layer khusus buat Heatmap & Buffer

/* =========================
   INITIALIZE 3D CESIUM ENGINE
   Versi ini tidak bergantung pada Cesium Ion agar lebih aman di GitHub Pages.
   Bangunan 3D diambil dari Overpass OSM. Jika API lambat, sistem membuat fallback 3D block.
========================= */
function set3DUnavailable(message) {
    const statusEl = document.getElementById('system-status');
    const btn3d = document.getElementById('btn-3d');
    const gameBtn = document.getElementById('btn-start-game');
    if (statusEl && message) statusEl.textContent = message;
    if (btn3d) {
        btn3d.classList.add('opacity-50', 'cursor-not-allowed');
        btn3d.title = 'Mode 3D sudah dihapus dan diganti Kartu Bahagia.';
    }
    if (gameBtn) gameBtn.classList.add('hidden');
}

function safeStatus(message) {
    const statusEl = document.getElementById('system-status');
    if (statusEl && message) statusEl.textContent = message;
}

function initCesiumEngine() {
    if (typeof Cesium === 'undefined') {
        cesiumReady = false;
        set3DUnavailable('2D aktif. Mode 3D sudah dihapus.');
        return;
    }

    try {
        cesiumViewer = new Cesium.Viewer('map-cesium', {
            baseLayerPicker: false,
            animation: false,
            timeline: false,
            sceneModePicker: false,
            navigationHelpButton: false,
            geocoder: false,
            fullscreenButton: false,
            homeButton: false,
            infoBox: true,
            selectionIndicator: false,
            shouldAnimate: true,
            terrainProvider: new Cesium.EllipsoidTerrainProvider(),
            imageryProvider: new Cesium.UrlTemplateImageryProvider({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                maximumLevel: 19,
                credit: '© OpenStreetMap contributors'
            }),
            requestRenderMode: false
        });

        cesiumViewer.scene.globe.enableLighting = false;
        cesiumViewer.scene.globe.depthTestAgainstTerrain = false;
        cesiumViewer.scene.skyAtmosphere.show = true;
        cesiumViewer.scene.fog.enabled = true;
        cesiumViewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
        if (cesiumViewer.cesiumWidget?.creditContainer) {
            cesiumViewer.cesiumWidget.creditContainer.style.display = 'none';
        }

        cesiumViewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(110.3995, -7.7712, 1500.0),
            orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-45.0), roll: 0.0 }
        });

        cesiumReady = true;
        document.getElementById('btn-start-game')?.classList.remove('hidden');
        loadOSMBuildings3D();
        initAvatar3D();
    } catch(e) {
        cesiumReady = false;
        console.warn('Cesium gagal dimuat, mode 2D tetap berjalan:', e);
        set3DUnavailable('2D aktif. 3D tidak tersedia di browser ini.');
    }
}

initCesiumEngine();

function parseOsmHeight(tags = {}) {
    const rawHeight = String(tags.height || '').replace(',', '.').match(/[0-9.]+/);
    if (rawHeight) return Math.min(80, Math.max(4, Number(rawHeight[0])));
    const levels = Number(tags['building:levels'] || tags.levels || 0);
    if (Number.isFinite(levels) && levels > 0) return Math.min(80, Math.max(4, levels * 3.2));
    return 10 + Math.floor(Math.abs(Math.sin((tags.name || 'building').length)) * 12);
}

function getProjectBounds() {
    const lats = locations.map(loc => loc.coord[0]);
    const lngs = locations.map(loc => loc.coord[1]);
    return {
        south: Math.min(...lats) - 0.01,
        west: Math.min(...lngs) - 0.01,
        north: Math.max(...lats) + 0.01,
        east: Math.max(...lngs) + 0.01
    };
}

async function loadOSMBuildings3D() {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') return;
    const bounds = getProjectBounds();
    const query = `
        [out:json][timeout:18];
        (
          way["building"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
        );
        out geom;
    `;

    try {
        safeStatus('3D: mengambil geometri bangunan OSM...');
        const res = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: query
        });
        if (!res.ok) throw new Error(`Overpass ${res.status}`);
        const data = await res.json();
        const ways = (data.elements || []).filter(el => el.type === 'way' && Array.isArray(el.geometry) && el.geometry.length >= 3).slice(0, 180);
        if (!ways.length) throw new Error('Tidak ada geometri bangunan dari OSM');

        cesiumOsmBuildingEntities.forEach(entity => cesiumViewer.entities.remove(entity));
        cesiumOsmBuildingEntities = [];
        ways.forEach((way, index) => {
            const positions = [];
            way.geometry.forEach(pt => {
                positions.push(pt.lon, pt.lat);
            });
            const height = parseOsmHeight(way.tags || {});
            const entity = cesiumViewer.entities.add({
                name: way.tags?.name || `OSM Building ${index + 1}`,
                polygon: {
                    hierarchy: Cesium.Cartesian3.fromDegreesArray(positions),
                    height: 0,
                    extrudedHeight: height,
                    material: Cesium.Color.LIGHTGRAY.withAlpha(0.58),
                    outline: true,
                    outlineColor: Cesium.Color.WHITE.withAlpha(0.35)
                }
            });
            cesiumOsmBuildingEntities.push(entity);
        });
        safeStatus(`3D aktif: ${ways.length} bangunan OSM dimuat.`);
    } catch (err) {
        console.warn('OSM 3D buildings gagal, fallback 3D dibuat:', err);
        createFallbackBuildings3D();
        safeStatus('3D aktif dengan fallback building. OSM API sedang lambat atau dibatasi.');
    }
}

function createFallbackBuildings3D() {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') return;
    cesiumFallbackBuildingEntities.forEach(entity => cesiumViewer.entities.remove(entity));
    cesiumFallbackBuildingEntities = [];
    const base = locations.slice(0, 22);
    base.forEach((loc, index) => {
        const ring = (index % 5) + 1;
        const angle = index * 1.714;
        const lat = loc.coord[0] + Math.sin(angle) * 0.0014 * ring;
        const lng = loc.coord[1] + Math.cos(angle) * 0.0014 * ring;
        const height = 12 + (index % 6) * 5;
        const entity = cesiumViewer.entities.add({
            name: `Fallback 3D Building ${index + 1}`,
            position: Cesium.Cartesian3.fromDegrees(lng, lat, height / 2),
            box: {
                dimensions: new Cesium.Cartesian3(28 + (index % 3) * 10, 28 + (index % 4) * 8, height),
                material: Cesium.Color.SILVER.withAlpha(0.55),
                outline: true,
                outlineColor: Cesium.Color.WHITE.withAlpha(0.35)
            }
        });
        cesiumFallbackBuildingEntities.push(entity);
    });
}

/* =========================
   FITUR 1: DYNAMIC SIDEBAR INFO BOARD
========================= */
window.updateSidebarInfo = function(loc) {
    const board = document.getElementById('info-board-content');
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeLabel = loc.type === 'leisure' ? 'ZONA ANTI-STRES' : 'HIBURAN MALAM';
    const typeColor = loc.type === 'leisure' ? 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' : 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;';

    board.className = "flex-1 flex flex-col w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 transition-all";
    board.innerHTML = `
        <div class="w-full text-left flex flex-col h-full fade-in">
            <div class="w-full h-36 rounded-xl overflow-hidden mb-3 relative shadow-sm border border-slate-200">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-black text-slate-800 shadow-sm">
                    ${loc.rating}
                </div>
            </div>
            <div class="mb-2">
                <span style="${typeColor}" class="text-[9px] font-black px-3 py-1 rounded-xl uppercase tracking-wider shadow-sm">${typeLabel}</span>
            </div>
            <h3 class="text-base font-black text-slate-800 leading-tight mb-2">${loc.name}</h3>
            <p class="text-xs text-slate-600 font-semibold mb-2 flex items-center gap-1.5"><span class="text-sky-500 text-base">🕒</span> ${loc.jam}</p>
            <div class="mt-auto pt-3 border-t border-slate-200">
                <p class="text-[11px] text-slate-500 font-medium leading-relaxed flex items-start gap-1.5"><span class="text-rose-400 text-base">📍</span> ${loc.alamat}</p>
            </div>
            <button onclick="openHappyCards()" 
                class="mt-4 w-full py-2.5 bg-gradient-to-r from-pink-500 to-amber-400 hover:from-pink-600 hover:to-amber-500 text-white text-xs font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex justify-center items-center gap-2">
                🎴 Ambil Kartu Bahagia
            </button>
        </div>
    `;
};

// Event Listener Cesium
if (cesiumReady && cesiumViewer) {
    cesiumViewer.selectedEntityChanged.addEventListener(function(selectedEntity) {
        if (selectedEntity && selectedEntity.customData) {
            updateSidebarInfo(selectedEntity.customData);
            updateSpatialAnalysisOutput(generateLocationAnalysisHTML(selectedEntity.customData));
        }
    });
}

/* =========================
   FITUR 2: SMART ROUTING & NETWORK ANALYST
   (Mendukung Mode 'Kendaraan' dan 'Jalan Kaki')
   GitHub-safe: GPS/API gagal tetap ada fallback.
========================= */
function getSelectedRouteMode() {
    const routeModeInputs = document.querySelectorAll('input[name="route-mode"]');
    let mode = 'driving';
    routeModeInputs.forEach(input => {
        if (input.checked) mode = input.value;
    });
    return mode;
}

function getCurrentPositionOrMapCenter(callback) {
    const useMapCenter = () => {
        const center = leafletMap.getCenter();
        callback(center.lat, center.lng, false);
    };

    if (!navigator.geolocation) {
        useMapCenter();
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => callback(position.coords.latitude, position.coords.longitude, true),
        () => useMapCenter(),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
}

function drawDirectFallbackRoute(userLat, userLng, destLat, destLng, destName, mode) {
    if (routingLayer2D) leafletMap.removeLayer(routingLayer2D);
    if (userLocationMarker) leafletMap.removeLayer(userLocationMarker);
    if (routingLayer3D && cesiumReady && cesiumViewer) cesiumViewer.dataSources.remove(routingLayer3D);

    const routeColor = mode === 'foot' ? '#10b981' : '#3b82f6';
    const routeDash = mode === 'foot' ? '10, 10' : '6, 6';
    routingLayer2D = L.polyline([[userLat, userLng], [destLat, destLng]], {
        color: routeColor,
        weight: 5,
        opacity: 0.85,
        dashArray: routeDash
    }).addTo(leafletMap);

    userLocationMarker = L.circleMarker([userLat, userLng], {
        radius: 10, fillColor: routeColor, color: '#fff', weight: 3, fillOpacity: 1
    }).addTo(leafletMap).bindPopup('<b>📍 Titik awal</b>').openPopup();

    leafletMap.fitBounds(routingLayer2D.getBounds(), { padding: [50, 50] });
    const distanceKm = (haversineDistance(userLat, userLng, destLat, destLng) / 1000).toFixed(2);
    document.getElementById('system-status').textContent = `⚠️ Server rute tidak merespon. Ditampilkan garis estimasi ke ${destName}: ${distanceKm} km.`;
}

function requestRouteWithFallback(profiles, index, userLat, userLng, destLat, destLng, destName, mode) {
    if (index >= profiles.length) {
        drawDirectFallbackRoute(userLat, userLng, destLat, destLng, destName, mode);
        return;
    }

    const profile = profiles[index];
    const osrmUrl = `https://router.project-osrm.org/route/v1/${profile}/${userLng},${userLat};${destLng},${destLat}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
        .then(res => {
            if (!res.ok) throw new Error('OSRM HTTP ' + res.status);
            return res.json();
        })
        .then(data => {
            if (data.routes && data.routes.length > 0) {
                drawNetworkRoute(data.routes[0], userLat, userLng, destName, mode);
            } else {
                throw new Error('Rute kosong');
            }
        })
        .catch(() => requestRouteWithFallback(profiles, index + 1, userLat, userLng, destLat, destLng, destName, mode));
}

window.calculateRoute = function(destLat, destLng, destName) {
    const statusEl = document.getElementById('system-status');
    const mode = getSelectedRouteMode();
    const modeText = mode === 'foot' ? 'jalan kaki' : 'kendaraan';
    statusEl.textContent = '🛰️ Mengambil lokasi. Jika GPS ditolak, sistem memakai titik tengah peta.';

    getCurrentPositionOrMapCenter((userLat, userLng, fromGps) => {
        const sourceText = fromGps ? 'GPS' : 'titik tengah peta';
        statusEl.textContent = `🛣️ Menghitung rute ${modeText} dari ${sourceText}...`;
        const profiles = mode === 'foot' ? ['foot', 'walking', 'driving'] : ['driving'];
        requestRouteWithFallback(profiles, 0, userLat, userLng, destLat, destLng, destName, mode);
    });
};

function drawNetworkRoute(routeData, userLat, userLng, destName, mode) {
    if (routingLayer2D) leafletMap.removeLayer(routingLayer2D);
    if (userLocationMarker) leafletMap.removeLayer(userLocationMarker);
    if (routingLayer3D && cesiumReady && cesiumViewer) cesiumViewer.dataSources.remove(routingLayer3D);

    const geoJson = routeData.geometry;
    const distanceKm = (routeData.distance / 1000).toFixed(2);
    const durationMin = Math.round(routeData.duration / 60);

    // Kalau jalan kaki warnanya hijau, kalau kendaraan biru
    const routeColor = mode === 'foot' ? '#10b981' : '#3b82f6';
    const routeDash = mode === 'foot' ? '10, 10' : '';

    routingLayer2D = L.geoJSON(geoJson, {
        style: { color: routeColor, weight: 6, opacity: 0.9, dashArray: routeDash }
    }).addTo(leafletMap);

    userLocationMarker = L.circleMarker([userLat, userLng], {
        radius: 10, fillColor: routeColor, color: '#fff', weight: 3, fillOpacity: 1
    }).addTo(leafletMap).bindPopup("<b>📍 Posisi Anda</b>").openPopup();

    leafletMap.fitBounds(routingLayer2D.getBounds(), { padding: [50, 50] });

    if (cesiumReady && cesiumViewer) {
        Cesium.GeoJsonDataSource.load(geoJson, {
            stroke: mode === 'foot' ? Cesium.Color.SPRINGGREEN : Cesium.Color.DODGERBLUE,
            strokeWidth: 8,
            clampToGround: true
        }).then(ds => {
            routingLayer3D = ds;
            cesiumViewer.dataSources.add(ds);
        }).catch(e => console.warn('Rute 3D dilewati:', e));
    }

    const modeText = mode === 'foot' ? 'Jalan Kaki' : 'Kendaraan';
    document.getElementById('system-status').textContent = `✅ Rute ${modeText} ke ${destName}: ${distanceKm} km (${durationMin} mnt).`;
}

/* =========================
   FITUR 3: CARI RELAKSASI TERDEKAT (PREDIKSI)
========================= */
window.findNearestRelaxation = function() {
    const statusEl = document.getElementById('system-status');
    statusEl.textContent = '🔍 Mencari ruang hijau terdekat. Jika GPS ditolak, sistem memakai titik tengah peta.';

    getCurrentPositionOrMapCenter((userLat, userLng, fromGps) => {
        let nearestLoc = null;
        let minDistance = Infinity;

        locations.forEach(loc => {
            if (loc.type === 'leisure') {
                const d = haversineDistance(userLat, userLng, loc.coord[0], loc.coord[1]);
                if (d < minDistance) {
                    minDistance = d;
                    nearestLoc = loc;
                }
            }
        });

        if (nearestLoc) {
            const distKm = (minDistance / 1000).toFixed(2);
            const sourceText = fromGps ? 'posisi GPS' : 'titik tengah peta';
            alert(`Lokasi anti-stres terdekat dari ${sourceText}: ${nearestLoc.name} (${distKm} km). Peta difokuskan ke lokasi tersebut.`);
            const routeRadio = document.querySelector(`input[name="route-mode"][value="${minDistance < 1500 ? 'foot' : 'driving'}"]`);
            if (routeRadio) routeRadio.checked = true;
            updateSidebarInfo(nearestLoc);
            updateSpatialAnalysisOutput(generateLocationAnalysisHTML(nearestLoc));
            if (routingLayer2D) { leafletMap.removeLayer(routingLayer2D); routingLayer2D = null; }
            if (userLocationMarker) { leafletMap.removeLayer(userLocationMarker); userLocationMarker = null; }
            leafletMap.setView(nearestLoc.coord, 17);
            safeStatus(`Lokasi relaksasi terdekat: ${nearestLoc.name}, jarak ${distKm} km.`);
        } else {
            statusEl.textContent = '❌ Tidak ada data RTH yang aktif.';
        }
    });
};


/* =========================
   SPATIAL ANALYSIS HELPERS
========================= */
function getVisibleSpatialLocations() {
    const showLeisure = document.getElementById('check-leisure')?.checked ?? true;
    const showNight = document.getElementById('check-night')?.checked ?? true;
    return locations.filter(loc => (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight));
}

function getBufferRadius() {
    const input = document.getElementById('buffer-radius');
    const value = input ? Number(input.value) : DEFAULT_BUFFER_RADIUS;
    return Number.isFinite(value) ? value : DEFAULT_BUFFER_RADIUS;
}

function getBufferSourceType() {
    return document.getElementById('buffer-source')?.value || 'leisure';
}

function updateBufferRadiusLabel() {
    const radius = getBufferRadius();
    const label = document.getElementById('buffer-radius-label');
    if (label) label.textContent = `${radius} m`;
}

function updateToggleBadges() {
    const heatBadge = document.getElementById('heatmap-toggle-label');
    const bufferBadge = document.getElementById('buffer-toggle-label');
    const heatOn = document.getElementById('layer-heatmap')?.checked;
    const bufferOn = document.getElementById('layer-buffer')?.checked;
    if (heatBadge) {
        heatBadge.textContent = heatOn ? 'ON' : 'OFF';
        heatBadge.className = heatOn ? 'toggle-badge on' : 'toggle-badge off';
    }
    if (bufferBadge) {
        bufferBadge.textContent = bufferOn ? 'ON' : 'OFF';
        bufferBadge.className = bufferOn ? 'toggle-badge on' : 'toggle-badge off';
    }
}

function getTypeLabel(type) {
    return type === 'leisure' ? 'RTH / ruang pemulihan' : 'hiburan malam';
}

function getLocationsByType(type) {
    if (type === 'all') return locations;
    return locations.filter(loc => loc.type === type);
}

function nearestLocationFrom(loc, targetType) {
    let nearest = null;
    let minDistance = Infinity;
    locations.forEach(target => {
        if (target === loc) return;
        if (targetType !== 'all' && target.type !== targetType) return;
        const d = haversineDistance(loc.coord[0], loc.coord[1], target.coord[0], target.coord[1]);
        if (d < minDistance) {
            minDistance = d;
            nearest = target;
        }
    });
    return { location: nearest, distance: minDistance };
}

function formatDistance(meter) {
    if (!Number.isFinite(meter)) return '-';
    return meter >= 1000 ? `${(meter / 1000).toFixed(2)} km` : `${Math.round(meter)} m`;
}

function locationsWithinRadius(centerLoc, radius, type = 'all') {
    return locations
        .filter(target => target !== centerLoc && (type === 'all' || target.type === type))
        .map(target => ({
            ...target,
            distance: haversineDistance(centerLoc.coord[0], centerLoc.coord[1], target.coord[0], target.coord[1])
        }))
        .filter(item => item.distance <= radius)
        .sort((a, b) => a.distance - b.distance);
}

function calculateStressScore(loc) {
    const nearestNight = loc.type === 'night' ? { distance: 0 } : nearestLocationFrom(loc, 'night');
    const nearestLeisure = loc.type === 'leisure' ? { distance: 0 } : nearestLocationFrom(loc, 'leisure');
    const stressFromNight = loc.type === 'night' ? 70 : Math.max(0, 70 - Math.min(nearestNight.distance, 1500) / 1500 * 70);
    const reliefFromGreen = loc.type === 'leisure' ? 35 : Math.max(0, 35 - Math.min(nearestLeisure.distance, 1200) / 1200 * 35);
    return Math.max(0, Math.min(100, Math.round(35 + stressFromNight - reliefFromGreen)));
}

function generateLocationAnalysisHTML(loc) {
    const radius = getBufferRadius();
    const oppositeType = loc.type === 'leisure' ? 'night' : 'leisure';
    const nearestOpposite = nearestLocationFrom(loc, oppositeType);
    const nearbyAll = locationsWithinRadius(loc, radius, 'all');
    const nearbyOpposite = locationsWithinRadius(loc, radius, oppositeType);
    const score = calculateStressScore(loc);
    let status = 'Sedang';
    let statusColor = 'text-amber-600 bg-amber-50 border-amber-200';
    if (score < 40) {
        status = 'Rendah';
        statusColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
    } else if (score >= 70) {
        status = 'Tinggi';
        statusColor = 'text-rose-600 bg-rose-50 border-rose-200';
    }

    const conclusion = loc.type === 'night'
        ? `Lokasi ini berpotensi menjadi sumber tekanan lingkungan. Jarak ke RTH terdekat adalah ${formatDistance(nearestOpposite.distance)}, sehingga perlu pengaturan kebisingan, jam aktivitas, dan akses menuju ruang pemulihan.`
        : `Lokasi ini berfungsi sebagai ruang pemulihan. Jarak ke hiburan malam terdekat adalah ${formatDistance(nearestOpposite.distance)}, sehingga kualitas tenang perlu dijaga dengan vegetasi, pencahayaan aman, dan pembatas aktivitas bising.`;

    const listItems = nearbyAll.slice(0, 5).map(item => `
        <li class="flex justify-between gap-2 border-b border-slate-100 py-1.5">
            <span class="truncate">${item.type === 'leisure' ? '🌿' : '🌙'} ${item.name}</span>
            <b>${formatDistance(item.distance)}</b>
        </li>
    `).join('') || '<li class="text-slate-400 py-1.5">Tidak ada titik lain dalam radius ini.</li>';

    return `
        <div class="fade-in space-y-3">
            <div class="flex items-start justify-between gap-3">
                <div>
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Hasil Analisis Titik</p>
                    <h3 class="text-sm font-black text-slate-800 leading-tight mt-1">${loc.name}</h3>
                    <p class="text-[11px] text-slate-500 mt-1">Kategori: ${getTypeLabel(loc.type)}</p>
                </div>
                <span class="text-[10px] font-black px-3 py-1 rounded-full border ${statusColor}">${status}</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <div class="rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <p class="text-[9px] font-black text-slate-400 uppercase">Skor Tekanan</p>
                    <p class="text-xl font-black text-slate-800">${score}<span class="text-xs text-slate-400">/100</span></p>
                </div>
                <div class="rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <p class="text-[9px] font-black text-slate-400 uppercase">Radius Buffer</p>
                    <p class="text-xl font-black text-slate-800">${radius}<span class="text-xs text-slate-400"> m</span></p>
                </div>
            </div>

            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Titik lawan terdekat</p>
                <p class="text-xs font-bold text-slate-700">${nearestOpposite.location ? nearestOpposite.location.name : '-'} <span class="text-indigo-600">(${formatDistance(nearestOpposite.distance)})</span></p>
            </div>

            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Objek dalam radius ${radius} m</p>
                <p class="text-xs text-slate-600 mb-2">${nearbyAll.length} titik terdeteksi, termasuk ${nearbyOpposite.length} titik kategori lawan.</p>
                <ul class="text-[11px] text-slate-600 max-h-28 overflow-y-auto custom-scrollbar pr-1">${listItems}</ul>
            </div>

            <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-3">
                <p class="text-[10px] font-black text-indigo-500 uppercase mb-1">Kesimpulan</p>
                <p class="text-[11px] text-slate-600 leading-relaxed">${conclusion}</p>
            </div>
        </div>
    `;
}

function updateSpatialAnalysisOutput(html) {
    const output = document.getElementById('spatial-analysis-output');
    if (output) output.innerHTML = html;
}

function generateHeatPointsFromData() {
    const points = [];
    const visible = getVisibleSpatialLocations();
    visible.forEach(loc => {
        const baseWeight = loc.type === 'night' ? 0.95 : 0.28;
        points.push([loc.coord[0], loc.coord[1], baseWeight]);
        const rings = loc.type === 'night' ? [0.0008, 0.0015] : [0.0005];
        rings.forEach((offset, ringIndex) => {
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 * i) / 8;
                const lat = loc.coord[0] + Math.sin(angle) * offset;
                const lng = loc.coord[1] + Math.cos(angle) * offset;
                const weight = Math.max(0.12, baseWeight - (ringIndex + 1) * 0.22);
                points.push([lat, lng, weight]);
            }
        });
    });
    return points;
}

function drawBufferLayer() {
    const radius = getBufferRadius();
    const sourceType = getBufferSourceType();
    const sourceLocations = getLocationsByType(sourceType).filter(loc => {
        const showLeisure = document.getElementById('check-leisure')?.checked ?? true;
        const showNight = document.getElementById('check-night')?.checked ?? true;
        return (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight) || sourceType === 'all';
    });

    sourceLocations.forEach(loc => {
        const color = loc.type === 'leisure' ? '#10b981' : '#f43f5e';
        const fillOpacity = loc.type === 'leisure' ? 0.09 : 0.07;
        const circle = L.circle(loc.coord, {
            radius,
            color,
            weight: 2,
            fillColor: color,
            fillOpacity,
            dashArray: '6,6'
        }).addTo(analyticsLayersGroup);
        circle.bindTooltip(`${loc.name}<br>Buffer ${radius} m`, { sticky: true });
        activeBufferLayers.push(circle);
    });

    return sourceLocations.length;
}

window.runSpatialAnalysis = function() {
    const visible = getVisibleSpatialLocations();
    const radius = getBufferRadius();
    const nightCount = visible.filter(loc => loc.type === 'night').length;
    const leisureCount = visible.filter(loc => loc.type === 'leisure').length;
    const riskyNight = locations.filter(loc => loc.type === 'night' && nearestLocationFrom(loc, 'leisure').distance > radius).length;
    const protectedLeisure = locations.filter(loc => loc.type === 'leisure' && nearestLocationFrom(loc, 'night').distance > radius).length;

    updateSpatialAnalysisOutput(`
        <div class="fade-in space-y-3">
            <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Ringkasan Analisis Aktif</p>
                <h3 class="text-sm font-black text-slate-800 mt-1">Analisis berbasis ${visible.length} titik yang sedang tampil</h3>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="rounded-2xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-[9px] font-black text-emerald-600 uppercase">RTH Aktif</p><p class="text-2xl font-black text-slate-800">${leisureCount}</p></div>
                <div class="rounded-2xl bg-rose-50 border border-rose-100 p-3"><p class="text-[9px] font-black text-rose-600 uppercase">Hiburan Aktif</p><p class="text-2xl font-black text-slate-800">${nightCount}</p></div>
                <div class="rounded-2xl bg-amber-50 border border-amber-100 p-3"><p class="text-[9px] font-black text-amber-600 uppercase">Hiburan di luar buffer RTH</p><p class="text-2xl font-black text-slate-800">${riskyNight}</p></div>
                <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-[9px] font-black text-indigo-600 uppercase">RTH relatif tenang</p><p class="text-2xl font-black text-slate-800">${protectedLeisure}</p></div>
            </div>
            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Interpretasi</p>
                <p class="text-[11px] text-slate-600 leading-relaxed">Radius analisis saat ini ${radius} m. Heatmap memakai koordinat dataset aktual, bukan titik acak. Buffer membaca radius yang dipilih dari slider dan dapat difokuskan ke semua titik, RTH, atau hiburan malam.</p>
            </div>
        </div>
    `);
    document.getElementById('system-status').textContent = `📊 Analisis berjalan: ${visible.length} titik aktif, radius ${radius} m.`;
};

window.resetSpatialAnalysis = function() {
    const heatInput = document.getElementById('layer-heatmap');
    const bufferInput = document.getElementById('layer-buffer');
    if (heatInput) heatInput.checked = false;
    if (bufferInput) bufferInput.checked = false;
    analyticsLayersGroup.clearLayers();
    activeHeatmapLayer = null;
    activeBufferLayers = [];
    updateToggleBadges();
    updateSpatialAnalysisOutput(`
        <div class="text-center p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/70">
            <span class="text-3xl block mb-2">📌</span>
            <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Klik marker atau tekan tombol Jalankan Analisis untuk melihat hasil analisis spasial.</p>
        </div>
    `);
    document.getElementById('system-status').textContent = 'Layer analisis dimatikan.';
};

/* =========================
   FITUR 4: LAYER ANALISIS SPASIAL (HEATMAP & BUFFER)
========================= */
window.toggleAnalyticsLayers = function() {
    analyticsLayersGroup.clearLayers();
    activeHeatmapLayer = null;
    activeBufferLayers = [];
    updateBufferRadiusLabel();
    updateToggleBadges();

    const heatOn = document.getElementById('layer-heatmap')?.checked;
    const bufferOn = document.getElementById('layer-buffer')?.checked;
    const radius = getBufferRadius();
    let messages = [];

    if (heatOn) {
        if (typeof L.heatLayer !== 'undefined') {
            const heatPoints = generateHeatPointsFromData();
            activeHeatmapLayer = L.heatLayer(heatPoints, {
                radius: 32,
                blur: 20,
                maxZoom: 17,
                gradient: {0.2: '#22c55e', 0.45: '#facc15', 0.7: '#fb923c', 1.0: '#ef4444'}
            }).addTo(analyticsLayersGroup);
            messages.push(`Heatmap data aktual: ${heatPoints.length} titik intensitas`);
        } else {
            messages.push('Heatmap gagal karena library Leaflet.heat belum dimuat');
        }
    }

    if (bufferOn) {
        const bufferCount = drawBufferLayer();
        messages.push(`Buffer ${radius} m aktif untuk ${bufferCount} sumber`);
    }

    if (!heatOn && !bufferOn) {
        messages.push('Layer analisis dimatikan');
    }

    document.getElementById('system-status').textContent = `📊 ${messages.join(' | ')}`;
    renderCesiumFeatures();
    if (heatOn || bufferOn) window.runSpatialAnalysis();
};

/* =========================
   FITUR 4B: 3D GAME MODE + ZONA BUFFER
========================= */
function metersToLatLngDelta(lat, headingRad, meters) {
    const dLat = (Math.cos(headingRad) * meters) / 111320;
    const dLng = (Math.sin(headingRad) * meters) / (111320 * Math.cos(lat * Math.PI / 180));
    return { dLat, dLng };
}

function positionFromOffset(lat, lng, upMeters, sideMeters = 0, forwardMeters = 0) {
    const latOffset = forwardMeters / 111320;
    const lngOffset = sideMeters / (111320 * Math.cos(lat * Math.PI / 180));
    return Cesium.Cartesian3.fromDegrees(lng + lngOffset, lat + latOffset, upMeters);
}

function removeAvatarParts() {
    if (!cesiumReady || !cesiumViewer) return;
    avatarParts.forEach(entity => cesiumViewer.entities.remove(entity));
    avatarParts = [];
}

function initAvatar3D() {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') return;
    removeAvatarParts();
    const common = { outline: true, outlineColor: Cesium.Color.WHITE.withAlpha(0.75) };
    const body = cesiumViewer.entities.add({
        name: '🎮 Avatar Explorer',
        position: Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 8),
        box: { dimensions: new Cesium.Cartesian3(6, 4, 10), material: Cesium.Color.fromCssColorString('#8b5cf6').withAlpha(0.95), ...common },
        description: '<b>Avatar 3D</b><br>Gunakan W/A/S/D atau panah untuk menjelajah kota.'
    });
    const head = cesiumViewer.entities.add({
        name: 'Avatar Head',
        position: Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 16),
        ellipsoid: { radii: new Cesium.Cartesian3(3.2, 3.2, 3.2), material: Cesium.Color.fromCssColorString('#f4a261').withAlpha(0.98), outline: true, outlineColor: Cesium.Color.WHITE }
    });
    const leftLeg = cesiumViewer.entities.add({
        name: 'Avatar Left Leg',
        position: Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 2.5),
        box: { dimensions: new Cesium.Cartesian3(2, 2, 5), material: Cesium.Color.fromCssColorString('#2563eb').withAlpha(0.95), ...common }
    });
    const rightLeg = cesiumViewer.entities.add({
        name: 'Avatar Right Leg',
        position: Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 2.5),
        box: { dimensions: new Cesium.Cartesian3(2, 2, 5), material: Cesium.Color.fromCssColorString('#2563eb').withAlpha(0.95), ...common }
    });
    const label = cesiumViewer.entities.add({
        name: 'Avatar Label',
        position: Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 23),
        label: {
            text: 'YOU', font: '900 14px sans-serif', fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK, outlineWidth: 3, style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, disableDepthTestDistance: Number.POSITIVE_INFINITY
        }
    });
    avatarParts = [body, head, leftLeg, rightLeg, label];
    updateAvatarVisuals();
}

function updateAvatarVisuals() {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined' || !avatarParts.length) return;
    const { lat, lng } = avatarState;
    avatarParts[0].position = positionFromOffset(lat, lng, 8, 0, 0);
    avatarParts[1].position = positionFromOffset(lat, lng, 16, 0, 0);
    avatarParts[2].position = positionFromOffset(lat, lng, 2.5, -1.4, 0);
    avatarParts[3].position = positionFromOffset(lat, lng, 2.5, 1.4, 0);
    avatarParts[4].position = positionFromOffset(lat, lng, 23, 0, 0);
}

function updateGameCamera() {
    if (!gameModeActive || !cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') return;
    const target = Cesium.Cartesian3.fromDegrees(avatarState.lng, avatarState.lat, 8);
    cesiumViewer.camera.lookAt(target, new Cesium.HeadingPitchRange(
        Cesium.Math.toRadians(avatarState.heading),
        Cesium.Math.toRadians(-22),
        115
    ));
}

function updateGameHud(loc, distance) {
    const hud = document.getElementById('game-hud');
    const status = document.getElementById('game-zone-status');
    if (!hud || !status) return;
    hud.classList.remove('hidden');
    if (!loc) {
        status.className = 'mt-3 rounded-2xl bg-slate-50 border border-slate-100 p-3 text-[11px] font-bold text-slate-500';
        status.innerHTML = 'Belum masuk zona buffer.';
        return;
    }
    const safeClass = loc.type === 'leisure' ? 'game-zone-safe' : 'game-zone-risk';
    status.className = `mt-3 rounded-2xl border p-3 text-[11px] font-bold ${safeClass}`;
    status.innerHTML = `\n        <div class="text-[10px] uppercase tracking-wider opacity-80">Masuk Zona Buffer</div>\n        <div class="text-sm font-black mt-1">${loc.type === 'leisure' ? '🌿' : '🌙'} ${loc.name}</div>\n        <div class="mt-1">Jarak avatar: ${formatDistance(distance)} dari objek.</div>\n    `;
}

function checkAvatarBufferZone() {
    if (!gameModeActive) return;
    const radius = getBufferRadius();
    let nearest = null;
    let nearestDistance = Infinity;
    locations.forEach(loc => {
        const d = haversineDistance(avatarState.lat, avatarState.lng, loc.coord[0], loc.coord[1]);
        if (d <= radius && d < nearestDistance) {
            nearest = loc;
            nearestDistance = d;
        }
    });

    if (nearest) {
        updateGameHud(nearest, nearestDistance);
        if (lastDetectedZoneName !== nearest.name) {
            lastDetectedZoneName = nearest.name;
            updateSidebarInfo(nearest);
            updateSpatialAnalysisOutput(generateLocationAnalysisHTML(nearest));
            safeStatus(`🎮 Avatar masuk buffer ${nearest.name}: ${formatDistance(nearestDistance)}.`);
        }
    } else {
        lastDetectedZoneName = null;
        updateGameHud(null, null);
    }
}

function gameLoop() {
    if (!gameModeActive) return;
    const turnSpeed = 2.2;
    const moveSpeed = pressedKeys.has('shift') ? 10 : 5;
    let moved = false;

    if (pressedKeys.has('q')) avatarState.heading -= turnSpeed;
    if (pressedKeys.has('e')) avatarState.heading += turnSpeed;
    if (pressedKeys.has('arrowleft')) avatarState.heading -= turnSpeed;
    if (pressedKeys.has('arrowright')) avatarState.heading += turnSpeed;

    const headingRad = Cesium.Math.toRadians(avatarState.heading);
    if (pressedKeys.has('w') || pressedKeys.has('arrowup')) {
        const delta = metersToLatLngDelta(avatarState.lat, headingRad, moveSpeed);
        avatarState.lat += delta.dLat; avatarState.lng += delta.dLng; moved = true;
    }
    if (pressedKeys.has('s') || pressedKeys.has('arrowdown')) {
        const delta = metersToLatLngDelta(avatarState.lat, headingRad, -moveSpeed);
        avatarState.lat += delta.dLat; avatarState.lng += delta.dLng; moved = true;
    }
    if (pressedKeys.has('a')) {
        const delta = metersToLatLngDelta(avatarState.lat, headingRad - Math.PI / 2, moveSpeed);
        avatarState.lat += delta.dLat; avatarState.lng += delta.dLng; moved = true;
    }
    if (pressedKeys.has('d')) {
        const delta = metersToLatLngDelta(avatarState.lat, headingRad + Math.PI / 2, moveSpeed);
        avatarState.lat += delta.dLat; avatarState.lng += delta.dLng; moved = true;
    }

    avatarState.heading = (avatarState.heading + 360) % 360;
    if (moved || pressedKeys.size) {
        updateAvatarVisuals();
        updateGameCamera();
        checkAvatarBufferZone();
    }
    gameLoopId = requestAnimationFrame(gameLoop);
}

window.startGameMode3D = function() {
    if (!cesiumReady || !cesiumViewer) {
        set3DUnavailable('3D belum aktif. Coba refresh atau cek koneksi internet.');
        return;
    }
    window.switchEngine('3d');
    gameModeActive = true;
    document.getElementById('game-hud')?.classList.remove('hidden');
    if (!avatarParts.length) initAvatar3D();
    updateAvatarVisuals();
    updateGameCamera();
    checkAvatarBufferZone();
    if (!gameLoopId) gameLoopId = requestAnimationFrame(gameLoop);
    safeStatus('🎮 3D Game Mode aktif. Gerakkan karakter dengan W/A/S/D atau panah.');
};

window.stopGameMode3D = function() {
    gameModeActive = false;
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
    pressedKeys.clear();
    document.getElementById('game-hud')?.classList.add('hidden');
    if (cesiumReady && cesiumViewer && typeof Cesium !== 'undefined') {
        cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
};

window.resetAvatarPosition = function() {
    avatarState = { lat: -7.7712, lng: 110.3995, heading: 0, speed: 0 };
    lastDetectedZoneName = null;
    updateAvatarVisuals();
    updateGameCamera();
    updateGameHud(null, null);
    safeStatus('Avatar dikembalikan ke titik awal.');
};

window.focusLocationIn3D = function(lat, lng, name) {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') {
        leafletMap.setView([lat, lng], 17);
        safeStatus('3D belum aktif. Lokasi dibuka di peta 2D.');
        return;
    }
    window.switchEngine('3d');
    const loc = locations.find(item => item.name === name) || locations.find(item => item.coord[0] === lat && item.coord[1] === lng);
    if (loc) {
        updateSidebarInfo(loc);
        updateSpatialAnalysisOutput(generateLocationAnalysisHTML(loc));
    }
    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 450),
        orientation: { heading: Cesium.Math.toRadians(0), pitch: Cesium.Math.toRadians(-45), roll: 0 },
        duration: 1.4
    });
    safeStatus(`3D fokus ke ${name}. Tekan tombol Jelajah untuk menggerakkan avatar.`);
};

window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['w','a','s','d','q','e','shift','arrowup','arrowdown','arrowleft','arrowright'].includes(key)) {
        pressedKeys.add(key);
        if (gameModeActive) event.preventDefault();
    }
});

window.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.key.toLowerCase());
});

/* =========================
   FITUR 4C: AKTIVITAS REAL-TIME DARI OSM
========================= */
function activityKindFromTags(tags = {}) {
    const leisure = tags.leisure || '';
    const amenity = tags.amenity || '';
    const sport = tags.sport || '';
    if (/park|garden|nature_reserve/i.test(leisure)) return { title: 'Jalan Santai & Relaksasi', icon: '🌿', tone: 'emerald' };
    if (/fitness|sports|pitch|stadium/i.test(leisure) || /fitness|yoga|running/i.test(sport)) return { title: 'Olahraga Ringan Warga', icon: '🏃', tone: 'amber' };
    if (/library/i.test(amenity)) return { title: 'Ruang Baca Tenang', icon: '📚', tone: 'sky' };
    if (/community_centre/i.test(amenity)) return { title: 'Aktivitas Komunitas', icon: '🤝', tone: 'violet' };
    if (/place_of_worship/i.test(amenity)) return { title: 'Relaksasi Spiritual', icon: '🕊️', tone: 'rose' };
    return { title: 'Aktivitas Publik Terdekat', icon: '📍', tone: 'slate' };
}

function getActivityCoords(element) {
    if (Number.isFinite(element.lat) && Number.isFinite(element.lon)) return [element.lat, element.lon];
    if (element.center && Number.isFinite(element.center.lat) && Number.isFinite(element.center.lon)) return [element.center.lat, element.center.lon];
    return null;
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderActivityCards(items, sourceLabel = 'OpenStreetMap') {
    const container = document.getElementById('live-activity-list');
    if (!container) return;
    if (!items.length) {
        renderFallbackActivityCards('Database lokal');
        return;
    }
    const toneClass = {
        emerald: 'bg-emerald-50 border-emerald-100 text-emerald-600',
        amber: 'bg-amber-50 border-amber-100 text-amber-600',
        sky: 'bg-sky-50 border-sky-100 text-sky-600',
        violet: 'bg-violet-50 border-violet-100 text-violet-600',
        rose: 'bg-rose-50 border-rose-100 text-rose-600',
        slate: 'bg-slate-50 border-slate-100 text-slate-600'
    };
    container.innerHTML = items.slice(0, 4).map(item => {
        const coords = item.coords;
        const styleClass = toneClass[item.kind.tone] || toneClass.slate;
        const safeName = escapeHTML(item.name);
        const safeKeyword = escapeHTML(item.keyword);
        const safeTitle = escapeHTML(item.kind.title);
        return `
            <div onclick="focusMapLocation(${coords[0]}, ${coords[1]}, 'Aktivitas Publik')" class="activity-live-card p-3 rounded-2xl border cursor-pointer ${styleClass}">
                <span class="text-xs font-black block uppercase">${safeTitle} ${item.kind.icon}</span>
                <span class="text-[10px] font-bold text-slate-700 block mt-1">${safeName}</span>
                <span class="text-[10px] font-medium text-slate-500 block mt-1">Data ${sourceLabel} • keyword: ${safeKeyword}</span>
            </div>
        `;
    }).join('');
}

function renderFallbackActivityCards(sourceLabel = 'Database lokal') {
    const fallback = locations.filter(loc => loc.type === 'leisure').slice(0, 4).map(loc => ({
        name: loc.name,
        coords: loc.coord,
        keyword: 'leisure/local database',
        kind: { title: 'Rekomendasi Relaksasi', icon: '🌿', tone: 'emerald' }
    }));
    renderActivityCards(fallback, sourceLabel);
}

window.fetchLiveActivities = async function(force = false) {
    const container = document.getElementById('live-activity-list');
    if (container) {
        container.innerHTML = '<div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 font-bold">Mengambil data publik dari internet...</div>';
    }
    const bounds = getProjectBounds();
    const query = `
        [out:json][timeout:15];
        (
          node["leisure"~"park|garden|fitness_centre|sports_centre"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
          way["leisure"~"park|garden|fitness_centre|sports_centre"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
          node["amenity"~"library|community_centre|place_of_worship"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
          way["amenity"~"library|community_centre|place_of_worship"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
          node["sport"~"yoga|fitness|running"](${bounds.south},${bounds.west},${bounds.north},${bounds.east});
        );
        out center;
    `;
    try {
        const res = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: query
        });
        if (!res.ok) throw new Error(`Overpass ${res.status}`);
        const data = await res.json();
        const seen = new Set();
        const items = (data.elements || [])
            .map(el => {
                const coords = getActivityCoords(el);
                const tags = el.tags || {};
                const name = tags.name || tags['name:id'] || tags['name:en'];
                if (!coords || !name || seen.has(name)) return null;
                seen.add(name);
                const keyword = tags.leisure || tags.amenity || tags.sport || 'public place';
                return { name, coords, keyword, kind: activityKindFromTags(tags) };
            })
            .filter(Boolean)
            .slice(0, 8);
        if (!items.length) throw new Error('Tidak ada hasil OSM bernama');
        renderActivityCards(items, 'OpenStreetMap live');
        safeStatus(`Aktivitas real-time: ${items.length} tempat publik ditemukan dari OSM.`);
    } catch (err) {
        console.warn('Aktivitas real-time gagal, fallback lokal dipakai:', err);
        renderFallbackActivityCards('fallback lokal');
        safeStatus('Aktivitas internet gagal dimuat. Sistem memakai fallback database lokal.');
    }
};

/* =========================
   FITUR 5: UKUR JARAK MANUAL (ASLI 100% UTUH)
========================= */
window.haversineDistance = function(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

window.toggleDistanceMode = function() {
    distanceModeActive = !distanceModeActive;
    const btn = document.getElementById('btn-distance-mode');
    const panel = document.getElementById('distance-result-panel');

    if (distanceModeActive) {
        btn.innerHTML = '❌ Batalkan Mode Ukur';
        btn.className = 'w-full text-xs bg-rose-500 hover:bg-rose-600 border border-rose-400 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg';
        document.getElementById('system-status').textContent = 'Mode Ukur Jarak: Klik titik pertama di peta 2D...';
        resetDistancePins();
    } else {
        btn.innerHTML = '📏 Mode Ukur Jarak Manual';
        btn.className = 'w-full text-xs bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg';
        panel.classList.add('hidden');
        resetDistancePins();
        document.getElementById('system-status').textContent = 'Spatial Engine: Standby';
    }
};

window.resetDistancePins = function() {
    distancePointA = null; distancePointB = null;
    if (distanceMarkerA) leafletMap.removeLayer(distanceMarkerA);
    if (distanceMarkerB) leafletMap.removeLayer(distanceMarkerB);
    if (distanceLine) leafletMap.removeLayer(distanceLine);
};

leafletMap.on('click', function(e) {
    if (!distanceModeActive) return;
    const { lat, lng } = e.latlng;

    if (!distancePointA) {
        distancePointA = [lat, lng];
        distanceMarkerA = L.circleMarker([lat, lng], { radius: 8, fillColor: '#818cf8', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        document.getElementById('system-status').textContent = 'Klik titik kedua di peta 2D...';
    } else if (!distancePointB) {
        distancePointB = [lat, lng];
        distanceMarkerB = L.circleMarker([lat, lng], { radius: 8, fillColor: '#fb7185', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        distanceLine = L.polyline([distancePointA, distancePointB], { color: '#818cf8', weight: 4, dashArray: '8, 8' }).addTo(leafletMap);

        const jarak = haversineDistance(distancePointA[0], distancePointA[1], distancePointB[0], distancePointB[1]);
        const jarakText = jarak >= 1000 ? (jarak / 1000).toFixed(2) + ' km' : Math.round(jarak) + ' m';
        
        document.getElementById('distance-value').textContent = jarakText;
        document.getElementById('distance-result-panel').classList.remove('hidden');
        document.getElementById('system-status').textContent = `Jarak manual: ${jarakText}. Klik tombol untuk reset.`;
        
        distanceModeActive = false;
        document.getElementById('btn-distance-mode').innerHTML = '📏 Mode Ukur Jarak Manual';
        document.getElementById('btn-distance-mode').className = 'w-full text-xs bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg mt-3';
    }
});

/* =========================
   ANALYTICS DASHBOARD INJECTION (LENGKAP)
========================= */
function injectAnalyticsDashboard() {
    const mainArea = document.querySelector('main');
    if (!mainArea || document.getElementById('analytics-banner')) return;

    const total = locations.length;
    const leisureCount = locations.filter(loc => loc.type === 'leisure').length;
    const nightCount = locations.filter(loc => loc.type === 'night').length;
    const avgStress = Math.round(locations.reduce((sum, loc) => sum + calculateStressScore(loc), 0) / total);
    const radius = getBufferRadius();

    const banner = document.createElement('div');
    banner.id = 'analytics-banner';
    banner.className = 'col-span-1 lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-xl shadow-slate-200/50 mb-2 relative overflow-hidden';
    banner.innerHTML = `
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl pointer-events-none"></div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Rata-rata Stress Score</span>
            <span class="text-2xl font-black text-emerald-500">${avgStress}/100</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Dihitung dari jarak RTH dan hiburan</span>
        </div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Total Active Hubs</span>
            <span id="analytics-count" class="text-2xl font-black text-slate-800">${total} Spot</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">${leisureCount} RTH, ${nightCount} hiburan</span>
        </div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Mini Game</span>
            <span class="text-2xl font-black text-pink-500">Kartu</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Pesan semangat random untuk user</span>
        </div>
        <div class="p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Relief Buffer Radius</span>
            <span class="text-2xl font-black text-amber-500">${radius} m</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Dipakai untuk analisis buffer 2D</span>
        </div>
    `;
    mainArea.insertBefore(banner, mainArea.firstChild);
}

/* =========================
   FETCH BOUNDARY GEOJSON
   Garis dash hijau dari file lama sengaja tidak ditampilkan.
   File depok.geojson tetap dibaca untuk menjaga alur sinkronisasi, tetapi tidak digambar di peta.
========================= */
fetch('data/depok.geojson')
.then(res => res.json())
.then(() => {
    document.getElementById('system-status').textContent = "Spatial Engine: Database Synced";
    injectAnalyticsDashboard();
    renderLeafletFeatures();
    renderCesiumFeatures();
    window.fetchLiveActivities(false);
})
.catch(() => {
    document.getElementById('system-status').textContent = "Spatial Engine: Ready";
    injectAnalyticsDashboard();
    renderLeafletFeatures();
    renderCesiumFeatures();
    window.fetchLiveActivities(false);
});

/* =========================
   PREMIUM POPUP CARD GENERATOR (FRESH MODE)
========================= */
function generatePremiumPopupHTML(loc) {
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeLabel = loc.type === 'leisure' ? 'ZONA ANTI-STRES' : 'HIBURAN MALAM';
    const typeColor = loc.type === 'leisure' ? 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' : 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;';

    return `
        <div style="width:280px; font-family:sans-serif; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.1); border:1px solid #f1f5f9;">
            <div style="position:relative; width:100%; height:150px; overflow:hidden;">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" style="width:100%; height:100%; object-fit:cover; display:block;" />
                <div style="position:absolute; top:12px; right:12px; background:rgba(255,255,255,0.9); backdrop-filter:blur(4px); padding:4px 10px; border-radius:12px; font-size:12px; font-weight:900; color:#0f172a; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                    ${loc.rating}
                </div>
            </div>
            
            <div style="padding:16px;">
                <div style="margin-bottom:10px;">
                    <span style="font-size:10px; font-weight:900; padding:4px 10px; border-radius:12px; text-transform:uppercase; ${typeColor}">${typeLabel}</span>
                </div>
                
                <h4 style="font-size:16px; font-weight:900; color:#1e293b; margin:0 0 6px 0; line-height:1.2;">${loc.name}</h4>
                <p style="font-size:12px; color:#64748b; margin:4px 0 10px 0; font-weight:600;">🕒 ${loc.jam}</p>
                <div style="font-size:11px; color:#94a3b8; line-height:1.4; border-top:1px dashed #e2e8f0; padding-top:12px; margin-top:12px; font-weight:500;">
                    📍 ${loc.alamat}
                </div>
                
                <button onclick="openHappyCards()" 
                    style="width:100%; margin-top:14px; padding:10px; background:linear-gradient(90deg, #ec4899, #f59e0b); color:#fff; border:none; border-radius:12px; font-size:12px; font-weight:bold; cursor:pointer; box-shadow:0 4px 12px rgba(236,72,153,0.25); transition: transform 0.2s;">
                    🎴 Ambil Kartu Bahagia
                </button>
            </div>
        </div>
    `;
}

/* =========================
   RENDER LEAFLET FEATURES
========================= */
function renderLeafletFeatures() {
    leafletMarkerGroup.clearLayers();
    leafletGeometries.forEach(g => leafletMap.removeLayer(g));
    leafletGeometries = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight = document.getElementById('check-night')?.checked;

    locations.forEach(loc => {
        let layerVisible = (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight);

        if (layerVisible) {
            let markerColor = loc.type === 'leisure' ? '#10b981' : '#f43f5e';

            let pulseIcon = L.divIcon({
                className: 'smart-pulse-marker',
                html: `<div style="width:16px; height:16px; background-color:${markerColor}; border-radius:50%; --marker-color: ${markerColor}99;"></div>`,
                iconSize: [16, 16], iconAnchor: [8, 8]
            });

            let marker = L.marker(loc.coord, { icon: pulseIcon }).addTo(leafletMarkerGroup);
            
            // Klik memicu Papan Informasi Sidebar + Hasil Analisis
            marker.on('click', () => {
                window.updateSidebarInfo(loc);
                updateSpatialAnalysisOutput(generateLocationAnalysisHTML(loc));
            });
            marker.bindPopup(generatePremiumPopupHTML(loc), { maxWidth: 300, minWidth: 280, offset: [0, -5] });
        }
    });
}

/* =========================
   RENDER CESIUM FEATURES
========================= */
function renderCesiumFeatures() {
    if (!cesiumReady || !cesiumViewer || typeof Cesium === 'undefined') return;
    cesiumEntities.forEach(e => cesiumViewer.entities.remove(e));
    cesiumEntities = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight = document.getElementById('check-night')?.checked;
    const radius = getBufferRadius();

    locations.forEach(loc => {
        const layerVisible = (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight);
        if (!layerVisible) return;

        const color = loc.type === 'leisure' ? Cesium.Color.fromCssColorString('#10b981') : Cesium.Color.fromCssColorString('#f43f5e');
        const height = loc.type === 'leisure' ? 34 : 46;
        const markerEntity = cesiumViewer.entities.add({
            name: "📍 " + loc.name,
            position: Cesium.Cartesian3.fromDegrees(loc.coord[1], loc.coord[0], height),
            cylinder: {
                length: height,
                topRadius: 8,
                bottomRadius: 13,
                material: color.withAlpha(0.86),
                outline: true,
                outlineColor: Cesium.Color.WHITE.withAlpha(0.9)
            },
            description: generatePremiumPopupHTML(loc),
            customData: loc,
            label: {
                text: loc.name,
                font: '900 13px sans-serif',
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 3,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, -28),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 3500)
            }
        });
        cesiumEntities.push(markerEntity);

        const bufferEntity = cesiumViewer.entities.add({
            name: `Buffer ${radius} m - ${loc.name}`,
            position: Cesium.Cartesian3.fromDegrees(loc.coord[1], loc.coord[0], 0.7),
            ellipse: {
                semiMajorAxis: radius,
                semiMinorAxis: radius,
                height: 0,
                material: color.withAlpha(loc.type === 'leisure' ? 0.08 : 0.06),
                outline: true,
                outlineColor: color.withAlpha(0.45)
            },
            customData: loc
        });
        cesiumEntities.push(bufferEntity);
    });

    if (avatarParts.length) updateAvatarVisuals();
}

/* =========================
   CORE UI INTERACTIONS & MOOD CHECK
========================= */
window.switchEngine = function(type) {
    if (type === '3d' && (!cesiumReady || !cesiumViewer)) {
        set3DUnavailable('3D belum aktif. Mode 2D tetap berjalan normal.');
        return;
    }
    currentEngine = type;
    const btn2d = document.getElementById('btn-2d');
    const btn3d = document.getElementById('btn-3d');
    const elLeaflet = document.getElementById('map-leaflet');
    const elCesium = document.getElementById('map-cesium');

    if (type === '2d') {
        window.stopGameMode3D?.();
        elLeaflet.style.zIndex = '10'; elLeaflet.style.display = 'block';
        elCesium.style.zIndex = '0'; elCesium.style.display = 'none';
        btn2d.className = "px-5 py-2 text-xs font-bold rounded-xl bg-white text-indigo-600 shadow-md cursor-pointer transition-all";
        btn3d.className = "px-5 py-2 text-xs font-bold rounded-xl text-slate-500 cursor-pointer hover:text-indigo-600 hover:bg-white/50 transition-all";
    } else {
        elCesium.style.zIndex = '10'; elCesium.style.display = 'block';
        elLeaflet.style.zIndex = '0'; elLeaflet.style.display = 'none';
        btn3d.className = "px-5 py-2 text-xs font-bold rounded-xl bg-white text-indigo-600 shadow-md cursor-pointer transition-all";
        btn2d.className = "px-5 py-2 text-xs font-bold rounded-xl text-slate-500 cursor-pointer hover:text-indigo-600 hover:bg-white/50 transition-all";
        if (gameModeActive) document.getElementById('game-hud')?.classList.remove('hidden');
        setTimeout(() => { cesiumViewer.resize(); cesiumViewer.scene.requestRender(); }, 200);
    }
}

window.cesiumFlyTo = function(lat, lng) {
    if (!cesiumReady || !cesiumViewer) {
        window.switchEngine('2d');
        leafletMap.setView([lat, lng], 17);
        document.getElementById('system-status').textContent = '3D tidak aktif. Lokasi dibuka di peta 2D.';
        return;
    }
    window.switchEngine('3d');
    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 800),
        orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-45.0), roll: 0.0 },
        duration: 2.0
    });
}

window.toggleLayers = function() {
    renderLeafletFeatures();
    renderCesiumFeatures();
    if (document.getElementById('layer-heatmap')?.checked || document.getElementById('layer-buffer')?.checked) {
        toggleAnalyticsLayers();
    }
}

window.exitIntroScreen = function() {
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => { intro.style.display = 'none'; }, 1000);
}

// MOOD CHECK SUMBIT
window.submitMood = function(mood) {
    alert(`Terima kasih! Suasana hati Anda ("${mood}") telah terekam secara anonim di Peta Sentimen Kota Depok.`);
    document.getElementById('breathing-modal').classList.add('hidden');
    clearInterval(breathInterval);
}

let breathInterval;
window.toggleBreathingModal = function() {
    const modal = document.getElementById('breathing-modal');
    const isHidden = modal.classList.toggle('hidden');
    const breathText = document.getElementById('breath-text');

    if (!isHidden) {
        let step = 0; breathText.textContent = "INHALE";
        breathInterval = setInterval(() => { step++; breathText.textContent = (step % 2 === 1) ? "EXHALE" : "INHALE"; }, 3500);
    } else {
        clearInterval(breathInterval);
    }
}

/* =========================
   FITUR 6: BACKSOUND MENYENANGKAN
========================= */
const urbanBacksound = new Audio('assets/audio/backsound.wav');
urbanBacksound.loop = true;
urbanBacksound.volume = 0.22;

window.toggleBacksound = function() {
    const btn = document.getElementById('btn-backsound');
    if (!btn) return;
    if (urbanBacksound.paused) {
        urbanBacksound.play().then(() => {
            btn.innerHTML = '🔊 Musik: ON';
            btn.classList.add('music-on');
            document.getElementById('system-status').textContent = '🎵 Backsound aktif.';
        }).catch(() => {
            document.getElementById('system-status').textContent = 'Klik sekali lagi untuk mengaktifkan backsound.';
        });
    } else {
        urbanBacksound.pause();
        btn.innerHTML = '🎵 Musik: OFF';
        btn.classList.remove('music-on');
        document.getElementById('system-status').textContent = 'Backsound dimatikan.';
    }
};

updateBufferRadiusLabel();
updateToggleBadges();




/* =========================
   MINI GAME: KARTU BAHAGIA
   Mode 3D dihapus. Game ini ringan, offline, dan aman untuk GitHub Pages.
========================= */
const happyMessages = [
    { title: 'Kartu Tenang', text: 'Hari ini tidak harus sempurna. Cukup lanjutkan pelan-pelan, satu langkah kecil tetap punya arti.' },
    { title: 'Kartu Berani', text: 'Kamu sudah melewati banyak hal. Pilihanmu untuk tetap mencoba adalah bukti kalau kamu kuat.' },
    { title: 'Kartu Fokus', text: 'Tarik napas sebentar. Pilih satu hal penting, kerjakan dengan tenang, lalu beri dirimu waktu istirahat.' },
    { title: 'Kartu Cerah', text: 'Ada banyak hal baik yang masih bisa datang hari ini. Tetap buka ruang untuk senyum kecil.' },
    { title: 'Kartu Semangat', text: 'Kamu tidak harus cepat. Yang penting tetap bergerak dan tidak terlalu keras pada diri sendiri.' },
    { title: 'Kartu Percaya Diri', text: 'Kemampuanmu tumbuh setiap kali kamu mencoba. Kesalahan bukan akhir, itu bagian dari proses belajar.' },
    { title: 'Kartu Bahagia', text: 'Ambil jeda. Minum air. Lihat sekitar. Hal sederhana juga bisa membuat pikiran terasa lebih ringan.' },
    { title: 'Kartu Damai', text: 'Tidak semua hal perlu diselesaikan sekarang. Kamu boleh mengatur ulang energi dan memulai lagi.' },
    { title: 'Kartu Apresiasi', text: 'Terima kasih sudah bertahan sejauh ini. Usahamu hari ini tetap layak dihargai.' },
    { title: 'Kartu Harapan', text: 'Langkah kecil hari ini bisa membuka jalan baru besok. Tetap percaya pada prosesmu.' },
    { title: 'Kartu Ringan', text: 'Lepaskan sedikit beban yang tidak perlu kamu bawa. Fokus pada hal yang bisa kamu kendalikan.' },
    { title: 'Kartu Senyum', text: 'Semoga ada satu hal kecil yang membuatmu tersenyum hari ini, walau cuma sebentar.' }
];

let currentHappyCards = [];
let happyCardPicked = false;

function pickRandomHappyCards() {
    const pool = [...happyMessages].sort(() => Math.random() - 0.5);
    return pool.slice(0, 4);
}

function renderHappyCards() {
    const grid = document.getElementById('happy-card-grid');
    const result = document.getElementById('happy-card-result');
    const instruction = document.getElementById('happy-card-instruction');
    if (!grid) return;

    happyCardPicked = false;
    currentHappyCards = pickRandomHappyCards();
    if (result) result.classList.add('hidden');
    if (instruction) instruction.classList.remove('hidden');

    grid.innerHTML = currentHappyCards.map((card, index) => `
        <button type="button" class="happy-card happy-card-enter" style="animation-delay:${index * 0.12}s" onclick="chooseHappyCard(${index})" aria-label="Pilih kartu bahagia ${index + 1}">
            <div class="happy-card-inner">
                <div class="happy-card-front">
                    <span class="happy-card-number">0${index + 1}</span>
                    <span class="happy-card-icon">💌</span>
                    <span class="happy-card-label">Pilih Kartu</span>
                </div>
                <div class="happy-card-back">
                    <span class="happy-back-title">${card.title}</span>
                    <span class="happy-back-text">${card.text}</span>
                </div>
            </div>
        </button>
    `).join('');
}

window.chooseHappyCard = function(index) {
    if (happyCardPicked) return;
    const card = currentHappyCards[index];
    if (!card) return;

    happyCardPicked = true;
    const cards = document.querySelectorAll('.happy-card');
    cards.forEach((el, i) => {
        if (i === index) {
            el.classList.add('is-picked');
            el.setAttribute('aria-pressed', 'true');
        } else {
            el.classList.add('is-muted');
            el.setAttribute('aria-pressed', 'false');
        }
    });

    const result = document.getElementById('happy-card-result');
    const title = document.getElementById('happy-result-title');
    const text = document.getElementById('happy-result-text');
    const instruction = document.getElementById('happy-card-instruction');
    if (title) title.textContent = card.title;
    if (text) text.textContent = card.text;
    if (instruction) instruction.classList.add('hidden');
    if (result) {
        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const statusEl = document.getElementById('system-status');
    if (statusEl) statusEl.textContent = `🎴 ${card.title} terbuka. Semoga pesan ini bikin harimu lebih ringan.`;
};

window.shuffleHappyCards = function() {
    renderHappyCards();
    const statusEl = document.getElementById('system-status');
    if (statusEl) statusEl.textContent = '🎴 Kartu Bahagia diacak ulang. Pilih satu kartu.';
};

window.openHappyCards = function() {
    const modal = document.getElementById('happy-card-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderHappyCards();
    const statusEl = document.getElementById('system-status');
    if (statusEl) statusEl.textContent = '🎴 Mini game Kartu Bahagia aktif.';
};

window.closeHappyCards = function() {
    const modal = document.getElementById('happy-card-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.focusMapLocation = function(lat, lng, name = 'Lokasi') {
    if (!leafletMap) return;
    leafletMap.setView([lat, lng], 17);
    const statusEl = document.getElementById('system-status');
    if (statusEl) statusEl.textContent = `📍 Fokus ke ${name} pada peta 2D.`;
};

// Override mode peta agar tidak ada lagi akses 3D.
window.switchEngine = function() {
    currentEngine = '2d';
    const btn2d = document.getElementById('btn-2d');
    const elLeaflet = document.getElementById('map-leaflet');
    if (elLeaflet) {
        elLeaflet.style.zIndex = '10';
        elLeaflet.style.display = 'block';
        setTimeout(() => leafletMap?.invalidateSize(), 150);
    }
    if (btn2d) btn2d.className = 'px-5 py-2 text-xs font-bold rounded-xl bg-white text-indigo-600 shadow-md cursor-pointer transition-all';
};

// Override intro: setelah masuk web, kartu muncul otomatis dengan animasi.
window.exitIntroScreen = function() {
    const intro = document.getElementById('intro-screen');
    if (!intro) {
        openHappyCards();
        return;
    }
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
        leafletMap?.invalidateSize();
        setTimeout(() => openHappyCards(), 350);
    }, 700);
};


/* =========================
   GITHUB PAGES STABILITY PATCH
========================= */
window.addEventListener('load', () => {
    setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
        if (cesiumReady && cesiumViewer) cesiumViewer.resize();
    }, 500);
});
