import Spinner from './Spinner'

const Card = ({ items, isLoading }) => {

    if (isLoading) {
        return (
            <Spinner />
        )
    } else {

        return (
            <div className='container mb-5'>
                <div className="row mt-5 ">
                    <div className="col-12">
                        <div className="card" >
                            <div className="card-header text-center">
                                <b>{items.title}</b>
                            </div>
                            <img src={items.hdurl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">By: {items.copyright ? items.copyright : 'NA'}</h5>
                                <p className="card-text">{items.explanation}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Card