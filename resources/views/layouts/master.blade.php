<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="{{ asset('/favicon.ico') }}">
    @inertiaHead
</head>
<body>
        @inertia
</body>
<script src="{{mix('/js/app.js')}}" defer></script>
<link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
</html>