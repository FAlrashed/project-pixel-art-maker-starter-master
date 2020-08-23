function makeGrid() {
  //variables
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  const table = document.getElementById('pixelCanvas');
// Clear squares
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
// table loops
  for (t = 0; t < gridHeight; t++) {
    const ro = document.createElement('tr');
    table.appendChild(ro);
    for (d = 0; d < gridWidth; d ++) {
      const co = document.createElement('td');
      ro.appendChild(co);
      // Add click event listner to the table
      table.addEventListener('click', function(ev) {
		if (ev.target.nodeName == "TD"){          // When the squares is clicked, Change the background color to the selected color
          ev.target.style.backgroundColor = document.getElementById('colorPicker').value;

}      });
    }
  }
}

// Add an Event Listener to the submit button
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
// When size is submitted by the user, call makeGrid
  makeGrid();
});
