import { useEffect } from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import DocsLayouts from '../layouts/DocsLayouts';
import Dashboard from '../pages/modulos/Dashboard';
import Introduccion from '../pages/introduccion';
import Pos from '../pages/modulos/Pos';
import MotorCocina from '../pages/modulos/MotorCocina';
import HistorialCocina from '../pages/modulos/HistorialCocina';
import MetricasCocina from '../pages/modulos/MetricasCocina';
import Caja from '../pages/modulos/Caja';
import Carteleras from '../pages/modulos/Carteleras';
import Usuarios from '../pages/modulos/Usuarios';
import Autenticacion from '../pages/modulos/Autenticacion';
import Productos from '../pages/modulos/Productos';
import Inventario from '../pages/modulos/Inventario';
import Proveedores from '../pages/modulos/Proveedores';
import Compras from '../pages/modulos/Compras';
import Ventas from '../pages/modulos/Ventas';
import Clientes from '../pages/modulos/Clientes';
import Deudas from '../pages/modulos/Deudas';
import Gastos from '../pages/modulos/Gastos';
import ReporteVentas from '../pages/modulos/ReporteVentas';
import Auditoria from '../pages/modulos/Auditoria';
import EstadoResultado from '../pages/modulos/EstadoResultado';
import Instalacion from '../pages/modulos/Instalacion';
import Contacto from '../pages/modulos/Contacto';

// Componente para resetear el scroll al cambiar de ruta
const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

// Un componente wrapper para inyectar el layout y scroll to top
const withLayout = (Component) => (
    <ScrollToTop>
        <DocsLayouts>
            <Component />
        </DocsLayouts>
    </ScrollToTop>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/docs/bienvenida" replace />,
    },
    {
        path: '/docs/bienvenida',
        element: withLayout(Introduccion),
    },
    {
        path: '/docs/dashboard',
        element: withLayout(Dashboard),
    },
    {
        path: '/docs/pos',
        element: withLayout(Pos),
    },
    {
        path: '/docs/motor-cocina',
        element: withLayout(MotorCocina),
    },
    {
        path: '/docs/historial-cocina',
        element: withLayout(HistorialCocina),
    },
    {
        path: '/docs/metricas-cocina',
        element: withLayout(MetricasCocina),
    },
    {
        path: '/docs/caja',
        element: withLayout(Caja),
    },
    {
        path: '/docs/carteleras',
        element: withLayout(Carteleras),
    },
    {
        path: '/docs/usuarios',
        element: withLayout(Usuarios),
    },
    {
        path: '/docs/autenticacion',
        element: withLayout(Autenticacion),
    },
    {
        path: '/docs/productos',
        element: withLayout(Productos),
    },
    {
        path: '/docs/inventario',
        element: withLayout(Inventario),
    },
    {
        path: '/docs/proveedores',
        element: withLayout(Proveedores),
    },
    {
        path: '/docs/compras',
        element: withLayout(Compras),
    },
    {
        path: '/docs/ventas',
        element: withLayout(Ventas),
    },
    {
        path: '/docs/clientes',
        element: withLayout(Clientes),
    },
    {
        path: '/docs/deudas',
        element: withLayout(Deudas),
    },
    {
        path: '/docs/gastos',
        element: withLayout(Gastos),
    },
    {
        path: '/docs/reporte-ventas',
        element: withLayout(ReporteVentas),
    },
    {
        path: '/docs/auditoria',
        element: withLayout(Auditoria),
    },
    {
        path: '/docs/estado-resultado',
        element: withLayout(EstadoResultado),
    },
    {
        path: '/docs/instalacion',
        element: withLayout(Instalacion),
    },
    {
        path: '/docs/contacto',
        element: withLayout(Contacto),
    },
]);
