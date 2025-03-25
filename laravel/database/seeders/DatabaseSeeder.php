<?php

namespace Database\Seeders;

use App\Consts\Posts;
use App\Models\File;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'id' => 1,
            'first_name' => 'Test',
            'last_name' => 'Test',
            'email' => 'testtest@gmail.com',
        ]);

        $posts = Post::insert(array_map(function ($post) {
            unset($post['images']);
            return $post;
        }, Posts::index()));
        dd($posts);

        // File::insert(array_map(function ($post) {
        //     $images = $post['images'];
        //     return [
        //         'fileable_type' => '',
        //         'fileable_id' => ''
        //     ];
        // }, Posts::index()));
    }
}
