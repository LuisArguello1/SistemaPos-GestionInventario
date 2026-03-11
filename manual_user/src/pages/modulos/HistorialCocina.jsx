import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/historialCocina/LISTADO.webp';
import imgDetalle from '../../assets/img/historialCocina/DETALLE.webp';

const HistorialCocina = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Historial de <span className="text-primary-500">Cocina</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Audite y revise el flujo de preparación de órdenes finalizadas. Analice tiempos de respuesta y verifique responsables para mejorar la eficiencia operativa.
                </p>
            </header>

            <div className="space-y-12">
                {/* Consulta de Órdenes */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Registro de Órdenes Completadas</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Listado Histórico"
                        content="Acceda a las órdenes marcadas como 'Listo' o 'Entregado'. El sistema organiza los registros por fecha de finalización, mostrando las más recientes primero para una revisión ágil."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-5 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-wider">Filtros Avanzados</h4>
                            <p className="text-xs text-secondary-600">Segmente por área (Barra/Cocina), rangos de fechas específicos o por estado final de la orden.</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-wider">Búsqueda Directa</h4>
                            <p className="text-xs text-secondary-600">Localice una orden rápidamente ingresando el número de venta o el nombre del cliente.</p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-wider">Paginación Eficiente</h4>
                            <p className="text-xs text-secondary-600">Navegue fácilmente por grandes volúmenes de datos históricos sin perder rendimiento.</p>
                        </div>
                    </div>
                </section>

                {/* Detalle Técnico */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Análisis Detallado de Orden</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgDetalle)}>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-secondary-900 font-display">Trazabilidad de Preparación</h4>
                                <span className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded-lg text-[10px] font-black uppercase tracking-tighter">Evidencia</span>
                            </div>
                            <p className="text-sm text-secondary-600 mb-4 leading-relaxed">Revise las horas exactas de creación, inicio de trabajo y liberación de platos junto con el usuario que ejecutó cada acción.</p>
                            <img src={imgDetalle} alt="Detalle Historial" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>

                        <div className="space-y-6">
                            <InfoBox type="info">
                                <strong>Resolución de Incidencias</strong>: Útil para verificar notas especiales del cliente o componentes de recetas que se sirvieron en órdenes específicas.
                            </InfoBox>
                            <div className="bg-secondary-50 p-6 rounded-3xl border border-secondary-100">
                                <h4 className="font-bold text-secondary-900 mb-4 font-display text-sm">Información Disponible</h4>
                                <ul className="space-y-4 text-xs text-secondary-600 leading-relaxed">
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Tiempos Reales</strong>: Diferencia exacta entre "Aceptado" y "Terminado".</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span><strong>Responsables</strong>: Usuarios que procesaron cada fase de la orden.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        <span><strong>Instrucciones</strong>: Notas de cocina asociadas a la venta original.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 11m8 4V4M4 11v10l8 4" />
                                        </svg>
                                        <span><strong>Contenido</strong>: Variantes y complementos de cada ítem preparado.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox type="tip">
                        <strong>Mejora Continua</strong>: Use estos datos para identificar cuellos de botella en horarios pico analizando los tiempos de preparación promedio por plato.
                    </InfoBox>
                    <InfoBox type="important">
                        <strong>Exclusividad</strong>: El historial solo incluye órdenes que han finalizado su ciclo completo (Listo o Entregado).
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

export default HistorialCocina;
