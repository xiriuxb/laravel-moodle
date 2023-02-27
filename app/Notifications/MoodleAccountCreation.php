<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MoodleAccountCreation extends Notification
{
    use Queueable;

    protected $temp_password;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($temp_password)
    {
        $this->temp_password = $temp_password;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $temp_password = $this->temp_password;
        return (new MailMessage)
                    ->line('Tu usuario en el Aula Virtual fue creado.')
                    ->line('Durante este proceso tu contraseña fue cambiada a una temporal')
                    ->line($temp_password)
                    ->line('Te recomendamos cambiarla ingresando al sistema o siguiendo el proceso como si hubieras olvidado la contraseña.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
