<template>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i>
                                <inertia-link :href="route('home')">Inicio</inertia-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <inertia-link :href="route('cursos',{categoria:'all'})">Cursos</inertia-link>
                            </li>
                            <li><i class="bx bx-chevron-right"></i>
                                <a :href="siteData.moodleUrl+'login/index.php'">Sitio Moodle</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Contáctenos</h4>
                        <p> <strong>Teléfono:</strong> {{ siteData.sitePhone }}<br> <strong>Email:</strong>
                            {{ siteData.siteEmail }}<br> </p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-info">
                        <div class="social-links mt-3">
                            <a :href="siteData.siteSocialNetworks.facebook" v-if="siteData.siteSocialNetworks.facebook">
                                <box-icon type='logo' name='facebook-circle'></box-icon>
                            </a>
                            <a :href="siteData.siteSocialNetworks.twitter" v-if="siteData.siteSocialNetworks.twitter">
                                <box-icon type='logo' name='twitter'></box-icon>
                            </a>
                            <a :href="siteData.siteSocialNetworks.instagram"
                                v-if="siteData.siteSocialNetworks.instagram">
                                <box-icon type='logo' name='instagram'></box-icon>
                            </a>
                            <a :href="siteData.siteSocialNetworks.youtube" v-if="siteData.siteSocialNetworks.youtube">
                                <box-icon type='logo' name='youtube'></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright"> © Copyright <strong><span>Jorge Trujillo</span></strong>. All Rights Reserved </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        siteData() {
            return this.$page.props.siteData
        },
    }
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
    transition: 0.3s;
    fill: #fff;
}

#footer .footer-top .social-links a:hover {
    background: #002e45;
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