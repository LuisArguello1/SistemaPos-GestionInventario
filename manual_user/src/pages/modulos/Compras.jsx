import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/compras/LISTADO.webp';
import imgDetalle from '../../assets/img/compras/DETALLECOMPRA.webp';
import imgRecepcion from '../../assets/img/compras/RECEPCIONMERCANCIA.webp';
import imgAnular from '../../assets/img/compras/ANULARORDEN.webp';
import imgPaso1 from '../../assets/img/compras/PASO1COMPRA.webp';
import imgPaso2 from '../../assets/img/compras/PASO2COMPRA.webp';
import imgPaso3 from '../../assets/img/compras/PASO3COMPRA.webp';

const Compras = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Gestión de <span className="text-primary-500">Compras</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Controle el ciclo completo de abastecimiento: desde la orden de compra hasta la recepción física de mercadería y el pago a proveedores.
                </p>
            </header>

            <div className="space-y-12">
                {/* Proceso de Creación */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Proceso de Creación</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm hover:border-primary-200 transition-colors cursor-zoom-in" onClick={() => openLightbox(imgPaso1)}>
                            <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500 font-bold text-sm mb-4">1</div>
                            <h4 className="font-bold text-secondary-900 mb-2">Datos Generales</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Selección del proveedor, fecha de la operación, número de factura y configuración del porcentaje de IVA.</p>
                            <img src={imgPaso1} alt="Paso 1: Datos" className="mt-4 rounded-lg border border-secondary-50" />
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm hover:border-primary-200 transition-colors cursor-zoom-in" onClick={() => openLightbox(imgPaso2)}>
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm mb-4">2</div>
                            <h4 className="font-bold text-secondary-900 mb-2">Selección de Ítems</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Búsqueda de productos por nombre o SKU. Registro de cantidades y costos unitarios para cada variante.</p>
                            <img src={imgPaso2} alt="Paso 2: Items" className="mt-4 rounded-lg border border-secondary-50" />
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm hover:border-primary-200 transition-colors cursor-zoom-in" onClick={() => openLightbox(imgPaso3)}>
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm mb-4">3</div>
                            <h4 className="font-bold text-secondary-900 mb-2">Confirmación</h4>
                            <p className="text-xs text-secondary-600 leading-relaxed">Resumen detallado del proveedor, fecha, desglose de IVA y total final antes de generar la orden.</p>
                            <img src={imgPaso3} alt="Paso 3: Confirmar" className="mt-4 rounded-lg border border-secondary-50" />
                        </div>
                    </div>
                </section>

                {/* Ciclo de Vida de la Orden */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Ciclo de Vida de la Orden</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-secondary-100 bg-white shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary-400"></span>
                                Borrador (Draft)
                            </h4>
                            <p className="text-sm text-secondary-600">Estado inicial. Permite editar ítems, cantidades y costos sin afectar el inventario ni generar gastos contables.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-secondary-100 bg-white shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                Pedido (Ordered)
                            </h4>
                            <p className="text-sm text-secondary-600">La orden se marca como enviada al proveedor. El documento queda bloqueado para edición pero aún no suma stock.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-secondary-100 bg-white shadow-sm">
                            <h4 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Recibido (Received)
                            </h4>
                            <p className="text-sm text-secondary-600">Cierre del ciclo. La mercadería ingresa al inventario, se actualiza el costo promedio y se registra el gasto en el sistema.</p>
                        </div>
                    </div>
                </section>

                <InfoBox type="info">
                    **Numeración Automática**: Cada compra recibe un folio único con formato `PC-YYYYMMDD-XXXX` para facilitar la trazabilidad y auditoría.
                </InfoBox>

                {/* Detalle y Recepción */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Recepción y Stock</h2>
                    </div>

                    <StepCard
                        stepNumber="A"
                        title="Recepción de Mercadería"
                        content="Al marcar una compra como **Recibida**, el sistema genera automáticamente las entradas en inventario por cada ítem y crea un gasto en la categoría 'Compras de Inventario'."
                        image={imgRecepcion}
                        onImageClick={openLightbox}
                    />

                    <StepCard
                        stepNumber="B"
                        title="Detalle de Ítems"
                        content="Gestione cantidades, costos unitarios y subtotales. El sistema calcula automáticamente el IGV (configurable) y el total neto de la operación."
                        image={imgDetalle}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Pagos y Restricciones */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                                <div className="w-2 h-6 bg-accent-500 rounded-full" />
                                Pagos a Proveedores
                            </h3>
                            <p className="text-sm text-secondary-600 leading-relaxed">
                                Registre pagos totales o parciales (Efectivo, Transferencia, Tarjeta). Los pagos en efectivo se vinculan directamente a la **Caja Activa**. El estado cambia a *Páid* solo cuando el saldo llega a cero.
                            </p>
                            <InfoBox type="warning">
                                Las órdenes solo pueden cancelarse si aún **no han sido recibidas**. Una vez en stock, la operación es inmutable por seguridad contable.
                            </InfoBox>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                                <div className="w-2 h-6 bg-rose-500 rounded-full" />
                                Restricciones de Seguridad
                            </h3>
                            <div className="rounded-2xl border border-secondary-100 overflow-hidden shadow-sm" onClick={() => openLightbox(imgAnular)}>
                                <img src={imgAnular} alt="Anulación" className="w-full cursor-zoom-in" />
                            </div>
                            <p className="text-xs text-secondary-500 italic">
                                Solo personal con permisos administrativos puede anular órdenes en estado Borrador o Pedido.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cuentas por Pagar */}
                <section className="bg-secondary-900 rounded-3xl p-8 text-white shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">Cuentas por Pagar</h2>
                            <p className="text-secondary-400 mb-6 leading-relaxed">
                                Acceda a un listado filtrable de compras con saldo pendiente. Visualice métricas agregadas: total comprado, monto pagado y deuda acumulada por proveedor.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-secondary-800 p-4 rounded-xl flex-1 border border-secondary-700">
                                    <span className="text-xs text-secondary-400 block mb-1">Adjuntos</span>
                                    <span className="text-sm font-medium">Soporta Facturas PDF</span>
                                </div>
                                <div className="bg-secondary-800 p-4 rounded-xl flex-1 border border-secondary-700">
                                    <span className="text-xs text-secondary-400 block mb-1">Historial</span>
                                    <span className="text-sm font-medium">Precios por Variante</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-96 rounded-xl overflow-hidden shadow-2xl cursor-zoom-in" onClick={() => openLightbox(imgListado)}>
                            <img src={imgListado} alt="Listado Compras" className="w-full" />
                        </div>
                    </div>
                </section>

                <InfoBox type="tip">
                    **Recomendación**: Reciba físicamente la mercadería antes de registrar pagos en el sistema para asegurar la coincidencia entre el stock digital y el real.
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

export default Compras;
