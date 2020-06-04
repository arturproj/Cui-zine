ReactDOM.render(
    <div>
        <a class="navbar-brand" href="#">cui'zine</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">accueil <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="equipe/index.html">equipe</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact/index.html">contact</a>
            </li>
            </ul>
        </div>
    </div>,
    document.getElementById('content_navbar')
  );