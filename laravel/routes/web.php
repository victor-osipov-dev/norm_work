<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/user/register', [UserController::class, 'store']);
Route::post('/auth/signin', [AuthController::class, 'signin']);

Route::get('/auth/redirect/{type}', [AuthController::class, 'auth_redirect'])->whereIn('type', ['google', 'yandex']);
Route::get('/auth/callback/{type}', [AuthController::class, 'auth_callback'])->whereIn('type', ['google', 'yandex']);

Route::get('/posts', [PostController::class, 'index_by_category']);