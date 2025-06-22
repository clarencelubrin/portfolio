import { Folder } from '../components/folder'
import amis1 from '../assets/amis-1.png'
import amis2 from '../assets/amis-2.png'
import amis3 from '../assets/amis-3.png'

import before1 from '../assets/amis-blog/before-1.png';
import before2 from '../assets/amis-blog/before-2.png';
import before3 from '../assets/amis-blog/before-3.png';
import before4 from '../assets/amis-blog/before-4.png';
import before5 from '../assets/amis-blog/before-5.png';
import before6 from '../assets/amis-blog/before-6.png';

import after1 from '../assets/amis-blog/after-1.png';
import after2 from '../assets/amis-blog/after-2.png';
import after3 from '../assets/amis-blog/after-3.png';
import after4 from '../assets/amis-blog/after-4.png';
import after5 from '../assets/amis-blog/after-5.png';
import after6 from '../assets/amis-blog/after-6.png';

import mockup1 from '../assets/amis-blog/mockup-1.png'
import mockup2 from '../assets/amis-blog/mockup-2.png'
import { ArrowLeftFromLine } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import '../css/blog.css';
import { useNavigate } from 'react-router';

const folder = { id: 1, title: 'uplb amis redesign', image: [amis3, amis2, amis1], route: 'amis' };

