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

ActiveRecord::Schema.define(version: 20130620032538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  create_table "exercises", force: true do |t|
    t.string   "name"
    t.integer  "weight"
    t.integer  "reps"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "workout_id"
    t.boolean  "usable"
    t.text     "preparation"
    t.text     "execution"
    t.string   "body_part"
  end

  add_index "exercises", ["workout_id"], name: "index_exercises_on_workout_id"

  create_table "friendships", force: true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
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
    t.string   "oauth_token"
    t.string   "oauth_secret"
    t.string   "uid"
    t.string   "provider"
    t.boolean  "admin"
    t.string   "photo"
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
  end

  add_index "workouts", ["user_id"], name: "index_workouts_on_user_id"

end
