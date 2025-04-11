export default function Card({ element }) {
    return (
            <div className="card">
                <div className="card-img">
                    <img src={element.image} alt={element.name} />
                </div>
                <div className="card-txt">
                    <ul>
                        <li><strong>Nome:</strong> {element.name}</li>
                        <li><strong>Anno di nascita:</strong> {element.birt_year}</li>
                        <li><strong>Nazionalità:</strong> {element.nationality}</li>
                        <li><strong>Biografia:</strong> {element.biography}</li>
                        <li><strong>Riconoscimenti:</strong> {element.awards}</li>
                    </ul>
                </div>
            </div>
    )
}