@extends('client.layout.main')

@section('head')
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <link rel="stylesheet" href="{{ asset("client/style.css?v=".time()) }}" />
    @yield('subhead')
@endsection

@section('content')
{{--    @yield("div_open")--}}
    @include('client.layout.partial.header')
{{--    @yield("div_close")--}}

    @yield('wrapper')

    @include('client.layout.partial.footer')

    @yield("home_video")
    <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.11.0.min.js"
    ></script>
    <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
    ></script>
    <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ></script>
    <script src="{{ asset("client/general.js?v=".time()) }}"></script>
    <script src="{{ asset("client/slide.js?v=".time()) }}"></script>
@endsection

