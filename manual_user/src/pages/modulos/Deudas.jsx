import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/deudas/LISTADO.webp';
import imgDetalle from '../../assets/img/deudas/DETALLEDEUDA.webp';
import imgAbono from '../../assets/img/deudas/REGISTROABONO.webp';
import imgWhatsApp from '../../assets/img/deudas/RECORDATORIOWHATSAPP.webp';
import imgEmail from '../../assets/img/deudas/RECORDATORIOEMAIL.webp';

const Deudas = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Gestión de <span className="text-primary-500">Deudas y Pagos</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Administre las ventas a crédito, registre abonos parciales y mantenga a sus clientes informados sobre sus saldos pendientes de forma automatizada.
                </p>
            </header>

            <div className="space-y-12">
                {/* Listado y Detalle */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Cartera de Créditos</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Control de Cuentas por Cobrar"
                        content="Visualice todas las deudas vigentes. Filtre por cliente, fecha o estado (Pendiente/Pagada) y acceda al historial completo de cada crédito."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgDetalle)}>
                        <h4 className="font-bold text-secondary-900 mb-2 font-display">Ficha de Deuda</h4>
                        <p className="text-sm text-secondary-600 mb-4 leading-relaxed">Consulte el saldo original, el total abonado y los ítems específicos de la venta que originó la deuda.</p>
                        <img src={imgDetalle} alt="Detalle Deuda" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                    </div>
                </section>

                {/* Registro de Abonos */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Cobranza y Abonos</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <StepCard
                                stepNumber="2"
                                title="Registro de Pagos"
                                content="Anote pagos parciales o totales. El sistema valida que el abono no supere el saldo pendiente y actualiza automáticamente el estado de la venta."
                                image={imgAbono}
                                onImageClick={openLightbox}
                            />
                            <InfoBox type="important">
                                <strong>Requisito de Caja</strong>: Para registrar cualquier abono es obligatorio tener una <strong>sesión de caja abierta</strong>, ya que el dinero ingresa directamente al flujo del turno activo.
                            </InfoBox>
                        </div>

                        <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-100">
                            <h4 className="font-bold text-secondary-900 mb-4 font-display">Reglas de Cobranza</h4>
                            <ul className="space-y-4 text-sm text-secondary-600">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 text-[10px] font-bold">1</div>
                                    <p><strong>Validación Atómica</strong>: El sistema impide errores de digitación al bloquear pagos mayores a la deuda real.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 text-[10px] font-bold">2</div>
                                    <p><strong>Cierre Automático</strong>: Cuando el saldo llega a cero, la venta se marca como <strong>PAGADA</strong> en todos los reportes financieros.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 text-[10px] font-bold">3</div>
                                    <p><strong>Trazabilidad</strong>: Cada abono registra el usuario responsable, la fecha exacta y la IP de conexión.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Recordatorios */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary-900 rounded-2xl flex items-center justify-center text-primary-400 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Recordatorios de Pago</h2>
                    </div>

                    <p className="text-secondary-600 mb-8 max-w-2xl leading-relaxed">
                        Mejore su recuperación de cartera enviando avisos personalizados con el estado de cuenta actual a través de canales digitales directos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgWhatsApp)}>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.921 9.921 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.925 9.925 0 0012.012 2z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-secondary-900 font-display">Aviso por WhatsApp</h4>
                            </div>
                            <img src={imgWhatsApp} alt="Recordatorio WhatsApp" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>

                        <div className="p-6 bg-white rounded-3xl border border-secondary-100 shadow-sm cursor-zoom-in group" onClick={() => openLightbox(imgEmail)}>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-secondary-900 font-display">Aviso por Email</h4>
                            </div>
                            <img src={imgEmail} alt="Recordatorio Email" className="rounded-xl border border-secondary-50 shadow-md group-hover:scale-[1.01] transition-transform duration-300" />
                        </div>
                    </div>
                </section>

                <InfoBox type="info">
                    <strong>Documentación Adjunta</strong>: Desde el módulo de deudas puede generar el <strong>PDF del Estado de Cuenta</strong> consolidado para entregar al cliente.
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

export default Deudas;
