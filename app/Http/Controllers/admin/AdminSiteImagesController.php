<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminSiteImagesController extends Controller
{
    private $IMAGE_NAMES = array("caratula_im","caratula_back","logo","default_course_image","login_view","email_notice_back","caratula_im_logged");

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
        if(!in_array($request->image_name,$this->IMAGE_NAMES)){
            return response()->json(['errors'=>['imagen'=>['Error al atualizar']]],422);
        }else{
            $request->validate(['imagen' => 'image|sometimes|mimes:png,jpg,jpeg,webp|max:512',]);
            $imageName = $request->image_name.'.png';
            $request->imagen->move(public_path('images'), $imageName);
            return response()->json(['success' => $imageName]);
        }
    }
}
