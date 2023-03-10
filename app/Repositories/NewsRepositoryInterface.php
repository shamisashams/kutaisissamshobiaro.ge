<?php
/**
 *  app/Repositories/ProductRepositoryInterface.php
 *
 * Date-Time: 30.07.21
 * Time: 10:35
 * @author Insite.ge
 */
namespace App\Repositories;


use App\Http\Requests\Admin\ProductRequest;
use Illuminate\Http\Request;


interface NewsRepositoryInterface
{

    /**
     * @param ProductRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(Request $request, array $with = []);
}
