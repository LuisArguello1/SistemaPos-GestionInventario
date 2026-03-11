import React, { useState } from 'react';
import InfoBox from '../../components/InfoBox';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        presupuesto: 500,
        mensaje: '',
        _gotcha: ''
    });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (formData.nombre.length < 3) newErrors.nombre = "Nombre muy corto";
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email inválido";
        if (formData.mensaje.length < 10) newErrors.mensaje = "Por favor, detalle un poco más su requerimiento";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('sending');
        const FORMSPREE_ID = "xvzwkegj";
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.nombre,
                    email: formData.email,
                    budget_usd: formData.presupuesto,
                    message: formData.mensaje,
                    _subject: `Nueva Solicitud de Sistema POS: ${formData.nombre}`,
                    _gotcha: formData._gotcha
                })
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ nombre: '', email: '', presupuesto: 500, mensaje: '', _gotcha: '' });
                setErrors({});
            } else {
                throw new Error('Error al enviar');
            }
        } catch {
            setStatus('error');
        }
    };

    const fieldClass = (error) =>
        `w-full bg-secondary-50 border ${error ? 'border-red-300 ring-2 ring-red-500/10' : 'border-secondary-200'} rounded-xl px-4 py-3 text-sm text-secondary-800 focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-400 transition-all placeholder:text-secondary-300`;

    const beneficios = [
        { num: '01', text: 'Instalación local y segura, sin dependencia de internet.' },
        { num: '02', text: 'Capacitación personalizada para todo su staff.' },
        { num: '03', text: 'Soporte técnico prioritario post-instalación.' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl">

            {/* ── HEADER ── */}
            <header className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-primary-500" />
                    <span className="text-[11px] font-bold text-primary-500 tracking-[0.25em] uppercase">
                        Adquisición
                    </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-4">
                    Solicitar <span className="text-primary-500">Cotización</span>
                </h1>
                <p className="text-sm text-secondary-500 max-w-xl leading-relaxed">
                    Complete el formulario y nos pondremos en contacto para brindarle una propuesta personalizada para su negocio.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                {/* ── FORMULARIO ── */}
                <div className="lg:col-span-3">
                    <div className="bg-white border border-secondary-100 rounded-2xl shadow-sm overflow-hidden">

                        {/* Franja superior decorativa */}
                        <div className="h-1 w-full bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500" />

                        <div className="p-8">
                            {status === 'success' ? (
                                <div className="text-center py-16 animate-in zoom-in duration-500">
                                    <div className="w-16 h-16 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <svg className="h-7 w-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary-900 mb-2">¡Solicitud Enviada!</h3>
                                    <p className="text-secondary-400 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                                        Revisaremos su información y le contactaremos en menos de 24 horas.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-[10px] font-bold text-primary-500 uppercase tracking-widest hover:text-primary-600 transition-colors border-b border-primary-500/30 pb-0.5"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>

                            ) : status === 'error' ? (
                                <div className="text-center py-16 animate-in zoom-in duration-500">
                                    <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <svg className="h-7 w-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Error al enviar</h3>
                                    <p className="text-secondary-400 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                                        No pudimos conectar. Verifique su conexión e intente nuevamente.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2.5 bg-secondary-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary-800 transition-all"
                                    >
                                        Reintentar
                                    </button>
                                </div>

                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot */}
                                    <input type="text" name="_gotcha" value={formData._gotcha}
                                        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                                        style={{ display: 'none' }} />

                                    {/* Nombre + Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between items-center">
                                                <label className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest">
                                                    Nombre Completo
                                                </label>
                                                {errors.nombre && (
                                                    <span className="text-[9px] font-bold text-red-400">{errors.nombre}</span>
                                                )}
                                            </div>
                                            <input
                                                required type="text"
                                                className={fieldClass(errors.nombre)}
                                                placeholder="Juan Pérez"
                                                value={formData.nombre}
                                                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between items-center">
                                                <label className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest">
                                                    Correo Electrónico
                                                </label>
                                                {errors.email && (
                                                    <span className="text-[9px] font-bold text-red-400">{errors.email}</span>
                                                )}
                                            </div>
                                            <input
                                                required type="email"
                                                className={fieldClass(errors.email)}
                                                placeholder="juan@empresa.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Presupuesto slider */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <label className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest">
                                                Presupuesto Estimado
                                            </label>
                                            <div className="flex items-baseline gap-1 bg-primary-500/8 border border-primary-500/15 px-3 py-1 rounded-lg">
                                                <span className="text-[10px] font-bold text-primary-400">USD</span>
                                                <span className="text-base font-black text-primary-500">
                                                    ${formData.presupuesto.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            type="range" min="300" max="10000" step="100"
                                            className="w-full h-1.5 bg-secondary-100 rounded-full appearance-none cursor-pointer accent-primary-500"
                                            value={formData.presupuesto}
                                            onChange={(e) => setFormData({ ...formData, presupuesto: parseInt(e.target.value) })}
                                        />
                                        <div className="flex justify-between text-[9px] font-bold text-secondary-400 uppercase tracking-widest">
                                            <span>$300</span>
                                            <span>$10,000+</span>
                                        </div>
                                    </div>

                                    {/* Mensaje */}
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center">
                                            <label className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest">
                                                Notas o Requerimientos
                                            </label>
                                            {errors.mensaje && (
                                                <span className="text-[9px] font-bold text-red-400">{errors.mensaje}</span>
                                            )}
                                        </div>
                                        <textarea
                                            rows="4"
                                            className={fieldClass(errors.mensaje) + " resize-none"}
                                            placeholder="Cuéntenos sobre su negocio: mesas, sucursales, módulos que necesita..."
                                            value={formData.mensaje}
                                            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        disabled={status === 'sending'}
                                        className="w-full py-4 bg-secondary-900 text-primary-400 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-secondary-800 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-3 border border-secondary-800"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <div className="w-3.5 h-3.5 border-2 border-primary-400 border-t-transparent rounded-full animate-spin" />
                                                Procesando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Solicitud
                                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── SIDEBAR LATERAL ── */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Por qué elegirnos */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-secondary-400 tracking-[0.2em] uppercase">
                                Por qué elegirnos
                            </span>
                            <div className="flex-1 h-px bg-secondary-100" />
                        </div>
                        <div className="space-y-3">
                            {beneficios.map(({ num, text }) => (
                                <div key={num} className="flex items-start gap-3 p-3.5 rounded-xl border border-secondary-100 bg-white hover:border-primary-200 hover:bg-primary-500/5 transition-all duration-200">
                                    <span className="text-[10px] font-black text-primary-500 bg-primary-500/10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {num}
                                    </span>
                                    <p className="text-xs text-secondary-500 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contacto directo */}
                    <div className="bg-secondary-900 rounded-2xl p-6 border border-secondary-800 relative overflow-hidden">
                        {/* Glow decorativo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-[60px] opacity-10 pointer-events-none" />

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-primary-400 uppercase tracking-[0.2em]">
                                    Contacto Directo
                                </span>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-secondary-800 border border-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="h-4 w-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-secondary-600 font-bold uppercase tracking-widest mb-0.5">Correo</p>
                                        <p className="text-xs text-secondary-300 font-medium">d3v3loper.system@gmail.com</p>
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-secondary-800 border border-secondary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="h-4 w-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-secondary-600 font-bold uppercase tracking-widest mb-0.5">Ubicación</p>
                                        <p className="text-xs text-secondary-300 font-medium">Ecuador, Guayas — Milagro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <InfoBox type="note">
                    Al enviar este formulario, usted acepta que un representante se comunique con usted por los medios proporcionados para fines comerciales.
                </InfoBox>
            </div>
        </div>
    );
};

export default Contacto;