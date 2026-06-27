const PLACES = [
  {
    "id": "rth-01",
    "name": "Bendung Glendongan",
    "category": "RTH",
    "type": "Ruang terbuka hijau air",
    "lat": -7.7512,
    "lng": 110.406,
    "address": "Kawasan Glendongan, Depok, Sleman",
    "image": "Bendung Glendongan.png",
    "description": "Area hijau berbasis badan air yang berfungsi sebagai ruang resapan, koridor ekologis, dan ruang aktivitas ringan masyarakat."
  },
  {
    "id": "rth-02",
    "name": "Embung Tambakboyo",
    "category": "RTH",
    "type": "Embung dan ruang terbuka",
    "lat": -7.755,
    "lng": 110.4172,
    "address": "Tambakboyo, Condongcatur, Depok",
    "image": "Embung Tambakboyo.jpg",
    "description": "Ruang terbuka berbasis embung dengan fungsi rekreasi, pengendalian air, dan kualitas lingkungan kawasan."
  },
  {
    "id": "rth-03",
    "name": "Hutan Kota",
    "category": "RTH",
    "type": "Hutan kota",
    "lat": -7.7585,
    "lng": 110.397,
    "address": "Depok, Sleman",
    "image": "Hutan Kota.png",
    "description": "Kawasan vegetasi perkotaan yang memberi fungsi peneduh, pengendali mikroklimat, dan penyangga kualitas udara."
  },
  {
    "id": "rth-04",
    "name": "Lembah UGM",
    "category": "RTH",
    "type": "Taman kampus",
    "lat": -7.7664,
    "lng": 110.3785,
    "address": "Kawasan Universitas Gadjah Mada",
    "image": "Lembah UGM.jpg",
    "description": "RTH kampus dengan fungsi rekreasi, edukasi lingkungan, dan ruang interaksi publik."
  },
  {
    "id": "rth-05",
    "name": "Sendang Mulyo Kali Grojokan",
    "category": "RTH",
    "type": "RTH riparian",
    "lat": -7.7425,
    "lng": 110.389,
    "address": "Kali Grojokan, Depok",
    "image": "Sendang Mulyo Kali Grojokan.jpg",
    "description": "Ruang terbuka berbasis sempadan air yang mendukung konservasi lokal dan mitigasi limpasan."
  },
  {
    "id": "rth-06",
    "name": "Sendang Somobetri",
    "category": "RTH",
    "type": "Sendang dan vegetasi",
    "lat": -7.7459,
    "lng": 110.3905,
    "address": "Depok, Sleman",
    "image": "Sendang Somobetri.jpg",
    "description": "RTH lokal berbasis mata air dengan nilai ekologis dan sosial bagi lingkungan sekitar."
  },
  {
    "id": "rth-07",
    "name": "Taman Auditorium UNY",
    "category": "RTH",
    "type": "Taman kampus",
    "lat": -7.7734,
    "lng": 110.3867,
    "address": "Universitas Negeri Yogyakarta",
    "image": "Taman Auditorium UNY.jpg",
    "description": "Taman kampus yang mendukung aktivitas mahasiswa, sirkulasi pejalan kaki, dan peneduh area publik."
  },
  {
    "id": "rth-08",
    "name": "Taman Kearifan UGM",
    "category": "RTH",
    "type": "Taman edukasi",
    "lat": -7.7683,
    "lng": 110.38,
    "address": "Universitas Gadjah Mada",
    "image": "Taman Kearifan UGM.jpg",
    "description": "Taman kampus yang berperan sebagai ruang edukasi, interaksi sosial, dan peningkatan kualitas lanskap."
  },
  {
    "id": "rth-09",
    "name": "Taman Kolam Detensi Lembah UGM",
    "category": "RTH",
    "type": "Kolam detensi",
    "lat": -7.7668,
    "lng": 110.3782,
    "address": "Lembah UGM",
    "image": "Taman Kolam Detensi Lembah UGM.JPG",
    "description": "RTH berbasis kolam detensi yang membantu pengelolaan limpasan air dan memberi nilai rekreasi."
  },
  {
    "id": "rth-10",
    "name": "Taman Payung Seberang Maskan UGM",
    "category": "RTH",
    "type": "Taman lingkungan",
    "lat": -7.7657,
    "lng": 110.3828,
    "address": "Kawasan UGM",
    "image": "Taman Payung Seberang Maskan UGM.png",
    "description": "Taman kecil yang mendukung kenyamanan pejalan kaki dan ruang jeda di kawasan padat aktivitas."
  },
  {
    "id": "rth-11",
    "name": "Taman PTBB FT UNY",
    "category": "RTH",
    "type": "Taman fakultas",
    "lat": -7.7717,
    "lng": 110.3861,
    "address": "Fakultas Teknik UNY",
    "image": "Taman PTBB FT UNY.png",
    "description": "RTH kampus skala lokal yang berfungsi sebagai area resapan dan ruang sosial mahasiswa."
  },
  {
    "id": "rth-12",
    "name": "Taman Randu Alas UNY",
    "category": "RTH",
    "type": "Taman kampus",
    "lat": -7.773,
    "lng": 110.3882,
    "address": "Kawasan UNY",
    "image": "Taman Randu Alas UNY.jpg",
    "description": "Taman kampus dengan vegetasi peneduh dan fungsi ruang terbuka aktif."
  },
  {
    "id": "rth-13",
    "name": "Taman Winasutan Asri",
    "category": "RTH",
    "type": "Taman lingkungan",
    "lat": -7.7525,
    "lng": 110.4032,
    "address": "Condongcatur, Depok",
    "image": "Taman Winasutan Asri.png",
    "description": "Taman lingkungan yang melayani kebutuhan rekreasi ringan dan kualitas visual kawasan permukiman."
  },
  {
    "id": "rth-14",
    "name": "Wisdom Park UGM",
    "category": "RTH",
    "type": "Taman edukasi kampus",
    "lat": -7.7701,
    "lng": 110.3787,
    "address": "Universitas Gadjah Mada",
    "image": "Wisdom Park UGM.jpg",
    "description": "Ruang terbuka hijau kampus dengan fungsi rekreasi, edukasi, dan konservasi lanskap."
  },
  {
    "id": "hib-01",
    "name": "Blackjack Executive Karaoke & Lounge",
    "category": "Hiburan",
    "type": "Karaoke dan lounge",
    "lat": -7.7825,
    "lng": 110.3947,
    "address": "Kawasan hiburan perkotaan Yogyakarta",
    "image": "Blackjack Executive Karaoke & Lounge.png",
    "description": "Fasilitas hiburan komersial yang menjadi titik aktivitas malam dan perlu dibaca dalam konteks kedekatan dengan RTH."
  },
  {
    "id": "hib-02",
    "name": "Glow Karaoke Jogja",
    "category": "Hiburan",
    "type": "Karaoke",
    "lat": -7.7649,
    "lng": 110.4125,
    "address": "Depok, Sleman",
    "image": "Glow Karaoke Jogja.jpg",
    "description": "Titik hiburan yang memunculkan intensitas aktivitas komersial pada koridor jalan utama."
  },
  {
    "id": "hib-03",
    "name": "Happy Puppy Karaoke Keluarga Seturan",
    "category": "Hiburan",
    "type": "Karaoke keluarga",
    "lat": -7.7711,
    "lng": 110.408,
    "address": "Seturan, Depok",
    "image": "Happy Puppy Karaoke Keluarga Seturan.jpg",
    "description": "Tempat hiburan keluarga yang berada pada area aktivitas komersial Seturan."
  },
  {
    "id": "hib-04",
    "name": "Hyperbox Family Karaoke & Cafe-Resto",
    "category": "Hiburan",
    "type": "Karaoke dan restoran",
    "lat": -7.7823,
    "lng": 110.3845,
    "address": "Kawasan Gejayan dan sekitarnya",
    "image": "Hyperbox Family Karaoke & Cafe-Resto.jpg",
    "description": "Fasilitas hiburan dan kuliner yang menambah kepadatan aktivitas di koridor komersial."
  },
  {
    "id": "hib-05",
    "name": "NAV Karaoke Keluarga Yogyakarta",
    "category": "Hiburan",
    "type": "Karaoke keluarga",
    "lat": -7.7765,
    "lng": 110.3941,
    "address": "Yogyakarta",
    "image": "NAV Karaoke Keluarga Yogyakarta.jpg",
    "description": "Tempat karaoke keluarga yang menjadi simpul aktivitas hiburan pada jaringan jalan perkotaan."
  },
  {
    "id": "hib-06",
    "name": "Queen Bar Jogja",
    "category": "Hiburan",
    "type": "Bar",
    "lat": -7.7816,
    "lng": 110.3902,
    "address": "Yogyakarta",
    "image": "Queen Bar Jogja.jpg",
    "description": "Titik hiburan malam yang relevan untuk dianalisis terhadap radius buffer dan kedekatan dengan ruang publik."
  },
  {
    "id": "hib-07",
    "name": "ST.BIER Bar & Kitchen",
    "category": "Hiburan",
    "type": "Bar dan restoran",
    "lat": -7.7748,
    "lng": 110.3918,
    "address": "Yogyakarta",
    "image": "ST.BIER Bar & Kitchen.jpg",
    "description": "Fasilitas hiburan dan kuliner dengan pola aktivitas yang cenderung terkonsentrasi pada malam hari."
  },
  {
    "id": "hib-08",
    "name": "Terrace Jogja Club & Karaoke",
    "category": "Hiburan",
    "type": "Club dan karaoke",
    "lat": -7.781,
    "lng": 110.3925,
    "address": "Yogyakarta",
    "image": "Terrace Jogja Club & Karaoke.jpg",
    "description": "Titik hiburan komersial yang perlu dipantau dalam analisis kedekatan spasial."
  },
  {
    "id": "hib-09",
    "name": "The Gardens Jogja",
    "category": "Hiburan",
    "type": "Hiburan dan kuliner",
    "lat": -7.7588,
    "lng": 110.3835,
    "address": "Kawasan utara Yogyakarta",
    "image": "The Gardens Jogja.jpg",
    "description": "Ruang hiburan dan kuliner yang berada dekat dengan zona kampus dan permukiman."
  },
  {
    "id": "hib-10",
    "name": "Top40 Karaoke Keluarga",
    "category": "Hiburan",
    "type": "Karaoke keluarga",
    "lat": -7.776,
    "lng": 110.4006,
    "address": "Yogyakarta",
    "image": "Top40 Karaoke Keluarga.jpg",
    "description": "Fasilitas karaoke keluarga yang menjadi bagian dari jaringan hiburan perkotaan."
  }
];

