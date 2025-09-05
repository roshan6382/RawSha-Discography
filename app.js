// Tracks
fetch("tracks.json")
  .then(res => res.json())
  .then(tracks => {
    const trackContainer = document.getElementById("tracks-container");
    tracks.forEach(t => {
      const card = document.createElement("div");
      card.className = "track-card";
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}">
        <h3>${t.name}</h3>
        <a href="${t.spotify_url}" target="_blank">Listen on Spotify</a>
      `;
      trackContainer.appendChild(card);
    });
  })
  .catch(console.error);

