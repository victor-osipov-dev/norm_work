<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function signin(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Invalid email or token'
            ], 401);
        }


        $request->session()->regenerate();
 
        return response([
            'message' => 'Success signin',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return response([
            'message' => 'Success logout'
        ]);
    }


    function auth_redirect(Request $request) {
        return Socialite::driver($request->type)->redirect();
    }

    function auth_callback(Request $request) {
        if ($request->token) {
            $user_data = Socialite::driver($request->type)->userFromToken($request->token);
        } else {
            $user_data = Socialite::driver($request->type)->user();
        }

        $name = $user_data->getName();
        $email = $user_data->getEmail();
        $full_name = explode(' ', $name);
        $first_name = $full_name[0] ?? null;
        $last_name = $full_name[1] ?? null;

        $user = User::where('email', $email)->first();

        if (!isset($user)) {
            $nickname_original = Str::slug($name, '_');
            $nickname = $nickname_original;
            $nickname_number = 2;

            while (User::where('nickname', $nickname)->exists()) {
                $nickname = $nickname_original . '_' . $nickname_number;
                $nickname_number += 2;
            }
            
            $user = User::create([
                'email' => $email,
                'nickname' => $nickname,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'avatar' => $user_data->getAvatar()
            ]);
        }

        Auth::login($user);

        if ($request->token) {
            return response([
                'message' => 'Sign in'
            ]);
        }
        return redirect()->away("http://localhost:3000?auth_profider=$request->type&token=$user_data->token");
    }


   
}