const STUDY_BOUNDARY = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Area Studi Depok dan Sekitarnya"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              110.346,
              -7.724
            ],
            [
              110.431,
              -7.724
            ],
            [
              110.444,
              -7.76
            ],
            [
              110.433,
              -7.801
            ],
            [
              110.39,
              -7.813
            ],
            [
              110.345,
              -7.796
            ],
            [
              110.334,
              -7.755
            ],
            [
              110.346,
              -7.724
            ]
          ]
        ]
      }
    }
  ]
};

const state = {
  layers: { rth: true, hiburan: true, heatmap: true, buffer: true, boundary: true },
  bufferRadius: 500,
  bufferSource: 'all',
  selectedId: null,
  musicPlaying: false
};

let map;
let rthLayer;
let hiburanLayer;
let bufferLayer;
let boundaryLayer;
let heatLayer;
let connectionLayer;
const markerIndex = new Map();

const formatMeters = (meters) => meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${Math.round(meters)} m`;

function haversine(a, b) {
  const R = 6371000;
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function getOppositeCategory(category) {
  return category === 'RTH' ? 'Hiburan' : 'RTH';
}

function nearestOpposite(place) {
  const candidates = PLACES.filter(item => item.category === getOppositeCategory(place.category));
  return candidates
    .map(item => ({ ...item, distance: haversine(place, item) }))
    .sort((a, b) => a.distance - b.distance)[0];
}

function getVisiblePlaces() {
  return PLACES.filter(place =>
    (place.category === 'RTH' && state.layers.rth) ||
    (place.category === 'Hiburan' && state.layers.hiburan)
  );
}

function markerIcon(category) {
  return L.divIcon({
    className: '',
    html: `<div class="marker-pin ${category === 'RTH' ? 'rth' : 'hiburan'}"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28]
  });
}

