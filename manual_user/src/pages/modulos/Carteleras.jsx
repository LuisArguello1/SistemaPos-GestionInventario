import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/cartelera/LISTADO.webp';
import imgCrearCartelera from '../../assets/img/cartelera/CREARCARTELERA.webp';
import imgCrearCategoria from '../../assets/img/cartelera/CREARCATEGORIA.webp';
import imgEleccion from '../../assets/img/cartelera/ELECCIONPRODUCTOS.webp';
import imgDisenador from '../../assets/img/cartelera/DISEÑADOR.webp';
import imgVista from '../../assets/img/cartelera/CARTELERAVISTA.webp';

const Carteleras = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Menús Digitales y <span className="text-primary-500">Carteleras</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Gestione las pantallas de su local de forma centralizada. Cree menús visuales atractivos para sus clientes y sincronice precios e imágenes al instante en sus TVs o monitores.
                </p>
            </header>

            <div className="space-y-16">
                {/* Introducción y Listado */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Gestión de Pantallas (Boards)</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Administración Centralizada"
                        content="Defina múltiples pantallas (ej. 'Barra Principal', 'Postres y Cafés') con slugs únicos que generan una URL pública. Esto permite que cualquier Smart TV o navegador cargue el menú sin necesidad de login."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Configuración Estructural */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary-900 rounded-xl flex items-center justify-center text-primary-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900">Creación y Categorías</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-sm group hover:border-primary-200 transition-colors">
                                <img src={imgCrearCartelera} className="w-full h-auto rounded-2xl mb-4 border border-secondary-50 cursor-pointer" onClick={() => openLightbox(imgCrearCartelera)} alt="Crear Cartelera" />
                                <h4 className="font-bold text-secondary-900 mb-2 mt-4 text-[13px] uppercase tracking-wider">Pantallas Públicas</h4>
                                <p className="text-sm text-secondary-600">Active o desactive pantallas al instante. El diseño se adapta automáticamente para una visualización óptima en gran formato.</p>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-sm group hover:border-emerald-200 transition-colors">
                                <img src={imgCrearCategoria} className="w-full h-auto rounded-2xl mb-4 border border-secondary-50 cursor-pointer" onClick={() => openLightbox(imgCrearCategoria)} alt="Crear Categoría" />
                                <h4 className="font-bold text-secondary-900 mb-2 mt-4 text-[13px] uppercase tracking-wider">Agrupación Lógica</h4>
                                <p className="text-sm text-secondary-600">Organice sus productos en grupos (Combos, Bebidas) con un orden de visualización definido de forma manual.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900">Personalización de Ítems</h3>
                        </div>

                        <div className="bg-secondary-50 p-8 rounded-[2.5rem] border border-secondary-100">
                            <img src={imgEleccion} className="w-full h-auto rounded-2xl mb-6 shadow-xl cursor-pointer" onClick={() => openLightbox(imgEleccion)} alt="Elección Productos" />
                            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                Control Total sobre Precios y Nombres
                            </h4>
                            <p className="text-sm text-secondary-600 leading-relaxed mb-6">
                                Los productos vinculados a la cartelera utilizan por defecto el nombre y precio configurados en la gestión de productos, permitiendo ajustes opcionales para la vista pública si es necesario.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <li className="flex gap-2 text-[11px] font-bold text-secondary-700 bg-white p-3 rounded-xl border border-secondary-100">
                                    <span className="text-primary-500">✓</span> Nombre Sincronizado
                                </li>
                                <li className="flex gap-2 text-[11px] font-bold text-secondary-700 bg-white p-3 rounded-xl border border-secondary-100">
                                    <span className="text-primary-500">✓</span> Precio Sincronizado
                                </li>
                                <li className="flex gap-2 text-[11px] font-bold text-secondary-700 bg-white p-3 rounded-xl border border-secondary-100">
                                    <span className="text-primary-500">✓</span> Imagen Propia
                                </li>
                                <li className="flex gap-2 text-[11px] font-bold text-secondary-700 bg-white p-3 rounded-xl border border-secondary-100">
                                    <span className="text-primary-500">✓</span> Destacado (Feature)
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* El Diseñador Visual */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1 1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Diseñador y Reordenamiento</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center border border-secondary-100 rounded-[3rem] p-8 bg-white shadow-sm overflow-hidden">
                        <div className="lg:col-span-3">
                            <img src={imgDisenador} className="w-full h-auto rounded-3xl shadow-2xl ring-8 ring-secondary-50 cursor-pointer" onClick={() => openLightbox(imgDisenador)} alt="Diseñador" />
                        </div>
                        <div className="lg:col-span-2 space-y-6 px-4">
                            <h3 className="text-2xl font-black text-secondary-900 leading-tight tracking-tight">Arquitectura Visual Flexible</h3>
                            <p className="text-secondary-600 leading-relaxed">
                                El sistema permite reordenar categorías y productos mediante arrastrar y soltar (Drag & Drop), sincronizando instantáneamente el orden en todas las pantallas activas.
                            </p>
                            <InfoBox type="note">
                                **Actualización en Tiempo Real**: Cualquier cambio en `is_active` o en el orden de visualización se refleja de inmediato en las TVs conectadas.
                            </InfoBox>
                        </div>
                    </div>
                </section>

                {/* Vista Pública */}
                <section>
                    <div className="bg-secondary-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <span className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-4 block">Experiencia Final</span>
                            <h2 className="text-3xl font-extrabold mb-8 font-display tracking-tight sm:text-4xl">Visualización en Televisores</h2>
                            <p className="text-secondary-400 text-lg leading-relaxed mb-12">
                                La web de la cartelera está optimizada para mostrarse en pantallas de gran formato sin distracciones, cargando automáticamente imágenes, precios y resaltando los productos destacados.
                            </p>
                            <div className="bg-secondary-800 p-4 rounded-3xl border border-white/5 shadow-2xl group cursor-pointer" onClick={() => openLightbox(imgVista)}>
                                <img src={imgVista} className="w-full h-auto rounded-2xl group-hover:opacity-90 transition-opacity" alt="Vista Pública" />
                                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-primary-500 tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                                    Ejemplo de Pantalla Activa
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ImageViewer
                isOpen={lightbox.isOpen}
                image={lightbox.image}
                close={() => setLightbox({ ...lightbox, isOpen: false })}
            />
        </div>
    );
};

export default Carteleras;
