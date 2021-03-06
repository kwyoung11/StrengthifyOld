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

ActiveRecord::Schema.define(version: 20140912231434) do

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

  add_index "activities", ["trackable_id"], name: "index_activities_on_trackable_id", using: :btree
  add_index "activities", ["user_id"], name: "index_activities_on_user_id", using: :btree

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

  create_table "defaults", force: true do |t|
    t.integer  "user_id"
    t.integer  "weight"
    t.integer  "reps"
    t.integer  "exercise_seconds"
    t.integer  "rest_period_seconds"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "defaults", ["user_id"], name: "index_defaults_on_user_id", using: :btree

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

  add_index "exercise_descriptions", ["muscle_groups"], name: "db_of_exercises_muscle_groups", using: :gin

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
    t.integer  "exercise_id"
    t.integer  "duration"
    t.string   "time_option"
    t.string   "weight_type",       default: "lbs"
  end

  create_table "friendships", force: true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
  end

  create_table "glories", force: true do |t|
    t.integer  "giver_id"
    t.integer  "receiver_id"
    t.integer  "glorifiable_id"
    t.string   "glorifiable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "integration_activities", force: true do |t|
    t.integer  "user_id"
    t.integer  "integration_id"
    t.string   "activity_type"
    t.integer  "distance"
    t.integer  "duration"
    t.integer  "steps"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.date     "date"
  end

  create_table "integrations", force: true do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "access_token"
    t.string   "refresh_token"
    t.string   "expires_at"
    t.string   "first_date"
  end

  create_table "invitations", force: true do |t|
    t.integer  "sender_id"
    t.string   "token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "recipient_email"
    t.integer  "invitable_id"
    t.string   "invitable_type"
    t.string   "status"
    t.string   "action"
    t.integer  "recipient_id"
  end

  add_index "invitations", ["sender_id"], name: "index_invitations_on_sender_id", using: :btree

  create_table "notifications", force: true do |t|
    t.integer  "user_id"
    t.string   "action"
    t.integer  "notifiable_id"
    t.string   "notifiable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "seen",            default: false
  end

  add_index "notifications", ["notifiable_id"], name: "index_notifications_on_notifiable_id", using: :btree
  add_index "notifications", ["user_id"], name: "index_notifications_on_user_id", using: :btree

  create_table "rest_periods", force: true do |t|
    t.integer  "minutes"
    t.integer  "seconds"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "exercise_id"
  end

  create_table "scheduled_workout_participations", force: true do |t|
    t.integer  "scheduled_workout_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "scheduled_workouts", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "scheduled_date"
    t.integer  "workout_id"
    t.string   "location"
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
    t.integer  "invitation_id"
    t.integer  "invitation_limit"
    t.integer  "visited",                default: 0
    t.string   "profiles_visited",       default: [], array: true
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
    t.integer  "load_volume"
    t.integer  "duration"
    t.boolean  "planned"
    t.text     "description"
    t.boolean  "snagged",        default: false
    t.integer  "snag_count"
    t.boolean  "completed"
    t.string   "category_count", default: [],    array: true
    t.string   "category",       default: [],    array: true
  end

  add_index "workouts", ["user_id"], name: "index_workouts_on_user_id", using: :btree

end
