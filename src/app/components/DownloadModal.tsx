import React from 'react';

interface DownloadModalProps {
  onClose: () => void;
  onDownload: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ onClose, onDownload }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent fixed inset-0 z-50">
      <div className="bg-white bg-opacity-50 border border-black rounded-lg p-8 shadow-lg w-96">
        <p className="text-center text-lg font-semibold mb-6">You are downloading the brochure.</p>
        <div className="flex justify-center space-x-12">
          <button onClick={onDownload} className="text-dark-green font-bold hover:underline">OK</button>
          <button onClick={onClose} className="text-dark-red font-bold hover:underline">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
