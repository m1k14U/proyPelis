import '../App.css';
import tarjeta from '../assets/tarjeta.jpg';

export default function Categorias() {
    return (
        <main className='main'>
        <div className='img-contsinresult'>
            <img className='img-sinresult' src={tarjeta} alt=''/>
            <p className='tx-sty'>Compartenos tus experiencias o quejas y sugerencias :D </p>
        </div>
        </main>
    );
}