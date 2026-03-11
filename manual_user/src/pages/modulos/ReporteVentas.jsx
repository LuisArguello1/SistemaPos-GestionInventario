import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgReporte from '../../assets/img/reporteVentas/REPORTE.webp';

const ReporteVentas = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Reporte <span className="text-primary-500">Estratégico Integral</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Visualice el pulso de su negocio en tiempo real. Análisis de rentabilidad, salud de cartera y recomendaciones inteligentes en un solo lugar.
                </p>
            </header>

            <div className="space-y-12">
                {/* Panel Principal */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Métricas Estratégicas</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Dashboard de Ventas"
                        content="Panel centralizado que consolida ventas totales, número de transacciones y variaciones porcentuales comparativas para una toma de decisiones informada."
                        image={imgReporte}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* KPIs de Liquidez */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-emerald-900 mb-2">Efectivo Liquidado</h4>
                            <p className="text-xs text-emerald-700">Monto efectivamente recaudado y porcentaje de cobranza inmediata.</p>
                        </div>
                        <div className="mt-4 text-2xl font-black text-emerald-600">$$$</div>
                    </div>

                    <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-rose-900 mb-2">Capital en Calle</h4>
                            <p className="text-xs text-rose-700">Cartera a crédito pendiente y nivel de exposición financiera.</p>
                        </div>
                        <div className="mt-4 text-2xl font-black text-rose-600">% Exposición</div>
                    </div>

                    <div className="bg-primary-50 p-6 rounded-3xl border border-primary-100 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-primary-900 mb-2">Ticket Promedio</h4>
                            <p className="text-xs text-primary-700">Ingreso medio por cada venta/visita registrada.</p>
                        </div>
                        <div className="mt-4 text-2xl font-black text-primary-600">Avg.</div>
                    </div>
                </div>

                {/* IA y Diagnóstico */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">IA & Recomendaciones</h2>
                    </div>

                    <InfoBox type="info">
                        <strong>Análisis Automático</strong>: El sistema interpreta sus cifras diarias y genera un diagnóstico de salud financiera al instante (ej.: "Excelente liquidez... 90.1%").
                    </InfoBox>

                    <div className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold mb-4 text-primary-400">Estrategia & Consejos</h3>
                                <p className="text-secondary-400 text-sm leading-relaxed mb-6">
                                    Reciba sugerencias accionables basadas en sus tendencias actuales: "Mantén el control de gastos actual, la liquidez es óptima."
                                </p>
                                <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                    <span className="text-xs text-secondary-500 uppercase font-bold block mb-1">Estado de Cartera</span>
                                    <span className="text-emerald-400 text-sm font-bold italic">"Cartera Saludable"</span>
                                </div>
                            </div>
                            <div className="w-full md:w-64 space-y-4">
                                <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                    <h5 className="text-xs text-secondary-500 font-bold mb-2 uppercase tracking-widest">Top Rentabilidad</h5>
                                    <p className="text-xs text-secondary-300">Sección que destaca el <strong>Máximo Generador</strong> y el producto con mayor margen.</p>
                                </div>
                                <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                    <h5 className="text-xs text-secondary-500 font-bold mb-2 uppercase tracking-widest">Refrescar Datos</h5>
                                    <p className="text-xs text-secondary-300">Utilice el botón <strong>Actualizar</strong> para sincronizar las métricas al instante.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rendimiento Humano */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
                        <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-primary-500 rounded-full"></div>
                            Curva de Rendimiento
                        </h3>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                            Gráfico evolutivo diario con etiquetas de fecha. Identifique picos de demanda y estacionalidad de manera visual.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
                        <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-accent-500 rounded-full"></div>
                            Top 5 Productos
                        </h3>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                            Ranking de los productos con mayor aporte al ingreso, detallando unidades vendidas e importe individual.
                        </p>
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

export default ReporteVentas;
