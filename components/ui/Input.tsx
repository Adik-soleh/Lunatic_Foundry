import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        className={`
          w-full px-5 py-3 rounded-full
          border-2 border-gray-200 bg-white
          text-lt-dark placeholder-gray-400
          focus:outline-none focus:border-lt-green focus:ring-2 focus:ring-lt-green/20
          transition-all duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <textarea
        className={`
          w-full px-5 py-3 rounded-[1.5rem]
          border-2 border-gray-200 bg-white
          text-lt-dark placeholder-gray-400
          focus:outline-none focus:border-lt-green focus:ring-2 focus:ring-lt-green/20
          transition-all duration-300 resize-none
          ${className}
        `}
        rows={5}
        {...props}
      />
    </div>
  );
}
