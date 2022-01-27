<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Middleware;
use Spatie\TranslationLoader\TranslationLoaders\Db;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'client/layout/base';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        $trans = new Db();

        $this->settings();
        $locales = config("translatable.locales");
        $currentLocale = App::getLocale();
        $currentRoute = url()->current();
//        dd(url()->current());
//        dd(app()->getLocale());
//        dd(config("translatable.locales"));

        return array_merge(parent::share($request), [
            "translations" => $trans->loadTranslations("ge", "client"),
            "locales" => $locales,
            "currentLocale" => $currentLocale,
            "pathname" => $currentRoute
        ]);
    }

    protected function settings()
    {
        $gphone = "";
        $gemail = "";
        $gaddress = "";
        $gworkingHours = "";
        $ginstagram = "";
        $gfacebook = "";
        $gyoutube = "";

        $settings = Setting::query()->with(['translations']);
        $settings = $settings->get();
        foreach ($settings as $setting) {
            switch ($setting->key) {
                case "phone":
                    $gphone = $setting;
                    break;
                case "email":
                    $gemail = $setting;
                    break;
                case "address":
                    $gaddress = $setting;
                    break;
                case "working_hours":
                    $gworkingHours = $setting;
                    break;
                case "instagram":
                    $ginstagram = $setting;
                    break;
                case "facebook":
                    $gfacebook = $setting;
                    break;
                case "youtube":
                    $gyoutube = $setting;
                    break;
            }
        }

        Inertia::share([
            "gphone" => $gphone,
            "gemail" => $gemail,
            "gaddress" => $gaddress,
            "gworkingHours" => $gworkingHours,
            "ginstagram" => $ginstagram,
            "gfacebook" => $gfacebook
        ]);
    }

}
