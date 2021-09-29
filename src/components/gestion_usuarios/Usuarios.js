import './Usuarios.css';

function Usuarios() {
    return (
        <section id="main_section">
            <h2 id="section_title"> Gestion de usuarios </h2>
            <div id="section_filter"> 
                <input type="text" placeholder="Nombre del usuario.." id="name_filter"></input>
                <button id="button_filter" class="button"> Buscar </button>
            </div>
            {Tabla_Usuarios()}
        </section>
    );
}

const Rol_Usuarios = () =>{
    return(
        <select class="lists"> 
            <option value="Ninguno"> Ninguno </option>
            <option value="Administrador"> Administrador </option>
            <option value="Vendedor"> Vendedor </option>
        </select>
    )
}

const Estado_Usuarios = () =>{
    return(
        <select class="lists">> 
            <option value="Pendiente"> Pendiente </option>
            <option value="Autorizado"> Autorizado </option>
            <option value="No_Autorizado"> No autorizado </option>
        </select>
    )
}

const Tabla_Usuarios = () =>{
    return(
        <table id="search_table">
            <tr>
                <th> Nombre del usuario </th>
                <th> Rol </th>
                <th> Estado </th>
                <th> Accion </th>
            </tr>
            <tr>
                <td> Andrés Camilo Parra Delgadillo </td>
                <td> {Rol_Usuarios()} </td>
                <td> {Estado_Usuarios()} </td>
                <td> <button class="button"> Actualizar </button> </td>
            </tr>
            <tr>
                <td> Andrés Camilo Parra Delgadillo </td>
                <td> {Rol_Usuarios()} </td>
                <td> {Estado_Usuarios()} </td>
                <td> <button class="button"> Actualizar </button> </td>
            </tr>
            <tr>
                <td> Andrés Camilo Parra Delgadillo </td>
                <td> {Rol_Usuarios()} </td>
                <td> {Estado_Usuarios()} </td>
                <td> <button class="button"> Actualizar </button> </td>
            </tr>
        </table>
    );
}
  
  export default Usuarios;