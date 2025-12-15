<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::all();
        return response()->json($activities);
    }

    public function store(Request $request)
    {
        $data = $request->only(['user_id','category','activity','date','duration']);
        $activity = Activity::create($data);
        return response()->json($activity, 201);
    }

    public function show($id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Not Found'], 404);
        }
        return response()->json($activity);
    }

    public function update(Request $request, $id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Not Found'], 404);
        }
        $activity->update($request->all());
        return response()->json($activity);
    }

    public function destroy($id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Not Found'], 404);
        }
        $activity->delete();
        return response()->json(null, 204);
    }
}
