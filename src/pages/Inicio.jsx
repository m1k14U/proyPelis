import '../App.css';
import personita from '../assets/personita.jpg';

export default function Inicio() {
    return (
        <main className='main'>
        <div className='img-contsinresult'>
            <img className='img-sinresult' src={personita} alt=''/>
            <p className='tx-sty'>Busca la película que desees ver. </p>
            <p className='tx-sty'>  Si no la tenemos, la buscamos. Si la tenemos, gózalo.</p>
        </div>
        </main>
    );
}
