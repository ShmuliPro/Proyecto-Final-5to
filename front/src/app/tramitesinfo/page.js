"use client"

import axios from 'axios';
import './tramitesinfo.css';
import { useEffect, useState } from 'react';

export default function Tramitesinfo() {
    const [visas, setVisas] = useState([]);
    debugger;

    useEffect(() => {
        axios.get('http://localhost:4000/api/visas').then((response) => {
            setVisas(response.data);
        });
    }, []);

    return (
        <>
            <main>
                <h1>Trámites Historial</h1>
                <div className="table-container">
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
                            {
                                visas.map(v => <tr>
                                    <td>{v.email}</td>
                                    <td>VISA USA</td>
                                    <td>Transferencia bancaria</td>
                                    <td>{v.passport_issue_date}</td>
                                    <td>En proceso <a href="tramite-info.html">VER INFO</a></td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button>1</button>
                        <button>2</button>
                    </div>
                </div>
            </main>
        </>
    );
}
