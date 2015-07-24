 function loop_size(node){
  var nodes = [];
  var i = 0;
  var num;

  while(1) {
    nodes.push(node);
    var x = nodes.indexOf(node.next);
    if(x < 0) {
      i++;
      node = node.next;
    }
    else {
      num = i - x + 1;
      break;
    }
  }

  return num;
}
