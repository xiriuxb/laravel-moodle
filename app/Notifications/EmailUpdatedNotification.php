<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\User;

class EmailUpdatedNotification extends Notification
{
    use Queueable;

    protected $newEmail;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($newEmail)
    {
        
        $this->newEmail = $newEmail;
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
        return (new MailMessage)
                    ->greeting('Hola '.$notifiable->name)
                    ->line('La dirección de correo electrónico asociada a tu cuenta se ha cambiado recientemente a '.$this->newEmail)
                    ->line('Si no la has cambiado y crees que se trata de un error, contáctate con nosotros.');
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
