<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\News;
use App\Models\Page;
use App\Models\Product;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {


        $news = News::where("status", 1)->with(['file', 'translations'])->take(6)->get();

        return Inertia::render('Home/Home', [ "news" => $news] );

    }

    public function gallery()
    {
        return Inertia::render('Gallery/Gallery');
    }

    public function doctors()
    {
        return Inertia::render('OurDoctors/OurDoctors');
    }
    public function services()
    {
        return Inertia::render('Services/Services');
    }




}
