import './AuthorStyle.css'
import Schmitt_Nocognia from '../../assets/Img/Schmitt_Nocognia.png'
const Author = () => {
    return (
        <div className='AuthorSection'>
            <div className="AuthorFirstPart">
                <button className='AuthorBtn'>Author of August</button>
                <h1 className="AuthorSectionName">Eric-Emanuel Schmitt </h1>
                <p className="AuthorSectionDescription">Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title
                of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
                <button className="AuthorViewBooks">View his boooks</button>
            </div>
            <div className="AuthorsecondPart">
                <img className='AuthorsecondPartImg' src={Schmitt_Nocognia} alt="" />
            </div>
        </div>
    )
}

export default Author