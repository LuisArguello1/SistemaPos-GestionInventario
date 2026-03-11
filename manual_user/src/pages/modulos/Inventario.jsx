import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgMovimientos from '../../assets/img/Inventario/MOVIMIENTOS.webp';
import imgKardex from '../../assets/img/Inventario/KARDEX.webp';
import imgAjuste from '../../assets/img/Inventario/AJUSTE.webp';
import imgAlerta from '../../assets/img/Inventario/ALERTASTOCK.webp';
import imgBarra from '../../assets/img/Inventario/BARRAOPCIONES.webp';
import imgAnalitica from '../../assets/img/Inventario/ANALITICA.webp';

const Inventario = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Control de <span className="text-primary-500">Inventario</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Gestione de manera integral el stock, movimientos, valuación y trazabilidad de sus productos y variantes.
                </p>
            </header>

            <div className="space-y-12">
                {/* Propósito y Movimientos */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Movimientos de Stock</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Registro de Movimientos"
                        content="Consulte el historial inmutable de entradas, salidas, compras y ajustes. Cada registro incluye referencia, motivo, usuario responsable y fecha exacta para garantizar la auditabilidad."
                        image={imgMovimientos}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Kardex y Conciliación */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Kardex (Libro Mayor)</h2>
                    </div>

                    <StepCard
                        stepNumber="2"
                        title="Consulta Detallada"
                        content="El Kardex permite una revisión profunda por producto/variante. Visualice columnas de movimiento, cantidades, precios y saldos calculados automáticamente como un snapshot para conciliaciones rápidas."
                        image={imgKardex}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Ajustes y Reglas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl p-8 border border-secondary-100 shadow-sm">
                        <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-primary-500 rounded-full" />
                            Ajustes Manuales
                        </h3>
                        <p className="text-sm text-secondary-600 leading-relaxed mb-6">
                            Realice ajustes de inventario con motivos específicos. Todos los ajustes se validan y registran como movimientos oficiales para mantener la trazabilidad completa.
                        </p>
                        <div className="rounded-xl overflow-hidden border border-secondary-100 cursor-zoom-in" onClick={() => openLightbox(imgAjuste)}>
                            <img src={imgAjuste} alt="Ajustes" className="w-full" />
                        </div>
                    </div>

                    <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
                        <h3 className="text-lg font-bold text-rose-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-rose-500 rounded-full" />
                            Reglas de Stock
                        </h3>
                        <ul className="space-y-3 text-sm text-rose-800">
                            <li className="flex gap-2"><span>•</span> <strong>Saldos Negativos</strong>: No se permiten en productos físicos para mantener la consistencia contable.</li>
                            <li className="flex gap-2"><span>•</span> <strong>Cocina/Recetas</strong>: Los componentes se descuentan automáticamente según la configuración lógica.</li>
                            <li className="flex gap-2"><span>•</span> <strong>Alertas</strong>: Notificaciones visuales inmediatas cuando el stock llega a niveles críticos.</li>
                        </ul>
                    </div>
                </div>

                {/* Valoración y Analítica */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Analítica y Valoración</h2>
                    </div>

                    <div className="space-y-8">
                        <InfoBox type="tip">
                            <strong>Valoración PMP</strong>: El sistema utiliza el método de <strong>Promedio Ponderado</strong> para el cálculo automático del costo y valor total del inventario.
                        </InfoBox>

                        <StepCard
                            stepNumber="3"
                            title="Panel de Analítica"
                            content="Visualice KPIs fundamentales: valor total del inventario, variantes fuera de stock, top de rotación y análisis de tendencias diarias."
                            image={imgAnalitica}
                            onImageClick={openLightbox}
                        />
                    </div>
                </section>

                {/* Filtros y Herramientas */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Herramientas de Auditoría
                            </h3>
                            <p className="text-secondary-400 mb-6 leading-relaxed">
                                Filtre el historial por tipo de movimiento, producto, rango de fechas o referencia. Exporte reportes detallados a Excel/CSV para conciliaciones contables.
                            </p>
                        </div>
                        <div className="w-full lg:w-80 rounded-xl overflow-hidden shadow-lg cursor-zoom-in" onClick={() => openLightbox(imgBarra)}>
                            <img src={imgBarra} alt="Filtros" className="w-full" />
                        </div>
                    </div>
                </section>

                <InfoBox type="info">
                    <strong>Recomendación</strong>: Revise las alertas de bajo stock periódicamente y exporte el Kardex para sus cierres mensuales y auditorías internas.
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

export default Inventario;
