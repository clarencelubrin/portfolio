import { useEffect, useState } from 'react'
import { Folder } from './components/folder'
import { Note, NoteHeader, NoteItem, NoteLink } from './components/note'

import brutalista1 from './assets/brutalista-1.png'
import brutalista2 from './assets/brutalista-2.png'
import amis1 from './assets/amis-1.png'
import amis2 from './assets/amis-2.png'
import amis3 from './assets/amis-3.png'
import baybayin from './assets/baybayin.png'
import talahanayan1 from './assets/talahanayan-1.png'
import talahanayan2 from './assets/talahanayan-2.png'
import talahanayan3 from './assets/talahanayan-3.png'
import libralog1 from './assets/libralog-1.png'
import libralog2 from './assets/libralog-2.png'
import libralog3 from './assets/libralog-3.png'
import { useNavigate } from 'react-router'

type folderProps = {
  id: number;
  title: string;
  image: string[];
  route: string;
}

const initialFolders: folderProps[] = [
  { id: 1, title: 'uplb amis redesign', image: [amis3, amis2, amis1], route: '/portfolio/amis' },
  { id: 2, title: 'baybay.in', image: [baybayin], route: 'https://github.com/clarencelubrin/baybayin-script-recognition' },
  { id: 3, title: 'talahanayan', image: [talahanayan3, talahanayan2, talahanayan1], route: 'https://talahanayan.vercel.app/' },
  { id: 4, title: 'libralog', image: [libralog3, libralog2, libralog1], route: 'https://github.com/puniyawa/libralog' },
  { id: 5, title: 'brutalista filipina', image: [brutalista2, brutalista1], route: '/' },
];
function App() {
  const [folders, setFolders] = useState<folderProps[]>(initialFolders);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeFolders, setActiveFolders] = useState<number[]>(initialFolders.map(folder => folder.id));
  const setFolderToFront = (folder: folderProps) => {
    setFolders(prevFolders => {
      const updatedFolders = prevFolders.filter(f => f.id !== folder.id);
      updatedFolders.push(folder);
      return updatedFolders;
    });
  }

  useEffect(() => {
    const allImages = folders.flatMap(folder => folder.image);
    let loadedCount = 0;

    if (allImages.length === 0) {
      setImagesLoaded(true);
      return;
    }

    allImages.forEach(src => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === allImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [folders]);

  if (!imagesLoaded) {
    return <div className='p-[16px]'>Loading images...</div>;
  }
  return (
    <div className='overflow-hidden relative h-screen w-screen'>
      <Note className='absolute top-[8px] left-[8px] z-10'>
        <NoteHeader title="clarence.lubrin" />
        <NoteItem text="I like to create programs that are" />
        <NoteItem text="useful and beautiful." />
      </Note>
      <Note className='absolute bottom-[16px] left-[8px] z-10'>
        <NoteHeader title="portfolio" />
        {initialFolders.map((folder) => (
          <NoteLink 
            key={folder.id}
            text={folder.title}
            route={folder.route}
            onMouseEnter={() => setActiveFolders([folder.id])}
            onMouseLeave={() => {if(folders[folders.length-1] !== folder) setActiveFolders(initialFolders.map(folder => folder.id)) }}
          />
        ))}
      </Note>
      {folders.map((folder) => (
          <Folder 
            key={folder.id}
            id={folder.id}
            title={folder.title}
            image={folder.image}
            route={folder.route}
            setFolderToFront={setFolderToFront}
            activeFolders={activeFolders}
          />
      ))}
    </div>
  )
}

export default App
