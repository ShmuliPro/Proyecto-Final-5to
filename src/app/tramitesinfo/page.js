

import './tramitesinfo.css';

export default function tramitesinfo() {
    return (
        <>
           <main>
        <h1>Trámites Historial</h1>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Tipo de trámite</th>
                        <th>Tipo de Pago</th>
                        <th>Fecha realización</th>
                        <th>Estado trámite</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>aryehkurtz@gmail.com</td>
                        <td>VISA USA</td>
                        <td>Transferencia bancaria</td>
                        <td>26/05/22</td>
                        <td>En proceso <a href="tramite-info.html">VER INFO</a></td>
                    </tr>
                    <tr>
                        <td>juancruz@gmail.com</td>
                        <td>VISA USA</td>
                        <td>Transferencia bancaria</td>
                        <td>26/05/22</td>
                        <td>En proceso <a href="tramite-info.html">VER INFO</a></td>
                    </tr>
                    <tr>
                        <td>edgardodiaz@gmail.com</td>
                        <td>VISA USA</td>
                        <td>Transferencia bancaria</td>
                        <td>26/05/22</td>
                        <td>En proceso <a href="tramite-info.html">VER INFO</a></td>
                    </tr>
                    <tr>
                        <td>magnuscarlsen@gmail.com</td>
                        <td>VISA USA</td>
                        <td>Transferencia bancaria</td>
                        <td>26/05/22</td>
                        <td>En proceso <a href="tramite-info.html">VER INFO</a></td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    </main>
        </>
    );
}
