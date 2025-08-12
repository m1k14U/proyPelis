import '../App.css';
import triste from '../assets/triste.jpg';

export default function Estrenos() {
    return (
        <main className='main'>
        <div className='img-contsinresult'>
            <img className='img-sinresult' src={triste} alt=''/>
            <p className='tx-sty'>Este año el mundo cinematográfico nos ha puesto trabas, trabajamos en brindar el catálogo más completo. </p>
            <p className='tx-sty'>  Disculpa :(</p>
        </div>
        </main>
    );
}