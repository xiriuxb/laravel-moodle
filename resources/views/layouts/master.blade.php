<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale 1">
    <title>Laravel</title>
    <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    @include('partials.header')
    <div style="padding-top: 60px" class="container">
        @yield('content')
    </div>
</body>
</html>