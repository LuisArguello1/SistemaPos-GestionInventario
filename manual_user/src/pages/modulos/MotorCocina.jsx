import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgMotor from '../../assets/img/motorCocina/MOTORCOCINA.webp';

const MotorCocina = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Motor de <span className="text-primary-500">Cocina</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Optimice la preparación de sus platos y el flujo de trabajo entre salón y cocina con el monitor de comandas en tiempo real.
                </p>
            </header>

            <div className="space-y-12">
                {/* Monitor de Pedidos */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Monitor de Pedidos Activos</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Gestión de Comandas"
                        content="Visualice las órdenes que requieren preparación organizadas por antigüedad."
                        image={imgMotor}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <span className="text-xs font-black uppercase text-secondary-400 mb-1 block">Fase 1</span>
                            <h4 className="font-bold text-secondary-900 mb-1">Pendiente</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed italic">"Pedidos recién llegados de las mesas."</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border-2 border-primary-100 shadow-sm">
                            <span className="text-xs font-black uppercase text-primary-400 mb-1 block">Fase 2</span>
                            <h4 className="font-bold text-secondary-900 mb-1">En Preparación</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed italic">"Chef trabajando en el pedido."</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <span className="text-xs font-black uppercase text-emerald-400 mb-1 block">Fase 3</span>
                            <h4 className="font-bold text-secondary-900 mb-1">Listo</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed italic">"Plato terminado y listo para mesa."</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <span className="text-xs font-black uppercase text-secondary-900 mb-1 block">Fase 4</span>
                            <h4 className="font-bold text-secondary-900 mb-1">Entregado</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed italic">"Pedido servido al cliente."</p>
                        </div>
                    </div>
                </section>

                {/* Ciclo de la Orden */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary-400">
                            Ciclo de Trabajo Recomendado
                        </h3>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <h4 className="font-bold mb-4 font-display">Aceptar e Iniciar</h4>
                                    <p className="text-sm text-secondary-400 leading-relaxed mb-6">
                                        Al pulsar <strong>Aceptar</strong>, la orden pasa a "En Preparación", registrando automáticamente al usuario y la hora de inicio. Esto evita duplicidad de trabajo.
                                    </p>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                        <h5 className="text-xs font-bold text-primary-400 uppercase mb-2">Validaciones</h5>
                                        <p className="text-sm">No puedes saltar estados (ej.: marcar "Entregado" si el pedido no está "Listo"). El sistema garantiza la trazabilidad real.</p>
                                    </div>
                                    <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                        <h5 className="text-xs font-bold text-primary-400 uppercase mb-2">Idempotencia</h5>
                                        <p className="text-sm">Si dos personas intentan aceptar el mismo pedido, el sistema detecta la colisión y mantiene solo el primer registro válido.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <InfoBox type="important">
                    <strong>Trazabilidad de Tiempos</strong>: Cada cambio de estado se registra con fecha, hora y usuario, permitiendo analizar cuánto tiempo tarda cada plato en promedio.
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

export default MotorCocina;
