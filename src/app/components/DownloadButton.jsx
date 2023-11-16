import React from 'react';
import Link from 'next/link';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = '/public/cv.PNG'; // Percorso del file nella cartella public

    // Creare un link di download
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'ciro-cv.pdf'; // Nome del file durante il download

    // Simulare un clic sul link per avviare il download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
              type="button" 
              onClick={handleDownload} 
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
  );
};

export default DownloadButton;
