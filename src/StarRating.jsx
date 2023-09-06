function StarRating({ rating }) {
 
  let divs = [];

  for (let i = 0; i < rating; ++i) {
    divs.push(
      'https://sandpack-bundler.vercel.app/img/gold-star.svg'
  
    );
  }

  return (
    <div className="star-wrapper">

      {
        divs.map((index) => (
          <div className="user">
            {<img alt="" className="gold-star" src={index} />}
          </div>
        ))
      }

    </div>
  );
}

export default StarRating;
