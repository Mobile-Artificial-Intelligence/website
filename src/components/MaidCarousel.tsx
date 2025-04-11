import { useEffect, useRef } from 'react';
import './MaidCarousel.css';

function MaidCarousel() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const mouseDown = (e: MouseEvent) => {
            isDown = true;
            carousel.classList.add('dragging');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };

        const mouseLeave = () => {
            isDown = false;
            carousel.classList.remove('dragging');
        };

        const mouseUp = () => {
            isDown = false;
            carousel.classList.remove('dragging');
        };

        const mouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = x - startX;
            carousel.scrollLeft = scrollLeft - walk;
        };

        carousel.addEventListener('mousedown', mouseDown);
        carousel.addEventListener('mouseleave', mouseLeave);
        carousel.addEventListener('mouseup', mouseUp);
        carousel.addEventListener('mousemove', mouseMove);

        return () => {
            carousel.removeEventListener('mousedown', mouseDown);
            carousel.removeEventListener('mouseleave', mouseLeave);
            carousel.removeEventListener('mouseup', mouseUp);
            carousel.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <div id="maid-carousel" ref={carouselRef}>
            <img src="/maid/1.png" alt="maid screen 1" />
            <img src="/maid/2.png" alt="maid screen 2" />
            <img src="/maid/3.png" alt="maid screen 3" />
            <img src="/maid/4.png" alt="maid screen 4" />
            <img src="/maid/5.png" alt="maid screen 5" />
            <img src="/maid/6.png" alt="maid screen 6" />
            <img src="/maid/7.png" alt="maid screen 7" />
        </div>
    );
}

export default MaidCarousel;
