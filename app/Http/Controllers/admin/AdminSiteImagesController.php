<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSiteImagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:admuser.siteconfig');
    }

    public function storeIcon(Request $request)
    {
        $request->validate(['favicon' => 'sometimes|mimes:ico|max:64',]);
        $imageName = 'favicon.'.$request->favicon->getClientOriginalExtension();
        $request->favicon->move(public_path(), $imageName);
        return response()->json(['success' => $imageName]);
    }

    public function storeImage(Request $request){
        $request->validate(['imagen' => 'image|sometimes|mimes:png,jpg,jpeg|max:524',]);
        $imageName = $request->image_name.'.'.$request->imagen->getClientOriginalExtension();
        $request->imagen->move(public_path('images'), $imageName);
        return response()->json(['success' => $imageName]);
    }
}
