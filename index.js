function takeANumber(line, name) {
  line.push(name);
  return ('Welcome, ' + name + '. You are number ' + line.length + ' in line.');
}

function nowServing(line) {
  if (length.line === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var name = line[0];
    line.shift();
    return ("Currently serving " + name + '.');
  }
}
