<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
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

    public function feedbacksNumber(): Attribute
    {
        return new Attribute(
            get: fn () => $this->feedbacks->groupBy('user_id')->count(),
        );
    }
    public function rating(): Attribute
    {
        return new Attribute(
            get: fn () => $this->feedbacks->avg('estimation'),
        );
    }

    // protected function isAdmin(): Attribute
    // {
    //     return new Attribute(
    //         get: fn () => 'yes',
    //     );
    // }

    public function toSearchableArray(): array
    {
        $array = $this->toArray();

        return $array;
    }

    protected $appends = ['feedbacks_number', 'rating'];
}
