import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/ventas/LISTADO.webp';
import imgDetalle from '../../assets/img/ventas/DETALLE.webp';
import imgAnulacion from '../../assets/img/ventas/ANUALVENTA.webp';
import imgFactura from '../../assets/img/ventas/FACTURAINTERNA_A4.webp';

const Ventas = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Historial de <span className="text-primary-500">Ventas</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Consulte el registro histórico de todas las transacciones, acceda a detalles de facturación y gestione las anulaciones de ventas previas.
                </p>
            </header>

            <div className="space-y-12">
                {/* Registro y POS */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Punto de Venta</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Registro de Transacciones"
                        content="Visualice el histórico de ventas realizadas. Filtre por fecha o estado y acceda al detalle completo de cada operación."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgDetalle)}>
                            <h4 className="font-bold text-secondary-900 mb-2">Detalle de Operación</h4>
                            <p className="text-sm text-secondary-600 mb-4">Consulte ítems vendidos, cantidades, precios unitarios y el desglose de pagos realizados.</p>
                            <img src={imgDetalle} alt="Detalle Venta" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform" />
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgFactura)}>
                            <h4 className="font-bold text-secondary-900 mb-2">Facturación y PDF</h4>
                            <p className="text-sm text-secondary-600 mb-4">Genere comprobantes internos listas para imprimir o enviar al cliente.</p>
                            <img src={imgFactura} alt="Factura Venta" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform" />
                        </div>
                    </div>
                </section>

                {/* Políticas de Venta */}
                <section className="bg-secondary-50 p-8 rounded-3xl border border-secondary-100">
                    <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04" />
                        </svg>
                        Validaciones Negocio
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="font-bold text-secondary-900 block">Caja Abierta Obligatoria</span>
                                    <p className="text-sm text-secondary-600">No es posible registrar ventas si no existe una sesión de caja activa.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="font-bold text-secondary-900 block">Crédito Identificado</span>
                                    <p className="text-sm text-secondary-600">Las ventas a crédito requieren obligatoriamente un cliente registrado (no Consumidor Final).</p>
                                </div>
                            </li>
                        </ul>
                        <InfoBox type="info">
                            <strong>Control de Inventario</strong>: Al confirmar la venta, el sistema descuenta automáticamente el stock real, incluyendo componentes de combos y recetas.
                        </InfoBox>
                    </div>
                </section>

                {/* Anulaciones */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Proceso de Anulación
                            </h3>
                            <p className="text-sm text-secondary-400 leading-relaxed mb-6">
                                Acción restringida a administradores. La anulación es atómica: <strong>restaura stock</strong>, genera <strong>egreso en caja</strong> (si hubo devolución) y limpia saldos pendientes.
                            </p>
                            <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                <span className="text-xs font-bold text-rose-400 block mb-1 uppercase tracking-widest">Atención</span>
                                <span className="text-sm italic text-secondary-300">"La anulación es irreversible y genera una entrada automática en el Log de Auditoría."</span>
                            </div>
                        </div>
                        <div className="w-full md:w-80 cursor-zoom-in group" onClick={() => openLightbox(imgAnulacion)}>
                            <img src={imgAnulacion} alt="Anular Venta" className="rounded-xl border border-secondary-700 shadow-2xl group-hover:scale-[1.02] transition-transform" />
                            <span className="text-[10px] text-secondary-500 block mt-2 text-center uppercase tracking-widest font-bold">Ventana de Confirmación de Anulación</span>
                        </div>
                    </div>
                </section>

                <InfoBox type="warning">
                    <strong>Trazabilidad Garantizada</strong>: Cada venta (creación, edición o anulación) queda vinculada al usuario, fecha e IP para auditoría posterior.
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

export default Ventas;
