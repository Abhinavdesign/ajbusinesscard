import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="absolute top-8 left-8 z-50">
      <img
        src="/logo.png"
        alt="Weaving life on World Wide Web"
        className="h-32"
      />
    </div>
  );
};

export default Logo;
