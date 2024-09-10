const friends = ["Guadalupe", "Ollie", "Aki"];
const occassion = "surprise";

function writeCards(friends, occassion) {
  let messages = [];
  for (let i = 0; i< friends.length; i++) {
    messages.push(`Thank you, ${friends[i]}, for the wonderful ${occassion} gift!`);
  };

  return messages;
}

function countDown() {
  for (let count = 10; count >-1; count--) {
    console.log(count);
  }
}