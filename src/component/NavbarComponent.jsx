const NavbarComponent = ({title, menu1, menu2, menu3, menu4}) => {

    return(
            <div>
             
                   
                    <nav class="navbar">
                        <div class="container">
                        <a class="navbar-brand" href="#">
                        <h4 class="text-primary">{title}</h4>
                        </a>

                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">{menu1}</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="#">{menu2}</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="#">{menu3}</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link btn btn-primary text-white rounded-pill">{menu4}</a>
                            </li>
                        </ul>
                        </div>
                    </nav>
            </div>
    )
}

export default NavbarComponent;