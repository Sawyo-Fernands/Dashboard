
import { CardInfo } from '../../Components/CardInfo'
import { Header } from '../../Components/Header'
import { Sidebar } from '../../Components/Sidebar'
import './home.scss'

import Unidades from '../../images/card-image/Home.png'
import People from '../../images/card-image/people.png'
import Vendas from '../../images/card-image/File.png'
import Bank from '../../images/card-image/Bank.png'
import { Graph } from '../../Components/Graph'
import { Table } from '../../Components/Table'



const CardValues = [
    {
        title: 'Unidades registradas',
        imgSRC: Unidades,
        value: '1'
    },
    {
        title: 'Novos Clientes',
        imgSRC: People,
        value: '104'
    },
    {
        title: 'Vendas Registradas',
        imgSRC: Vendas,
        value: '7270'
    },
    {
        title: 'Lucro liquido (Geral)',
        imgSRC: Bank,
        value: 'R$ 427.300,50'
    }
]



export default function Home() {



    return (
        <>
            <Sidebar />
            <div id="ContentContainer">
                <Header />
                <section className="cards">
                    {
                        CardValues.map(value => (
                            <CardInfo title={value.title} value={value.value} imgSRC={value.imgSRC} />
                        ))
                    }
                </section>

                <Graph />

                <section className="tableContainer">
                       <Table/> 
                </section>

            </div>
        </>
    )
}