<?php

namespace Database\Seeders;

use App\Consts\Posts;
use App\Models\File;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Test',
            'last_name' => 'Test',
            'email' => 'testtest@gmail.com',
        ]);

        foreach (Posts::index() as $post) {
            $images = $post['images'];
            unset($post['images']);

            $new_post = Post::create($post);

            $new_post->files()->createMany(array_map(fn($image) => [
                'url' => $image
            ], $images));
        }
    }
}
