const cards = (["Charlie", "Samip", "Ali"], "surprise");

function writeCards(cards, surprise) {
    const messages  = []
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);

  };

  return messages;

}


function countDown() {

    for (let countDown = 10; countDown >-1; countDown--) {
        console.log(countDown);
    }
    
    }