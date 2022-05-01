import './Card.scss'

interface CardInfoProps{
    title:string;
    imgSRC:string;
    value:string;
}


export function CardInfo({title,imgSRC,value}:CardInfoProps){
    return(
        <div className="card">
            <div>
                <img src={imgSRC} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    )
}