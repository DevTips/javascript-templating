$(function() {
  playerCard();
});


function playerCard() {

  $('.player-card-ref').each(function() {

    var $this = $(this),
        playerName = $this.text(),
        playerNameImg = playerName.replace(/\s+/g, '-'),
        playerHeight = $this.data('height'),
        playerWeight = $this.data('weight'),
        playerPlace = $this.data('place');
    
    var template = '<div class="player-card animated flipInX">' +
      '<img src="img/' + playerNameImg + '.jpg">' +
      '<h4>' + playerName + '</h4>' +
      '<ul>' +
        '<li><strong>Height:</strong> <span>' + playerHeight + '</span></li>' +
        '<li><strong>Weight:</strong> <span>' + playerWeight + '</span></li>' +
        '<li><strong>Birthplace:</strong> <span>' + playerPlace + '</span></li>' +
      '</ul>' +
    '</div>';
    
    $this.append(template);
    
  });

}
