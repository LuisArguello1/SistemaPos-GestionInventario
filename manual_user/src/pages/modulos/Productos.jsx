import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgProductos from '../../assets/img/productos/PRODUCTOS.webp';
import imgCategorias from '../../assets/img/productos/CATEGORIAS.webp';
import imgBarra from '../../assets/img/productos/BARRAOPCIONES.webp';
import imgImpuestos from '../../assets/img/productos/IMPUESTOS.webp';
import imgMenu from '../../assets/img/productos/MENU.webp';
import imgPrecios from '../../assets/img/productos/AJUSTESPRECIOS.webp';

const Productos = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Gestión de <span className="text-primary-500">Productos</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Administre el catálogo completo de su establecimiento: categorías, productos, variantes, impuestos y herramientas de inventario.
                </p>
            </header>

            <div className="space-y-12">
                {/* Categorías y Organización */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Categorías y Menú</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Gestión de Categorías"
                        content="Organice su menú creando, editando y reordenando categorías. Puede activar o desactivar secciones enteras del menú con un solo clic."
                        image={imgCategorias}
                        onImageClick={openLightbox}
                    />
                </section>

                <InfoBox type="tip">
                    <strong>Optimización</strong>: El sistema convierte automáticamente las imágenes a formato WebP para garantizar una carga rápida en todos los dispositivos.
                </InfoBox>

                {/* Catálogo y Variantes */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Catálogo de Productos</h2>
                    </div>

                    <StepCard
                        stepNumber="2"
                        title="Productos y Variantes"
                        content="Defina productos con descripciones e imágenes. Añada variantes por tamaño o presentación (ej: Simple, Doble) con su propio precio, SKU y control de stock individual."
                        image={imgProductos}
                        onImageClick={openLightbox}
                    />

                    <StepCard
                        stepNumber="3"
                        title="Herramientas Globales"
                        content="La barra superior proporciona acceso rápido a herramientas críticas: gestión de **Categorías**, configuración de **Impuestos**, generación de **Menú PDF**, exportación a **Excel** y el **Ajuste Masivo de Precios**."
                        image={imgBarra}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Dashboard de inventario */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-secondary-900/5 p-4 rounded-2xl border border-secondary-100 italic text-sm text-secondary-600">
                        <span className="font-bold text-secondary-900 block mb-1">Total Productos</span>
                        Conteo rápido de todos los ítems registrados en el catálogo.
                    </div>
                    <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 italic text-sm text-rose-700">
                        <span className="font-bold text-rose-900 block mb-1">Stock Crítico</span>
                        Alerta visual inmediata de productos con existencia en cero o por debajo del mínimo.
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 italic text-sm text-emerald-700">
                        <span className="font-bold text-emerald-900 block mb-1">Valor Inventario</span>
                        Cálculo automático del valor total del stock basado en los costos registrados.
                    </div>
                </section>

                <section className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100 border-dashed">
                    <h3 className="text-sm font-bold text-secondary-900 mb-2 uppercase tracking-tight">Filtros y Visualización</h3>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                        El sistema permite una búsqueda rápida por <strong>Nombre o SKU</strong>, filtrar por <strong>Categoría específica</strong> y alternar la visualización de <strong>Productos Inactivos</strong>. Además, el usuario puede cambiar entre modo <strong>Cuadrícula (Grid)</strong> o <strong>Lista</strong> según su preferencia operativa.
                    </p>
                </section>

                {/* Finanzas e Inventario */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                                <div className="w-2 h-6 bg-accent-500 rounded-full" />
                                Impuestos y Costos
                            </h3>
                            <p className="text-sm text-secondary-600 leading-relaxed">
                                Asocie tasas de IVA específicas por producto para cálculos precisos en ventas. El sistema permite registrar costos base para calcular la utilidad real.
                            </p>
                            <div className="rounded-2xl border border-secondary-100 overflow-hidden" onClick={() => openLightbox(imgImpuestos)}>
                                <img src={imgImpuestos} alt="Impuestos" className="w-full cursor-zoom-in" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
                                <div className="w-2 h-6 bg-primary-500 rounded-full" />
                                Ajuste Masivo
                            </h3>
                            <p className="text-sm text-secondary-600 leading-relaxed">
                                Actualice precios en lote por porcentaje o valor fijo para categorías completas, ideal para cambios de temporada o inflación.
                            </p>
                            <div className="rounded-2xl border border-secondary-100 overflow-hidden" onClick={() => openLightbox(imgPrecios)}>
                                <img src={imgPrecios} alt="Ajuste de Precios" className="w-full cursor-zoom-in" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Generador de Menús */}
                <section className="bg-secondary-50 rounded-3xl p-8 border border-secondary-100">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-secondary-900 mb-4 tracking-tight">Generador de Menús</h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                No necesita diseñar su carta manualmente. El sistema genera menús PDF en varios estilos automáticamente basados en los productos activos en su catálogo.
                            </p>
                            <ul className="space-y-2 text-sm text-secondary-700 font-medium">
                                <li className="flex items-center gap-2">
                                    <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                                    Varios estilos visuales
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="h-4 w-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                                    Listo para imprimir o descargar
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-72 shadow-2xl rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform cursor-zoom-in" onClick={() => openLightbox(imgMenu)}>
                            <img src={imgMenu} alt="Generador de Menú" className="w-full" />
                        </div>
                    </div>
                </section>

                <InfoBox type="warning">
                    <strong>Control de Stock</strong>: Las ventas descuentan automáticamente el stock de la variante. Para combos o recetas, se descuenta de los componentes base vinculados.
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

export default Productos;
