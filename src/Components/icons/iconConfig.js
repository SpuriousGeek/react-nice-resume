import {
    Mail,
    ChevronUpCircle,
    ChevronDownCircle,
    ChevronLeftCircle,
    ChevronRightCircle,
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Plus
} from 'lucide-react';

// This object maps old icon classes to Lucide components
export const iconMappings = {
    'icon-mail': Mail,
    'icon-up-circle': ChevronUpCircle,
    'icon-down-circle': ChevronDownCircle,
    'icon-left-circle': ChevronLeftCircle,
    'icon-right-circle': ChevronRightCircle,
    'icon-up-open': ChevronUp,
    'icon-down-open': ChevronDown,
    'icon-left-open': ChevronLeft,
    'icon-right-open': ChevronRight,
    'icon-plus': Plus
};

// Helper component for consistent icon styling
export const IconWrapper = ({ iconName, size = 24, className = '', ...props }) => {
    const IconComponent = iconMappings[iconName];
    if (!IconComponent) return null;

    return (
        <IconComponent
            size={size}
            className={`icon ${className}`}
            {...props}
        />
    );
};