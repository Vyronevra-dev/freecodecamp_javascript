const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

// 1. Flatten playlists and add the original source indices
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const flattened = [];
  playlists.forEach((playlist, playlistIndex) => {
    if (Array.isArray(playlist)) {
      playlist.forEach((track, trackIndex) => {
        flattened.push({
          ...track,
          source: [playlistIndex, trackIndex]
        });
      });
    }
  });

  return flattened;
}

// 2. Score tracks using the formula: votes * 10 - Math.abs(bpm - 120)
function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

// 3. Remove duplicate tracks, keeping only the first occurrence
function dedupeTracks(tracks) {
  const seenIds = new Set();
  const uniqueTracks = [];

  for (const track of tracks) {
    if (!seenIds.has(track.trackId)) {
      seenIds.add(track.trackId);
      uniqueTracks.push(track);
    }
  }

  return uniqueTracks;
}

// 4. Limit the maximum occurrences of each artist, keeping earliest ones
function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};
  const filteredTracks = [];

  for (const track of tracks) {
    const currentCount = artistCounts[track.artist] || 0;
    if (currentCount < maxPerArtist) {
      artistCounts[track.artist] = currentCount + 1;
      filteredTracks.push(track);
    }
  }

  return filteredTracks;
}

// 5. Build 1-based index broadcast schedule slots
function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

// 6. Master function chaining the pipeline steps sequentially
function remixPlaylist(playlists, maxPerArtist) {
  const flat = flattenPlaylists(playlists);
  const scored = scoreTracks(flat);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(quotaEnforced);
}
