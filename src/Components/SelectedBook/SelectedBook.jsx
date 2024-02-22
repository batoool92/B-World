/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Link, useNavigate  } from 'react-router-dom'
import './SelectedBookStyle.css'
// import BookImg from '../../assets/Img/BookImg.png'
// 
const SelectedBook = ({BookId, BookImg, BookAuthor, NumOfPages, BookRating }) => {
    const navigate = useNavigate();


    const GoToBook =(BookId)=>{
        console.log(BookId)
        // navigate(generatePath("/BookDetailsPage/:id", { BookId }))
        navigate(`/BookDetailsPage/${BookId}`, { replace: true })
        console.log(BookId)
    }

    return (
        <div className='SelectedBook'>
            <img className="BookImg" src={BookImg} alt="" />
            <p className='AuthorName'>{BookAuthor}</p>
            <div className="BookDetailsContainer">
                <div className="NumOfPagesContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 15.75L8.92496 15.6374C8.40398 14.856 8.14349 14.4652 7.79933 14.1824C7.49464 13.9319 7.14357 13.7441 6.7662 13.6295C6.33994 13.5 5.87033 13.5 4.93112 13.5H3.9C3.05992 13.5 2.63988 13.5 2.31901 13.3365C2.03677 13.1927 1.8073 12.9632 1.66349 12.681C1.5 12.3601 1.5 11.9401 1.5 11.1V4.65C1.5 3.80992 1.5 3.38988 1.66349 3.06901C1.8073 2.78677 2.03677 2.5573 2.31901 2.41349C2.63988 2.25 3.05992 2.25 3.9 2.25H4.2C5.88016 2.25 6.72024 2.25 7.36197 2.57698C7.92646 2.8646 8.3854 3.32354 8.67302 3.88803C9 4.52976 9 5.36984 9 7.05M9 15.75V7.05M9 15.75L9.07504 15.6374C9.59602 14.856 9.85651 14.4652 10.2007 14.1824C10.5054 13.9319 10.8564 13.7441 11.2338 13.6295C11.6601 13.5 12.1297 13.5 13.0689 13.5H14.1C14.9401 13.5 15.3601 13.5 15.681 13.3365C15.9632 13.1927 16.1927 12.9632 16.3365 12.681C16.5 12.3601 16.5 11.9401 16.5 11.1V4.65C16.5 3.80992 16.5 3.38988 16.3365 3.06901C16.1927 2.78677 15.9632 2.5573 15.681 2.41349C15.3601 2.25 14.9401 2.25 14.1 2.25H13.8C12.1198 2.25 11.2798 2.25 10.638 2.57698C10.0735 2.8646 9.6146 3.32354 9.32698 3.88803C9 4.52976 9 5.36984 9 7.05" stroke="#937DC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="NumOfPages">{NumOfPages}</p>
                </div>
                <div className="RatingContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <g clip-path="url(#clip0_116_39)">
                            <path d="M3.83827 15.8775C3.42815 16.0878 2.96277 15.7192 3.04565 15.2485L3.92752 10.2228L0.184335 6.65709C-0.165228 6.32347 0.0164599 5.71359 0.485022 5.64772L5.68915 4.90822L8.00965 0.310781C8.21896 -0.103594 8.78527 -0.103594 8.99459 0.310781L11.3151 4.90822L16.5192 5.64772C16.9878 5.71359 17.1695 6.32347 16.8188 6.65709L13.0767 10.2228L13.9586 15.2485C14.0415 15.7192 13.5761 16.0878 13.166 15.8775L8.50052 13.4805L3.83721 15.8775H3.83827Z" fill="#937DC2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_116_39">
                                <rect width="17" height="17" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='RatingNum'>{BookRating}</p>
                </div>
            </div>
          <Link to={`/BookDetailsPage/${BookId}`}><button onClick={()=>GoToBook(BookId)} className="ShowBookDetailsBtn">Show Details</button></Link>
        </div>
    )
}

export default SelectedBook