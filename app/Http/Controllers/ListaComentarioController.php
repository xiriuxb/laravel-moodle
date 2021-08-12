<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Comment;

class ListaComentarioController extends Controller
{
    public function __construct()
    {
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'autor' => ['required', 'string', 'max:64'],
            'editor' => ['required', 'string', 'max:64'],
            'texto' => ['required', 'string', 'email', 'max:512'],
        ]);
    }
    public function index() {
        echo 'index';
        }

                /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
        public function create(array $data) {
            return Comment::create([
                'name' => $data['name'],
                'last_name'=>$data['last_name'],
                'email' => $data['email'],
            ]);
            }


            public function store(Request $request) {
            echo 'store';
            }
            public function show($id) {
            echo 'show';
            }
            public function edit($id) {
            echo 'edit';
            }
            public function update(Request $request, $id) {
            echo 'update';
            }
            public function destroy($id) {
            echo 'destroy';
            }  
    
        
}
