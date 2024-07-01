import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

const CRMTable = () => {
    const [dispositivos, setDispositivos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [paginaActual, setPaginaActual] = useState(1);
    const [dispositivosPorPagina] = useState(5);

    useEffect(() => {
        // Simulación de carga de datos
        const datosEjemplo = [
            { id: 1, dispositivo: 'Teléfono', marca: 'Samsung', modelo: 'Galaxy S20', color: 'Negro', cedulaCliente: '123456789', nombreCliente: 'Juan Pérez', telefonoCliente: '987654321', detalles: 'Detalles del dispositivo', estatus: 'En revisión' },
            { id: 2, dispositivo: 'Tablet', marca: 'Apple', modelo: 'iPad Pro', color: 'Plata', cedulaCliente: '987654321', nombreCliente: 'Ana López', telefonoCliente: '123456789', detalles: 'Detalles del dispositivo', estatus: 'Reparado' },
            { id: 3, dispositivo: 'Teléfono', marca: 'Samsung', modelo: 'Galaxy S20', color: 'Negro', cedulaCliente: '123456789', nombreCliente: 'Juan Pérez', telefonoCliente: '987654321', detalles: 'Detalles del dispositivo', estatus: 'En revisión' },
            { id: 4, dispositivo: 'Tablet', marca: 'Apple', modelo: 'iPad Pro', color: 'Plata', cedulaCliente: '987654321', nombreCliente: 'Ana López', telefonoCliente: '123456789', detalles: 'Detalles del dispositivo', estatus: 'Reparado' },
            { id: 5, dispositivo: 'Teléfono', marca: 'Samsung', modelo: 'Galaxy S20', color: 'Negro', cedulaCliente: '123456789', nombreCliente: 'Juan Pérez', telefonoCliente: '987654321', detalles: 'Detalles del dispositivo', estatus: 'En revisión' },
            { id: 6, dispositivo: 'Tablet', marca: 'Apple', modelo: 'iPad Pro', color: 'Plata', cedulaCliente: '987654321', nombreCliente: 'Ana López', telefonoCliente: '123456789', detalles: 'Detalles del dispositivo', estatus: 'Reparado' },
            // Añadir más dispositivos según sea necesario
        ];

        // Simulamos una llamada asíncrona que tarda en devolver los datos
        setTimeout(() => {
            setDispositivos(datosEjemplo);
        }, 1000); // Simular retardo de 1 segundo para efectos visuales

    }, []);

    // Función para manejar el cambio en la búsqueda
    const handleBuscar = (e) => {
        setBusqueda(e.target.value);
        setPaginaActual(1); // Reiniciar a la primera página al cambiar la búsqueda
    };

    // Filtrar dispositivos por búsqueda
    const dispositivosFiltrados = dispositivos.filter(dispositivo =>
        dispositivo.dispositivo.toLowerCase().includes(busqueda.toLowerCase()) ||
        dispositivo.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        dispositivo.modelo.toLowerCase().includes(busqueda.toLowerCase()) ||
        dispositivo.color.toLowerCase().includes(busqueda.toLowerCase()) ||
        dispositivo.nombreCliente.toLowerCase().includes(busqueda.toLowerCase()) ||
        dispositivo.telefonoCliente.includes(busqueda)
    );

    // Lógica para paginación
    const indiceUltimoDispositivo = paginaActual * dispositivosPorPagina;
    const indicePrimerDispositivo = indiceUltimoDispositivo - dispositivosPorPagina;
    const dispositivosPaginados = dispositivosFiltrados.slice(indicePrimerDispositivo, indiceUltimoDispositivo);

    // Cambiar de página
    const paginar = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    return (
        <div className=" max-w-7xl w-full bg-white rounded-md mx-auto py-6 mt-16 px-4 lg:px-8">
            <div className="">
                <div className="flex flex-col justify-between mb-4">
                    <h2 className="text-2xl flex-1 font-semibold text-gray-700 mb-2">Lista de Reparaciones</h2>
                    <div className="flex items-center flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="shadow py-2 pl-10 pr-8 text-md appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                            onChange={handleBuscar}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute top-2.5 left-3 text-gray-500"
                        />
                        <button className="flex items-center border-none px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Agregar
                        </button>
                    </div>
                </div>
                <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y px-2 divide-gray-200 overflow-x-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-20 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Dispositivo</th>
                                <th scope="col" className="px-6 py-3 w-32 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
                                <th scope="col" className="px-6 py-3 w-32 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
                                <th scope="col" className="px-6 py-3 w-20 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                                <th scope="col" className="px-6 py-3 min-w-[9rem] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ced. Cliente</th>
                                <th scope="col" className="px-2 py-3 min-w-[8rem] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nom. Cliente</th>
                                <th scope="col" className="px-2 py-3 min-w-[08rem] text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tfn. Cliente</th>
                                <th scope="col" className="px-6 py-3 w-32 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Estatus</th>
                                <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dispositivosPaginados.map(dispositivo => (
                                <tr key={dispositivo.id}>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.dispositivo}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.marca}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.modelo}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.color}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.cedulaCliente}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.nombreCliente}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.telefonoCliente}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">{dispositivo.estatus}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-4">
                                            <button className="text-indigo-600 hover:text-indigo-900" title="Ver">
                                                <FontAwesomeIcon icon={faEye} className='text-base' />
                                            </button>
                                            <button className="text-yellow-600 hover:text-yellow-900" title="Modificar">
                                                <FontAwesomeIcon icon={faEdit} className='text-base' />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900" title="Eliminar">
                                                <FontAwesomeIcon icon={faTrash} className='text-base' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                {/* Paginación */}
                <div className="mt-4 flex gap-y-2 sm:gap-y-0 flex-col sm:flex-row sm:justify-between items-center">
                    <nav className="block sm:flex-grow">
                        <ul className="flex pl-0 list-none rounded my-2">
                            {[...Array(Math.ceil(dispositivosFiltrados.length / dispositivosPorPagina)).keys()].map(numeroPagina => (
                                <li key={numeroPagina}>
                                    <button
                                        className={`${numeroPagina + 1 === paginaActual ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'
                                            } hover:bg-blue-200 hover:text-blue-500 py-2 px-4 mx-1 rounded`}
                                        onClick={() => paginar(numeroPagina + 1)}
                                    >
                                        {numeroPagina + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="text-sm text-gray-700 ml-4">
                        Página {paginaActual} de {Math.ceil(dispositivosFiltrados.length / dispositivosPorPagina)}
                    </div>
                    <div className="flex justify-center items-center sm:ml-4 mt-4 sm:mt-0">
                        <div className="ml-4">
                            <button
                                className={`text-sm font-medium py-2 px-4 rounded-l ${paginaActual === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-400'}`}
                                onClick={() => paginar(paginaActual - 1)}
                                disabled={paginaActual === 1}
                            >
                                Anterior
                            </button>
                            <button
                                className={`text-sm font-medium py-2 px-4 rounded-r ${paginaActual === Math.ceil(dispositivosFiltrados.length / dispositivosPorPagina) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-400'}`}
                                onClick={() => paginar(paginaActual + 1)}
                                disabled={paginaActual === Math.ceil(dispositivosFiltrados.length / dispositivosPorPagina)}
                            >
                                Siguiente
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CRMTable;
