export default function dashboard(){
    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm" style="background-color: #f1cbb5">
            <div className="container-fluid">
                <a className="navbar-brand fs-4 fw-bold page-scroll" href="#home">KYCHEN</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#project">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#form">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <h2>Selamat data di dashboard</h2>      
        </>
    );
}