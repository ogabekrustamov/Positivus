import { useRef, useEffect, useState } from 'react';

const FadeInSection = ({ children, direction = 'up' }) => {
    const ref = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const baseClasses = 'transition-all duration-1000 ease-out opacity-0';
    const visibleClasses = 'opacity-100 translate-x-0 translate-y-0';

    const directionClasses = {
        up: 'translate-y-10',
        down: '-translate-y-10',
        left: 'translate-x-10',
        right: '-translate-x-10',
    };

    return (
        <div
            ref={ref}
            className={`${baseClasses} ${
                isVisible ? visibleClasses : directionClasses[direction]
            }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
