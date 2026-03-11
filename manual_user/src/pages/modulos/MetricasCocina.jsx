import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgMetricas from '../../assets/img/metricasCocina/METRICAS.webp';

const MetricasCocina = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Métricas de <span className="text-primary-500">Cocina</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Transforme los datos operativos en decisiones estratégicas. Monitoree la velocidad de su cocina, identifique horas críticas y optimice su personal.
                </p>
            </header>

            <div className="space-y-12">
                {/* Panel de Análisis */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v16m-6 0h6" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Indicadores Clave de Rendimiento (KPIs)</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Dashboard de Eficiencia"
                        content="Visualice de forma gráfica el comportamiento de su cocina. El sistema analiza tiempos de preparación, volumen por hora y distribución semanal de la carga de trabajo."
                        image={imgMetricas}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Tiempo Promedio</h4>
                            <p className="text-sm text-secondary-600 leading-relaxed">Mide los minutos transcurridos desde la creación hasta el estado 'Listo'. Ideal para detectar retrasos estructurales.</p>
                        </div>

                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Horas Pico</h4>
                            <p className="text-sm text-secondary-600 leading-relaxed">Identifica las 3 horas de mayor demanda. Refuerce su personal basándose en datos reales, no en suposiciones.</p>
                        </div>

                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Top Productos</h4>
                            <p className="text-sm text-secondary-600 leading-relaxed">Ranking de ítems más solicitados. Optimice su *mise en place* y prevenga roturas de stock en ingredientes clave.</p>
                        </div>
                    </div>
                </section>

                {/* Guía de Interpretación */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary-400 font-display">
                            ¿Cómo interpretar estas métricas?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 bg-secondary-800 rounded-2xl border border-secondary-700">
                                    <h5 className="font-bold text-primary-400 mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Tasa de Eficiencia
                                    </h5>
                                    <p className="text-sm text-secondary-300">Si el cumplimiento baja del 90% en pedidos de 15 min, investigue el historial para detectar cuellos de botella.</p>
                                </div>
                                <div className="p-4 bg-secondary-800 rounded-2xl border border-secondary-700">
                                    <h5 className="font-bold text-primary-400 mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Distribución Semanal
                                    </h5>
                                    <p className="text-sm text-secondary-300">Planifique compras de insumos frescos basándose en los días de mayor carga operativa.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-8 bg-secondary-800/50 rounded-3xl border border-secondary-700 border-dashed">
                                <div className="text-center">
                                    <p className="text-secondary-400 text-sm mb-4">Uso Práctico del Día</p>
                                    <div className="text-4xl font-black text-primary-500 font-display">KPI 360°</div>
                                    <p className="text-xs text-secondary-500 mt-2">Visibilidad total de su producción</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <InfoBox type="tip">
                    **Análisis de Hoy**: Consulte los totales del día para ver cuántas órdenes se han procesado hasta el momento y compararlas con el promedio histórico.
                </InfoBox>
            </div>

            <ImageViewer
                isOpen={lightbox.isOpen}
                image={lightbox.image}
                close={() => setLightbox({ ...lightbox, isOpen: false })}
            />
        </div>
    );
};

export default MetricasCocina;
