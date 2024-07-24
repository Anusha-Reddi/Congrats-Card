const element = (
  <div>
    <div className='container'>
      <h1 className='heading'>Congralations</h1>
      <div className='card'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          className='image'
        />
        <h1 className='nameHeading'>Kiran V</h1>
        <p className='paragraph'>
          Vishnu Institute of Computer Education and Technology Bhimavaram
        </p>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
          className='image'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
