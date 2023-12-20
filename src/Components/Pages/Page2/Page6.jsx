import '../Page.css'

const Page = () => {
    return(
    <div className='text-container'>
      <h2 className='otsikko'>
        Miten asennan IQANgo ohjelman
      </h2>
      <p className="texts">

      <iframe className='video'
        title="YouTube Video"
        src="https://www.youtube.com/embed/JEDVgZ_lWm8"
        allowFullScreen>
      </iframe>
      </p>
    </div>
    )
  };
  
  export default Page