import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/proveedores/LISTADO.webp';

const Proveedores = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Gestión de <span className="text-primary-500">Proveedores</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Administre su red de suministros: desde el registro detallado hasta el análisis de gastos y cumplimiento de términos de pago.
                </p>
            </header>

            <div className="space-y-12">
                {/* Registro y Ficha Técnica */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Directorio de Suministros</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Ficha del Proveedor"
                        content="Cree perfiles completos incluyendo: Razón Social, Documento, Contacto directo, Teléfono, Email, Dirección y términos de pago pactados."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Operaciones Inteligentes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl p-8 border border-secondary-100 shadow-sm">
                        <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-accent-500 rounded-full" />
                            Eliminación Inteligente
                        </h3>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                            El sistema protege la integridad histórica. Si un proveedor tiene compras asociadas, se **desactivará** (soft-delete) para preservar los reportes. Si no tiene historial, podrá eliminarse permanentemente.
                        </p>
                    </div>

                    <div className="bg-secondary-900 rounded-3xl p-8 text-white">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04" />
                            </svg>
                            Validación de Datos
                        </h3>
                        <p className="text-sm text-secondary-400 leading-relaxed">
                            Control automático de documentos duplicados y validación de campos obligatorios para evitar errores en la facturación de compras.
                        </p>
                    </div>
                </div>

                {/* Estadísticas y Analítica */}
                <section className="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Análisis por Proveedor
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: 'Total Compras', desc: 'Volumen de pedidos realizados.' },
                            { label: 'Gasto Total', desc: 'Inversión acumulada histórica.' },
                            { label: 'Compra Promedio', desc: 'Ticket medio por cada orden.' },
                            { label: 'Monto Pendiente', desc: 'Saldos por pagar en conciliación.' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-primary-200/50">
                                <span className="block font-bold text-primary-900 text-sm mb-1">{stat.label}</span>
                                <span className="block text-xs text-primary-600 leading-snug">{stat.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <InfoBox type="tip">
                    **Recomendación**: Revise periódicamente la pestaña de **Compras y Pagos** de cada proveedor para asegurar que sus cuentas por pagar estén al día.
                </InfoBox>

                <section className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100 border-dashed">
                    <h3 className="text-sm font-bold text-secondary-900 mb-2 uppercase tracking-tight">Búsqueda y Filtros</h3>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                        Localice proveedores al instante buscando por **Razón Social, Documento, Email o Teléfono**. Utilice el filtro de estado para visualizar únicamente los proveedores en activo.
                    </p>
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

export default Proveedores;
