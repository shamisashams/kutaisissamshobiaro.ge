<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{{$meta_title}}</title>
    <meta name="description"
          content="{{ $meta_description }}">
    <meta name="keywords" content="{{ $meta_keyword }}">
    <meta property="og:title" content="{{ $og_title }}">
    <meta property="og:description" content="{{ $og_description }}">
    @if($image)
        <meta property="og:image" content={{"/".$image->path."/".$image->title}}>
    @endif
    <meta property="og:url" content="{{ request()->fullUrl() }}">
    <meta property="og:type" content="page">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
@inertia
</body>
</html>
