<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EstadoMatricula;

class EstadoMatriculaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        EstadoMatricula::create(['nombre'=>'aprobada','descripcion'=>'La matrícula fue aprobada']);
        EstadoMatricula::create(['nombre'=>'rechazada','descripcion'=>'La matrícula fue rechazada']);
        EstadoMatricula::create(['nombre'=>'en revisión','descripcion'=>'Usada solamente para matrículas realizadas con depósito o transferencia cuyo pago requiere revisión.']);
        EstadoMatricula::create(['nombre'=>'cancelada','descripcion'=>'El usuario canceló la matrícula luego de haber sido aprobada']);
    }
}
