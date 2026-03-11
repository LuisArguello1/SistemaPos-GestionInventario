import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { menuDocs } from '../data/menuDocs';

const Header = ({ toggleSidebar }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Preparar datos para búsqueda
    const searchableData = menuDocs.flatMap(section =>
        section.modules.map(module => ({
            ...module,
            section: section.title
        }))
    );

    const fuse = new Fuse(searchableData, {
        keys: ['title', 'description', 'tags'],
        threshold: 0.3
    });

    useEffect(() => {
        if (searchQuery.length > 2) {
            const results = fuse.search(searchQuery);
            setSearchResults(results.map(r => r.item));
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    }, [searchQuery]);

    const handleResultClick = (path) => {
        navigate(path);
        setSearchQuery('');
        setShowResults(false);
    };

    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-secondary-100 flex-shrink-0">
            <div className="flex items-center justify-between h-20 px-6 sm:px-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-6">
                    <button
                        onClick={toggleSidebar}
                        className="p-2.5 -ml-2 text-secondary-500 rounded-xl hover:bg-secondary-50 lg:hidden transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex items-center text-[13px] font-medium text-secondary-400">
                        <span className="hover:text-primary-500 cursor-default transition-colors">Documentación</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mx-3 text-secondary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-secondary-900 bg-primary-100/50 px-2.5 py-1 rounded-md font-bold truncate capitalize tracking-tight">
                            {location.pathname.split('/').pop().replace('-', ' ')}
                        </span>
                    </div>
                </div>

                <div className="flex-1 max-w-lg ml-8 relative">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary-400 group-focus-within:text-primary-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar comandos, módulos, pasos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-11 pr-4 py-2.5 border border-secondary-100 rounded-2xl leading-5 bg-secondary-50/50 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 sm:text-sm transition-all shadow-sm group-hover:bg-white"
                        />
                    </div>

                    {/* Resultados de búsqueda */}
                    {showResults && searchResults.length > 0 && (
                        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-2xl border border-secondary-200 overflow-hidden ring-1 ring-black ring-opacity-5">
                            <ul className="max-h-96 overflow-y-auto divide-y divide-secondary-100">
                                {searchResults.map((result) => (
                                    <li key={result.id}>
                                        <button
                                            onClick={() => handleResultClick(result.path)}
                                            className="w-full text-left px-4 py-3 hover:bg-secondary-50 transition-colors flex flex-col"
                                        >
                                            <span className="text-sm font-bold text-secondary-900">{result.title}</span>
                                            <span className="text-xs text-secondary-500 mt-1 line-clamp-1">{result.description}</span>
                                            <span className="text-[10px] text-primary-600 font-semibold opacity-70 mt-1 uppercase tracking-tighter">
                                                {result.section}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
