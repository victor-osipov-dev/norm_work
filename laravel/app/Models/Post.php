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
        return Attribute::make(
            get: fn () => $this->feedbacks->groupBy('user_id')->count(),
        );
    }
    public function rating(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->feedbacks->avg('estimation'),
        );
    }
    public function images(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->files->map(fn ($file) => $file->url),
        );
    }

    public function toSearchableArray(): array
    {
        $array = $this->toArray();

        return $array;
    }

    protected $appends = ['feedbacks_number', 'rating', 'images'];
}
