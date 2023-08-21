const print = {

    color(message, color) {
        console.log(`%c${message}`, `color: ${color}`);
    },

    font(message, font) {
        console.log(`%c${message}`, `font-family: ${font}`);
    },

    background(message, background) {
        console.log(`%c${message}`, `background: ${background}`);
    },

    log(message, color, font, background) {
        let style = '';

        if (color) {
            style += `color: ${color};`;
        }

        if (font) {
            style += `font-family: ${font};`;
        }

        if (background) {
            style += `background: ${background};`;
        }

        console.log(`%c${message}`, style);
    }
}

