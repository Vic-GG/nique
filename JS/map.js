function showMap() {
  const lat = 40.4168;
  const lon = -3.7038;

  const map = L.map("map").setView([lat, lon], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lon]).addTo(map).bindPopup("Tai Restaurant Food").openPopup();
}

showMap();
