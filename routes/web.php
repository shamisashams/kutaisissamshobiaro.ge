<?php
/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite.ge
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use App\Http\Controllers\Client\ServiceController;
use Illuminate\Support\Facades\Route;

Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('admin')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', '/admin/news',);

//                // Language
//                Route::resource('language', LanguageController::class);
//                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');
//
//                // Translation
//                Route::resource('translation', TranslationController::class);
//
//                // Category
//                Route::resource('category', CategoryController::class);
//                Route::get('category/{category}/destroy', [CategoryController::class, 'destroy'])->name('category.destroy');
//
//                // Product
//                Route::resource('product', ProductController::class);
//                Route::get('product/{product}/destroy', [ProductController::class, 'destroy'])->name('product.destroy');

                // News
                Route::resource('news', NewsController::class);
                Route::get('news/{news}/destroy', [NewsController::class, 'destroy'])->name('news.destroy');

//                // Project
//                Route::resource('project', ProjectController::class);
//                Route::get('project/{project}/destroy', [ProjectController::class, 'destroy'])->name('project.destroy');
//
//                // Slider
//                Route::resource('slider', SliderController::class);
//                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');
//
                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');

                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');


//                // Service
//                Route::resource('service', \App\Http\Controllers\Admin\ServiceController::class);
//                Route::get('service/{service}/destroy', [\App\Http\Controllers\Admin\ServiceController::class, 'destroy'])->name('service.destroy');
//
//                // Certificate
//                Route::resource('certificate', CertificateController::class);
//                Route::get('certificate/{certificate}/destroy', [CertificateController::class, 'destroy'])->name('certificate.destroy');

            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index');
            Route::get('/gallery', [HomeController::class, 'gallery'])->name('client.gallery.index');
            Route::get('/doctors', [HomeController::class, 'doctors'])->name('client.doctors.index');
            Route::get('/news', [\App\Http\Controllers\Client\NewsController::class, 'index'])->name('client.news.index');
            Route::get('/news/{news}', [\App\Http\Controllers\Client\NewsController::class, 'show'])->name('client.news.show');
            Route::get('/services', [HomeController::class, 'services'])->name('client.services.index');
            Route::get('/tips', [HomeController::class, 'tips'])->name('client.tips.index');

            // single tips 
            Route::get('/tip/{n}', [HomeController::class, 'tip'])->name('client.tip.index');

            // single doctor 
            Route::get('/doctor/{n}', [HomeController::class, 'doctor'])->name('client.doctor.index');

            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');


            // About Page
            Route::get('about-us', [AboutUsController::class, 'index'])->name('client.about.index');

        });
    });


