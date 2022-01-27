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
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $productPage = Page::where('key', 'product')->firstOrFail();
        $servicePage = Page::where('key', 'service')->firstOrFail();
        $aboutPage = Page::where('key', 'about')->firstOrFail();
        $projectPage = Page::where('key', 'project')->firstOrFail();
        $homePage = Page::where('key', 'home')->firstOrFail();


        $products = Product::query()->with(['file', 'translations']);
        $services = Service::where('status', true)->with(['file', 'translations'])->latest()->take(4)->get();
        $certificates = Certificate::query()->with(['file', 'translations']);
        $projects = Project::query()->with(['file', 'translations']);
        $sliders = Slider::query()->with(['file', 'translations']);
        $news = News::where("status", 1)->with(['file', 'translations'])->take(6)->get();

//        dd($sliders->get()[0]->file->file_url);


        $products = $products->where('status', true);
        return Inertia::render('Home/Home', ["sliders" => $sliders->get(), "news" => $news, "services" => $services]);
        return view('client.pages.home.index', [
            "productPage" => $productPage,
            "servicePage" => $servicePage,
            "aboutPage" => $aboutPage,
            "projectPage" => $projectPage,
            "products" => $products->get(),
            "services" => $services,
            "certificates" => $certificates->get(),
            "projects" => $projects->get(),
            "sliders" => $sliders->get()
        ]);
    }

    public function gallery()
    {
        return Inertia::render('Gallery/Gallery');
    }

    public function doctors()
    {
        return Inertia::render('OurDoctors/OurDoctors');
    }

    public function news()
    {
        return Inertia::render('News/News');
    }

    public function newsShow()
    {
        return Inertia::render('SingleNews/SingleNews');
    }


}
