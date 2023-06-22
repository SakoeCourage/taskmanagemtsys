<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class RegisterController extends Controller
{
    public function index(Request $request){
        $data = $request->validate([
            'name'=> ['required','unique:users,name'],
            'email'=> ['required','email','unique:users,email'],
            'password' =>['required','min:8','confirmed'],
        ]);
        User::create($data);
        return response('ok',200);
    }
}
