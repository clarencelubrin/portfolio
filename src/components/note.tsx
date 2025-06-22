import '../css/note.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router';
export function Note({children, style, className}: {children: React.ReactNode; style?: React.CSSProperties, className?: string}) {
    return (
        <motion.div className={`note ${className}`} style={style}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
}

export function NoteHeader({title, style}: {title: string; style?: React.CSSProperties}) {
    return (
        <div className="note-header" style={style}>
            <span className="note-title">{title}</span>
        </div>
    );
}

export function NoteItem({text, style}: {text: string; style?: React.CSSProperties}) {
    return (
        <div className="note-item" style={style}>
            <span className="note-text">{text}</span>
        </div>
    );
}
export function NoteRow({children, style}: {children: React.ReactNode; style?: React.CSSProperties}) {
    return (
        <div className="note-item" style={style}>
            {children}
        </div>
    );
}
export function NoteLink({text, route, style, onMouseEnter, onMouseLeave}: {text: string; route: string; style?: React.CSSProperties; onMouseEnter?: () => void; onMouseLeave?: () => void;}) {

    return (
        <div className="note-link" style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {route.startsWith('https') || route.startsWith('http') ? (
                <a href={route} className="note-link-text" target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            ) : (
                <Link to={route} className="note-link-text">
                    {text}
                </Link>
            )}
        </div>
    );
}
export function NoteButton({text, onClick, style, onMouseEnter, onMouseLeave}: {text: string; onClick: () => void; style?: React.CSSProperties; onMouseEnter?: () => void; onMouseLeave?: () => void;}) {
    return (
        <button className="note-button" onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {text}
        </button>
    );
}