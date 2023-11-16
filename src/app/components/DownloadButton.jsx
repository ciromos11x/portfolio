import React from 'react';
import Link from 'next/link';

const DownloadButton = ( ) => {
  const fileUrl = '/public/curriculum.pdf';
  const fileName = 'cvciro'

  const handleDownload = () => {
    // Crea un elemento <a> e imposta gli attributi
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Aggiungi l'elemento al documento
    document.body.appendChild(link);

    // Simula un clic sull'elemento per avviare il download
    link.click();

    // Rimuovi l'elemento dal documento dopo il download
    document.body.removeChild(link);
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
