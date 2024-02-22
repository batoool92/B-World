/* eslint-disable react/no-unknown-property */
import './DidUKnowUsStyle.css'

const DidUKnowUs = () => {
  return (
    <div className="DidUKnowUs">
      <div className='DidUKnowUsFpart'>
        <h1 className="DidUKnowUSTitle">Did You Know Us?</h1>
        <p className='DidUKnowUSText'>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight.
          If you are about books, you must to subscribe to our newsletter. </p>
        <div className="DidUKnowUSForm">
          <div className='Form'>
            <input className='YourName' type="text" name="name" id="" placeholder='Your Name' />
            <input className='YourEmail' type="email" name="email" id="" placeholder='Your Email' />
            <button className='SubscribBtn'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="DidUKnowUsSpart">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53228407355!2d36.20049329175908!3d33.5074482247474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1706257573288!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default DidUKnowUs