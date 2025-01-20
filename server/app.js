// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
 //getting the all artist
  app.get('/artists/:artistid', (req, res,next) => {
    res.status(200).json(getArtistByArtistId(req.params.artistid));
    next();
  });

  //edit a specific artist by id
  // app.put('/artists/:artistid/', (req, res, next) => {
  //   res.status(200).json(editArtistByArtistId(req.body.artistid))
  //   next();
  // });
  

app.patch('/artists/:artistid', (req, res,next) => {
  const artistId = req.params.artistid; // Get artistId from the URL parameter
  const data = req.body; // Get the updated data from the request body
  res.status(200).json(editArtistByArtistId(artistId, data));
  next();

  
});

  
  
// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}