desc "Invite the next n number of people who signed up for the beta"
task :invite_beta_users, [:number] => :environment do |t, args|
	args.number.to_i.times do
		beta_invite = Invitation.where("sender_id IS NULL").first
		UserMailer.deliver_invitation("Strengthify", beta_invite)
		puts "Invited #{args.number} beta users"
	end
end