import '../Page.css'

const Page = () => {
    return(
    <div className='text-container'>
      <h2 className='otsikko'>
        Miten asennan tallennuslogiikan
      </h2>
      <p className="texts">
      </p>

      <iframe className='video'
        title="YouTube Video"
        src="https://www.youtube.com/embed/zxs7IEzJPdE"
        allowFullScreen>
      </iframe>
    </div>
    )
  };
  
  export default Page