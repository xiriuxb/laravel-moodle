<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <h3><b>Usuario:</b>{{$user_name}}</h3>
    <p>{{$date}}</p>
    <table class="table table-bordered a">
        <thead>
            <tr>
                <td><b>Curso</b></td>
                <td><b>Estado</b></td>
                <td><b>Costo</b></td>
                <td><b>Id. Pago</b></td>
                <td><b>Fecha</b></td>
            </tr>
        </thead>
        <tbody>
            @foreach ($matriculas as $matricula)
            <tr>
                <td>
                    {{$matricula->cursos->fullname}}
                </td>
                <td>
                    {{$matricula->estado_matricula->nombre}}
                </td>
                <td>
                    {{$matricula->pago ? $matricula->pago->amount : 'Gratuito'}}
                </td>
                <td>
                    {{$matricula->pago ? $matricula->pago->payment_id : 'Gratuito'}}
                </td>
                <td>
                    {{ $matricula->created_at}}
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>
</body>
<style>
.a{
    width:100%;
}
</style>

</html>