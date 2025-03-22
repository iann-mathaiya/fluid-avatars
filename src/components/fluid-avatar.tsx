import { useState } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { selectColorPalette } from '../lib/utils';

const defaultColorPalette = ['#FFB238', '#FF7D10', '#FF005B', '#49007E'];

export default function FluidAvatar() {
    const [colorOne, setColorOne] = useState(defaultColorPalette[0]);
    const [colorTwo, setColorTwo] = useState(defaultColorPalette[1]);
    const [colorThree, setColorThree] = useState(defaultColorPalette[2]);
    const [colorFour, setColorFour] = useState(defaultColorPalette[3]);

    function generateNewPalette(){
        const selectedPalette = selectColorPalette();

        setColorOne(selectedPalette[0]);
        setColorTwo(selectedPalette[1]);
        setColorThree(selectedPalette[2]);
        setColorFour(selectedPalette[3]);
    }

    return (
        <button type='button' onClick={generateNewPalette} className="min-w-28 size-28 sm:min-w-20 sm:size-20 overflow-hidden rounded-2xl hover:cursor-pointer shadow-2xl">
            <MeshGradient
                color1={colorOne}
                color2={colorTwo}
                color3={colorThree}
                color4={colorFour}
                speed={0.4}
                style={{ width: '100%', height: '100%' }}
            />
        </button>
    );
}