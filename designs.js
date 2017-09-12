function getGridDimensions() {
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    return [height, width];
}

function makeGrid(height, width) {
    const pixelCanvas = $('#pixel_canvas');

    // clear out a previous canvas if defined
    pixelCanvas.empty();

    for (let row = 0; row < height; row++) {
        pixelCanvas.append('<tr id="pixel-row-' + row + '"></tr>');
        console.log(row);

        const pixelRow = $('#pixel-row-' + row);
        for (let col = 0; col < width; col++) {
            pixelRow.append('<td id="pixel-col-' + col + '"></td>');
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
