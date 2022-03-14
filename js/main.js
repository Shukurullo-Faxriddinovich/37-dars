
var elList = document.querySelector(".list");

for (var pokemon of pokemons){

  var newItem = document.createElement("li");
  var newImg = document.createElement("img");
  var newTitle = document.createElement("h3");
  var newNum = document.createElement("number");
  var newEgg = document.createElement("p");
  var newDateTime =  document.createElement("time");
  var newHeight =  document.createElement("span");
  var newWeight = document.createElement("span");

  


  newTitle.textContent = pokemon.name;
  newHeight.textContent = pokemon.height;
  newWeight.textContent = pokemon.weight;
  newNum.textContent = pokemon.num;
  newImg.textContent = pokemon.img;
  newEgg.textContent = pokemon.egg;
  newDateTime.textContent = dateFormat();



  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("class", "list__img");
  newTitle.setAttribute("class", "list__heading");
  newDateTime.setAttribute("class", "list__datetime");
  newHeight.setAttribute("class", "list__height");
  newWeight.setAttribute("class", "list__weight");


newItem.appendChild(newNum);
newItem.appendChild(newImg);
newItem.appendChild(newTitle);
newItem.appendChild(newHeight);
newItem.appendChild(newWeight);
newItem.appendChild(newEgg);
newItem.appendChild(newDateTime);
elList.appendChild(newItem);

}