function popupTemplate(place) {
  return `
    <div class="popup-card">
      <img src="data/images/${place.image}" alt="${place.name}" onerror="this.style.display='none'" />
      <h3>${place.name}</h3>
      <p><strong>${place.category}</strong> · ${place.type}</p>
      <p>${place.address}</p>
      <button type="button" onclick="selectPlace('${place.id}')">Lihat analisis</button>
    </div>
  `;
}

function initMap() {
  map = L.map('map', { zoomControl: false, preferCanvas: true }).setView([-7.7645, 110.393], 13);
  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  });

  L.control.layers({ 'OpenStreetMap': osm, 'Peta Ringan': carto }, null, { position: 'bottomleft' }).addTo(map);

  rthLayer = L.layerGroup().addTo(map);
  hiburanLayer = L.layerGroup().addTo(map);
  bufferLayer = L.layerGroup().addTo(map);
  connectionLayer = L.layerGroup().addTo(map);
  boundaryLayer = L.geoJSON(STUDY_BOUNDARY, {
    style: { color: '#176036', weight: 2, fillColor: '#25824c', fillOpacity: 0.06, dashArray: '7 7' }
  }).addTo(map);

  buildMarkers();
  updateHeatmap();
  updateBuffer();
  updateSummary();
  renderSearchResults(PLACES);
  fitAll();
}

