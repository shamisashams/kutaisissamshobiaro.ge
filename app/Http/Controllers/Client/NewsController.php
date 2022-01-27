<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::where("status", 1)->with(['file', 'translations'])->paginate(3);
//        dd($news);


        return Inertia::render('News/News', ["news" => $news]);
    }

    public function show(string $locale, $slug)
    {
        $news = News::where("status", 1)->where("slug", $slug)->with(['file', 'translations'])->firstOrFail();
//        dd($news);


        return Inertia::render('SingleNews/SingleNews', ["news" => $news]);
    }
}
