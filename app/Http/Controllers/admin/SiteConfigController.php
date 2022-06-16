<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class SiteConfigController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:admuser.siteconfig');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $variables = [
            [
                'name' => 'APP_NAME',
                'config_key' => 'app.name',
                'value' => config('app.name'),
                'campo' => 'Nombre del sitio',
            ],
            [
                'name' => 'MOODLE_WS_URL',
                'config_key' => 'app.moodle_ws_url',
                'value' => config('app.moodle_ws_url'),
                'campo' => 'URL de Moodle WS',
            ],
            [
                'name' => 'MOODLE_WS_TOKEN',
                'config_key' => 'app.moodle_ws_token',
                'value' => config('app.moodle_ws_token'),
                'campo' => 'Token de Moodle WS',
            ],
            [
                'name' => 'DB_HOST',
                'config_key' => 'database.connections.mysql.host',
                'value' => config('database.connections.mysql.host'),
                'campo' => 'Host de BD',
            ],
            [
                'name' => 'DB_PORT',
                'config_key' => 'database.connections.mysql.port',
                'value' => config('database.connections.mysql.port'),
                'campo' => 'Puerto de BD',
            ],
            [
                'name' => 'DB_DATABASE',
                'config_key' => 'database.connections.mysql.database',
                'value' => config('database.connections.mysql.database'),
                'campo' => 'Nombre de BD',
            ],
            [
                'name' => 'DB_USERNAME',
                'config_key' => 'database.connections.mysql.username',
                'value' => config('database.connections.mysql.username'),
                'campo' => 'Usuario de BD',
            ],
            [
                'name' => 'DB_PASSWORD',
                'config_key' => 'database.connections.mysql.password',
                'value' => config('database.connections.mysql.password'),
                'campo' => 'Contraseña de BD',
            ],
            [
                'name' => 'DB_MOODLE_HOST',
                'config_key' => 'database.connections.moodle.host',
                'value' => config('database.connections.moodle.host'),
                'campo' => 'Host de la base de datos de Moodle',
            ],
            [
                'name' => 'DB_MOODLE_PORT',
                'config_key' => 'database.connections.moodle.port',
                'value' => config('database.connections.moodle.port'),
                'campo' => 'Puerto de la base de datos de Moodle',
            ],
            [
                'name' => 'DB_MOODLE_DATABASE',
                'config_key' => 'database.connections.moodle.database',
                'value' => config('database.connections.moodle.database'),
                'campo' => 'Nombre de la base de datos de Moodle',
            ],
            [
                'name' => 'DB_MOODLE_USERNAME',
                'config_key' => 'database.connections.moodle.username',
                'value' => config('database.connections.moodle.username'),
                'campo' => 'Usuario de la base de datos de Moodle',
            ],
            [
                'name' => 'DB_MOODLE_PASSWORD',
                'config_key' => 'database.connections.moodle.password',
                'value' => config('database.connections.moodle.password'),
                'campo' => 'Contraseña de la base de datos de Moodle',
            ],
            [
                'name' => 'PAYPAL_MODE',
                'config_key' => 'app.paypal_mode',
                'value' => config('app.paypal_mode'),
                'campo' => 'Modo de PayPal',
            ],
            [
                'name' => 'PAYPAL_CLIENT_ID',
                'config_key' => 'app.paypal_client_id',
                'value' => config('app.paypal_client_id'),
                'campo' => 'Client ID de PayPal',
            ],
            [
                'name' => 'PAYPAL_CURRENCY',
                'config_key' => 'app.paypal_currency',
                'value' => config('app.paypal_currency'),
                'campo' => 'Moneda de PayPal',
            ],
            [
                'name' => 'PAYPAL_BUYER_COUNTRY',
                'config_key' => 'app.paypal_buyer_country',
                'value' => config('app.paypal_buyer_country'),
                'campo' => 'Buyer Country de PayPal',
            ],
            [
                'name' => 'PAYPAL_LOCALE',
                'config_key' => 'app.paypal_locale',
                'value' => config('app.paypal_locale'),
                'campo' => 'País de PayPal',
            ],
            [
                'name' => 'BANK_NAME',
                'config_key' => 'app.bank_name',
                'value' => config('app.bank_name'),
                'campo' => 'Nombre del banco',
            ],
            [
                'name' => 'BANK_ACCOUNT_NUMBER',
                'config_key' => 'app.bank_account_number',
                'value' => config('app.bank_account_number'),
                'campo' => 'Número de cuenta del banco',
            ],
            [
                'name' => 'BANK_ACCOUNT_OWNER',
                'config_key' => 'app.bank_account_owner',
                'value' => config('app.bank_account_owner'),
                'campo' => 'Titular de la cuenta del banco',
            ],
            [
                'name' => 'BANK_ACCOUNT_TYPE',
                'config_key' => 'app.bank_account_type',
                'value' => config('app.bank_account_type'),
                'campo' => 'Tipo de cuenta Bancaria',
            ],
            [
                'name' => 'BANK_ACCOUNT_OWNER_DOCUMENT',
                'config_key' => 'app.bank_account_owner_document',
                'value' => config('app.bank_account_owner_document'),
                'campo' => 'Cédula del titular de la cuenta del banco',
            ],
            [
                'name' => 'SITE_EMAIL',
                'config_key' => 'app.site_email',
                'value' => config('app.site_email'),
                'campo' => 'Correo electrónico del sitio',
            ],
            [
                'name' => 'SITE_PHONE',
                'config_key' => 'app.site_phone',
                'value' => config('app.site_phone'),
                'campo' => 'Teléfono del sitio',
            ],
            [
                'name' => 'SITE_ADDRESS',
                'config_key' => 'app.site_address',
                'value' => config('app.site_address'),
                'campo' => 'Dirección del sitio',
            ],
            [
                'name'  => 'SITE_FACEBOOK',
                'config_key' => 'app.site_facebook',
                'value' => config('app.site_facebook'),
                'campo' => 'Facebook del sitio',
            ],
            [
                'name'  => 'SITE_TWITTER',
                'config_key' => 'app.site_twitter',
                'value' => config('app.site_twitter'),
                'campo' => 'Twitter del sitio',
            ],
            [
                'name'  => 'SITE_INSTAGRAM',
                'config_key' => 'app.site_instagram',
                'value' => config('app.site_instagram'),
                'campo' => 'Instagram del sitio',
            ],
            [
                'name'  => 'SITE_YOUTUBE',
                'config_key' => 'app.site_youtube',
                'value' => config('app.site_youtube'),
                'campo' => 'Youtube del sitio',
            ],
            [
                'name'  => 'MAIL_HOST',
                'config_key' => 'mail.mailers.smtp.host',
                'value' => config('mail.mailers.smtp.host'),
                'campo' => 'Host de Mail',
            ],
            [
                'name'  => 'MAIL_PORT',
                'config_key' => 'mail.mailers.smtp.port',
                'value' => config('mail.mailers.smtp.port'),
                'campo' => 'Puerti del Mail',
            ],
            [
                'name'  => 'MAIL_USERNAME',
                'config_key' => 'mail.mailers.smtp.username',
                'value' => config('mail.mailers.smtp.username'),
                'campo' => 'Usuario del Mail',
            ],
            [
                'name'  => 'MAIL_PASSWORD',
                'config_key' => 'mail.mailers.smtp.password',
                'value' => config('mail.mailers.smtp.password'),
                'campo' => 'Contraseña del Mail',
            ],
            [
                'name'  => 'MAIL_FROM_ADDRESS',
                'config_key' => 'mail.from.address',
                'value' => config('mail.from.address'),
                'campo' => 'Direccion de envío del Mail',
            ],


        ];
        return response()->json($variables);
    }

    public function update(Request $request)
    {
        try {
            $env_value = str_replace(' ', '_', $request->variable_value);
            $path = base_path('.env');
            if (file_exists($path)) {
                file_put_contents($path, str_replace(
                    $request->variable_name.'='.config($request->variable_key),
                    $request->variable_name.'=' . $env_value,
                    file_get_contents($path)
                ));
                return response()->json(['success' => 'Variable actualizada correctamente']);
            }else{
                return response()->json(['error' => 'No se pudo encontrar el archivo .env'], 500);
            }
        } catch (\Throwable $th) {
            
            return response()->json(['error' => 'No se pudo encontrar el archivo .env'], 500);
                
        }
    }

    public function updateConfig(){
        try{
            Artisan::call('config:cache');
        }catch(\Exception $e){
            return response()->json(['error' => 'No se pudo actualizar la configuración'], 500);
        }
    }
}
