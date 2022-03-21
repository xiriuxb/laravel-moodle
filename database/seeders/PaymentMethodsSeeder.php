<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PaymentMethod;

class PaymentMethodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentMethod::create(['name' => 'paypal', 'label' => 'PayPal', 'icon' => 'paypal', 'active' => true]);
        PaymentMethod::create(['name' => 'credit-card', 'label' => 'Tarjeta de Crédito', 'icon' => 'credit-card' , 'active' => true]);
        PaymentMethod::create(['name' => 'bank-transfer', 'label' => 'Transferencia Bancaria', 'icon' => 'bank', 'active' => true]);
        
    }
}