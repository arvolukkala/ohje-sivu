import '../Page.css'

const Page = () => {
    return(
    <div className='text-container'>
      <h2 className='otsikko'>
        Miten asennan Airdroid ohjelman
      </h2>
      <p className="texts">
      
        <h2>
            Asennus tietokoneelle
        </h2>
        <iframe className='video'
          title="YouTube Video"
          src="https://www.youtube.com/embed/zxs7IEzJPdE"
          allowFullScreen>
        </iframe>

        <h2>
            Asennus tabletille
        </h2>
        <iframe className='video'
          title="YouTube Video"
          src="https://www.youtube.com/embed/zxs7IEzJPdE"
          allowFullScreen>
        </iframe>
      </p>
    </div>
    )
  };
  
  export default Page