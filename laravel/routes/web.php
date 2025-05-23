<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::post('/user/register', [UserController::class, 'store']);
Route::post('/auth/signin', [AuthController::class, 'signin']);

Route::get('/auth/redirect/{type}', [AuthController::class, 'auth_redirect'])->whereIn('type', ['google', 'yandex']);
Route::get('/auth/callback/{type}', [AuthController::class, 'auth_callback'])->whereIn('type', ['google', 'yandex']);

Route::get('/posts/by_category', [PostController::class, 'index_by_category']);
Route::get('/posts/search', [PostController::class, 'search']);
Route::get('/posts/{post}', [PostController::class, 'show']);
Route::get('/feedbacks/{post}', [FeedbackController::class, 'get_feedbacks_by_post']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user/profile', [UserController::class, 'show']);
    Route::post('/posts/feedback/{post}', [FeedbackController::class, 'store']);
    Route::get('/user/logout', [AuthController::class, 'logout']);
});


