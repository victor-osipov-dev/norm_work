<?php

namespace App\Http\Controllers;

use App\Consts\Category;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return response($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }

    function index_by_category(Request $request)
    {
        $categories = collect(['programming', 'design', 'video/audio', 'texts', 'marketing', 'seo']);
        $response = [];

        
        
        $categories->each(function ($category) use(&$response) {
            $response[$category] = Post::with(['user.posts', 'files', 'feedbacks'])->where('type', $category)->limit(8)->get()->makeHidden(['files', 'feedbacks'])
            ->each(function ($post) {
                $post->user->makeHidden(['posts']);
            });
        });

        // dd($response);
        return response($response);
    }


    function search(Request $request) {
        $data = $request->validate([
            'query' => ['required', 'string']
        ]);
        $query = $data['query'];
        // return $query;
        return Post::search($query)
        // ->query(fn ($query) => $query->with(['user', 'files']))
        ->get()
        ->map(fn ($post) => [
            'id' => $post->id,
            'title' => $post->title,
            'description' => $post->description,
            'images' => $post->files->pluck('url'),
            'type' => $post->type,
            'min_price' => $post->min_price,
            'max_price' => $post->max_price,
            'user' => [
                'first_name' => $post->user->first_name,
                'last_name' => $post->user->last_name,
                'avatar' => $post->user->avatar,
                'rating' => null,
                'number_reviews' => 0,
                'balance' => $post->user->balance
            ]
        ]);
    }
}
