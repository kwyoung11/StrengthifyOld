desc "Invite the next n number of people who signed up for the beta"
task :new_feature => :environment do 
	User.all.each do |u|
		UserMailer.new_feature_email(u, "Moves Integration").deliver
	end
end