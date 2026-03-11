import React, { useState } from 'react';
import StepCard from '../../components/StepCard';
import InfoBox from '../../components/InfoBox';
import ImageViewer from '../../components/ImageViewer';

// Importación de imágenes
import imgListado from '../../assets/img/usuarios/LISTADOUSER.webp';
import imgRoles from '../../assets/img/usuarios/LISTADOROLES.webp';
import imgForm1 from '../../assets/img/usuarios/FORMULARIOUSER1.webp';
import imgForm2 from '../../assets/img/usuarios/FORMULARIOUSER2.webp';

const Usuarios = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
    const openLightbox = (img) => setLightbox({ isOpen: true, image: img });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-secondary-900 tracking-tight sm:text-5xl mb-6">
                    Administración de <span className="text-primary-500">Usuarios</span>
                </h1>
                <p className="text-lg text-secondary-600 max-w-3xl leading-relaxed">
                    Controle el acceso al sistema, defina privilegios específicos por rol y garantice la trazabilidad de las acciones del personal.
                </p>
            </header>

            <div className="space-y-12">
                {/* Gestión de Cuentas */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Gestión de Cuentas</h2>
                    </div>
                    
                    <StepCard
                        stepNumber="1"
                        title="Directorio de Personal"
                        content="Acceda al listado completo de empleados. Busque y filtre por nombre, correo electrónico o estado de la cuenta (Activo/Inactivo)."
                        image={imgListado}
                        onImageClick={openLightbox}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm cursor-zoom-in group hover:border-primary-200 transition-colors" onClick={() => openLightbox(imgForm1)}>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-secondary-900">Creación de Cuentas</h4>
                                <span className="text-xs font-bold px-2 py-1 bg-secondary-100 rounded text-secondary-500 uppercase tracking-widest">Paso 1</span>
                            </div>
                            <p className="text-xs text-secondary-600 mb-4">Asigne información básica: Nombre completo, correo electrónico corporativo y estado inicial de la cuenta.</p>
                            <img src={imgForm1} alt="Formulario 1" className="rounded-lg border border-secondary-50 w-full" />
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100 shadow-sm cursor-zoom-in group hover:border-primary-200 transition-colors" onClick={() => openLightbox(imgForm2)}>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-secondary-900">Configuración de Seguridad</h4>
                                <span className="text-xs font-bold px-2 py-1 bg-secondary-100 rounded text-secondary-500 uppercase tracking-widest">Paso 2</span>
                            </div>
                            <p className="text-xs text-secondary-600 mb-4">Defina la contraseña inicial y asigne el <strong>Rol Operativo</strong> acorde a las responsabilidades del empleado.</p>
                            <img src={imgForm2} alt="Formulario 2" className="rounded-lg border border-secondary-50 w-full" />
                        </div>
                    </div>
                </section>

                {/* Roles y Privilegios */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04m16.517-3.664A11.955 11.955 0 0112 20.944a11.955 11.955 0 01-8.618-3.04" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">Control de Privilegios</h2>
                    </div>

                    <div className="space-y-6">
                        <InfoBox type="info">
                            <strong>Niveles de Seguridad</strong>: Los roles determinan qué módulos son visibles y qué acciones (ver, editar, eliminar) puede realizar cada usuario.
                        </InfoBox>

                        <StepCard
                            stepNumber="2"
                            title="Listado de Roles"
                            content="Consulte los roles configurados en el sistema (Administrador, Caja, Cocina, etc.) para asignar permisos coherentes."
                            image={imgRoles}
                            onImageClick={openLightbox}
                        />
                    </div>
                </section>

                {/* Recuperación y Perfil */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="bg-secondary-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Perfil y Autogestión
                        </h3>
                        <p className="text-sm text-secondary-400 leading-relaxed mb-6">
                            Cada usuario puede gestionar su propia información y realizar el cambio de contraseña de forma periódica por seguridad.
                        </p>
                        <div className="p-4 bg-secondary-800 rounded-xl border border-secondary-700">
                            <span className="text-xs font-bold text-primary-400 block mb-1">Dato Clave</span>
                            <span className="text-sm">El cierre de sesión invalida todos los tokens de acceso activo.</span>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
                        <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Recuperación de Acceso
                        </h3>
                        <p className="text-sm text-secondary-600 leading-relaxed">
                            Si olvida su clave, el sistema permite solicitar un <strong>Código OTP</strong> vía correo electrónico registrado para crear una nueva contraseña de forma segura.
                        </p>
                        <div className="mt-8">
                             <InfoBox type="warning">
                                <strong>Restricción de Borrado</strong>: Solo administradores pueden eliminar cuentas. Se recomienda desactivarlas para no perder la auditoría histórica.
                             </InfoBox>
                        </div>
                    </section>
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

export default Usuarios;
