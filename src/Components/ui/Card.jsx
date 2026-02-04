
import React from 'react';

export default function Card({ title, subtitle, children, className = '', headerIcon }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-sm shadow-2xl p-6 ${className}`}
    >
      {(title || subtitle) && (
        <header className="mb-4 text-center">
          {headerIcon && <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-white/40">{headerIcon}</div>}
          {title && <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </header>
      )}

      <div className="card-body">{children}</div>
    </div>
  );
}