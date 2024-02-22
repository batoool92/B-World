import Author from "../../Components/Author/Author"
import DidUKnowUs from "../../Components/DidUKnowUs/DidUKnowUs"
import Footer from "../../Components/Footer/Footer"
import NavBar from "../../Components/NabBar/NavBar"
import SelectedBooks from "../../Components/SelectedBooks/SelectedBooks"
import './HomeStyle.css'

const Home = () => {
    return (
        <>
            <div>
                <NavBar menu={['Home', 'News', 'Promotion of the mount',
                    'Plublishs', 'Subscribe to the newsletter']} />
            </div>
            <section>
                <Author />
            </section>
            <section>
                <SelectedBooks />
            </section>
            <section>
              <DidUKnowUs />  
            </section>
            <Footer />
        </>

    )
}

export default Home