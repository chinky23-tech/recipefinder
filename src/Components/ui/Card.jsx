
import React from 'react';

export default function Card({ title, children, className = '' }) {
  return (
    // 'card' and 'bg-base-100' are Daisy UI/Tailwind classes for the container
    <div className={`card w-full shadow-2xl bg-base-100 p-8 ${className}`}>
      
      {/* If a title is provided, display it in the header */}
      {title && (
        <h2 className="text-3xl font-bold text-center p-6 pb-0 text-primary">{title}</h2>
      )}

      {/* 'card-body' applies padding and flex alignment */}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}