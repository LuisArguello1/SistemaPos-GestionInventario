import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgCajaActiva from '../../assets/img/caja/CAJAACTIVA.webp';
import imgArqueo1 from '../../assets/img/caja/ARQUEORESUMENPASO1.webp';
import imgArqueo2 from '../../assets/img/caja/CONTEOCIERRECAJAPASO2.webp';
import imgMovimientos from '../../assets/img/caja/MOVIMIENTOS.webp';
import imgHistorial from '../../assets/img/caja/HISTORIALCAJAS.webp';
import imgImpresion from '../../assets/img/caja/IMPRESIONARQUEO.webp';

const Caja = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Gestión de <span className="text-primary-500">Caja y Arqueo</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Administre el flujo de efectivo diario, registre movimientos manuales y garantice la transparencia mediante el proceso de arqueo ciego y conciliación.
                </p>
            </header>

            <div className="space-y-12">
                {/* Caja Activa y Apertura */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Operación Diaria</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Caja Activa"
                        content="Monitoree el saldo real en tiempo real (Base + Cobros + Ingresos - Egresos). El sistema requiere una caja abierta para procesar ventas y movimientos."
                        image={imgCajaActiva}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgMovimientos)}>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Movimientos Manuales</h4>
                            <p className="text-sm text-secondary-600 mb-4 leading-relaxed">Registre entradas o salidas de efectivo (gastos menores, cambio) con motivo y usuario responsable.</p>
                            <img src={imgMovimientos} alt="Movimientos" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgHistorial)}>
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Historial de Sesiones</h4>
                            <p className="text-sm text-secondary-600 mb-4 leading-relaxed">Consulte arqueos cerrados previamente, snapshots de totales y datos de auditoría de cada turno.</p>
                            <img src={imgHistorial} alt="Historial" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>
                    </div>
                </section>

                {/* Proceso de Arqueo */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Proceso de Arqueo (Cierre)</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgArqueo1)}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-secondary-900 font-display text-lg">Paso 1: Resumen de Ventas</h4>
                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-widest">Información</span>
                                    </div>
                                    <p className="text-sm text-secondary-600 leading-relaxed mb-4">El sistema presenta los totales calculados de ventas (Contado/Crédito), abonos y movimientos manuales antes de proceder al conteo.</p>
                                    <img src={imgArqueo1} alt="Arqueo Paso 1" className="rounded-xl border border-secondary-50 shadow-lg group-hover:scale-[1.01] transition-transform duration-300" />
                                </div>
                                <InfoBox type="tip">
                                    **Conciliación**: El sistema agrupa la recaudación por usuario, facilitando la auditoría de quién vendió y qué cajero recaudó el efectivo.
                                </InfoBox>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-3xl border-2 border-accent-100 shadow-xl cursor-zoom-in group ring-4 ring-accent-50/50" onClick={() => openLightbox(imgArqueo2)}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-secondary-900 font-display text-lg">Paso 2: Conteo Físico</h4>
                                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-bold uppercase tracking-widest">Acción</span>
                                    </div>
                                    <p className="text-sm text-secondary-600 leading-relaxed mb-4">Ingrese el monto real contado físicamente. El sistema calculará automáticamente la **diferencia o descuadre** contra el saldo esperado.</p>
                                    <img src={imgArqueo2} alt="Arqueo Paso 2" className="rounded-xl border border-secondary-50 shadow-lg group-hover:scale-[1.01] transition-transform duration-300" />
                                </div>
                                <div className="p-6 bg-secondary-900 rounded-3xl text-white shadow-2xl overflow-hidden relative group" onClick={() => openLightbox(imgImpresion)}>
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold mb-2 font-display">Exportación PDF</h4>
                                    <p className="text-sm text-secondary-400 mb-4 leading-relaxed italic">Genere el reporte detallado de arqueo para su archivo contable o fiscal.</p>
                                    <div className="flex items-center justify-center py-2 bg-secondary-800 rounded-xl border border-secondary-700 cursor-zoom-in hover:bg-secondary-700 transition-colors">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
                                            Ver Formato de Impresión
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoBox type="info">
                        **Integridad Dinámica**: El sistema impide egresos manuales que superen el saldo disponible en caja en ese momento para evitar saldos negativos ilógicos.
                    </InfoBox>
                    <InfoBox type="warning">
                        **Permisos Críticos**: Solo usuarios con permisos de administración pueden abrir caja o registrar movimientos manuales de ingresos/egresos.
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

export default Caja;
