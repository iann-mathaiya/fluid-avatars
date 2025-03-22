import { MeshGradient } from '@paper-design/shaders-react';
import { useState } from 'react';

const defaultColorPalette = ['#FFB238', '#FF7D10', '#FF005B', '#49007E'];

export default function FluidAvatar() {
    const [colorOne, setColorOne] = useState(defaultColorPalette[0]);
    const [colorTwo, setColorTwo] = useState(defaultColorPalette[1]);
    const [colorThree, setColorThree] = useState(defaultColorPalette[2]);
    const [colorFour, setColorFour] = useState(defaultColorPalette[3]);

    function generateNewPalette(){
        //TO DO
    }

    return (
        <button type='button' onClick={generateNewPalette} className="min-w-28 size-28 sm:min-w-20 sm:size-20 overflow-hidden rounded-2xl">
            <MeshGradient
                color1={colorOne}
                color2={colorTwo}
                color3={colorThree}
                color4={colorFour}
                speed={0.25}
                style={{ width: '100%', height: '100%' }}
            />
        </button>
    );
}