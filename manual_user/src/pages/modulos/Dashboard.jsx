import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgDashboard from '../../assets/img/dashboard/DASHBOARD.webp';

const Dashboard = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Panel de <span className="text-primary-500">Control General</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Obtenga una visión 360° de su negocio en tiempo real. Monitoree ventas, controle el inventario crítico y analice tendencias con un solo vistazo.
                </p>
            </header>

            <div className="space-y-12">
                {/* Resumen General */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Estado del Sistema en Tiempo Real</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Indicadores de Alto Nivel"
                        content="El panel principal consolida los datos más críticos del día: ventas totales vs ayer, órdenes activas en cocina y alertas preventivas de inventario."
                        image={imgDashboard}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                Ventas del Día
                            </h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Muestra el total recaudado hoy y la variación porcentual comparativa con el cierre del día anterior.</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                Órdenes Activas
                            </h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Visualice instantáneamente cuántas comandas están siendo procesadas actualmente en cocina/barra.</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 text-sm uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                Alertas de Stock
                            </h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Notificación inmediata sobre el número de productos que han alcanzado o superado su stock mínimo.</p>
                        </div>
                    </div>
                </section>

                {/* Gráficos y Análisis */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Análisis de Desempeño</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-secondary-50 p-6 rounded-3xl border border-secondary-100">
                            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                                Tendencia de 7 Días
                            </h4>
                            <p className="text-sm text-secondary-600 mb-4">Gráfico de línea que rastrea los ingresos diarios de la última semana, permitiendo identificar patrones de consumo semanales.</p>
                        </div>
                        <div className="bg-secondary-50 p-6 rounded-3xl border border-secondary-100">
                            <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                Distribución por Categorías
                            </h4>
                            <p className="text-sm text-secondary-600 mb-4">Gráfico circular que desglosa el origen de sus ingresos según las categorías de productos (Comida, Bebidas, Snacks, etc.).</p>
                        </div>
                    </div>
                </section>

                {/* Ranking y Alertas Detalladas */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Operación y Control</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-secondary-900 font-display">Top 5 Productos</h4>
                            </div>
                            <p className="text-sm text-secondary-600 leading-relaxed">Ranking automático de los 5 artículos que más ingresos generan. Permite identificar los platos estrella de su menú para potenciar su promoción.</p>
                        </div>

                        <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                            <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Alertas de Stock Crítico
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-xs text-red-700 flex justify-between border-b border-red-200 pb-2">
                                    <span><strong>Información por producto:</strong></span>
                                    <span className="font-bold">Actual / Mínimo</span>
                                </li>
                                <li className="text-[11px] text-red-600 py-1">Detalle inmediato por categoría para reposición rápida antes de que el artículo quede fuera de servicio.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <InfoBox type="tip">
                    <strong>Gestión Inteligente</strong>: Utilice el Dashboard al inicio de su turno para prever la demanda basada en la tendencia de los últimos días y verificar qué productos necesitan compra inmediata.
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

export default Dashboard;
