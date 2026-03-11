import React, { useState } from 'react';
import StepCard from '../components/StepCard';
import InfoBox from '../components/InfoBox';
import ImageViewer from '../components/ImageViewer';

// Importación de imágenes
import imgInicio from '../assets/img/introduccion/INICIO.webp';
import imgRol from '../assets/img/introduccion/ROL.webp';
import imgDashboard from '../assets/img/introduccion/DASHBOARD.png';

// Importación de video
import videoDemo from '../assets/video/DEMOSTRACION.mp4';

const Introduccion = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">

            {/* ── HEADER EDITORIAL ── */}
            <header className="mb-14">
                {/* Eyebrow label */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary-500" />
                    <span className="text-[11px] font-bold text-primary-500 tracking-[0.25em] uppercase">
                        Documentación Oficial
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-4">
                    Introducción al <br />
                    <span className="text-secondary-900">Sistema </span>
                    <span className="text-primary-500">POS</span>
                    <span className="text-secondary-400 font-light"> & Gestión</span>
                </h1>

                {/* Divider decorativo */}
                <div className="flex items-center gap-3 my-6">
                    <div className="h-px flex-1 bg-secondary-100" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <div className="w-1 h-1 rounded-full bg-secondary-300" />
                </div>

                <p className="text-base text-secondary-500 leading-relaxed max-w-2xl">
                    Comanda es una plataforma integral diseñada para gestionar de forma centralizada
                    las operaciones de establecimientos de alimentos y bebidas — punto de venta,
                    inventarios, cocina y administración en una sola interfaz.
                </p>
            </header>

            <div className="space-y-10">

                {/* ── VIDEO DEMOSTRATIVO ── */}
                <div className="relative group">
                    {/* Glow exterior usando primary */}
                    <div className="absolute -inset-px bg-gradient-to-br from-primary-500/30 via-transparent to-accent-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700" />

                    <div className="relative bg-secondary-900 rounded-3xl overflow-hidden border border-secondary-800 shadow-2xl">
                        {/* Barra superior estilo app */}
                        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-secondary-800 bg-secondary-900">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-secondary-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-secondary-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-secondary-700" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="bg-secondary-800 rounded-md px-4 py-1 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                                    <span className="text-[10px] text-secondary-500 font-mono tracking-wide">demo</span>
                                </div>
                            </div>
                            {/* Badge */}
                            <span className="text-[9px] font-bold text-primary-400 tracking-widest uppercase bg-primary-500/10 px-2 py-1 rounded-md border border-primary-500/20">
                                Demo
                            </span>
                        </div>

                        {/* Video */}
                        <div className="relative overflow-hidden">
                            <video
                                src={videoDemo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Inset shadow para profundidad */}
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
                        </div>
                    </div>
                </div>

                {/* ── INFOBOX ── */}
                <InfoBox type="info">
                    Todo el sistema está pensado para optimizar el flujo de trabajo, mejorar la
                    trazabilidad y facilitar la toma de decisiones en tiempo real.
                </InfoBox>

                {/* ── STEPS ── */}
                <div className="space-y-6">
                    {/* Label de sección */}
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-secondary-400 tracking-[0.2em] uppercase">
                            Primeros pasos
                        </span>
                        <div className="flex-1 h-px bg-secondary-100" />
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Acceso al Sistema (Login)"
                        content="Inicie sesión con sus credenciales autorizadas. El sistema garantiza que solo el personal con permisos activos pueda acceder a las funciones operativas."
                        image={imgInicio}
                        onImageClick={openLightbox}
                    />
                    <StepCard
                        stepNumber="2"
                        title="Selección de Rol"
                        content="Dependiendo de su cargo (Administrador, Mesero, Cocinero), podrá seleccionar el entorno de trabajo específico para sus tareas diarias."
                        image={imgRol}
                        onImageClick={openLightbox}
                    />
                    <StepCard
                        stepNumber="3"
                        title="Panel General (Dashboard)"
                        content="Una vez dentro, el Dashboard le proporcionará una visión rápida de las ventas del día, el estado de las mesas y las métricas clave de rendimiento."
                        image={imgDashboard}
                        onImageClick={openLightbox}
                    />
                </div>

                {/* ── CARD SEGURIDAD ── */}
                <div className="relative bg-secondary-900 rounded-2xl p-7 text-white overflow-hidden border border-secondary-800">
                    {/* Acento decorativo usando primary */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500 rounded-full blur-[80px] opacity-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500 rounded-full blur-[60px] opacity-10 pointer-events-none" />

                    <div className="relative flex items-start gap-4">
                        {/* Icono con fondo primary */}
                        <div className="w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                                Seguridad y Control Total
                            </h3>
                            <p className="text-sm text-secondary-400 leading-relaxed">
                                Desde la gestión de inventarios hasta reportes, auditoría y backups —
                                el sistema centraliza cada aspecto de su negocio en una sola interfaz
                                segura y trazable.
                            </p>

                            {/* Tags de características */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {['Inventarios', 'Reportes', 'Auditoría', 'Backups'].map((tag) => (
                                    <span key={tag} className="text-[10px] font-semibold text-secondary-400 bg-secondary-800 border border-secondary-700 px-2.5 py-1 rounded-full tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ImageViewer
                isOpen={lightbox.isOpen}
                image={lightbox.image}
                close={() => setLightbox({ ...lightbox, isOpen: false })}
            />
        </div>
    );
};

export default Introduccion;