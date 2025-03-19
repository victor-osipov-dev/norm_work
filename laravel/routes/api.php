<?php

use App\Http\Requests\AuthRequest;
use App\Models\Token;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;




Route::get('/auth/redirect/{type}', function (Request $request) {
    return Socialite::driver($request->type)->stateless()->redirect();
})->whereIn('type', ['google', 'yandex']);

Route::get('/auth/callback/{type}', function (Request $request) {
    $type = $request->type;

    $token = session()->get($type . '_token');
    // dd(session());
    if (empty($token)) {
        $user_data = Socialite::driver($type)->stateless()->user();
    } else {
        dump($token);
        $user_data = Socialite::driver($type)->stateless()->userFromToken($token);
    }
    
    session()->put($type . '_token', $user_data->token);

    $user = null;
    DB::transaction(function () use($user_data, $type, &$user) {
        $name = $user_data->getName();
        // $email = $user_data->getEmail();
        $email = 'victorosipov2556@gmail.com';
        [$first_name, $last_name] = explode(' ', $name);

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

        Token::create([
            'user_id' => $user->id,
            'type' => $type,
            'token' => $user_data->token
        ]);
    });

    Auth::login($user);

    return response($user);
})->whereIn('type', ['google', 'yandex']);
