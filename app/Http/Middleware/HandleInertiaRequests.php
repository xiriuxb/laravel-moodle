<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use App\Models\User;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'layouts.master';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $username = '';
        $role = "";
        
        if (Auth::check()) {
            $user = User::with('roles:name')->where('id',Auth::id())->get()->toArray();
            $username = $user[0]['username'];
            $role =$user[0]['roles'][0]['name'];
        }
        return array_merge(parent::share($request), [
            //
            'appName' => config('app.name'),
            'siteData' => [
                'moodleUrl' => config('app.moodle_url'),
                'siteEmail' => config('app.site_email'),
                'sitePhone' => config('app.site_phone'),
                'siteCopyright' => config('app.site_copyright'),
                'siteSocialNetworks' => [
                    'facebook' => config('app.site_facebook'),
                    'twitter' => config('app.site_twitter'),
                    'instagram' => config('app.site_instagram'),
                    'youtube' => config('app.site_youtube'),
                ],
            ],
            'auth' => [
                'user' => $username,
                'role' => $role,
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'curso' => fn () => $request->session()->get('curso'),
            ],
        ]);
    }
}
