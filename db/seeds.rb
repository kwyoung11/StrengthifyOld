[
	{ # DEADLIFT
		:name 					=> "Deadlift",
		:preparation 		=> "Stand with shoulder width stance and feet flat beneath barbell. Bend knees and bend over at the hips while keeping low back straight. Grasp barbell with shoulder width overhand or mixed grip, then lift weight to standing position.",
		:execution 			=> "Keeping the knees straight, lower bar towards the top of the feet by bending at the hips. After hips can no longer flex, bend at the knees as bar approaches top of feet. Lift bar by extending waist and hip to standing position. Pull shoulders back slightly if rounded.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Legs Back],
		:muscle_groups 	=> {target: "Hamstrings", synergists: "Erector Spinae, Gluteus Maximus, Adductor Magnus"},
		:equipment_type => %w[Barbell]
	},

	{ # PUSHUP
		:name 					=> "Pushup",
		:preparation 		=> "Lie prone on floor with hands slightly wider than shoulder width. Raise body up off floor by extending arms with body straight.",
		:execution 			=> "Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Chest Abdomen],
		:muscle_groups 	=> {target: "Pec Major (Sternal)", synergists: "Pec Major (Clavicular), Anterior Deltoid, Triceps Brachii"},
		:equipment_type => %w[Body\ Weight]
	},

	{ # LUNGE
		:name 					=> "Lunge",
		:preparation 		=> "Stand with hands on hips or clasped behind neck.",
		:execution 			=> "Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Legs Buttocks],
		:muscle_groups 	=> {target: "Gluteus Maximus", synergists: "Quadriceps, Adductor Magnus, Soleus"},
		:equipment_type => %w[Body\ Weight]
	},

	{ # DUMBBELL CURLS
		:name 					=> "Dumbbell Curls"
		:preparation 		=> "Hold a dumbbell in each hand with arms straight and hanging down and the palms of the hands facing the body."
		:execution 			=> "Bend at the elbow, rotating the palm up before the forearm reaches horizontal. Continue raising forearm while keeping elbow at side of body until maximum range of motion reached."
		:category 			=> "Upper Body"
		:body_part 			=> %w[Arms]
		:muscle_group 	=> {target: "Biceps Brachii", synergists: "Brachioradialis, Brachialis, Anterior Deltoid"}
		:equipment_type => %w[Dumbbell]
	},

	{ # CONCENTRATION CURLS
		:name 					=> "Concentration Curls"
		:preparation 		=> "Sit holding a dumbbell with the palm facing forward and the elbow positioned against the inner thigh."
		:execution 			=> "Lift the forearm by bending at the elbow. Keep palm facing outwards throughout movement."
		:category 			=> "Upper Body"
		:body_part 			=> %w[Arms]
		:muscle_group 	=> {target: "Biceps Brachii" , synergists: "Brachialis"} 
		:equipment_type => %w[Dumbbell]
	},

	{ # INCLINE DUMBBELL CURLS
		:name 					=> "Incline Dumbbell Curls"
		:preparation 		=> "Sit on an inclined bench with back against padding. Hold a dumbbell in each hand using an overhand grip (thumbs face to the inside)"
		:execution 			=> ""
		:category 			=> ""
		:body_part 			=> %w[]
		:muscle_group 	=> {target: "" , synergists: ""} 
		:equipment_type => %w[]
	}



].each do |exercise|
	DbOfExercise.create(
		name: exercise[:name], 
		preparation: exercise[:preparation], 
		execution: exercise[:execution], 
		category: exercise[:category],
		body_part: exercise[:body_part],
		muscle_groups: exercise[:muscle_groups],
		equipment_type: exercise[:equipment_type]
	)
end







###### SAMPLE STRUCTURE
	{ #
		:name 					=> ""
		:preparation 		=> ""
		:execution 			=> ""
		:category 			=> ""
		:body_part 			=> %w[]
		:muscle_group 	=> {target: "" , synergists: ""} 
		:equipment_type => %w[]
	}