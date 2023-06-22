<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware'=> 'guest'],function(){
    Route::post('/login',[\App\Http\Controllers\Auth\LoginController::class,'authenticate']);
    Route::post('/register',[\App\Http\Controllers\Auth\RegisterController::class,'index']);
});


Route::group(['middleware'=> 'auth:sanctum'],function(){
     Route::post('/logout',[\App\Http\Controllers\Auth\LogoutController::class,'logout']);

     Route::group(['prefix'=>'task'],function(){
        Route::post('new-task',[\App\Http\Controllers\TaskController::class,'store']);
        Route::get('all',[\App\Http\Controllers\TaskController::class,'index']);
        Route::get('complete/{task}',[\App\Http\Controllers\TaskController::class,'edit']);
        Route::get('delete/{task}',[\App\Http\Controllers\TaskController::class,'destroy']);
        Route::get('/my-task',[\App\Http\Controllers\TaskController::class,'mytask']);
        Route::get('/completed-task',[\App\Http\Controllers\TaskController::class,'completedTask']);
     });
});