function buildMarkers() {
  PLACES.forEach(place => {
    const marker = L.marker([place.lat, place.lng], { icon: markerIcon(place.category), title: place.name });
    marker.bindPopup(popupTemplate(place));
    marker.on('click', () => selectPlace(place.id));
    marker.on('mouseover', () => marker.openPopup());
    markerIndex.set(place.id, marker);
    if (place.category === 'RTH') rthLayer.addLayer(marker);
    else hiburanLayer.addLayer(marker);
  });
}

function updateLayerVisibility() {
  if (state.layers.rth) map.addLayer(rthLayer); else map.removeLayer(rthLayer);
  if (state.layers.hiburan) map.addLayer(hiburanLayer); else map.removeLayer(hiburanLayer);
  if (state.layers.boundary) map.addLayer(boundaryLayer); else map.removeLayer(boundaryLayer);
  updateHeatmap();
  updateBuffer();
  updateSummary();
}

function updateHeatmap() {
  if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }
  if (!state.layers.heatmap) return;

  const heatData = getVisiblePlaces().map(place => [
    place.lat,
    place.lng,
    place.category === 'Hiburan' ? 0.95 : 0.72
  ]);

  if (window.L && L.heatLayer) {
    heatLayer = L.heatLayer(heatData, {
      radius: 34,
      blur: 24,
      maxZoom: 17,
      minOpacity: 0.22,
      gradient: { 0.25: '#42b873', 0.55: '#f0cf57', 1.0: '#d75047' }
    }).addTo(map);
  } else {
    // Fallback bila plugin heatmap gagal dimuat.
    heatLayer = L.layerGroup(heatData.map(item => L.circle([item[0], item[1]], {
      radius: 180,
      color: '#d75047',
      fillColor: '#d75047',
      fillOpacity: 0.13,
      weight: 0
    }))).addTo(map);
  }
}

function bufferPlaces() {
  return getVisiblePlaces().filter(place => state.bufferSource === 'all' || place.category === state.bufferSource);
}

