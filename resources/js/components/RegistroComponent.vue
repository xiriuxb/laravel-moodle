<template>
<section class="signup container-fluid d-flex">
<div class="signup-content">
<form method="POST" id="signup-form" class="signup-form">
<h2 class="form-title">Create account</h2>
<div class="form-group">
<input type="text" class="form-input" name="name" id="name" placeholder="Your Name">
</div>
<div class="form-group">
<input type="email" class="form-input" name="email" id="email" placeholder="Your Email">
</div>
<div class="form-group">
<input type="text" class="form-input" name="password" id="password" placeholder="Password">
<span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
</div>
<div class="form-group">
<input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password">
</div>
<div class="form-group">
<input type="checkbox" name="agree-term" id="agree-term" class="agree-term">
<label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in <a href="#" class="term-service">Terms of service</a></label>
</div>
<div class="form-group">
<input type="submit" name="submit" id="submit" class="form-submit" value="Sign up">
</div>
</form>
<p class="loginhere">
Have already an account ? <a href="#" class="loginhere-link">Login here</a>
</p>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style>
div {
    display: block;
}
section {
    display: block;
}
@media screen and (max-width: 768px){
.container {
    width: calc(100% - 40px);
    max-width: 100%;
}}

*, ::after, ::before {
    box-sizing: border-box;
}

form {
    display: block;
    margin-top: 0em;
}
.form-input {
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 8px 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    color: #222;
}

h2 {
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: 900;
    color: #222;
    font-family: montserrat;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
}

.signup-content {
    background: #fff;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    padding: 20px 20px;
    max-width: 350px;
    min-width: 250px;
}
.form-group {
    overflow: hidden;
    margin-bottom: 5px;
}

.form-submit {
    width: 100%;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 17px 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    border: none;
    background-image: -moz-linear-gradient(to left,#74ebd5,#9face6);
    background-image: -ms-linear-gradient(to left,#74ebd5,#9face6);
    background-image: -o-linear-gradient(to left,#74ebd5,#9face6);
    background-image: -webkit-linear-gradient(to left,#74ebd5,#9face6);
    background-image: linear-gradient(to left,#74ebd5,#9face6);
}
.loginhere{
    margin: 0px;
}
</style>