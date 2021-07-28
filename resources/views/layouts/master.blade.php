<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <!--meta name="viewport" content="width=device-width, initial-scale 1"-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

    <title>Laravel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <!--link rel="stylesheet" href="{{secure_asset('css/styles.css')}}"-->
    <link rel="stylesheet" href={{URL::asset('css/styles.css')}}>
    
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    
</body>
<script src="{{asset('js/app.js')}}"></script>
</html>