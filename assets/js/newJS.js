const result = fetch("https://dummyjson.com/products") 
  .then(function (result) {
    return result.json();
  }) 
  .then(function (result) {
    displayData(result.products);
  });
function displayData(myArrey) {
  myArrey.forEach(function (item) {
    const cardsArea = document.querySelector(".create-card");
  cardsArea.append(`
            
            <div class="card col-md-3 col-xs-12">
      <img class="card-img-top" src="{item.images[0]}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${item.title}</p>
        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
        <span class="red">79.55$</span> </div>
    </div>
            `);


    
  });
}
