<!--link rel="stylesheet" href="{{secure_asset('css/header.style.css')}}"-->
<link rel="stylesheet" href="{{URL::asset('css/header.style.css')}}">
<header class="main-header" id="navbar">
  <div class="container" >
    <nav class="navbar navbar-expand-lg main-nav px-0">
      <a class="navbar-brand" href="/">
              <img src="../images/icon.png" alt="rajeshdas.com">
            </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="icon-bar icon-bar-1"></span>
                      <span class="icon-bar icon-bar-2"></span>
                      <span class="icon-bar icon-bar-3"></span>
                  </button>
      <div class="collapse navbar-collapse" id="mainMenu">
        <ul class="navbar-nav ml-auto text-uppercase f1">
          <li>
            <a href="{{ route('home') }}" class="active active-first">inicio</a>
          </li>
          <li>
<<<<<<< HEAD
            <a href="#cursos">Cursos</a>
=======
            <a href="{{ route('acerca') }}">nosotros</a>
          </li>
          <li>
            <a href="#service">services</a>
          </li>
          <li>
            <a href="#project">projects</a>
          </li>
          <li>
            <a href="#team">team</a>
          </li>
          <li>
            <a href="#testimony">testimonils</a>
          </li>
          <li>
            <a href="#contact">contact</a>
<<<<<<< HEAD
>>>>>>> parent of 48eb9a8 (navbar modificado)
=======
>>>>>>> parent of 48eb9a8 (navbar modificado)
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- /.container -->
</header>
<script>
  window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'main-header'; else nav.className = 'main-header scroll';
};
</script>
