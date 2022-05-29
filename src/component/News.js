import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize: 6,
    categroy:"Home",
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    categroy:PropTypes.string
  }
 
      constructor(props){
          super(props);
          this.state={
              articles:[],
              loading:true,
              page:1,
              totalResults:0
          }
      }
      async updateNews(){
        this.props.setProgress(10)
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categroy=${this.props.category}&apiKey=3a2dc2c3969943d48c8e7869708ba067&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        this.props.setProgress(30) 
        let parsedData=await data.json()
        this.props.setProgress(70) 
        this.setState({
          articles: parsedData.articles,
           totalResults: parsedData.totalResults,
           loading: false,
          })
          this.props.setProgress(100)

        }
           async componentDidMount(){
            this.updateNews();
      }
    
      fetchMoreData = async () => {
        this.setState({page:this.state.page + 1})
        // https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0f6b62aa51f742568da7520c0b7fa504

        
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categroy=${this.props.category}
         &apiKey=3a2dc2c3969943d48c8e7869708ba067&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({
          articles:this.state.articles.concat(parsedData.articles),
           totalResults: parsedData.totalResults,
          })  
       };
    
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'> News Moncky Top News  Headline </h1>                               
                <InfiniteScroll
                 dataLength={this.state.articles.length}
                 next={this.fetchMoreData}
                 hasMore={this.state.articles.length !== this.state.totalResults}
                 loader={<Spinner/>}
                >
                <div className="container">
                <div className="row">
                {this.state.articles.map((element)=>{
                return<div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ?element.urlToImage:""}
                 author={element.author} date={element.publishedAt} source={element.source.name} url={element.url} />
                       </div> 
                     })}
                     </div>
                </div> 
                </InfiniteScroll>  
            </div>   
         )}}
      export default News

