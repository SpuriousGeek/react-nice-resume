import React from 'react';

const ScrollIcon = ({
                              size = 50,
                              className = '',
                              ...props
                          }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={`scroll-icon ${className}`}
        fill="none"
        {...props}
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="var(--icon-fill, #fff)"
            stroke="var(--icon-stroke, #000)"
            strokeWidth="2"
        />
        <path
            d="M8 10L12 14L16 10"
            stroke="var(--icon-chevron, #000)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="scale(0.75) translate(4, 4)"
        />
    </svg>
);

export default ScrollIcon;