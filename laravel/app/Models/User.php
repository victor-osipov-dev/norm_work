<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    function files() {
        return $this->morphMany(File::class, 'fileable');
    }

    function posts() {
        return $this->hasMany(Post::class, 'user_id');
    }


    public function feedbacksNumber(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->posts->pluck('feedbacks')->map(fn ($post_feedbacks) => $post_feedbacks->groupBy('user_id')->count())->sum(),
        );
    }
    public function rating(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->posts->pluck('feedbacks')->collapse()->avg('estimation'),
        );
    }

    protected $appends = ['feedbacks_number', 'rating'];
}
