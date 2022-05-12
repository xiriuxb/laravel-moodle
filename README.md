<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## TODO
- X Menu de usuario
    - X  Vista de datos personales
        - X Cambio de correo
        - X Cambio de contraseña
        - X Envío de email de notificacion
        - X Actualizacion de datos
    - X Vista de compras (inscripciones)
- O Terminar el menu admin
- X Arreglar la vista Cursos y el componente Filter
- X Poner un mensaje si no hay cursos
- X Pagination en vista cursos
- X La barra de paginacion se recarga-- cambiar eso-- no es problema
- X Cambiar posición barra de paginación
- X Añadir boton registro en barra de navegación (no aparecer en home)
- O Añadir búsqueda
- X Frogot password
- Revisar el uso de tildes en nombres de usuario
- X Anadir un boton o algo en la pagina de inicio que redirija a los cursos
- X Boton de inscribirse, cambiar cuando ya este inscrito
- X Revisar la ruta de email/verify
- O Add frontend messages on:
    - X Forgot password
    - X Reset password
    - O Matrícula-- Revisar todos los errores que pueden llegar en el response
    - X Login
    - ? Email de notificacion
- O Verificar registro (el error se genera luego de que el registro se realizó --no loguea)-- login desde host externo CSRF token mismatch
- X Cambiar el registro del curso al matricularse al back
- ? Cambiar el mensaje del boton "Ir al curso"
- X Notificacion en el perfil cuando no ha verificado el mail
- Definir el funcionamiento cuando un usuario se elimina (si elimina el usuario su propia cuenta y cuando un admin suspende a un usuario)
- X Issue cuando se selecciona la categoria desde la view 'curso', en la pantalla cursos, luego no se puede filtrar a otras categorías
    (hacer mas pruebas)
- Revisar que pasa con los cursos sin imágen de curso
- X Cambiar ruta al curso de moodle
- X cambiar al env las credenciales para acceder a los servicios de moodle