import React from 'react';
import InfoBox from '../../components/InfoBox';

const Instalacion = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 font-sans">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6 font-display">
                    Puesta en Marcha y <span className="text-primary-500">Conectividad</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Descubra cómo el **Sistema POS e Inventario** se integra en su negocio. Esta guía explica el funcionamiento de su red interna para garantizar una operación fluida y sin interrupciones.
                </p>
            </header>

            <div className="space-y-16">
                {/* El Cerebro del Negocio */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">El Servidor Central</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4">
                            <p className="text-secondary-600 leading-relaxed text-sm">
                                El sistema funciona con un **Servidor Central** (la computadora principal de su local). Este equipo actúa como el "cerebro" donde se guarda cada venta, ingrediente y movimiento de caja.
                            </p>
                            <p className="text-secondary-600 leading-relaxed text-sm">
                                Una vez configurado, el servidor se encarga de distribuir la información a todas las tablets y celulares de sus meseros de forma instantánea.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-[2.5rem] border border-secondary-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-secondary-900 uppercase tracking-widest">Base de Datos Segura</span>
                            <p className="text-[11px] text-secondary-500 mt-2">Su información nunca sale del local, garantizando privacidad total y velocidad máxima.</p>
                        </div>
                    </div>
                </section>

                {/* Intranet y Autonomía */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Operación Independiente</h2>
                    </div>

                    <div className="p-8 border border-emerald-100 rounded-[3rem] bg-emerald-50/30">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h3 className="text-xl font-bold text-emerald-900">¿Qué es la Intranet?</h3>
                            <p className="text-emerald-800/80 leading-relaxed text-sm">
                                Es su propia red de Wi-Fi privada. A diferencia de otros sistemas que dependen de internet, nuestro software trabaja "en casa". Esto significa que **si el internet se cae, su negocio sigue vendiendo sin problemas**.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-left leading-tight">
                                        <span className="block font-bold text-emerald-900 text-xs text-nowrap">Velocidad Extrema</span>
                                        <span className="text-[10px] text-emerald-600">Sin tiempos de espera de carga.</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04" />
                                        </svg>
                                    </div>
                                    <div className="text-left leading-tight">
                                        <span className="block font-bold text-emerald-900 text-xs text-nowrap">Total Autonomía</span>
                                        <span className="text-[10px] text-emerald-600">Venda con o sin internet.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disponibilidad Permanente */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Siempre Listo (Servicio Invisible)</h2>
                    </div>

                    <div className="bg-white border border-secondary-100 rounded-[3rem] p-10 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="md:w-1/2 space-y-5">
                                <h4 className="text-xl font-black text-secondary-900 leading-tight">Operación de Fondo</h4>
                                <p className="text-secondary-600 text-sm leading-relaxed">
                                    El sistema se configura como un "Servicio de Windows". Esto significa que se enciende solo al prender la computadora, **sin que usted tenga que abrir ninguna ventana o programa manualmente**.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-secondary-700">
                                        <span className="text-primary-500">✓</span> No requiere abrir terminales
                                    </li>
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-secondary-700">
                                        <span className="text-primary-500">✓</span> Siempre activo en segundo plano
                                    </li>
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-secondary-700">
                                        <span className="text-primary-500">✓</span> Recuperación automática ante fallos
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-[60px]" />
                                <div className="relative border border-secondary-800 bg-secondary-900 rounded-2xl p-6 text-primary-400 font-mono text-[10px] leading-relaxed shadow-2xl">
                                    [ESTADO] System: EN EJECUCIÓN <br />
                                    [ACCESO] http://192.168.1.100 <br />
                                    [TIEMPO] 24/7 Activo
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conexión de Dispositivos */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 font-display">Cómo Conectarse</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-secondary-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 font-bold text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                            </div>
                            <h5 className="font-bold text-secondary-900 mb-2">Paso 1: Red Wi-Fi</h5>
                            <p className="text-[11px] text-secondary-500">Asegúrese de que el celular o tablet esté en la misma red Wi-Fi que el servidor.</p>
                        </div>
                        <div className="p-8 bg-white rounded-[2.5rem] border border-secondary-100 flex flex-col items-center text-center relative overflow-hidden group">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h5 className="font-bold text-secondary-900 mb-2">Paso 2: Acceso Directo</h5>
                            <p className="text-[11px] text-secondary-500 mb-4">Ingrese la dirección IP de su servidor o simplemente **escanee el código QR** desde la pantalla principal para entrar al instante sin escribir nada.</p>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                Escaneo de Código QR
                            </div>
                        </div>
                        <div className="p-8 bg-white rounded-[2.5rem] border border-secondary-100 flex flex-col items-center text-center ring-4 ring-primary-500/10">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 font-bold text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h5 className="font-bold text-secondary-900 mb-2">Paso 3: ¡Listo!</h5>
                            <p className="text-[11px] text-secondary-500">Inicie sesión con su usuario y comience a gestionar sus pedidos al instante.</p>
                        </div>
                    </div>
                </section>
            </div>

            <InfoBox type="tip">
                **Acceso Directo**: Puede crear un ícono en la pantalla de inicio de su celular para abrir el sistema como si fuera una App instalada.
            </InfoBox>
        </div>
    );
};

export default Instalacion;
