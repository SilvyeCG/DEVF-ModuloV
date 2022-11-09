import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { getHoy } from '../utils/Funciones'

const Buscar = ({ getQuery }) => {

    const hoy = getHoy()

    const [fecha, SetFecha] = useState(hoy);

    const onSubmit = (e) => {

        e.preventDefault()

        getQuery({ fecha })

    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className='row mb-3 mt-5'>
                    <div className="col-2">
                        <label htmlFor="fecha" className="form-label">Fecha:</label>
                        <input type="date" className="form-control" name="fecha" value={fecha} onChange={(e) => SetFecha(e.target.value)} min='1995-06-16' max={hoy} />
                    </div>
                    <div className="col-2 align-self-end">
                        <button type='submit' className='btn btn-success'><FaSearch /> Buscar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Buscar