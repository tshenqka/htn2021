# Songful++

Sharing songs with our friends is one of the special ways of bonding, but sometimes, we want to share more than just a list of songs in a playlist. Each song often holds a different memory, experience, or meaning to everyone, and we want to showcase that. This is where the idea of songful++ comes in. It is a music playlist with a story.

songful++ takes a list of songs from any given Coda document and displays it on a visually appealing map. Users can share their stories through their playlists with others, or enjoy by themselves. To see more details on a song, users can click on the corresponding "planets". Users can also edit the personal note attached to each song.

**Note**: due to the restrictions of Spotify's API, we only allow select users to be able to access the app. Please email one of the authors to give you a token or whitelist your account to try it out.

## Run the app

- `npm install`
- `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

The live site is at https://suspicious-lichterman-1fb24e.netlify.app/ but again, you will need special access to login.

## Components

### Login

Checks if user is logged in by checking localStorage for saved token. If not, sends user to Spotify sign-in, gets the auth code from redirect, and gets/saves a token for later use.

### Body

Container holding all other components after logging in. Pulls list of songs from Coda document and sends to SongList component to render. Also asks Spotify for song information (name, artist, cover img) which needs Spotify token.

### Title

Display title and author of playlist

### SongList

Positions all of the Song components and delegates changes of which song is currently being played.

### Audio

Plays audio and responds to song changes. Needs Spotify token to work.

### Song

Contains the components representing one song. Fires event when clicked for component fading and audio changes.

### Note

Contains a personal note for each song. Changes made are automatically sent to Coda document in real-time.

### Stars

Add stars to background with parallax effect

### Path

Display path connecting songs