
import { useState } from 'react'
import { ButtonActionTable } from './ButtonactionTable'
import './table.scss'


const TableValues=[
    {
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },
    {
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },
    {
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },
    {
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },
    {
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    },{
        pedido:1146,
        data:'30/07/2021 - 15:49',
        total:200,
        comprador:'Comprador A',
        status:'Pronto para embalar',

    }
]

export function Table() {

    


    return (
        <div className="table">

            <h2>Ultimos pedidos realizados</h2>

            <table>
                <tr className='header-table'>
                    <th>Pedido</th>
                    <th>Data e Horários</th>
                    <th>Produtos</th>
                    <th>Total</th>
                    <th>Comprador</th>
                    <th>Status de Pedido</th>
                    <th>Ação Recomendada</th>

                </tr>

                {
                    TableValues.splice(0,4).map(value=>(
                    <tr>
                    <td>{value.pedido}</td>
                    <td>{value.data}</td>
                    <td><a href="">Ver Quantidade de Produtos</a> </td>
                    <td>{value.total}</td>
                    <td>{value.comprador}</td>
                    <td>{value.status}</td>
                    <td> <ButtonActionTable/></td>

                </tr>
                    ))
                }
                
                
            </table>
            <div className="pagination">
                <button>Prev</button>
                <button >Next</button>
            </div>

        </div>


    )
}