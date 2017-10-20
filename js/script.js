window.onload = function(){
  var covfefeisms = function(){
    var copy = [
      "Big League",
      "Yuge",
      "Believe me",
      "Bad Hombres Roasts",
      "Win",
      "Big Beautiful Roasts",
      "Covfefe",
      "Make Coffee Great Again",
      "Coming Soon..."
    ];
    var node = document.getElementsByTagName("p")[0];
    var dafuq = node[0];
    console.log(node);

    var index = 0;
    var step = function() {
      node.textContent = copy[index % copy.length];
      index++;
      setTimeout(step, 1500);
    };
    step();
  };

  covfefeisms();
};
