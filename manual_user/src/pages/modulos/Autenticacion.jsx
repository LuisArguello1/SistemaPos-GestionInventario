import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgLogin from '../../assets/img/login/Login.webp';
import imgPaso1 from '../../assets/img/login/PASO1.webp';
import imgPaso2 from '../../assets/img/login/PASO2.webp';
import imgPaso3 from '../../assets/img/login/PASO3.webp';

const Autenticacion = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Autenticación y <span className="text-primary-500">Seguridad</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Nuestra solución de <strong>Sistema POS y Gestión de Inventario</strong> utiliza un ecosistema de autenticación robusto basado en estándares modernos de la industria para garantizar la integridad de los datos.
                </p>
            </header>

            <div className="space-y-12">
                {/* Sección 1: Login */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Acceso Administrativo</h2>
                    </div>

                    <StepCard
                        stepNumber="1"
                        title="Inicio de Sesión"
                        content="Autenticación mediante email y contraseña. No existe registro público; las cuentas son creadas únicamente por súper-usuarios para mantener el control total del establecimiento."
                        image={imgLogin}
                        onImageClick={openLightbox}
                    />
                </section>

                {/* Sección de Seguridad Técnica */}
                <InfoBox type="tip">
                    <div className="font-bold mb-1 uppercase tracking-wider text-[11px]">Seguridad de Tokens</div>
                    Los tokens JWT (<strong>Access</strong> y <strong>Refresh</strong>) no se exponen al código JavaScript. Se almacenan como cookies <strong>HttpOnly</strong> y <strong>SameSite=Lax</strong>, protegiendo el sistema contra ataques XSS y CSRF.
                </InfoBox>

                {/* Sección 2: OTP */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                            <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Recuperación OTP
                            </h3>
                            <ul className="space-y-3 text-sm text-primary-800">
                                <li className="flex gap-2"><span>•</span> Código de 6 dígitos enviado por correo.</li>
                                <li className="flex gap-2"><span>•</span> Validez máxima de 30 minutos.</li>
                                <li className="flex gap-2"><span>•</span> Un solo uso; la regeneración invalida el anterior.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-900 rounded-3xl p-8 text-white">
                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Rate Limiting
                            </h3>
                            <p className="text-sm text-secondary-400 leading-relaxed">
                                Protección contra fuerza bruta mediante limitación de peticiones por IP y Hash de Email. Evita la enumeración de usuarios en los mensajes de error.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <StepCard
                            stepNumber="A"
                            title="Solicitud de Código"
                            content="Ingrese su correo para recibir el código. El sistema no confirmará si el correo existe por razones de seguridad."
                            image={imgPaso1}
                            onImageClick={openLightbox}
                        />
                        <StepCard
                            stepNumber="B"
                            title="Verificación OTP"
                            content="Ingrese el código recibido. Tiene 3 intentos antes de que la sesión temporal se bloquee."
                            image={imgPaso2}
                            onImageClick={openLightbox}
                        />
                        <StepCard
                            stepNumber="C"
                            title="Nueva Contraseña"
                            content="Una vez validado el OTP, podrá establecer su nueva credencial de acceso."
                            image={imgPaso3}
                            onImageClick={openLightbox}
                        />
                    </div>
                </section>

                <InfoBox type="warning">
                    El cierre de sesión (<strong>Logout</strong>) elimina ambas cookies del navegador e invalida la rotación de tokens en el servidor inmediatamente.
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

export default Autenticacion;
