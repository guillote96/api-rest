import React,{Component} from 'react';

class Articles extends Component{
    render(){
        return(
            <div id="articles">
                        <article id="article-item" className="article-item">
                            <div className="img-wrap">
                                <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="foto"/>
                            </div>
                            <h2>Title Article</h2>
                            <span className="date">Hace 5 minutos</span>
                            <a href="#">Leer mas</a>
                        </article>


                        <article id="article-item2" className="article-item">
                            <div className="img-wrap">
                                <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="foto"/>
                            </div>
                            <h2>Title Article</h2>
                            <span className="date">Hace 5 minutos</span>
                            <a href="#">Leer mas</a>
                        </article>

                        <article id="article-item3" className="article-item">
                            <div className="img-wrap">
                                <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="foto"/>
                            </div>
                            <h2>Title Article</h2>
                            <span className="date">Hace 5 minutos</span>
                            <a href="#">Leer mas</a>
                        </article>
                </div>

        );
    }



}
export default Articles;