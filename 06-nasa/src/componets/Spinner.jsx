import relojito from '../assets/spinner.gif'

const Spinner = () => {
    return (
        <img src={relojito} style={{ width: '200px', margin: 'auto', display: 'block' }} alt='Cargando...' />
    )
}

export default Spinner