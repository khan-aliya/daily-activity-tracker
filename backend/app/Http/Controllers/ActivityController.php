<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index()
    {
        return response()->json(Activity::all());
    }

    public function store(Request $request)
    {
        $activity = Activity::create($request->all());
        return response()->json($activity, 201);
    }

    public function show($id)
    {
        $activity = Activity::find($id);
        return $activity
            ? response()->json($activity)
            : response()->json(['error' => 'Not Found'], 404);
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
