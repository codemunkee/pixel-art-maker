function getGridDimensions() {
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    return [height, width];
}

function updateCellColor(pixelCell) {
    $('#' + pixelCell.target.id).css('background-color', $('#colorPicker').val());
}

function makeGrid(height, width) {

    // clear out any previous canvas
    $('#pixel_canvas').empty();

    // then build the canvas
    for (let row = 0; row < height; row++) {
        const pixelRow = document.createElement('tr');
        $(pixelRow).attr('id', 'pixel-row-' + row);
        $('#pixel_canvas').append(pixelRow);

        for (let col = 0; col < width; col++) {
            const pixelCoord = 'pixel-coord-' + row + '-' + col;
            const pixelCell = document.createElement('td');
            $(pixelCell).attr('id', pixelCoord);
            $(pixelCell).css('background-color', $('#colorPicker').val());

            // add an event listener to the element so we can update its color
            $(pixelCell).click((evt) => { updateCellColor(evt)});

            pixelRow.append(pixelCell);
        }
    }
}

/* On Document Ready */
$(() => {
    let [gridHeight, gridWidth] = getGridDimensions();
    makeGrid(gridHeight, gridWidth);

    $('#sizePicker').submit((evt) => {
        evt.preventDefault();
        [gridHeight, gridWidth] = getGridDimensions();
        makeGrid(gridHeight, gridWidth);
    })
});
