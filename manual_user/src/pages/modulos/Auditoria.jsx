import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgLogs from '../../assets/img/auditoria/LISTADO.webp';
import imgTunnel from '../../assets/img/auditoria/ACCESOREMOTO.webp';
import imgBackup from '../../assets/img/auditoria/BACKUP.webp';

const Auditoria = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Auditoría y <span className="text-primary-500">Sistema</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Herramientas avanzadas para la trazabilidad de acciones, seguridad de la información y soporte remoto del sistema.
                </p>
            </header>

            <div className="space-y-12">
                {/* Registro de Auditoría */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Registro de Actividad</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Historial de Acciones"
                        content="Consulte quién, cuándo y qué cambió en el sistema. Filtre por usuario, tipo de dato o acción (Crear, Editar, Borrar, Login) para una trazabilidad total."
                        image={imgLogs}
                        onImageClick={openLightbox}
                    />

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2">Información Detallada</h4>
                            <p className="text-sm text-secondary-600">Cada registro incluye la IP de origen, el cambio exacto realizado y la fecha/hora con precisión de segundo.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-secondary-100 shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2">Seguridad Visible</h4>
                            <p className="text-sm text-secondary-600">Útil para detectar anulaciones de pedidos, cambios de precios o actividad sospechosa fuera de horario.</p>
                        </div>
                    </div>
                </section>

                {/* Backups */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Copias de Seguridad</h2>
                    </div>

                    <InfoBox type="info">
                        **Protección Automática**: El sistema mantiene un historial de backups con validación de integridad. Se recomienda descargar las copias más importantes a un disco externo.
                    </InfoBox>

                    <StepCard
                        stepNumber="2"
                        title="Gestión de Backups"
                        content="Inicie copias de seguridad de forma manual y monitoree el progreso en tiempo real sin bloquear la operación de su negocio."
                        image={imgBackup}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Acceso Remoto */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-secondary-900 relative z-10">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                Acceso Remoto (Tunnel)
                            </h3>
                            <p className="text-sm text-secondary-400 leading-relaxed mb-6">
                                Genere enlaces públicos temporales para soporte técnico o supervisión externa. Controle la duración del enlace y ciérrelo cuando ya no sea necesario.
                            </p>
                            <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                                <span className="text-xs font-bold text-primary-400 block mb-1 uppercase tracking-widest">Seguridad</span>
                                <span className="text-sm">Sólo administradores pueden iniciar el túnel. El enlace se cierra automáticamente al vencer el tiempo.</span>
                            </div>
                        </div>
                        <div className="w-full md:w-80 cursor-zoom-in group" onClick={() => openLightbox(imgTunnel)}>
                            <img src={imgTunnel} alt="Acceso Remoto" className="rounded-xl border border-secondary-700 shadow-2xl group-hover:scale-[1.02] transition-transform" />
                            <span className="text-[10px] text-secondary-500 block mt-2 text-center uppercase tracking-widest font-bold">Panel de Control de Enlace</span>
                        </div>
                    </div>
                </section>

                <InfoBox type="warning">
                    **Restricción de Acceso**: La visualización de auditoría y la creación de backups/túneles requiere privilegios de **Administrador**.
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

export default Auditoria;
