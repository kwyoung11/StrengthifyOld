# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130723185640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "activities", force: true do |t|
    t.integer  "user_id"
    t.string   "action"
    t.integer  "trackable_id"
    t.string   "trackable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "activities", ["trackable_id"], name: "index_activities_on_trackable_id"
  add_index "activities", ["user_id"], name: "index_activities_on_user_id"

  create_table "baselines", force: true do |t|
    t.integer  "challenge_id"
    t.integer  "reps"
    t.integer  "duration"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "challenges", force: true do |t|
    t.integer  "reps"
    t.string   "exercise"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "duration"
    t.boolean  "completed"
    t.string   "of_type"
  end

  create_table "exercise_descriptions", force: true do |t|
    t.text     "preparation"
    t.text     "execution"
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "body_part",      default: [], array: true
    t.hstore   "muscle_groups"
    t.string   "equipment_type", default: [], array: true
    t.string   "skill_level"
    t.string   "force"
  end

  add_index "exercise_descriptions", ["muscle_groups"], name: "db_of_exercises_muscle_groups"

  create_table "exercises", force: true do |t|
    t.string   "name"
    t.integer  "weight"
    t.integer  "reps"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "exerciseable_id"
    t.string   "exerciseable_type"
    t.integer  "hours"
    t.integer  "minutes"
    t.integer  "seconds"
  end

  create_table "friendships", force: true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
  end

  create_table "rest_periods", force: true do |t|
    t.integer  "minutes"
    t.integer  "seconds"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "exercise_id"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.string   "auth_token"
    t.string   "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.boolean  "admin"
    t.string   "photo"
    t.string   "website"
    t.text     "about_me"
    t.date     "birthday"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.datetime "last_sign_in_at"
    t.string   "gender"
    t.integer  "sign_in_count",          default: 0
    t.datetime "last_seen"
    t.integer  "profile_views",          default: 0
  end

  create_table "workouts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.string   "name"
    t.integer  "hours"
    t.integer  "minutes"
    t.integer  "seconds"
    t.integer  "sets"
    t.string   "category"
    t.integer  "load_volume"
    t.integer  "duration"
    t.boolean  "planned"
  end

  add_index "workouts", ["user_id"], name: "index_workouts_on_user_id"

end
