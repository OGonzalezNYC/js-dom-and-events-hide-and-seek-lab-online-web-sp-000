function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget(nested, target) {
  return document.querySelector( '#nested .target' )
  // let nest = document.getElementById('nested')
  // return nest.getElementsByClassName('target') RETURNS AN ARRAY, AS INDICATED BY THE PLURAL "Elements"
}


function increaseRankBy(n) {
  let x = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = (parseInt(x[i].innerHTML) + n)
  }
  // return x
}

// function increaseRankBy(n) {
//   let allRankedLists = document.querySelectorAll('.ranked-list li');
//   for (let i = 0; i < allRankedLists.length; i++) {allRankedLists[i].innerHTML = parseInt(allRankedLists[i].innerHTML) + n;
//   }
// }


function deepestChild() {
  return document.querySelector('div#grand-node').children[0].children[0].children[0].children[0]
}

// function deepestChild() {
//   let grandNode = document.querySelector('#grand-node');
//   let child = grandNode.children[ 0 ];
//   while ( child ) {
//     grandNode = child;
//     child = grandNode.children[ 0 ];
//   }
//   return grandNode;
// }