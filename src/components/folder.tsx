import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/folder.css';
type positionType = {
    x: number;
    y: number;
};
type folderProps = {
    id: number;
    title: string;
    image: string[];
};
const padding_x = window.innerWidth/4; // Padding to ensure the folder doesn't go off-screen
const padding_y = window.innerHeight/4; // Padding to ensure the folder doesn't go off-screen
const randomizePosition = () => {
    return {
        x: Math.max(Math.floor(Math.random() * (window.innerWidth - padding_x)), padding_x),
        y: Math.max(Math.floor(Math.random() * (window.innerHeight - padding_y)), padding_y),
    };
}
const imagePositions: Record<number, { x: number; y: number }[]> = {
    1: [{ x: 0, y: 0 }],
    2: [{x: 64, y: 64}, {x: -64, y: -64}],
    3: [{x: 64, y: 64}, {x: -64, y: -64}, {x: 128, y: -128}],
};

export function Folder({ 
    id, title, image, setFolderToFront, activeFolders
}: { 
    id: number;
    title: string; 
    image: string[];
    setFolderToFront: (folder: folderProps) => void;
    activeFolders: number[];
}) {
    const [position, setPosition] = useState<positionType>(randomizePosition());
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const folderRef = useRef<HTMLButtonElement | null>(null);
    const pos = useRef({ pos1: 0, pos2: 0, pos3: 0, pos4: 0 });
    
    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!activeFolders.includes(id)) return;
        setFolderToFront({ id, title, image });
        setIsClicked(true);
        pos.current.pos3 = event.clientX;
        pos.current.pos4 = event.clientY;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        event.preventDefault();
        pos.current.pos1 = pos.current.pos3 - event.clientX;
        pos.current.pos2 = pos.current.pos4 - event.clientY;
        pos.current.pos3 = event.clientX;
        pos.current.pos4 = event.clientY;
        setPosition(prev => ({
            x: Math.max(0, Math.min(window.innerWidth - 200, prev.x - pos.current.pos1)),
            y: Math.max(0, Math.min(window.innerHeight - 200, prev.y - pos.current.pos2)),
        }));
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        setIsClicked(false);
    };

    // Touch events
    const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
        if (event.touches.length !== 1) return;
        if (!activeFolders.includes(id)) return;
        setFolderToFront({ id, title, image });
        setIsClicked(true);
        if(!isHovered) setIsHovered(true); // for mobile

        const touch = event.touches[0];
        pos.current.pos3 = touch.clientX;
        pos.current.pos4 = touch.clientY;
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length !== 1) return;
        event.preventDefault();
        const touch = event.touches[0];
        pos.current.pos1 = pos.current.pos3 - touch.clientX;
        pos.current.pos2 = pos.current.pos4 - touch.clientY;
        pos.current.pos3 = touch.clientX;
        pos.current.pos4 = touch.clientY;
        setPosition(prev => ({
            x: Math.max(0, Math.min(window.innerWidth - 200, prev.x - pos.current.pos1)),
            y: Math.max(0, Math.min(window.innerHeight - 200, prev.y - pos.current.pos2)),
        }));
    };

    const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        setIsClicked(false);
        if(isHovered) setIsHovered(false); // for mobile
    };

    return (
        <motion.button
            ref={folderRef}
            animate={{x: position.x, y: position.y, opacity: activeFolders.includes(id) ? 1 : 0}}
            initial={{
                x: (window.innerWidth - 500) / 2,
                y: (window.innerHeight - 300) / 2,
                opacity: 0.5,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="folder"
            style={{
                position: 'absolute',
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div className="folder-title-container">
                <p>{title}</p>
            </div>
            <div className="folder-image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >                
                {image.map((img, index) => (
                    <motion.img
                        key={img}
                        src={img}
                        alt={title}
                        animate={isClicked
                            ? { x: imagePositions[image.length]?.[index]?.x ?? 0, y: imagePositions[image.length]?.[index]?.y ?? 0 }
                            : { x: 0, y: 0 }}
                        initial={{ x: 0, y: 0 }}
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 20, mass: 0.8 },
                            y: { type: 'spring', stiffness: 300, damping: 20, mass: 0.8 },
                        }}
                        style={{
                            position: 'absolute',
                            width: 'calc(100% - 32px)',
                            filter: isHovered ? 'none' : 'blur(2px)',
                            boxShadow: isClicked ? '0px 0px 16px 0px rgba(0, 0, 0, 0.25)' : 'none',
                            transition: 'filter 0.3s ease-in-out, box-shadow 0.5s ease-in-out',
                        }}
                    />
                ))}
                {/* Serve as a container */}
                <img key={image[0]} src={image[0]} alt={title} style={{opacity: 0}}/> 
                
            </div>
        </motion.button>
    );
}