export function PortfolioAmis() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [rect, setRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            setRect(containerRef.current.getBoundingClientRect());
        }
    }, []);
    return (
        <div>
            <div className="border-b border-stone-300">
                <button className='flex flex-row justify-center items-center gap-4 px-[16px] py-[12px] hover:bg-stone-200 active:bg-stone-300 w-fit'
                    onClick={() => navigate('/')}
                >
                    <ArrowLeftFromLine size={16} />
                    <p className='select-none'>Return</p>
                </button>
            </div>
            <div className="sm:p-12 p-6 flex flex-col gap-32 overflow-hidden relative w-screen --text-color-default">
                <Section>
                    {rect && <Folder 
                        key={folder.id}
                        id={folder.id}
                        title={folder.title}
                        image={folder.image}
                        route={folder.route}
                        initialPosition={{ x: rect.width / 2, y: rect.height / 2 }}
                    />}
                    <div ref={containerRef} className="h-[75vh] flex items-center">
                        <h2>
                            Redesigning <i>University of the Philippines Los Baños</i> Academic Management Information System
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-16'>
                        <img className='w-max rounded-[12px]' src={mockup1} alt="Mockup 1" />
                        <img className='w-max rounded-[12px]' src={mockup2} alt="Mockup 2" />
                    </div>
                    <TextGroup>
                        <h6>Overview</h6>
                        <p>University of the Philippines Los Baños Academic Management Information System is an online enrollment system designed to replace SAIS, the former online enrollment system, driven by the #junksais movement.</p>
                    </TextGroup>
                    <TextGroup>
                        <h6>Problem</h6>
                        <p>Currently, AMIS needs a proper overhaul of its UI and UX design. Throughout the application, it lacks a coherent design system and an intuitive user experience.</p>
                    </TextGroup>                
                </Section>
                {/* Case Study I. AMIS Blog Redesign */}
                {/* Log-in Page */}
                <Section>
                    <TextGroup>
                        <h5>Case Study I. Enrollment system redesign</h5>
                    </TextGroup>
                    <TextGroup>
                        <h6>Log-in Page</h6>
                        <p>The new Log-in page fixed the inconsistencies on widths, padding, and font hierarchy. It also embraced the bulletin board for easy access.</p>
                    </TextGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute top-12 left-0' emoji="🛑" text="The text in the log-in section is too wide." />
                            <CritiqueNote className='absolute sm:bottom-24 bottom-12 left-0' emoji="🛑" text="The log-in section has the same width as the announcement section." />
                            
                            <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="Inconsistent use of typographical hierarchy." />
                            <CritiqueNote className='absolute lg:bottom-64 sm:bottom-32 bottom-16  right-0' emoji="🛑" text="Lack of intent in using bold and italic text." />
                            <Image type='before' src={before1} alt="before-1" />
                        </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute top-12 left-0' emoji="🟢" text="Correct maximum width of text (600 px)." />
                            <CritiqueNote className='absolute sm:bottom-24 bottom-12 left-0' emoji="🟢" text="The increased space for the announcement section for more room for content." />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="Utilizing a typographical system for a consistent look." />
                            <CritiqueNote className='absolute lg:bottom-64 sm:bottom-32 bottom-16  right-0' emoji="🟢" text="Deliberate use of bold and italic text." />
                            <Image type='after' src={after1} alt="after-1" />
                    </ImageGroup>
                </Section>
                {/* Home Page */}
                <Section>
                    <TextGroup>
                        <h6>Home Page</h6>
                        <p>The new Home page is designed to remove redundancy and simplifies the sidebar to avoid confusion.</p>
                    </TextGroup>
                    <ImageGroup>
                        <CritiqueNote className='absolute bottom-12 left-0' emoji="🛑" text="Sidebar has too many sections and rely heavily on dropdowns for organization." />
                        <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="The navbar has two confusing buttons (hamburger and ellipsis icons). " />
                        <Image type='before' src={before2} alt="before-2" />
                    </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute bottom-24 left-0' emoji="🟢" text="Sidebar only includes the important sections." />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="Sidebar is togglable by the bottom navigation item and the user settings is accessible by clicking the profile icon." />
                            <Image type='after' src={after2} alt="after-2" />
                    </ImageGroup>
                </Section>
                {/* Enlistment Page */}
                <Section>
                    <TextGroup>
                        <h6>Enlistment Page</h6>
                        <p>The redesigned Enlistment Page have a clear hierarchy, repositioning less utilized features to emphasize on the main feature.</p>
                    </TextGroup>
                    <ImageGroup>
                        <CritiqueNote className='absolute bottom-12 left-0' emoji="🛑" text="Details about the student (scholastic standing and enlisted units) are not prioritized" />
                        <CritiqueNote className='absolute top-12 left-0' emoji="🛑" text="Too much cognitive noise." />
                        <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="Enlistment warning take up too much space. " />
                        <Image type='before' src={before3} alt="before-3" />
                    </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute top-12 left-0' emoji="🟢" text="Simplifies the design by prioritizing the enlistment module" />
                            <CritiqueNote className='absolute bottom-12 left-0' emoji="🟢" text="Removed the term selection (as the class history is viewable in the profile)" />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="Student details are easily viewed by the user." />
                            <CritiqueNote className='absolute lg:bottom-64 sm:bottom-32 bottom-16 right-0' emoji="🟢" text="Made the calendar as a window for easy access while searching for classes." />
                            <Image type='after' src={after3} alt="after-3" />
                    </ImageGroup>
                </Section>
                {/* Classes Page */}
                <Section>
                    <TextGroup>
                        <h6>Classes Page</h6>
                        <p>The Classes page prioritized the key feature in the design, ensuring that the most important information is easily accessible.</p>
                    </TextGroup>
                    <ImageGroup>
                        <CritiqueNote className='absolute bottom-12 left-0' emoji="🛑" text="Redundant column for class code." />
                        <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="The calendar is not easily accessible while searching for classes." />
                        <Image type='before' src={before4} alt="before-4" />
                    </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute bottom-12 left-0' emoji="🟢" text="Focuses on the most important information." />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="Easily accessible calendar for quick access." />
                            <Image type='after' src={after4} alt="after-4" />
                    </ImageGroup>
                </Section>
                {/* Prerog Page */}
                <Section>
                    <TextGroup>
                        <h6>Prerogative Enrollment Page</h6>
                        <p>The Prerogative Enrollment Page has been redesigned to be have an intuitive interface.</p>
                    </TextGroup>
                    <ImageGroup>
                        <CritiqueNote className='absolute bottom-12 left-0' emoji="🛑" text="Unconventional application form layout." />
                        <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="Cluttered interface and inconsistent padding." />
                        <Image type='before' src={before5} alt="before-5" />
                    </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute bottom-12 left-0' emoji="🟢" text="Intuitive application form layout." />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="The layout is split into an application tab and history tab for a more streamlined user experience." />
                            <Image type='after' src={after5} alt="after-5" />
                    </ImageGroup>
                </Section>

                {/* Course List */}
                <Section>
                    <TextGroup>
                        <h6>Course List Page</h6>
                        <p>The Course List Page is redesigned have a clearer structure, less cognitive load when searching for information.</p>
                    </TextGroup>
                    <ImageGroup>
                        <CritiqueNote className='absolute bottom-12 left-0' emoji="🛑" text="Columns are tightly packed, harder to digest." />
                        <CritiqueNote className='absolute top-12 right-0' emoji="🛑" text="Generic table styling with little visual hierarchy." />
                        <Image type='before' src={before6} alt="before-6" />
                    </ImageGroup>
                    <ImageGroup>
                            <CritiqueNote className='absolute bottom-12 left-0' emoji="🟢" text="Modern card UI with rounded edges, soft shadows, and spacing." />
                            <CritiqueNote className='absolute top-12 right-0' emoji="🟢" text="Clearly separated elements (Title, Description, Units, Prerequisite, Semester)." />
                            <Image type='after' src={after6} alt="after-6" />
                    </ImageGroup>
                </Section>
            </div>
        </div>
    );
}

