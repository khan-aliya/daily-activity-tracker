<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Activity extends Model
{
    protected $connection = 'mongodb';   // use MongoDB connection
    protected $collection = 'activities'; // collection name

    protected $fillable = [
        'user_id',
        'category',
        'activity',
        'date',
        'duration'
    ];
}
