import { useEffect, useState } from 'react'
import './SelectedBooksStyle.css'
import SelectedBook from '../SelectedBook/SelectedBook'


const SelectedBooks = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch('https://example-data.draftbit.com/books?_limit=8')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

    console.log(Data);
    return (
        <div className='SelectedBooksContainer'>
            <h2 className="selectedBooksText">Selected for you</h2>
            <div className="SelectedBooks">
               {Data?.map((element, index)=>{

                return (
                    <SelectedBook BookId={element?.id} BookImg={element?.image_url} BookAuthor={element?.authors}
                    NumOfPages={element?.num_pages} BookRating={element?.rating} key={index}/>
                )
               })}
            </div>
        </div>
    )
}

export default SelectedBooks