function Section({children}: {children?: React.ReactNode}){
    return <div className='w-fill min-h-screen flex flex-col gap-[24px]'>{children}</div>
}

function TextGroup({children}: {children?: React.ReactNode}){
    return <div className="flex flex-col justify-left gap-[8px]">{children}</div>
}

function CritiqueNote({emoji, text, className}: {text: string, emoji:string, className?: string})
{
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [isMinimized, setIsMinimized] = useState(isMobile);
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
            setIsMinimized(mobile);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        !isMinimized ?
        <div className={`flex flex-col shadow-md max-w-[256px] h-fit p-[12px] gap-[8px] rounded-[16px] --bg-color-100 ${className} select-none`}
             onClick={() => setIsMinimized(!isMinimized)}
             style={{ cursor: 'pointer' }}>
            <p className='p-small'>{emoji}</p>
            <p className='p-small'>{text}</p>
        </div> :
        <div className={`flex flex-col shadow-md max-w-[256px] h-fit p-[12px] gap-[8px] rounded-[16px] --bg-color-100 ${className} select-none`}
             onClick={() => setIsMinimized(!isMinimized)}
             style={{ cursor: 'pointer' }}>
            <p className='p-small'>{emoji}</p>
        </div>
    )
}

function ImageGroup({children}: {children?: React.ReactNode}) {
    return (
        <div className='w-full flex justify-center --bg-color-75 sm:px-[24px] px-[12px] sm:pt-[20px] py-[12px] sm:pb-[24px] rounded-[16px] sm:gap-[16px] gap-[8px]'>
            <div className='relative flex flex-row w-full max-w-[1328px] justify-center overflow-visible'>
                {children}
            </div>
        </div>
    );
}

function Image({type, src, alt}: {type: 'before' | 'after', src: string, alt: string}) {

    return (
        <div>
            <h6 className={`${type === 'before' ? '--text-muted-0' : '--text-muted-100'} sm:mb-[16px] mb-[8px]`}>{type === 'before' ? '❌ Before' : '✅ Improved'}</h6>
            <img className='max-w-[768px] w-full rounded-[12px]' src={src} alt={alt} />
        </div>
    )
}