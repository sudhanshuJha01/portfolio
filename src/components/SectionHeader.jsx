import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative font-sans">
        {title}
        <span className="absolute -bottom-2 left-1/2 w-16 h-0.5 bg-primary transform -translate-x-1/2" />
      </h2>
    </div>
  );
};

export default SectionHeader;