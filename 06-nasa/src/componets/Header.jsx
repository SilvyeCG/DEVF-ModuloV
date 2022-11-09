import { FaRocket } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='container'>
            <h3 className='mt-5'><FaRocket /> NASA Astronomical Picture of the Day</h3>
            <p className='mb-5'>Desarrollado por: Fabricio Suárez</p>
            <h5>API: <a href="https://api.nasa.gov/planetary/apod?api_key=6w8aI1d8nauLsW5qvXJ0WaWOkjb7gTvkl7987Sga" target="_blank">https://api.nasa.gov/planetary/apod</a></h5>
        </div>
    )
}

export default Header