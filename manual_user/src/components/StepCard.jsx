import React from 'react';
import ReactMarkdown from 'react-markdown';

const StepCard = ({ stepNumber, title, content, image, onImageClick }) => {
    return (
        <div className="relative pl-12 pb-12 group last:pb-0">
            {/* Línea conectora */}
            <div className="absolute left-[20px] top-[40px] bottom-0 w-[2px] bg-secondary-100 group-last:hidden" />

            {/* Círculo con número */}
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center font-bold text-primary-700 shadow-sm z-10 transition-transform group-hover:scale-110">
                {stepNumber}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>

                <div className="prose prose-sm prose-secondary max-w-none text-secondary-600 leading-relaxed mb-6">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>

                {image && (
                    <div
                        className="relative rounded-xl overflow-hidden border border-secondary-200 group/img cursor-zoom-in shadow-inner bg-secondary-50"
                        onClick={() => onImageClick && onImageClick(image)}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-secondary-900/0 group-hover/img:bg-secondary-900/10 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100 pointer-events-none">
                            <span className="bg-white/90 text-secondary-900 p-2 rounded-full shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StepCard;
