import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/cliente/LISTADO.webp';
import imgDetalleFinanciero from '../../assets/img/cliente/DETALLEFINANCIERO.webp';
import imgFiltros from '../../assets/img/cliente/FILTROSDESCARGAREPORTESCARTERA.webp';
import imgPdfContado from '../../assets/img/cliente/DESCARGACONTADOPDF.webp';
import imgPdfDeudas from '../../assets/img/cliente/DESCARGADEUDASPDF.webp';
import imgExcelContado from '../../assets/img/cliente/EXCELDESCARGACONTADO.webp';
import imgExcelDeudas from '../../assets/img/cliente/EXCELDECARGADEUDAS.webp';

const Clientes = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Módulo de <span className="text-primary-500">Clientes</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Administre su base de datos de clientes, controle líneas de crédito y genere reportes detallados de deuda y comportamiento de compra.
                </p>
            </header>

            <div className="space-y-12">
                {/* Directorio y Búsqueda */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Directorio de Clientes</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Listado y Búsqueda Inteligente"
                        content="Busque por nombre, documento o teléfono. El sistema ofrece filtros rápidos para ver solo clientes activos y muestra estadísticas en tiempo real."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
                        <h4 className="font-bold text-secondary-900 mb-4 font-display">Gestión de Fichas</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-3 text-sm text-secondary-600">
                                <li className="flex gap-2">🟢 <strong>Registro</strong>: Cree perfiles con validación única de documento.</li>
                                <li className="flex gap-2">🟡 <strong>Edición</strong>: Actualice datos de contacto y direcciones de entrega.</li>
                                <li className="flex gap-2">🔴 <strong>Soft-Delete</strong>: Desactive clientes sin perder su historial de transacciones.</li>
                            </ul>
                            <InfoBox type="info">
                                <strong>Optimización</strong>: Las estadísticas del listado se cachean brevemente para garantizar una navegación fluida incluso con miles de registros.
                            </InfoBox>
                        </div>
                    </div>
                </section>

                {/* Cartera y Deudas */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Control Financiero (Cartera)</h2>
                    </div>

                    <StepCard
                        stepNumber="2"
                        title="Detalle de Cartera"
                        content="Consulte el saldo pendiente, historial de abonos y comportamiento crediticio de cada cliente desde su ficha técnica."
                        image={imgDetalleFinanciero}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Reportes y Exportación */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Reportes y Exportación</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                                <h4 className="font-bold text-secondary-900 mb-4 font-display">Filtros de Reporte</h4>
                                <p className="text-sm text-secondary-600 mb-6">Configure sus reportes antes de descargar: elija tipo (Deudas/Ventas), rango de fechas y estado de pago.</p>
                                <img
                                    src={imgFiltros}
                                    alt="Filtros Reporte"
                                    className="rounded-xl border border-secondary-50 shadow-md cursor-zoom-in"
                                    onClick={() => openLightbox(imgFiltros)}
                                />
                            </div>
                            <InfoBox type="warning">
                                <strong>Seguridad</strong>: La generación de reportes financieros está restringida a usuarios con roles administrativos para proteger la privacidad de los datos.
                            </InfoBox>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-secondary-900 px-2 font-display">Formatos Disponibles</h4>

                            {/* PDF Slides */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-secondary-50 rounded-2xl border border-secondary-100 cursor-zoom-in group" onClick={() => openLightbox(imgPdfDeudas)}>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-rose-500 block mb-2">PDF Deudas</span>
                                    <img src={imgPdfDeudas} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="PDF Deudas" />
                                </div>
                                <div className="p-3 bg-secondary-50 rounded-2xl border border-secondary-100 cursor-zoom-in group" onClick={() => openLightbox(imgPdfContado)}>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-emerald-500 block mb-2">PDF Ventas</span>
                                    <img src={imgPdfContado} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="PDF Ventas" />
                                </div>
                            </div>

                            {/* Excel Slides */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 cursor-zoom-in group" onClick={() => openLightbox(imgExcelDeudas)}>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-emerald-700 block mb-2">Excel Cartera</span>
                                    <img src={imgExcelDeudas} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="Excel Cartera" />
                                </div>
                                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 cursor-zoom-in group" onClick={() => openLightbox(imgExcelContado)}>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-emerald-700 block mb-2">Excel Histórico</span>
                                    <img src={imgExcelContado} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="Excel Histórico" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <InfoBox type="info">
                    <strong>Integración POS</strong>: Al realizar una venta a crédito, el sistema valida automáticamente que el cliente esté registrado y activo antes de generar la deuda.
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

export default Clientes;
