<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, function ($query, $search) {
            $query->where('title', 'Like', '%' . $search . '%');
            // ->orWhereIn('id',$related_model->toArray());
        });
    }

    public function author(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}