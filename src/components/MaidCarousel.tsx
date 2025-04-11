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
    
        const startDragging = (x: number) => {
            isDown = true;
            carousel.classList.add('dragging');
            startX = x - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };
    
        const stopDragging = () => {
            isDown = false;
            carousel.classList.remove('dragging');
        };
    
        const doDragging = (x: number) => {
            if (!isDown) return;
            const walk = x - carousel.offsetLeft - startX;
            carousel.scrollLeft = scrollLeft - walk;
        };
    
        // Mouse events
        const mouseDown = (e: MouseEvent) => startDragging(e.pageX);
        const mouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            doDragging(e.pageX);
        };
        const mouseUp = stopDragging;
        const mouseLeave = stopDragging;
    
        // Touch events
        const touchStart = (e: TouchEvent) => {
            if (e.touches.length === 1) {
                startDragging(e.touches[0].pageX);
            }
        };
        const touchMove = (e: TouchEvent) => {
            if (!isDown) return;
            doDragging(e.touches[0].pageX);
        };
        const touchEnd = stopDragging;
    
        carousel.addEventListener('mousedown', mouseDown);
        carousel.addEventListener('mousemove', mouseMove);
        carousel.addEventListener('mouseup', mouseUp);
        carousel.addEventListener('mouseleave', mouseLeave);
    
        carousel.addEventListener('touchstart', touchStart, { passive: false });
        carousel.addEventListener('touchmove', touchMove, { passive: false });
        carousel.addEventListener('touchend', touchEnd);
    
        return () => {
            carousel.removeEventListener('mousedown', mouseDown);
            carousel.removeEventListener('mousemove', mouseMove);
            carousel.removeEventListener('mouseup', mouseUp);
            carousel.removeEventListener('mouseleave', mouseLeave);
    
            carousel.removeEventListener('touchstart', touchStart);
            carousel.removeEventListener('touchmove', touchMove);
            carousel.removeEventListener('touchend', touchEnd);
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
