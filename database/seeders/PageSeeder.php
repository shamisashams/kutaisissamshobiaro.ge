<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Pages array
        $pages = [
            [
                'key' => 'home'
            ],
            [
                'key' => 'about'
            ],
            [
                'key' => 'service'
            ],
            [
                'key' => 'news'
            ],
            [
                'key' => 'doctors'
            ],
            [
                'key' => 'gallery'
            ],
            [
                'key' => 'contact'
            ]

        ];

        // Insert Pages
        Page::insert($pages);
    }
}
