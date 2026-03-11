import ReactMarkdown from 'react-markdown';
import React from 'react';

const InfoBox = ({ type = 'info', children }) => {
    const styles = {
        info: {
            bg: 'bg-primary-50',
            border: 'border-primary-500/30',
            text: 'text-primary-900',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        tip: {
            bg: 'bg-secondary-50',
            border: 'border-secondary-500/20',
            text: 'text-secondary-800',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        warning: {
            bg: 'bg-accent-100/50',
            border: 'border-accent-300',
            text: 'text-accent-900',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        error: {
            bg: 'bg-rose-50',
            border: 'border-rose-200',
            text: 'text-rose-800',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    };

    const currentStyle = styles[type] || styles.info;

    return (
        <div className={`p-5 rounded-2xl border-l-4 ${currentStyle.bg} ${currentStyle.border} mb-8 flex gap-4 transition-all duration-300`}>
            <div className="flex-shrink-0 mt-1">{currentStyle.icon}</div>
            <div className={`text-sm leading-relaxed ${currentStyle.text} prose-strong:text-inherit prose-strong:font-bold`}>
                {typeof children === 'string' ? <ReactMarkdown>{children}</ReactMarkdown> : children}
            </div>
        </div>
    );
};

export default InfoBox;
