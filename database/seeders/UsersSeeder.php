<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'admin',
            'last_name' => 'admin',
            
            'email' => 'xiriuxb@yahoo.es',
            'password' => bcrypt('admin'),
        ]);
    }
}