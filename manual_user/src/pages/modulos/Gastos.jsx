import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgGastos from '../../assets/img/gastos/LISTADOGASTOS.webp';
import imgCrearGasto from '../../assets/img/gastos/CREARGASTO.webp';
import imgCategorias from '../../assets/img/gastos/LISTADOCATEGORIAS.webp';
import imgCrearCat from '../../assets/img/gastos/CREARCATEGORIA.webp';

const Gastos = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Gastos <span className="text-primary-500">Operativos</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Registre y controle todos los egresos de su negocio. Organice sus facturas por categorías para obtener un análisis detallado de sus costos fijos y variables.
                </p>
            </header>

            <div className="space-y-12">
                {/* Registro de Gastos */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Control de Egresos</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Historial de Gastos"
                        content="Visualice todos los egresos registrados. Filtre por categoría, rango de fechas o busque por descripción/referencia para encontrar facturas específicas."
                        image={imgGastos}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgCrearGasto)}>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Nuevo Registro de Gasto</h4>
                            <p className="text-sm text-secondary-600 mb-4">Complete el formulario con el monto, fecha, categoría y adjunte el archivo de la factura para respaldo digital.</p>
                            <img src={imgCrearGasto} alt="Crear Gasto" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>
                        <InfoBox type="info">
                            <strong>Respaldo Digital</strong>: El sistema permite anexar archivos de facturas (PDF o imágenes) que pueden ser descargados o consultados directamente desde la ficha del gasto.
                        </InfoBox>
                    </div>
                </section>

                {/* Categorización */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Categorización Inteligente</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgCategorias)}>
                                <h4 className="font-bold text-secondary-900 mb-2 font-display">Maestro de Categorías</h4>
                                <p className="text-sm text-secondary-600 mb-4 leading-relaxed">Organice sus gastos en grupos como "Sueldos", "Servicios", "Insumos", etc., para facilitar el análisis financiero en el P&L.</p>
                                <img src={imgCategorias} alt="Listado Categorías" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 bg-secondary-50 rounded-3xl border border-secondary-200 cursor-zoom-in group" onClick={() => openLightbox(imgCrearCat)}>
                                <h4 className="font-bold text-secondary-900 mb-2 font-display uppercase tracking-widest text-xs">Ajustes</h4>
                                <p className="text-sm text-secondary-600 mb-4">Cree categorías personalizadas según las necesidades de su negocio.</p>
                                <img src={imgCrearCat} alt="Crear Categoría" className="rounded-xl border border-white shadow-xl group-hover:scale-[1.01] transition-transform duration-300" />
                            </div>
                            <InfoBox type="warning">
                                <strong>Protección de Datos</strong>: Una categoría no puede ser eliminada si ya tiene gastos asociados, esto garantiza que su historial financiero permanezca consistente.
                            </InfoBox>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox type="tip">
                        <strong>Análisis en Tiempo Real</strong>: Use el filtro por fechas para obtener un resumen del total gastado en un periodo específico y el desglose por área.
                    </InfoBox>
                    <InfoBox type="important">
                        <strong>Trazabilidad</strong>: Todas las acciones (crear, editar o borrar gastos) quedan vinculadas al usuario responsable y disponibles en el log de auditoría global.
                    </InfoBox>
                </div>
            </div>

            <ImageViewer
                isOpen={lightbox.isOpen}
                image={lightbox.image}
                close={() => setLightbox({ ...lightbox, isOpen: false })}
            />
        </div>
    );
};

export default Gastos;
