import colorPalettes from '../components/color-palette/100.json';

export function selectColorPalette() {
    const randomPaletteIndex = Math.floor(Math.random() * colorPalettes.length);
    const selectedPalette = colorPalettes[randomPaletteIndex];

    return selectedPalette;
}