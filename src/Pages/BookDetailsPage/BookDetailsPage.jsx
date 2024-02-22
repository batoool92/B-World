

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useParams } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NabBar/NavBar"
 import './BookDetailsPageStyle.css'

import { useEffect, useState } from "react"
const BookDetailsPage = () => {

     const { id } = useParams();
    const [Dat, setData] = useState([]);

   
    useEffect(() => {
        fetch(`https://example-data.draftbit.com/books/${id}`).
            then(res => res.json()).then(res => setData(res))
    }, [id])

    console.log(Dat)


    return (
        <div>
            <NavBar menu={['Home', 'News', 'Promotion of the mount',
                'Plublishs', 'Subscribe to the newsletter']} />

            <section className="BookDetails">
                <div className="ImgPart">
                    <img className="BookImgDetail" src={Dat?.image_url} alt="" />
                </div>
                <div className="BookDetail">
                    <h1 className="BookTitle">{Dat?.title}</h1>
                    <p className="BookAuthor">{Dat?.authors}</p>
                    <h1 className="BookAbouttitle">About Book:</h1>
                    <p className="BookAboutDescription">{Dat?.description}</p>

                    <div className="BookNumBuy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                            <path d="M16.5363 12.6852H8.34912" stroke="#0F0F0F" stroke-linecap="round" />
                            <path d="M12.4427 23.0658C18.0947 23.0658 22.6766 18.4182 22.6766 12.6852C22.6766 6.95213 18.0947 2.30457 12.4427 2.30457C6.79063 2.30457 2.20874 6.95213 2.20874 12.6852C2.20874 18.4182 6.79063 23.0658 12.4427 23.0658Z" stroke="#0F0F0F" />
                        </svg>
                        <p>1</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                            <path d="M12.5655 8.53296V12.6852M12.5655 12.6852V16.8375M12.5655 12.6852H16.6591M12.5655 12.6852H8.47192" stroke="#0F0F0F" stroke-linecap="round" />
                            <path d="M12.5655 23.0658C18.2175 23.0658 22.7994 18.4182 22.7994 12.6852C22.7994 6.95213 18.2175 2.30457 12.5655 2.30457C6.91343 2.30457 2.33154 6.95213 2.33154 12.6852C2.33154 18.4182 6.91343 23.0658 12.5655 23.0658Z" stroke="#0F0F0F" />
                        </svg>
                    </div>
                    <div className="BookDetailsBtns">
                        <button className="AddToCartBtn">Add to Cart</button>
                        <button className="FavouriteBtn">Favourite</button>
                    </div>
                    <hr className="BookDetailsLine" />
                    <div className="PageDetailContainer">
                        <p className="Text">Pages Numbers:</p>
                        <p className="Value">{Dat?.num_pages}</p>
                    </div>
                    <div className="PageDetailContainer">
                        <p className="Text">Rating Count:</p>
                        <p className="Value">{Dat?.rating_count}</p>
                    </div>
                    <div className="PageDetailContainer">
                        <p className="Text">Reviews:</p>
                        <p className="Value">{Dat?.review_count}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BookDetailsPage