<template>
  <footer id="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>Links</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="/">Inicio</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Acerca de Nosotros</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Términos de servicio</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 footer-contact">
                    <h4>Contáctenos</h4>
                    <p> <strong>Teléfono:</strong> +593 999 240 609<br> <strong>Email:</strong> octavarioec@gmail.com<br> </p>
                </div>
                <div class="col-lg-3 col-md-6 footer-info">
                    <div class="social-links mt-3"> <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="copyright"> © Copyright <strong><span>Octavario</span></strong>. All Rights Reserved </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
    background: rgb(2 47 70);
    padding: 0 0 30px 0;
    color: #fff;
    font-size: 14px
}

#footer .footer-top {
    background-image: url(/images/footer-banner2.png);
    border-top: 1px solid #474747;
    border-bottom: 1px solid #474747;
    padding: 60px 0 0 0;
    background-repeat: no-repeat;
}

#footer .footer-top .footer-info {
    margin-bottom: 30px
}

#footer .footer-top .footer-info h3 {
    font-size: 18px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700
}

#footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    color: #fff
}

#footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #545454;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s
}

#footer .footer-top .social-links a:hover {
    background: #e96b56;
    color: #fff;
    text-decoration: none
}

#footer .footer-top h4 {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 12px
}

#footer .footer-top .footer-links {
    margin-bottom: 30px
}

#footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0
}

#footer .footer-top .footer-links ul i {
    padding-right: 2px;
    color: #ec7f6d;
    font-size: 18px;
    line-height: 1
}

#footer .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center
}

#footer .footer-top .footer-links ul li:first-child {
    padding-top: 0
}

#footer .footer-top .footer-links ul a {
    color: #fff;
    transition: 0.3s;
    display: inline-block;
    line-height: 1
}

#footer .footer-top .footer-links ul a:hover {
    color: #e96b56
}

#footer .footer-top .footer-contact {
    margin-bottom: 30px
}

#footer .footer-top .footer-contact p {
    line-height: 26px
}

#footer .copyright {
    text-align: center;
    padding-top: 30px
}

#footer .credits {
    padding-top: 10px;
    text-align: center;
    font-size: 13px;
    color: #fff
}
</style>