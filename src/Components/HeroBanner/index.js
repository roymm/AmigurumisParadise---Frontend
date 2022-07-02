import React from 'react';

function HeroBanner(props) {
    return (
        <div className="w-full relative">
            <div className="w-full h-full flex flex-col absolute top-80 left-0 justify-center items-center z-40">
                <div className="items-center bg-pastelGreen p-8">
                    <div className="text-6xl font-bold text-pastelLightPink">
                        {props.title}
                    </div>
                    <div className="text-2xl text-pastelLightPink">
                        {props.subtitle}
                    </div>
                </div>
            </div>

            <img src={props.src} />

        </div>
    );
}

export default HeroBanner;