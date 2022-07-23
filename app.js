//Part 1
//Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

const factsArray = [];

for (i = 1; i < 5; i++) {
  factsArray.push($.get("http://numbersapi.com/14"));
}

Promise.all(factsArray).then(function (arr) {
  for (fact of arr) {
    $("body").append(`<p>${fact}</p>`);
  }
});

//Part 2

//2
const res = $.get(
  "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
);

res
  .then((data) => {
    console.log(data);
    return $.get(
      `http://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
    );
  })
  .then((cards) => {
    for (card of cards.cards) {
      console.log(`${card.value} of ${card.suit}`);
    }
  });

//3

const res = $.get(
  "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
);

res
  .then((data) => {
    return data;
  })
  .then((data) => {
    $("#button").on("click", () => {
      $.get(
        `http://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`
      ).then((card) => {
        $("body").append(`<img src="${card.cards[0].image}" alt="">`);
      });
    });
  });
