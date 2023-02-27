<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <h3><b>Curso: </b>{{$users["matriculas"][0]["fullname"]}}</h3>
    <p>{{$date}}</p>
    <h3><b>Total matriculas: </b> {{ $users["total_matriculas"] }}</h3>
    @if($users["aceptados"] != 0)
    <h4><b>Total aceptados: </b> {{ $users["aceptados"] }}</h4>
    @endif
    @if($users["rechazados"] != 0)
    <h4><b>Total rechazados: </b> {{ $users["rechazados"] }}</h4>
    @endif
    @if($users["en_revision"] != 0)
    <h4><b>Total en revisión: </b> {{ $users["en_revision"] }}</h4>
    @endif
    @if($users["cancelados"] != 0)
    <h4><b>Total cancelados: </b> {{ $users["cancelados"] }}</h4>
    @endif
    <h4><b>Total pagos (USD): </b> {{ $users["valor_total"]}}</h4>
    <h4><b>Profesor(es):</b></h4>
    <ul>
        @foreach ($users["profesores"] as $profesor)
            <li>{{$profesor["fullname"]}}</li>
        @endforeach
    </ul>
    <table class="table table-bordered a">
        <thead>
            <tr>
                <td><b>N.</b></td>
                <td><b>Estudiante</b></td>
                <td><b>Estado</b></td>
                <td><b>Costo</b></td>
                <td><b>Fecha</b></td>
            </tr>
        </thead>
        <tbody>
            @foreach ($users["matriculas"] as $key=>$usuario)
            <tr>
                <td>
                    {{$key + 1 }}
                </td>
                <td>
                    {{$usuario->last_name}} {{$usuario->name}} 
                    @if ($usuario->deleted == 1)
                    <span>(Eliminado)</span>
                    @endif
                </td>
                <td>
                    {{$usuario->nombre == "aprobada"?"Activo":$usuario->nombre}}
                </td>
                <td>
                    {{$usuario->amount ? $usuario->amount:"Gratis"}}
                </td>
                <td>
                    {{ $usuario->createdat }}
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>
</body>
<style>
    .a {
        width: 100%;
    }

    td span {
        background-color: #dc354570;
        border-radius: 4px;
    }
</style>

</html>