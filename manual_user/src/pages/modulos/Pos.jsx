import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgPos from '../../assets/img/pos/COMANDAPOS.webp';
import imgResumen from '../../assets/img/pos/RESUMENCOMPRA.webp';
import imgContado from '../../assets/img/pos/VENTACONTADO.webp';
import imgCredito from '../../assets/img/pos/VENTACREDITO.webp';
import imgFacturaOpciones from '../../assets/img/pos/MODALIOPCIONESIMPRESION.webp';
import imgFacturaA4 from '../../assets/img/pos/FCATURADESCARGAA4.webp';
import imgFacturaInterna from '../../assets/img/pos/IMPRESIONFACTURAINTERNAA4.webp';
import imgTicket from '../../assets/img/pos/TICKETVENTA.webp';
import imgCrearCliente from '../../assets/img/pos/CREARCLIENTE.webp';

const Pos = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Punto de Venta <span className="text-primary-500">(POS)</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Personalice la experiencia de venta con nuestra terminal inteligente. Diseñada exclusivamente para **gestión interna**, permitiendo un control total de comandas, combos y créditos en una interfaz fluida.
                </p>
            </header>

            <div className="space-y-12">
                {/* La Comanda */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Toma de Comanda</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Selección de Ítems y Cantidades"
                        content="Busque productos y variantes. Ajuste cantidades rápidamente y visualice el resumen de impuestos y subtotales en tiempo real antes de confirmar."
                        image={imgPos}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h4 className="font-bold text-secondary-900 font-display">Funciones Inteligentes</h4>
                                <ul className="space-y-4 text-sm text-secondary-600">
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        <span>**Combos y Recetas**: El sistema descuenta automáticamente los componentes individuales del stock al vender un combo.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>**Descuentos por Venta**: Aplique descuentos porcentuales al total de la comanda para fidelizar a sus clientes.</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        <span>**IVA de Control Interno**: Cálculo automático de impuestos basado en la configuración de cada producto para fines de arqueo técnico.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="cursor-zoom-in group" onClick={() => openLightbox(imgResumen)}>
                                <img src={imgResumen} alt="Resumen de Compra" className="rounded-2xl shadow-lg border border-secondary-50 group-hover:scale-[1.02] transition-transform" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cliente y Pago */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Finalización de Venta</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 font-display">Gestión de Clientes</h4>
                            <p className="text-sm text-secondary-600 mb-6 leading-relaxed">Venda como **Consumidor Final** para rapidez, o identifique un cliente para ventas a crédito. Puede crear clientes nuevos sin salir de la comanda.</p>
                            <img src={imgCrearCliente} alt="Crear Cliente POS" className="rounded-xl border border-secondary-50 shadow-md cursor-zoom-in" onClick={() => openLightbox(imgCrearCliente)} />
                        </div>

                        <div className="space-y-6">
                            <InfoBox type="important">
                                **Requisito de Caja**: Es imposible finalizar una venta si no existe una **Sesión de Caja Abierta**. El sistema protege la integridad del dinero.
                            </InfoBox>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 cursor-zoom-in group" onClick={() => openLightbox(imgContado)}>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block mb-2">Pago Contado</span>
                                    <img src={imgContado} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="Venta Contado" />
                                </div>
                                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 cursor-zoom-in group" onClick={() => openLightbox(imgCredito)}>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block mb-2">Venta Crédito</span>
                                    <img src={imgCredito} className="rounded-lg shadow group-hover:opacity-90 transition-opacity" alt="Venta Crédito" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integración y Facturación */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Automatización y Comprobantes</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-secondary-600 leading-relaxed text-sm">
                                Al confirmar la venta, el sistema dispara procesos automáticos cruciales para el negocio:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 bg-secondary-50 rounded-2xl border border-secondary-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white shrink-0 font-bold text-xs">1</div>
                                    <p className="text-sm text-secondary-700 font-medium">**Orden de Cocina**: Genera automáticamente el pedido en los terminales de preparación si contiene platos.</p>
                                </li>
                                <li className="flex gap-4 p-4 bg-secondary-50 rounded-2xl border border-secondary-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white shrink-0 font-bold text-xs">2</div>
                                    <p className="text-sm text-secondary-700 font-medium">**Descarga de Stock**: Rebaja existencias reales incluyendo ingredientes de combos y registra costo histórico.</p>
                                </li>
                                <li className="flex gap-4 p-4 bg-secondary-50 rounded-2xl border border-secondary-100">
                                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white shrink-0 font-bold text-xs">3</div>
                                    <p className="text-sm text-secondary-700 font-medium">**Facturación**: Habilita el modal de impresión para generar diversos formatos de comprobante.</p>
                                </li>
                            </ul>
                            <img src={imgFacturaOpciones} alt="Opciones Impresión" className="rounded-2xl border border-secondary-100 shadow-xl cursor-zoom-in" onClick={() => openLightbox(imgFacturaOpciones)} />
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-col gap-3 cursor-zoom-in group" onClick={() => openLightbox(imgFacturaA4)}>
                                <span className="text-xs font-black text-secondary-500 uppercase tracking-widest pl-2 border-l-2 border-primary-500">Factura Proforma A4</span>
                                <div className="bg-white rounded-3xl border border-secondary-100 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow p-2">
                                    <img src={imgFacturaA4} className="w-full h-auto object-contain rounded-2xl" alt="Factura A4" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3 cursor-zoom-in group" onClick={() => openLightbox(imgTicket)}>
                                    <span className="text-xs font-black text-secondary-500 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">Ticket Térmico</span>
                                    <div className="bg-white rounded-3xl border border-secondary-100 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow p-2">
                                        <img src={imgTicket} className="w-full h-auto object-contain rounded-2xl" alt="Ticket" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 cursor-zoom-in group" onClick={() => openLightbox(imgFacturaInterna)}>
                                    <span className="text-xs font-black text-secondary-500 uppercase tracking-widest pl-2 border-l-2 border-amber-500">Orden Interna</span>
                                    <div className="bg-white rounded-3xl border border-secondary-100 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow p-2">
                                        <img src={imgFacturaInterna} className="w-full h-auto object-contain rounded-2xl" alt="Interna" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <InfoBox type="tip">
                    **Trazabilidad**: Todas las ventas quedan asociadas permanentemente al usuario que las registró y a la caja activa para posteriores auditorías o arqueos de fin de turno.
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

export default Pos;
