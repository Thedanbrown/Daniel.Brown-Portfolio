import React from 'react';
import './BackgroundAnimation.css';

// background svg animation for our about me section
const BackgroundAnimation = () => (
    <div className="svg-container">
        <svg 
            viewBox="0 0 288 288"
            x="0px" y="0px"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMinYMin meet"
            className="svg"
            >

        <g transform="translate(144,144)" stroke-width="2" stroke="#444444" fill="none" >
            <circle cx="0" r="110" stroke-width="2" stroke="#999999" fill="">
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="scale" 
                    values="1;0.2;1" 
                    dur="9s" 
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="0" r="64" stroke-width="4" stroke="cyan">
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="scale" 
                    values="1.2;0.4;1.2" 
                    dur="5s" 
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="0" r="32" stroke-width="2" stroke="cyan">
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="scale" 
                    values="1;2;1" 
                    dur="5s" 
                    repeatCount="indefinite"
            />
            </circle>
            <circle cx="0" r="16" stroke-width="2" stroke="cyan">
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="scale" 
                    values="0.6;1.2;0.6" 
                    dur="3s" 
                    repeatCount="indefinite"
                />
            </circle>
        <g>
            <circle cx="64" r="64"/>
            <circle cx="64" r="64"  transform="rotate(120)"/>
            <circle cx="64" r="64"  transform="rotate(240)"/>
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="rotate" 
                    values="0 0 0; 360 0 0" 
                    dur="10s" 
                    additive="sum" 
                    repeatCount="indefinite"
		        />
        </g>
        <g>
            <circle cx="64" r="64" transform="rotate(60)"/>
            <circle cx="64" r="64" transform="rotate(180)"/>
            <circle cx="64" r="64" transform="rotate(300)"/>
                <animateTransform 
                    attributeType="xml" 
                    attributeName="transform" 
                    type="rotate" 
                    values="0 0 0; 360 0 0" 
                    dur="10s" 
                    additive="sum" 
                    repeatCount="indefinite"
                />
        </g>
    </g>
</svg>
</div>

    
);

export default BackgroundAnimation;