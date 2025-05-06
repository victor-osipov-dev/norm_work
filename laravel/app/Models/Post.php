<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory, Searchable;

    protected $guarded = [];


    function files() {
        return $this->morphMany(File::class, 'fileable');
    }


    function user() {
        return $this->belongsTo(User::class, 'user_id');
    }


    function feedbacks() {
        return $this->hasMany(Feedback::class, 'post_id');
    }

    public function toSearchableArray(): array
    {
        $array = $this->toArray();

        return $array;
    }
}
