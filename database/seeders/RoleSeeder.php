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
        // $role1 = Role::create(['name' => 'su_admin']);
        // $role2 = Role::create(['name' => 'admin']);
        // $role3 = Role::create(['name' => 'user']);

        // Permission::create(['name' => 'admin.home'])->syncRoles([$role1,$role2]);
        //Permission::create(['name' => 'comment.create'])->syncRoles(['su_admin','admin']);
        Permission::create(['name' => 'comment.edit'])->syncRoles(['su_admin','admin']);
        Permission::create(['name' => 'comment.delete'])->syncRoles(['su_admin','admin']);
    }
}
