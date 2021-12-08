let url = 'https://deckofcardsapi.com/api'


   async function getCard(){
     let data = await axios.get(`${url}/deck/new/draw/?json`);
     let suit = data.data.cards[0].suit
     let value = data.data.cards[0].value
     console.log(`${value} of ${suit}`)
   }

getCard()


    async function drawMultipleCards(){
        let card1 = await axios.get(`${url}/deck/new/draw/?json`);
        let deckId = card1.data.deck_id
        console.log(card1)
        let card2 = await axios.get(`${url}/deck/${deckId}/draw/?json`)
        console.log(card2)

        cardSuit1 = card1.data.cards[0].suit
        cardSuit2 = card2.data.cards[0].suit

        cardValue1 = card1.data.cards[0].value
        cardValue2 = card2.data.cards[0].value
        console.log(`
            ${cardValue1} of ${cardSuit1}
            ${cardValue2} of ${cardSuit2} 
        `)
   }

drawMultipleCards()



   
let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${url}/deck/new/shuffle/`).then(data => {
  deckId = data.deck_id;
  $btn.show();
});

$("#draw-card").on('click', function() {
  $.getJSON(`${url}/deck/${deckId}/draw/`).then(data => {
    let cardSrc = data.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $('#pile').append(
      $('<img>', {
        src: cardSrc,
        css: {
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
});


