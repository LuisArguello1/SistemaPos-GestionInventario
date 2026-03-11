import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgPL from '../../assets/img/estadoResultado/EstadoResultado.webp';
import imgDescarga from '../../assets/img/estadoResultado/IMPRESIODESCARGA.webp';

const EstadoResultado = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Estado de <span className="text-primary-500">Resultados (P&L)</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Mida la rentabilidad real de su negocio. Analice ingresos, costos de venta y gastos operativos para conocer su utilidad neta.
                </p>
            </header>

            <div className="space-y-12">
                {/* Visualización Principal */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v8m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Análisis de Rentabilidad</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Panel de Resultados"
                        content="Filtre por periodos (día, mes o rango personalizado) para obtener un desglose automático de ventas y costos."
                        image={imgPL}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Conceptos Clave */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-sm">
                        <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-4 bg-emerald-500 rounded-full" />
                            Ventas
                        </h4>
                        <p className="text-xs text-secondary-600 leading-relaxed">Dinero total facturado por ventas antes de restar cualquier tipo de costo o gasto.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-sm">
                        <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-4 bg-rose-500 rounded-full" />
                            Costo de Ventas (COGS)
                        </h4>
                        <p className="text-xs text-secondary-600 leading-relaxed">Inversión directa en los productos vendidos (materias primas, insumos, etc.).</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-secondary-100 shadow-sm">
                        <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-4 bg-primary-500 rounded-full" />
                            Utilidad Bruta
                        </h4>
                        <p className="text-xs text-secondary-600 leading-relaxed">Diferencia entre Ventas y COGS. Indica el margen disponible para cubrir gastos operativos.</p>
                    </div>
                </div>

                {/* Gastos y Utilidad Neta */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary-400">
                            Resultados Financieros
                        </h3>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <h4 className="font-bold mb-2">Gastos Operativos</h4>
                                    <p className="text-sm text-secondary-400 leading-relaxed mb-4">
                                        Suma de todos los egresos necesarios (luz, sueldos, alquiler) desglosados por categorías para identificar fugas de capital.
                                    </p>
                                    <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                        <h5 className="text-xs font-bold text-primary-400 uppercase mb-2">Utilidad Neta</h5>
                                        <p className="text-sm">La cifra clave: lo que realmente queda como ganancia después de TODOS los egresos.</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-2">Márgenes (%)</h4>
                                    <p className="text-sm text-secondary-400 leading-relaxed mb-4">
                                        Visualice la rentabilidad porcentual para comparar eficiencias operativas independientemente del volumen de venta.
                                    </p>
                                    <InfoBox type="tip">
                                        **Acción Práctica**: Si el margen es bajo, revise sus proveedores o ajuste sus precios de venta.
                                    </InfoBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exportación y Reporte */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Formatos y Exportación</h2>
                    </div>

                    <StepCard
                        stepNumber="2"
                        title="Descarga de P&L"
                        content="Genere versiones impresas o digitales del Estado de Resultados para compartir con su equipo de contabilidad o socios estratégicos."
                        image={imgDescarga}
                        onImageClick={openLightbox}
                    />
                </section>

                <InfoBox type="info">
                    **Diagnóstico IA**: El sistema integra recomendaciones automáticas basadas en sus gastos acumulados, sugiriendo reducciones en categorías específicas si detecta anomalías.
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

export default EstadoResultado;
