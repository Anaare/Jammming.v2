# Jammming 🎵

A React web application that integrates with the Spotify API, allowing users to search for songs, create custom playlists, and save them directly to their Spotify account — all in a sleek, interactive interface.

---

## Features

✅ User authentication with Spotify  
✅ Search tracks by artist, song, or album  
✅ Add and remove tracks from a custom playlist  
✅ Rename playlists dynamically  
✅ Save playlists directly to Spotify  
✅ Scrollable search results and playlist views for smooth UX

---

## Demo

**Live demo:** [https://jammming-final.netlify.app](https://jammming-final.netlify.app)

---

## Tech Stack

- Frontend: React.js (functional components, hooks)
- Authentication: Spotify OAuth
- Styling: CSS Modules
- State Management: React state/hooks
- Deployment: Netlify

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/jammming.git
   cd jammming
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Set up Spotify credentials:
   - Create a .env file at the root of your project
   - Add your Spotify client ID and redirect URI (if applicable), for example:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
   REACT_APP_REDIRECT_URI=http://localhost:5173/
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. Open your browser to http://localhost:5173

## Usage

- Click Authorize Spotify to log in to your Spotify account

- Use the search input to find tracks by artist, song name, or album

- Click Add to include tracks in your playlist

- Modify the playlist name by editing the input field

- Remove tracks using the Remove button next to each song

- When ready, click Save to Spotify to save the playlist to your account
