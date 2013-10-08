/**
 * @class Player
 * Player representation (just a mocked one).
 */
function Player() {
}
/**
 * play a song.
 * @param {Song} song to play
 */
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};
/**
 * pause a song.
 */

Player.prototype.pause = function() {
  this.isPlaying = false;
};
/**
 * resume a song.
 */

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};
/**
 * set the current song as favorite.
 * @param {String} song to play
 */
Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};