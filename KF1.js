//Location
document.querySelector("#btn").addEventListener("click", () => {
  var x = location.host;
  document.getElementById("loc").innerHTML = x;
});

//queryselector
document.querySelector("#btn2").addEventListener("click", () => {
  document.querySelector(".class").style.backgroundColor = "pink";
});

//arrow function
document.querySelector("#btn3").addEventListener("click", () => {
  document.getElementById("af").innerHTML = "It Works!";
  console.log("Test");
});

//add eventlistener
document.getElementById("btn4").addEventListener("click", function () {
  document.getElementById("el").innerHTML = "Hello";
});

//filter
var val = [3, 2, 8, 23];

function check(val) {
  return val >= 6;
}

// appendchild
function myFunction() {
  var node = document.createElement("li");
  var textnode = document.createTextNode("Apple");
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
//createelement
function myFunction1() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
}

function myFunction2() {
  document.getElementById("value").innerHTML = val.filter(check);
}

//map
document.querySelector("#btn5").addEventListener("click", () => {
  var add = [1, 2, 3, 4];
  var array = add.map((num) => num + 1);

  for (var x = 0; x < array.length; x++) {
    var list = document.createElement("p");
    list.innerHTML = array[x];
    document.getElementById("add").appendChild(list);
  }

  //Reduce
  var numbers = [4, 8, 12];

  document.getElementById("sub").innerHTML = numbers.reduce(myFunc);

  function myFunc(total, num) {
    return total - num;
  }
});
