function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  let allRankedLists = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < allRankedLists.length; i++) {allRankedLists[i].innerHTML = parseInt(allRankedLists[i].innerHTML) + n;
  }
}


function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  
  // let grandNodeDescendants = grandNode.querySelectorAll('div');
  // return grandNodeDescendants[grandNodeDescendants.length-1]
  
  let child = grandNode.children[ 0 ];
  while ( child ) {
    grandNode = child;
    child = grandNode.children[ 0 ];
  }
  return grandNode;
}