let cocktailURL = 'brothersdrake.json';

// Load JSON function

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function main() {

  cocktailList = await getJson(cocktailURL);
  cocktailDrinks = cocktailList.DRINKS;

  drinksAll = cocktailDrinks.sort( compare ) // alphabetize list
  console.log(drinksAll.length);

  // MAKE HTML

  var output = ''
  for(var i=0; i<drinksAll.length;i++){
    // HTML MAKER

    output += '<div>';
    output += '<div>';
    output += '<p class="name">'+drinksAll[i].name+'</p>';
    output += '<ul class="ing">';

    for(var k=0; k<drinksAll[i].ingredients.length;k++){
      output += '<li>'+drinksAll[i].ingredients[k]+'</li>';
    }
    if(drinksAll[i].garnish !== ''){
      output += '<li>'+drinksAll[i].garnish+'</li>';
    }
    output += '</ul>'
    output += '<div class="directions">'
    output += '<p>'+drinksAll[i].directions+'</p>';
    output += '</div>';
    output += '</div>';
    output += '</div>';


  }
  document.getElementById('matchDrinks').innerHTML = output;

  
}

main();

// Search By Name

// COMPARISON FUNCTION
function compare(a,b) {

  var aTitle = a.name.toLowerCase(),
      bTitle = b.name.toLowerCase();
  
  aTitle = removeArticles(aTitle);
  bTitle = removeArticles(bTitle);

  if ( aTitle < bTitle ){
    return -1;
  }
  if ( aTitle > bTitle ){
    return 1;
  }
  return 0;
}

// REMOVE ARTICLES

function removeArticles(str) {
  words = str.split(" ");
  if(words.length <= 1) return str;
  if( words[0] == 'a' || words[0] == 'the' || words[0] == 'an' )
    return words.splice(1).join(" ");
  return str;
}