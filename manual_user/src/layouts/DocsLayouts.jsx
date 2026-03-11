import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DocsLayouts = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = (val) => {
        setIsSidebarOpen(val !== undefined ? val : !isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-primary-50 font-sans text-secondary-900">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => toggleSidebar(false)} />

            <div className="flex flex-col flex-1 min-w-0 overflow-hidden bg-white">
                <Header toggleSidebar={() => toggleSidebar(true)} />

                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8 scroll-smooth bg-white">
                    <div className="max-w-4xl mx-auto py-10 min-h-full flex flex-col">
                        <div className="flex-1">
                            {children}
                        </div>

                        <footer className="py-12 border-t border-secondary-100 mt-20">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary-500">
                                <p>© 2026 - Sistema POS y Gestión de Inventario. Todos los derechos reservados.</p>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>

            {/* Overlay para móvil */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-secondary-900/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => toggleSidebar(false)}
                />
            )}
        </div>
    );
};

export default DocsLayouts;
