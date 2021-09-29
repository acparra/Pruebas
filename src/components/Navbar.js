import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h2 id="nav-title"> NAVEGACION </h2>
            <div id="nav-items">
                <a href="" class="nav-item"> <i class="fas fa-shopping-cart"></i> Administrar productos </a>
                <a href="" class="nav-item"> <i class="fas fa-user-tie"></i> Gestionar ventas </a>
                <a href="../src/components/gestion_usuarios/users.html" class="nav-item"> <i class="fas fa-user"></i> Gestionar usuarios </a>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  