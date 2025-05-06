<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Http\Requests\StoreFeedbackRequest;
use App\Http\Requests\UpdateFeedbackRequest;
use App\Models\Post;

class FeedbackController extends Controller
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
    public function store(Post $post, StoreFeedbackRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();

        Feedback::create([
            ...$data,
            'user_id' => $user->id,
            'post_id' => $post->id,
        ]);

        return response([
            'message' => 'Comment create success'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeedbackRequest $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }


    function get_feedbacks_by_post(Post $post) {
        $post->load('feedbacks.user');
        return $post->feedbacks->groupBy('user_id')->map(function($group) {
            return [
                'user' => $group[0]->user,
                'data' => $group
            ];
        })->values();
    }
}
