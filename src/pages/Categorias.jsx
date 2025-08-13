import '../App.css';
import catego from '../assets/catego.jpg';

function Categorias() {
    return (
        <main className='main'>
        <div className='img-contsinresult'>
            <img className='img-sinresult' src={catego} alt=''/>
        </div>
        </main>
    );
}

export default Categorias();