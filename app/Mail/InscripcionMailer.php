<?php

namespace App\Mail;

use App\Models\Matricula;
use App\Models\Pago;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InscripcionMailer extends Mailable
{
    use Queueable, SerializesModels;
    public Matricula $matricula;
    public string $siteName;
    public string $moodleURL;
    public string $nombreCurso;
    public string $siteURL;
    public ?Pago $pago = null;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Matricula $matricula, string $nombreCurso, ?Pago $pago)
    {
        $this->matricula = $matricula;
        $this->siteName = config('app.name');
        $this->moodleURL = config('app.moodle_url')."login/";
        $this->nombreCurso = $nombreCurso;
        $this->siteURL = config('app.url');
        $this->pago = $pago;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(config('mail.from.address'),config('app.name'))
        ->subject('Gracias por elegirnos')
            ->view('Mail.newinscmail');
    }
}
