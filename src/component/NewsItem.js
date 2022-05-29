import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, source } = this.props;
    return (
      <div className="my-card">
        <div>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://www.kreedon.com/wp-content/uploads/2022/05/image-14-1649945196.jpg"
              : imgUrl
          }
          className="card-img-top card-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              by {!author ? "Unknone" : author} 0n{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Rrad More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
