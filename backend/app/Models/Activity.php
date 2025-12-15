<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Activity extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'activities';

    protected $fillable = [
        'user_id',
        'title',
        'category',
        'sub_category',
        'duration',
        'date',
        'feeling',
        'notes',
        'status'
    ];

    protected $casts = [
        'date' => 'date',
        'duration' => 'integer',
        'feeling' => 'integer'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    const CATEGORIES = [
        'Self-care',
        'Productivity', 
        'Reward'
    ];

    const SUB_CATEGORIES = [
        'Self-care' => [
            'Yoga', 'Gym', 'Meditation', 'Spa', 'Hobby', 'Walk', 'Other'
        ],
        'Productivity' => [
            'Study', 'Cleaning', 'Laundry', 'Reading', 'Cooking', 'Other'
        ],
        'Reward' => [
            'Watching TV', 'Hangout with friends', 'Shopping', 'Enjoying dessert', 'Vacation', 'Other'
        ]
    ];
}