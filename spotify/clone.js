const client_id = '2c83000a3d1d4a0abf794801f45216ee';
const client_secret = 'a625e4bd5ba74f2f89634641347c0d50';
let token = '';

async function fetchToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    token = data.access_token;
}

async function searchTracks(query) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();
    displayTracks(data.tracks.items);
}

function displayTracks(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('col-md-3', 'mb-4');
        trackElement.innerHTML = `
            <div class="card h-100 song-card">
                <img src="${track.album.images[0].url}" class="card-img-top" alt="${track.name}">
                <div class="card-body">
                    <h5 class="card-title">${track.name}</h5>
                    <p class="card-text">${track.artists[0].name}</p>
                    <audio controls>
                        <source src="${track.preview_url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `;
        resultsContainer.appendChild(trackElement);
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchSong').value;
    if (query) {
        searchTracks(query);
    }
});

fetchToken();