function updateBuffer() {
  bufferLayer.clearLayers();
  if (!state.layers.buffer) return;

  bufferPlaces().forEach(place => {
    const isRth = place.category === 'RTH';
    const circle = L.circle([place.lat, place.lng], {
      radius: state.bufferRadius,
      color: isRth ? '#25824c' : '#6a4dbb',
      fillColor: isRth ? '#25824c' : '#6a4dbb',
      fillOpacity: 0.075,
      weight: 1.5,
      dashArray: '6 6'
    }).bindTooltip(`Buffer ${formatMeters(state.bufferRadius)} · ${place.name}`, { sticky: true });
    bufferLayer.addLayer(circle);
  });
}

function statusByDistance(distance) {
  if (distance <= 300) return { label: 'Dekat, perlu perhatian', cls: 'status-close' };
  if (distance <= 700) return { label: 'Sedang, perlu dipantau', cls: 'status-watch' };
  return { label: 'Relatif aman', cls: 'status-safe' };
}

function placesInsideBuffer(sourceCategory, targetCategory) {
  const sources = PLACES.filter(p => sourceCategory === 'all' || p.category === sourceCategory);
  const targets = PLACES.filter(p => targetCategory === 'all' || p.category === targetCategory);
  const matched = [];
  sources.forEach(source => {
    targets.forEach(target => {
      if (source.id !== target.id && haversine(source, target) <= state.bufferRadius) {
        matched.push({ source, target, distance: haversine(source, target) });
      }
    });
  });
  return matched;
}

function updateSummary() {
  const rthCount = PLACES.filter(p => p.category === 'RTH').length;
  const hibCount = PLACES.filter(p => p.category === 'Hiburan').length;
  const rthToHib = PLACES.filter(p => p.category === 'RTH').map(p => nearestOpposite(p).distance);
  const avgDistance = rthToHib.reduce((sum, value) => sum + value, 0) / rthToHib.length;
  const pairs = placesInsideBuffer('RTH', 'Hiburan');

  const summaryGrid = document.getElementById('summaryGrid');
  summaryGrid.innerHTML = `
    <div class="metric"><b>${rthCount}</b><span>Total RTH</span></div>
    <div class="metric"><b>${hibCount}</b><span>Total hiburan</span></div>
    <div class="metric"><b>${formatMeters(avgDistance)}</b><span>Rata-rata RTH ke hiburan terdekat</span></div>
    <div class="metric"><b>${pairs.length}</b><span>Pasangan masuk buffer ${formatMeters(state.bufferRadius)}</span></div>
  `;
}

function updateConnection(place, nearest) {
  connectionLayer.clearLayers();
  const line = L.polyline([[place.lat, place.lng], [nearest.lat, nearest.lng]], {
    color: '#bd3f32',
    weight: 3,
    opacity: 0.85,
    dashArray: '8 8'
  }).addTo(connectionLayer);
  map.fitBounds(line.getBounds(), { padding: [80, 80], maxZoom: 16 });
}

function selectPlace(id) {
  const place = PLACES.find(item => item.id === id);
  if (!place) return;
  state.selectedId = id;
  const marker = markerIndex.get(id);
  if (marker) { marker.openPopup(); }
  const nearest = nearestOpposite(place);
  updateConnection(place, nearest);
  renderDetailAnalysis(place, nearest);
}

window.selectPlace = selectPlace;

