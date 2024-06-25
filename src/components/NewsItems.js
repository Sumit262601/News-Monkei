import React from 'react';

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div className='my-4'>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2024/06/15/1600x900/galaxy-z-fold5-highlights-accessories_1690375755406_1718437746855.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;
