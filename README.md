# Jammming - Spotify Playlist Creator

A React web application that allows users to search for songs using the Spotify API, create custom playlists, and save them directly to their Spotify account.  
Built with React, it features dynamic search, adding/removing tracks, and persistent playlist saving.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)

---

## About the Project

Jammming is a full React front-end app that integrates with the Spotify Web API to give users the ability to search Spotify’s massive music library and curate their own playlists. Users can preview tracks, add or remove songs from their playlists, rename playlists, and save their creations directly to their Spotify account.

This project was built as a part of learning and mastering React, working with APIs, handling authentication tokens, and managing state effectively in modern front-end development.

---

## Features

- User authentication with Spotify
- Search tracks by keywords (artist, song, album)
- Add tracks to a custom playlist
- Remove tracks from the playlist
- Rename playlists on the fly
- Save playlists directly to Spotify account
- Scrollable results and playlist views for better UX

---

## Demo

# Jammming 🎵

🌐 **Live demo:** [https://jammming-final.netlify.app](https://jammming-final.netlify.app)

---

## Technologies

- React.js (Functional components, hooks)
- Spotify Web API
- CSS Modules for scoped styling
- Git & GitHub for version control
- Optional: Deployment on Netlify / Vercel / GitHub Pages

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Spotify Developer account with client credentials (client ID, client secret)

### Installation

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
