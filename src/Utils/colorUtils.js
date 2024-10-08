/**
 * Generates a random color that is not too similar to #333 and is sufficiently bright.
 * @returns {string} A hexadecimal color string (e.g., "#a1b2c3")
 */
export function getRandomColor() {
    const minBrightness = 100; // Minimum brightness to ensure visibility
    const excludeRange = 30; // Range around #333 to exclude

    while (true) {
        const color = Math.floor(Math.random() * 16777215);
        const r = (color >> 16) & 255;
        const g = (color >> 8) & 255;
        const b = color & 255;

        // Check if the color is too close to #333
        const isNear333 = Math.abs(r - 51) < excludeRange &&
            Math.abs(g - 51) < excludeRange &&
            Math.abs(b - 51) < excludeRange;

        // Check if the color is bright enough
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        if (!isNear333 && brightness >= minBrightness) {
            return "#" + color.toString(16).padStart(6, '0');
        }
    }
}

/**
 * Calculates the perceived brightness of a color.
 * @param {string} hexColor - The color in hexadecimal format (e.g., "#a1b2c3")
 * @returns {number} The perceived brightness value (0-255)
 */
export function getColorBrightness(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
}

/**
 * Checks if two colors are similar based on a threshold.
 * @param {string} color1 - First color in hexadecimal format
 * @param {string} color2 - Second color in hexadecimal format
 * @param {number} threshold - Similarity threshold (0-255)
 * @returns {boolean} True if colors are similar, false otherwise
 */
export function areColorsSimilar(color1, color2, threshold = 30) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    return Math.abs(r1 - r2) < threshold &&
        Math.abs(g1 - g2) < threshold &&
        Math.abs(b1 - b2) < threshold;
}