function renderDetailAnalysis(place, nearest) {
  const distance = nearest.distance;
  const status = statusByDistance(distance);
  const inside = distance <= state.bufferRadius;
  const nearby = PLACES
    .filter(item => item.id !== place.id)
    .map(item => ({ ...item, distance: haversine(place, item) }))
    .filter(item => item.distance <= state.bufferRadius)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  const explanation = place.category === 'RTH'
    ? 'Titik RTH ini dianalisis terhadap kedekatannya dengan fasilitas hiburan. Semakin dekat jaraknya, semakin tinggi kebutuhan pengelolaan kebisingan, keamanan, dan kenyamanan ruang publik.'
    : 'Titik hiburan ini dianalisis terhadap kedekatannya dengan RTH. Kedekatan tinggi perlu dibaca sebagai potensi konflik fungsi, terutama pada jam aktivitas malam.';

  document.getElementById('detailAnalysis').innerHTML = `
    <div class="detail-box">
      <img class="detail-img" src="data/images/${place.image}" alt="${place.name}" onerror="this.style.display='none'" />
      <div class="detail-content">
        <h3>${place.name}</h3>
        <p><strong>${place.category}</strong> · ${place.type}</p>
        <p>${place.description}</p>
        <p>${explanation}</p>
        <span class="status-pill ${status.cls}">${status.label}</span>
        <p><strong>Jarak terdekat ke ${nearest.category}:</strong> ${formatMeters(distance)} dari ${nearest.name}.</p>
        <p><strong>Status buffer ${formatMeters(state.bufferRadius)}:</strong> ${inside ? 'Masuk radius buffer.' : 'Di luar radius buffer.'}</p>
        <p><strong>Titik lain dalam buffer:</strong> ${nearby.length ? nearby.map(item => `${item.name} (${formatMeters(item.distance)})`).join(', ') : 'Tidak ada titik lain pada radius ini.'}</p>
      </div>
    </div>
  `;
  updateSummary();
}

function renderSearchResults(list) {
  const container = document.getElementById('resultList');
  container.innerHTML = list.map(place => `
    <button type="button" class="result-item" data-result-id="${place.id}">
      <strong>${place.name}</strong>
      <span>${place.category} · ${place.type}</span>
    </button>
  `).join('');

  container.querySelectorAll('[data-result-id]').forEach(button => {
    button.addEventListener('click', () => selectPlace(button.dataset.resultId));
  });
}

function fitAll() {
  const group = L.featureGroup(PLACES.map(place => L.marker([place.lat, place.lng])));
  map.fitBounds(group.getBounds().pad(0.16));
}

function resetAnalysis() {
  state.selectedId = null;
  connectionLayer.clearLayers();
  document.getElementById('detailAnalysis').innerHTML = '';
  document.getElementById('searchInput').value = '';
  renderSearchResults(PLACES);
  fitAll();
  updateSummary();
}

function setupControls() {
  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.toggle;
      state.layers[key] = !state.layers[key];
      button.classList.toggle('active', state.layers[key]);
      button.setAttribute('aria-pressed', String(state.layers[key]));
      button.querySelector('span').textContent = state.layers[key] ? 'ON' : 'OFF';
      updateLayerVisibility();
    });
  });

  document.getElementById('bufferRange').addEventListener('input', event => {
    state.bufferRadius = Number(event.target.value);
    document.getElementById('bufferLabel').textContent = formatMeters(state.bufferRadius);
    updateBuffer();
    if (state.selectedId) {
      const place = PLACES.find(item => item.id === state.selectedId);
      renderDetailAnalysis(place, nearestOpposite(place));
    } else {
      updateSummary();
    }
  });

  document.querySelectorAll('[data-buffer-source]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-buffer-source]').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      state.bufferSource = button.dataset.bufferSource;
      updateBuffer();
    });
  });

  document.getElementById('searchInput').addEventListener('input', event => {
    const keyword = event.target.value.trim().toLowerCase();
    const filtered = PLACES.filter(place =>
      place.name.toLowerCase().includes(keyword) ||
      place.category.toLowerCase().includes(keyword) ||
      place.type.toLowerCase().includes(keyword)
    );
    renderSearchResults(filtered);
  });

  document.getElementById('btnFitAll').addEventListener('click', fitAll);
  document.getElementById('btnReset').addEventListener('click', resetAnalysis);

  document.getElementById('btnSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    setTimeout(() => map.invalidateSize(), 240);
  });

  const audio = document.getElementById('backsound');
  const musicButton = document.getElementById('musicToggle');
  musicButton.addEventListener('click', async () => {
    try {
      if (audio.paused) {
        audio.volume = 0.28;
        await audio.play();
        musicButton.textContent = '♫ Musik: ON';
        musicButton.classList.add('playing');
      } else {
        audio.pause();
        musicButton.textContent = '♫ Musik: OFF';
        musicButton.classList.remove('playing');
      }
    } catch (error) {
      musicButton.textContent = 'Klik ulang musik';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupControls();
});
