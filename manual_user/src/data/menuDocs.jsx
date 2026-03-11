export const menuDocs = [
    {
        id: 'principal',
        title: 'Principal',
        icon: 'Home',
        modules: [
            {
                id: 'bienvenida',
                title: 'Bienvenida',
                path: '/docs/bienvenida',
                description: 'Introducción al sistema de comanda y sus beneficios.',
                tags: ['inicio', 'introduccion']
            },
            {
                id: 'dashboard',
                title: 'Dashboard',
                path: '/docs/dashboard',
                description: 'Resumen general y métricas en tiempo real.',
                tags: ['inicio', 'metricas', 'resumen']
            },
            {
                id: 'pos',
                title: 'Nueva Comanda',
                path: '/docs/pos',
                description: 'Toma de pedidos, cobros y facturación rápida.',
                tags: ['ventas', 'pos', 'cobros', 'comanda']
            }
        ]
    },
    {
        id: 'cocina',
        title: 'Cocina',
        icon: 'UtensilsCrossed',
        modules: [
            {
                id: 'motor-cocina',
                title: 'Monitor de Cocina',
                path: '/docs/motor-cocina',
                description: 'Gestión de comandas en tiempo real para cocina.',
                tags: ['pedidos', 'cocina', 'comandas']
            },
            {
                id: 'historial-cocina',
                title: 'Historial de Cocina',
                path: '/docs/historial-cocina',
                description: 'Consulta de órdenes completadas y tiempos de preparación.',
                tags: ['historial', 'cocina', 'auditoria', 'tiempos']
            },
            {
                id: 'metricas-cocina',
                title: 'Métricas de Cocina',
                path: '/docs/metricas-cocina',
                description: 'Indicadores de eficiencia, horas pico y carga operativa.',
                tags: ['metricas', 'graficos', 'analisis', 'eficiencia']
            }
        ]
    },
    {
        id: 'ventas-clientes',
        title: 'Ventas y Clientes',
        icon: 'Users',
        modules: [
            {
                id: 'ventas',
                title: 'Control de Ventas',
                path: '/docs/ventas',
                description: 'Historial de ventas realizadas y gestión de pedidos.',
                tags: ['ventas', 'historial', 'reportes']
            },
            {
                id: 'caja',
                title: 'Caja y Arqueo',
                path: '/docs/caja',
                description: 'Gestión de turnos de caja, ingresos y egresos.',
                tags: ['caja', 'arqueo', 'dinero']
            },
            {
                id: 'clientes',
                title: 'Clientes',
                path: '/docs/clientes',
                description: 'Directorio de clientes y gestión de cartera.',
                tags: ['clientes', 'cartera', 'directorio']
            },
            {
                id: 'deudas',
                title: 'Deudas / Pagos',
                path: '/docs/deudas',
                description: 'Gestión de créditos y abonos de clientes.',
                tags: ['deudas', 'pagos', 'credito']
            },
            {
                id: 'gastos',
                title: 'Gastos Operativos',
                path: '/docs/gastos',
                description: 'Registro de egresos y categorías de gastos.',
                tags: ['gastos', 'egresos', 'control']
            }
        ]
    },
    {
        id: 'logistica',
        title: 'Logística',
        icon: 'Package',
        modules: [
            {
                id: 'productos',
                title: 'Productos',
                path: '/docs/productos',
                description: 'Administración de catálogo y precios.',
                tags: ['productos', 'catalogo']
            },
            {
                id: 'inventario',
                title: 'Inventario',
                path: '/docs/inventario',
                description: 'Control de stock y movimientos de almacén.',
                tags: ['stock', 'almacen']
            },
            {
                id: 'proveedores',
                title: 'Proveedores',
                path: '/docs/proveedores',
                description: 'Directorio de contactos de suministro.',
                tags: ['proveedores', 'contactos']
            },
            {
                id: 'compras',
                title: 'Compras',
                path: '/docs/compras',
                description: 'Órdenes de compra y recepción de insumos.',
                tags: ['compras', 'insumos']
            }
        ]
    },
    {
        id: 'administracion',
        title: 'Administración',
        icon: 'ShieldCheck',
        modules: [
            {
                id: 'usuarios',
                title: 'Usuarios',
                path: '/docs/usuarios',
                description: 'Gestión de accesos, roles y permisos del sistema.',
                tags: ['usuarios', 'seguridad', 'roles']
            },
            {
                id: 'reportes-ia',
                title: 'Reportes',
                path: '/docs/reporte-ventas',
                description: 'Análisis integral de ventas y recomendaciones de IA.',
                tags: ['reportes', 'analisis', 'ia']
            },
            {
                id: 'estado-resultados',
                title: 'Estado de Resultados',
                path: '/docs/estado-resultado',
                description: 'Análisis de pérdida y ganancias (P&L).',
                tags: ['finanzas', 'balance', 'ganancias']
            },
            {
                id: 'auditoria',
                title: 'Auditoría',
                path: '/docs/auditoria',
                description: 'Historial de cambios y logs del sistema.',
                tags: ['auditoria', 'logs', 'seguridad']
            },
            {
                id: 'carteleras',
                title: 'Carteleras',
                path: '/docs/carteleras',
                description: 'Configuración de menús digitales y pantallas.',
                tags: ['carteleras', 'menu', 'pantallas']
            }
        ]
    },
    {
        id: 'soporte-config',
        title: 'Soporte y Configuración',
        icon: 'Settings',
        modules: [
            {
                id: 'instalacion',
                title: 'Instalación y Red',
                path: '/docs/instalacion',
                description: 'Guía paso a paso para la puesta en marcha en red local.',
                tags: ['setup', 'instalacion', 'red', 'intranet']
            },
            {
                id: 'contacto',
                title: 'Adquisición',
                path: '/docs/contacto',
                description: 'Solicitud de cotización y contacto con el autor.',
                tags: ['ventas', 'cotizacion', 'contacto']
            }
        ]
    }
];
