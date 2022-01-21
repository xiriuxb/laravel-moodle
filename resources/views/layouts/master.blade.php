<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <!--meta name="viewport" content="width=device-width, initial-scale 1"-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    {{-- estos scripts almacenan los parámetros enviados desde web.php en laravel --}}
    {{-- este primero, almacena el Auth::user --}}
    <script>window.auth_user = {!! json_encode($auth_user) !!};</script>
    {{-- este segundo, almacena el token cuando se cambia de registro --}}
    <script>window.resetPasswordToken = {!!isset($token) ? json_encode($token) : json_encode('') !!}; </script>
    <title>Octavario</title>
    {{-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"> --}}
    <link rel="stylesheet" href="/css/bootstrap.min.css">
</head>
<body>
    <div id="app">
        <index-view></index-view>
    </div>
</body>
<script src="{{mix('js/app.js')}}"></script>
</html>