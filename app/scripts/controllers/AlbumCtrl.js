(function() {
  function AlbumCtrl() {
    this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();