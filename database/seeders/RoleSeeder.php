<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role1 = Role::create(['name' => 'su_admin']);
        $role2 = Role::create(['name' => 'admin']);
        $role3 = Role::create(['name' => 'user']);
        $role4 = Role::create(['name' => 'suspended']);

        // Admin testimonials actions
        Permission::create(['name' => 'admin.home'])->syncRoles([$role1,$role2]);
        Permission::create(['name' => 'testimonial.crud'])->syncRoles(['su_admin','admin']);
        // User actions
        Permission::create(['name' => 'user.updates'])->syncRoles(['user','su_admin','admin']);
        Permission::create(['name' => 'user.profiledata'])->syncRoles(['user','su_admin','admin','suspended']);
        Permission::create(['name' => 'user.deleteprofileview'])->syncRoles(['user','su_admin','admin']);
        // Matriculas actions
        Permission::create(['name' => 'matricula.generarmatricula'])->syncRoles(['user','su_admin','admin']);
        // Admin CursosLocal actions
        Permission::create(['name' => 'cursoslocal.all'])->syncRoles(['su_admin','admin']);
        // Admin CursosMoodle actions
        Permission::create(['name' => 'cursosmoodle.getcursos'])->syncRoles(['su_admin','admin']);
        // Admin Users actions
        Permission::create(['name' => 'admuser.getusers'])->syncRoles(['su_admin','admin']);
        Permission::create(['name' => 'admuser.changerole'])->syncRoles(['su_admin','admin']);
        Permission::create(['name' => 'admuser.getuserrole'])->syncRoles(['su_admin','admin']);
        Permission::create(['name' => 'admuser.getuser'])->syncRoles(['su_admin']);
        Permission::create(['name' => 'admuser.siteconfig'])->syncRoles(['su_admin']);
        // Payment
        Permission::create(['name' => 'payment.getpayments'])->syncRoles(['su_admin','admin','user']);
        Permission::create(['name' => 'admrole.getroles'])->syncRoles(['su_admin','admin']);


    }
}
