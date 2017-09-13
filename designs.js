function getGridDimensions() {
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    return [height, width];
}

function makeGrid(height, width) {
    const pixelCanvas = $('#pixel_canvas');

    // clear out any previous canvas
    pixelCanvas.empty();

    // construct the new canvas
    for (let row = 0; row < height; row++) {
        pixelCanvas.append('<tr id="pixel-row-' + row + '"></tr>');

        const pixelRow = $('#pixel-row-' + row);

        const bgColor = $('#colorPicker').val();

        for (let col = 0; col < width; col++) {
            const pixelCoord = 'pixel-coord-' + row + '-' + col;
            const pixelCell = document.createElement('td')
            $(pixelCell).attr('id', pixelCoord);
            $(pixelCell).css('background-color', bgColor)
            pixelRow.append(pixelCell);
        }
    }
}

/* On Document Ready */
$(() => {
    let [gridHeight, gridWidth] = getGridDimensions();
    makeGrid(gridHeight, gridWidth);

    $('#sizePicker').submit((event) => {
        event.preventDefault();
        [gridHeight, gridWidth] = getGridDimensions();
        makeGrid(gridHeight, gridWidth);
    })
});
