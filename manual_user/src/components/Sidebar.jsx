import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuDocs } from '../data/menuDocs';
import { clsx } from 'clsx';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside
            className={clsx(
                "fixed inset-y-0 left-0 z-50 w-60 bg-secondary-900 text-white transform transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 flex-shrink-0",
                isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0 pointer-events-none lg:opacity-100 lg:translate-x-0 lg:pointer-events-auto"
            )}
        >
            <div className="flex flex-col h-full border-r border-secondary-800">

                {/* ── HEADER ── */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-secondary-800 sticky top-0 z-10 bg-secondary-900">
                    <div className="flex items-center gap-3">
                        {/* Logo con doble capa usando primary */}
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <div className="absolute inset-0 bg-primary-600 rounded-xl rotate-6 opacity-40" />
                            <div className="relative w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center font-black text-xs text-secondary-900 shadow-lg shadow-primary-500/20">
                                SP
                            </div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-extrabold text-sm text-white tracking-widest uppercase mb-0.5">
                                SISTEMA POS
                            </span>
                            <span className="text-[10px] text-primary-400 font-bold tracking-tight uppercase">
                                e Inventario
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden w-7 h-7 rounded-md flex items-center justify-center text-secondary-500 hover:text-secondary-200 hover:bg-secondary-800 transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* ── NAV ── */}
                <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6 custom-scrollbar select-none">
                    {menuDocs.map((section) => (
                        <div key={section.id}>

                            {/* Encabezado de sección con línea separadora */}
                            <div className="flex items-center gap-2 px-2 mb-2">
                                <span className="text-[9px] font-bold text-secondary-600 uppercase tracking-[0.25em] whitespace-nowrap">
                                    {section.title}
                                </span>
                                <div className="flex-1 h-px bg-secondary-800" />
                            </div>

                            <ul className="space-y-0.5">
                                {section.modules.map((module) => (
                                    <li key={module.id}>
                                        <NavLink
                                            to={module.path}
                                            onClick={() => toggleSidebar && toggleSidebar(false)}
                                            className={({ isActive }) =>
                                                clsx(
                                                    "group flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium rounded-lg transition-all duration-200 relative",
                                                    isActive
                                                        ? "bg-primary-500/10 text-primary-300 border-l-2 border-primary-500"
                                                        : "text-secondary-400 hover:text-secondary-100 hover:bg-secondary-800 border-l-2 border-transparent"
                                                )
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {/* Dot indicador */}
                                                    <span className={clsx(
                                                        "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200",
                                                        isActive
                                                            ? "bg-primary-400"
                                                            : "bg-secondary-700 group-hover:bg-secondary-500"
                                                    )} />

                                                    <span className="truncate flex-1">{module.title}</span>

                                                    {/* Chevron en ítem activo */}
                                                    {isActive && (
                                                        <svg className="w-3 h-3 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* ── FOOTER ── */}
                <div className="px-4 py-4 border-t border-secondary-800 mt-auto space-y-3">

                    {/* CTA Cotización */}
                    <NavLink
                        to="/docs/contacto"
                        onClick={toggleSidebar}
                        className="group flex items-center justify-between w-full px-4 py-3 rounded-xl border border-primary-500/20 bg-primary-500/5 hover:bg-primary-500/10 hover:border-primary-500/40 transition-all duration-200"
                    >
                        <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-bold text-secondary-500 uppercase tracking-[0.2em] mb-0.5">
                                ¿Te interesa el sistema?
                            </span>
                            <span className="text-[11px] font-bold text-primary-300">
                                Solicitar cotización
                            </span>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-primary-500/15 border border-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/25 transition-all">
                            <svg className="w-3.5 h-3.5 text-primary-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </NavLink>

                    {/* Autor */}
                    <div className="flex items-center gap-3 px-1 py-1">
                        <div className="relative flex-shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-secondary-800 border border-secondary-700 flex items-center justify-center text-[10px] font-black text-secondary-300">
                                LA
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary-900 border border-secondary-900 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                            </div>
                        </div>
                        <div className="flex flex-col leading-tight flex-1 min-w-0">
                            <span className="text-[11px] font-semibold text-secondary-200 tracking-tight truncate">Luis Arguello</span>
                            <span className="text-[9px] text-secondary-600 uppercase tracking-widest font-medium">Autor · 2026</span>
                        </div>
                        <span className="text-[8px] font-bold text-secondary-700 uppercase tracking-widest">v1.0</span>
                    </div>

                </div>
            </div>
        </aside>
    );
};

export default Sidebar;