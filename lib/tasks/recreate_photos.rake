desc "Recreate all user uploaded photos"
task :recreate_photos => :environment do |t|
	User.all.each do |user|
		user.photo.recreate_versions! if user.photo.present?
	end
	puts "Recreated photos for #{User.count} users"
end