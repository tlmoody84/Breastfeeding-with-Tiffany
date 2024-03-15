
//Why doesn't this work?
let customerReviews = [
  {
    "reviewerName": "Lovy Blue", "reviewText": "Mother's Milk is an awesome agency. The owner and staff really helped me through the beginning stages", "stars": 5
  },
  {
    "reviewerName": "Hiro White", "reviewText": "I never knew the importance the man plays in the nursing process. This company has really made me aware.", "stars": 5
  },
  {
    "reviewerName": "Kellie Noel", "reviewText": "Awesome company. Please, if you are in are not sure about breastfeeding, I recommend Mother's Milk.", "stars": 5
  }
]


function displayReviews() {
  
  let reviewCards = document.getElementById("review-cards");
  console.log(reviewCards);
  for (let i = 0; i < customerReviews.length; i++) {
    let body = `Reviewed by ${customerReviews[i].reviewerName} rated ${customerReviews[i].stars}`;
    let card = `
    <div class="card">
      <div class="card-title">${customerReviews[i].reviewText}</div>
      <div class="card-body">${body}</div>
    </div>
  `
    reviewCards.innerHTML += card;

  }
}
displayReviews()

