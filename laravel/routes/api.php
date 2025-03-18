<?php

use App\Models\Token;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


Route::get('/test', function () {
    return Str::slug('Виткор Osipov!.?', '_');
});

Route::get('/auth/redirect', function () {
    return Socialite::driver('google')->stateless()->redirect();
});

Route::get('/auth/callback', function () {
    $type = 'google';
    $user_data = Socialite::driver($type)->stateless()->user();

    $user = null;
    DB::transaction(function () use($user_data, $type, &$user) {
        $name = $user_data->getName();
        [$first_name, $last_name] = explode(' ', $name);

        $nickname_origin = Str::slug($name, '_');
        $nickname = $nickname_origin;
        $nickname_number = 2;

        while (User::where('nickname', $nickname)->exists()) {
            $nickname = $nickname_origin . $nickname_number;
            $nickname_number += 2;
        }

        $user = User::firstOrCreate(
            ['email' => $user_data->getEmail()],
            [
                'nickname' => $nickname,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'avatar' => $user_data->getAvatar()
            ]
        );

        Token::create([
            'user_id' => $user->id,
            'type' => $type,
            'token' => $user_data->token
        ]);
    });

    return response($user);
});
