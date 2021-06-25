import React,{Component} from 'react';


class SideBar extends Component{
    render(){
        return( 
         <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">
                <h3>Puedes hacer esto</h3>
                <a href="#" className="btn btn-success">Crear Articulo</a>

            </div>

            <div id="search" className="sidebar-item">
                <h3>Busqueda de Articulos</h3>
                <p>Encuentra el articulo</p>
                <form action="#" method="POST">
                    <input type="text" name="valor"/>
                    <input type="submit" className="btn" name="submit" value="Buscar"/>
                </form>
            </div>
         </aside>
    );
    }
}
export default SideBar;