<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Task $task, Request $request)
    {

        return $task->filter($request->only('search'))
            ->latest()->paginate(10)->withQueryString()
            ->through(fn($currTask) => [
                'id' => $currTask->id,
                'created_at' => $currTask->created_at,
                'title' => $currTask->title,
                'description' => $currTask->description,
                'is_completed' => $currTask->is_completed,
                'author' => $currTask->author->name,
                'can_alter' => $currTask->author->id === Auth()->user()->id
            ])
        ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }



    public function mytask()
    {
        return request()->user()->task()->where('is_completed', false)
        ->latest()->paginate(10)->withQueryString()
        ->through(fn($currTask) => [
            'id' => $currTask->id,
            'created_at' => $currTask->created_at,
            'title' => $currTask->title,
            'description' => $currTask->description,
            'is_completed' => $currTask->is_completed,
            'author' => $currTask->author->name,
            'can_alter' => $currTask->author->id === Auth()->user()->id
        ])
    ;
    }

    public function completedTask()
    {
        return request()->user()->task()->where('is_completed', true)
        ->latest()->paginate(10)->withQueryString()
        ->through(fn($currTask) => [
            'id' => $currTask->id,
            'created_at' => $currTask->created_at,
            'title' => $currTask->title,
            'description' => $currTask->description,
            'is_completed' => $currTask->is_completed,
            'author' => $currTask->author->name,
            'can_alter' => $currTask->author->id === Auth()->user()->id
        ])
    ;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['string', 'required'],
            'description' => ['required', 'string']
        ]);

        Task::create(array_merge($data, ['user_id' => $request->user()->id]));

        return response('ok', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $task->update([
            'is_completed' => true,
        ]);
        return response('done');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response('done');
    }
}