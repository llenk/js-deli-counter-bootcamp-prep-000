function takeANumber(line, name) {
  line.push(name);
  return ('Welcome, ' + name + '. You are number ' + line.length + ' in line.');
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var name = line[0];
    line.shift();
    return ("Currently serving " + name + '.');
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    lineList = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      lineList += (i + 1);
      lineList += ". ";
      lineList += name;
      lineList += ', ';
    }
    lineList.slice(0, stringg.length - 2);
  }
  return lineList;
}