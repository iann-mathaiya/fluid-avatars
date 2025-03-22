import { MeshGradient } from '@paper-design/shaders-react';

export default function FluidAvatar() {
    return (
        <div className="min-w-28 size-28 sm:min-w-20 sm:size-20 overflow-hidden rounded-2xl">
            <MeshGradient
                color1="#FFB238"
                color2="#FF7D10"
                color3="#FF005B"
                color4="#49007E"
                speed={0.25}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}