"use strict";
function distanceBetweenCoordinates(x1, x2, y1, y2) {
    return +Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
}
