import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'// para las alertas https://sweetalert2.github.io/

function ProductoLista({producto, guardarRecargarProductos}) {

    const eliminarProducto = id => {
        console.log('eliminando', id);
        //TODO: Eliminar registrs
        Swal.fire({
            title: 'Estas seguro?',
            text: "Un Platillo eliminado no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
          }).then( async (result) => {
            if (result.value) {
                try {                    
                    const url = `http://localhost:4000/restaurant/${id}`
                    const resultado = await axios.delete(url)
                    if (resultado.status === 200) {
                        Swal.fire(
                          'Elminado!',
                          'El platillo se ha eliminado.',
                          'success'
                        )
                        guardarRecargarProductos(true)
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un error, vuelve a intentarlo!'
                    })
                }
            }
          })
    }

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombrePlatillo} {' '} 
                <span className="font-weight-bold">${producto.precioPlatillo}</span>
            </p>
            <div>
                <Link to={`/producto/editar/${producto.id}`}
                    className="btn btn-success mr-2">Editar</Link>
                <button type="button"
                        className="btn btn-danger"
                        onClick={() => eliminarProducto(producto.id)}>
                            Eliminar
                        </button>
            </div>
        </li>
    )
}

export default ProductoLista;