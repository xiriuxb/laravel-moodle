<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSiteImagesController extends Controller
{
    public function storeIcon(Request $request)
    {
        $request->validate(['favicon' => 'sometimes|mimes:ico|max:64',]);
        $imageName = 'favicon.'.$request->favicon->getClientOriginalExtension();
        $request->favicon->move(public_path(), $imageName);
        return response()->json(['success' => $imageName]);
    }

    public function storeLogo(Request $request)
    {
        $request->validate(['logo' => 'image|sometimes|mimes:png,jpg,jpeg|max:524',]);
        $imageName = 'logo.'.$request->logo->getClientOriginalExtension();
        $request->logo->move(public_path('images'), $imageName);
        return response()->json(['success' => $imageName]);
    }

    public function storeCaratula(Request $request)
    {
        $request->validate(['caratula' => 'image|sometimes|mimes:png,jpg,jpeg|max:1024',]);
        $imageName = 'caratula.png';
        $request->caratula->move(public_path('images'), $imageName);
        return response()->json(['success' => $imageName]);
    }
}
