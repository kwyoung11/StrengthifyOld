[
	{ # DEADLIFT
		:name 					=> "Deadlift",
		:preparation 		=> "Stand with feet shoulder-width apart and feet flat beneath barbell. Bend knees and bend over at the hips while keeping low back straight. Grasp barbell with shoulder width overhand or mixed grip, then lift weight to standing position.",
		:execution 			=> "Keeping the knees straight, lower bar towards the top of the feet by bending at the hips. After hips can no longer flex, bend at the knees as bar approaches top of feet. Lift bar by extending waist and hip to standing position. Pull shoulders back slightly if rounded.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Legs Back],
		:muscle_groups 	=> {target: "Hamstrings", synergists: "Erector Spinae, Gluteus Maximus, Adductor Magnus"},
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Advanced",
		:force 					=> "Pull" 
	},

	{ # PUSHUP
		:name 					=> "Pushup",
		:preparation 		=> "Lie prone on floor with hands slightly wider than shoulder width. Raise body up off floor by extending arms with body straight.",
		:execution 			=> "Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Chest Abdomen],
		:muscle_groups 	=> {target: "Pec Major (Sternal)", synergists: "Pec Major (Clavicular), Anterior Deltoid, Triceps Brachii"},
		:equipment_type => %w[Body\ Weight],
		:skill_level 		=> "Beginner",
		:force 					=> "Push" 
	},

	{ # LUNGE
		:name 					=> "Lunge",
		:preparation 		=> "Stand with hands on hips or clasped behind neck.",
		:execution 			=> "Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Legs Buttocks],
		:muscle_groups 	=> {target: "Gluteus Maximus", synergists: "Quadriceps, Adductor Magnus, Soleus"},
		:equipment_type => %w[Body\ Weight],
		:skill_level 		=> "Intermediate",
		:force 					=> "Push" 	
	},

	#################################################################################
	# ALL Exercises from Strength Training Anatomy Third Edition by Frederic Delavier
	#################################################################################

	###############################################################################
	######################                     ####################################
	######################*** ARMS SECTION  ***####################################
	######################                     #################################### 
  ################################################################################

	{ # BICEP CURLS
		:name 					=> "Bicep Curls",
		:preparation 		=> "Sit or stand holding a dumbbell in each hand with arms hanging down the sides of the body and palms facing inwards.",
		:execution 			=> "Bend at the elbow and rotate the palm upwards before the forearm reaches horizontal. Continue elbow flexion until chest level.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachioradialis, Brachialis, Anterior Deltoid"},
		:equipment_type => %w[Dumbbell],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # CONCENTRATION CURLS
		:name 					=> "Concentration Curls",
		:preparation 		=> "Sit on a flat bench and grasp a dumbbell with the palm facing forward and the elbow positioned against the inner thigh.",
		:execution 			=> "Lift the forearm by bending at the elbow. Keep palm facing outwards throughout movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"}, 
		:equipment_type => %w[Dumbbell],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	},#pf'd

	{ # INCLINE DUMBBELL CURLS
		:name 					=> "Incline Dumbbell Curls",
		:preparation 		=> "Sit on an incline bench (40-60 degrees) with back against padding. Grasp a dumbbell in each hand with an overhand grip (thumbs facing towards the body).",
		:execution 			=> "Bend at the elbows while externally rotating the wrists before the forearms reach horizontal. Continue elbow flexion so that your hands are in an underhand grip (thumbs facing away from the body) at the end of the movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"},
		:equipment_type => %w[Dumbbell],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	},#pf'd

	{ # HAMMER CURLS
		:name 					=> "Hammer Curls",
		:preparation 		=> "Grasp a dumbbell in each hand with palms facing towards the body and arms hanging along the sides.",
		:execution 			=> "Raise the forearms together or alternately. Keep palms facing inwards throughout movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Brachioradialis", synergists: "Biceps Brachii, Brachialis"}, 
		:equipment_type => %w[Dumbbell],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # LOW-PULLEY CURLS
		:name 					=> "Low-Pulley Curls",
		:preparation 		=> "Stand facing the pulley. Grasp the handle with an underhand grip (palms facing away from the body).",
		:execution 			=> "Bend the elbow to raise the forearm.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"},
		:equipment_type => %w[Cable],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # HIGH-PULLEY CURLS
		:name 					=> "High-Pulley Curls",
		:preparation 		=> "Stand between the pulleys with arms outsretched to the sides and grasp the handles of the high pulleys with an underhand grip.",
		:execution 			=> "Bend at the elbows, pulling the hands towards the body along the coronal plane.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"},
		:equipment_type => %w[Cable],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	}, #pf'd

	{ # BARBELL CURLS
		:name 					=> "Barbell Curls",
		:preparation 		=> "Standing with the back straight, grasp the barbell with an underhand grip and hands slightly wider than shoulder-width apart.",
		:execution 			=> "Keeping elbows to the sides, raise barbell by bending the elbows. Contract the gluteal, abdominal and spinal muscles throughout movement to stabilize the torso.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis, Brachioradialis, "},
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	},#pf'd

	{ # MACHINE CURLS
		:name 					=> "Machine Curls",
		:preparation 		=> "Sit at the machine and grasp the bar with an underhand grip with arms extended and upper arms resting on the support.",
		:execution 			=> "Raise the forearms.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"},
		:equipment_type => %w[Machine],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # PREACHER CURLS
		:name 					=> "Preacher Curls",
		:preparation 		=> "Sit or stand with arms resting on support pad and grasp bar with an underhand grip.",
		:execution 			=> "Raise the forearms.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms],
		:muscle_groups 	=> {target: "Biceps Brachii", synergists: "Brachialis"},
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # REVERSE WRIST CURLS
		:name 					=> "Reverse Wrist Curls",
		:preparation 		=> "Sit with forearms resting on the thighs. Grasp the barbell with a narrow to shoulder-width overhand grip.",
		:execution 			=> "Raise barbell by extending the wrists and pointing the knuckles upwards as high as possible. Return slowly until wrists are fully flexed and knuckles are pointing downards.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Forearms],
		:muscle_groups 	=> {target: "Extensor Carpi Radialis Longus, Extensor Carpi Radialis Brevis, Extensor Digitorum, Extensor Digiti Minimi, Extensor Carpi Ulnaris", synergists: "None"},
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	},#pf'd

	{ # WRIST CURLS
		:name 					=> "Wrist Curls",
		:preparation 		=> "Sit with forearms resting on the thighs, palms faceup, and hands just beyond knees. Grasp the barbell with a shoulder-width or narrower underhand grip.",
		:execution 			=> "Allow barbell to roll out of palms down to fingers. Roll barbell back up by flexing wrists and pointing knuckles upwards as high as possible.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Forearms],
		:muscle_groups 	=> {target: "Extensor Carpi Radialis Longus, Extensor Carpi Radialis Brevis, Extensor Digitorum, Extensor Digiti Minimi, Extensor Carpi Ulnaris", synergists: "None"}, 
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Beginner",
		:force 					=> "Pull" 	
	},#pf'd

	{ # REVERSE BARBELL CURLS
		:name 					=> "Reverse Barbell Curls",
		:preparation 		=> "Stand with legs slightly apart and arms hanging along sides of body. Grasp barbell with an overhand grip (thumbs facing each other).",
		:execution 			=> "Raise the forearms until vertical by flexing the elbows. Keep the elbows to the sides throughout movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms Forearms],
		:muscle_groups 	=> {target: "Wrist Extensors, Brachioradialis" , synergists: "Brachialis, Biceps Brachii"},
		:equipment_type => %w[Barbell],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 	
	},#pf'd

	{ # PUSH-DOWNS
		:name 					=> "Push-Downs",
		:preparation 		=> "Stand facing high pulley and grasp handle with narrow to shoulder-width overhand grip. Position elbows by the sides of the body.",
		:execution 			=> "Extend the forearms downwards. Return until forearms vertical in a controlled manner.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus"}, 
		:equipment_type => %w[Cable],
		:skill_level 		=> "Beginner",
		:force 					=> "Push" 	
	},


	{ # REVERSE PUSH-DOWNS
		:name 					=> "Reverse Push-Downs",
		:preparation 		=> "Stand facing high pulley with  arms next to the body and elbows bent and grasp the handle with an underhand grip.",
		:execution 			=> "Extend the forearms by straightening the elbows, keeping them tucked into the body.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus, Wrist Extensors"}, 
		:equipment_type => %w[Cable],
		:skill_level 		=> "Intermediate",
		:force 					=> "Pull" 
	},

	{ # ONE-ARM REVERSE PUSH-DOWNS
		:name 					=> "One-Arm Reverse Push-Downs",
		:preparation 		=> "Stand facing the machine and grasp the handle with an underhand grip.",
		:execution 			=> "Extend the forearm.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "None"}, 
		:equipment_type => %w[Cable]
	},

	{ # OVERHEAD CABLE TRICEPS EXTENSIONS
		:name 					=> "Overhead Cable Triceps Extensions",
		:preparation 		=> "Sit with your back against a pulley machine. Grasp the pulley with an overhand grip, arms slightly above horizontal and elbows bent.",
		:execution 			=> "Extend your forearms, taking care not to spread your elbows too far apart.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Ribs],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus, Serratus Anterior"}, 
		:equipment_type => %w[Cable]
	},

	{ # LYING BARBELL TRICEPS EXTENSIONS
		:name 					=> "Lying Triceps Extensions",
		:preparation 		=> "Lie on a horizontal bench and grasp the barbell with an overhand grip and the arms vertical.",
		:execution 			=> "Lower the barbell to the forehead or behind the head by bending the elbows.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Amrs Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "None"}, 
		:equipment_type => %w[Barbell]
	},

	{ # LYING DUMBELL TRICEPS EXTENSIONS
		:name 					=> "Lying Triceps Extensions",
		:preparation 		=> "Lie on a flat bench and grasp a dumbbell in each hand with the arms vertical.",
		:execution 			=> "Lower the forearms by bending the elbow with a controlled movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "None"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # ONE-ARM OVERHEAD DUMBBELL TRICEPS EXTENSIONS
		:name 					=> "One-Arm Overhead Triceps Extensions",
		:preparation 		=> "Sit or Stand and grip a dumbbell in one hand with the arm vertical.",
		:execution 			=> "Bend the elbow to lower the dumbbell behind the head to the neck.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # TRICEPS KICKBACK
		:name 					=> "Triceps Kickback",
		:preparation 		=> "Stand with the knees slightly bent and lean forward at the waist, maintaining a straight back. Bend the elbow and hold the upper arm horizontally alongside the body.",
		:execution 			=> "Extend the forearm.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # SEATED DUMBBELL TRICEPS EXTENSION
		:name 					=> "Seated Dumbbell Triceps Extension",
		:preparation 		=> "Sit and grasp a dumbbell, holding it behind the neck.",
		:execution 			=> "Extend the forearms.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Anconeus"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # SEATED E-Z BAR TRICEPS EXTENSIONS
		:name 					=> "Seated E-Z Bar Triceps Extensions",
		:preparation 		=> "Sit or stand and grasp an E-Z bar with an overhand grip and arms vertical.",
		:execution 			=> "Bend the elbows to lower the bar behind the head.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "None"}, 
		:equipment_type => %w[Barbell]
	},

	{ # TRICEPS DIPS
		:name 					=> "Triceps Dips",
		:preparation 		=> "Suspend the body between two benches by placing the hands on the edge of one bench and the feet on the edge of the other bench.",
		:execution 			=> "Dip by bending the elbows and rise by extending the forearms.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Arms Upper\ Arms],
		:muscle_groups 	=> {target: "Triceps Brachii", synergists: "Pectoralis Major, Anterior Deltoid, Anconeus"}, 
		:equipment_type => %w[Body\ Weight]
	},



	###############################################################################
	######################                     ####################################
	######################  SHOULDERS SECTION  ####################################
	######################                     #################################### 
  ################################################################################


	{ # BACK PRESSES
		:name 					=> "Back Presses",
		:preparation 		=> "Sit with back straight and hold the bar across the back of the neck with an overhand grip.",
		:execution 			=> "Extend the bar straight up, keeping the low back as straight as possible.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior, Lateral, Posterior)", synergists: "Trapezius, Triceps Brachii, Serratus Anterior, Rhomboids, Infraspinatus, Teres Minor, Supraspinatus"}, 
		:equipment_type => %w[Barbell]
	},

	{ # SEATED FRONT PRESSES
		:name 					=> "Seated Front Presses",
		:preparation 		=> "Sit with the back straight and hold the bar with an overhand grip, resting it across the upper chest.",
		:execution 			=> "Extend the bar vertically.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior, Lateral)", synergists: "Pectoralis Major, Tricpes Brachii, Serratus Anterior, Trapezius, Supraspinatus"}, 
		:equipment_type => %w[Barbell]
	},


	{ # SEATED DUMBBELL PRESSES
		:name 					=> "Triceps Brachii",
		:preparation 		=> "Sit on a bench, keeping the back straight, and hold dumbbells at shoulder level with an overhand grip (thumbs pointing inward).",
		:execution 			=> "Extend the arms vertically.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Trapezius, Serratus Anterior, Triceps Brachii"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # ARNOLD PRESSES
		:name 					=> "Arnold Presses",
		:preparation 		=> "Sit on a bench, keeping the back straight. With elbows bent and pointing forward, hold the dumbbells at shoulder level with an underhand grip (thumbs pointing away from each other).",
		:execution 			=> "Extend the arms vertically while rotating 180 degrees at the wrists, bringing them into an overhand grip (thumbs pointing toward each other).",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: "Pectoralis Major, Triceps Brachii, Trapezius, Serratus	Anterior"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # BENT-OVER LATERAL RAISES
		:name 					=> "Bent-Over Lateral Raises",
		:preparation 		=> "Stand with the legs slightly apart and knees slightly bent and lean forward at the waist while keeping the back straight. With arms hanging down, grasp the dumbbells with the elbows slightly bent.",
		:execution 			=> "Raise the arms to horizontal.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Posterior)", synergists: "Teres Minor, Infraspinatus, Trapezius"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # LATERAL DUMBBELL RAISES
		:name 					=> "Lateral Dumbbell Raises",
		:preparation 		=> "Stand with a straight back, with legs slightly apart, arms hanging next to the body, holding a barbell in each hand.",
		:execution 			=> "Raise the arms to horizontal with the elbows slightly bent.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Trapezius, Supraspinatus"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # ALTERNATE FRONT ARM RAISES
		:name 					=> "Alternate Front Arm Raises",
		:preparation 		=> "Stand with the feet slightly apart. Hold the barbells with an overhand grip as they rest against the front of the thighs or slightly to the side.",
		:execution 			=> "Alternate raising the arms to the front to eye level.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Pectoralis Major"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # SIDE-LYING LATERAL RAISES
		:name 					=> "Side-Lying Lateral Raises",
		:preparation 		=> "Lie on one side on the floor or on a bench holding a dumbbell with an overhand grip.",
		:execution 			=> "Raise the arm to vertical.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Supraspinatus", synergists: "Deltoid (Lateral)"}, 
		:equipment_type => %w[Dumbbell]
	},

	{ # LOW-PULLEY FRONT RAISES, OVERHAND GRIP
		:name 					=> "Low-Pulley Front Raises",
		:preparation 		=> "Stand with the feet slightly apart, arms next to the body. Grasp the handle with an overhand grip with one hand.",
		:execution 			=> "Raise the arm up to eye level.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: "Pectoralis Major, Biceps Brachii"}, 
		:equipment_type => %w[Cable]
	},

	{ # LOW-PULLEY FRONT RAISES, NEUTRAL GRIP
		:name 					=> "Low-Pulley Front Raises, Neutral Grip",
		:preparation 		=> "Stand with legs slightly apart and your arm by your side holding the handle with a neutral (semipronated) grip (this exercise is performed with a handle adapted for the neutral grip).",
		:execution 			=> "Raise your arm forward up to eye level.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: "Pectoralis Major"}, 
		:equipment_type => %w[Cable]
	},

	{ # HIGH-PULLEY LATERAL EXTENSIONS
		:name 					=> "High-Pulley Lateral Extensions",
		:preparation 		=> "Stand facing the pulleys with the arms extended to the front. Grip the handle with the left hand and the left handle with the right hand.",
		:execution 			=> "Extend the arms to the side and back.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Posterior)", synergists: "Infraspinatus, Teres Minor, Trapezius, Rhomboids"}, 
		:equipment_type => %w[Cable]
	},

	{ # EXTERNAL ARM ROTATIONS AT A PULLEY
		:name 					=> "External Arm Rotations at a Pulley",
		:preparation 		=> "Position the pulley at waist level and position your body in line with the apparatus. Grip the handle with your forearm in front of your body, your elbow bent, and your upper arm against your body.",
		:execution 			=> "Externally rotate your arm, trying to keep the upper arm against your body with the elbow bent",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: ""}, 
		:equipment_type => %w[Cable]
	},

	{ # LOW-PULLEY BENT-OVER LATERAL RAISES
		:name 					=> "Low-Pulley Bent-Over Lateral Raises",
		:preparation 		=> "Stand with the feet apart and legs slightly bent. Lean forward from the waist, keeping a flat back. Grip a handle in each hand with the cables crossed.",
		:execution 			=> "Inhale while raising arms to the sides until horizontal.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Posterior)", synergists: "Deltoid (Lateral), Infraspinatus, Teres Minor, Teres Major, Trapezius, Rhomboids"}, 
		:equipment_type => %w[Cable]
	},#pf'd

	{ # LOW-PULLEY LATERAL RAISES
		:name 					=> "Low-Pulley Lateral Raises",
		:preparation 		=> "Grasp the handle infront of the hips with one hand and with the arm alongside the body.",
		:execution 			=> "Inhale and raise arm to side until horizontal.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Deltoid (Anterior, Posterior)"}, 
		:equipment_type => %w[Cable]
	},#pf'd

	{ # ONE-DUMBBELL FRONT RAISES
		:name 					=> "One-Dumbbell Front Raises",
		:preparation 		=> "Stand with legs slightly apart, back straight and abdominal muscles contracted. Grasp a dumbbell with both hands (fingers crossing over eachother) and rest it against the thighs.",
		:execution 			=> "Inhale and raise the dumbbell with arms extended to horizontal. Lower gradually in a controlled manner.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: "Pectoralis Major, Biceps Brachii"}, 
		:equipment_type => %w[Dumbbell]
	},#pf'd

	{ # BARBELL FRONT RAISES
		:name 					=> "Barbell Front Raises",
		:preparation 		=> "Stand with legs slightly apart, back straight and abdominals contracted. Grasp barbell infront of hips with an overhand grip and hands shoulder-width apart.",
		:execution 			=> "Inhale and raise the barbell with arms extended until horizontal.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Anterior)", synergists: "Deltoid (Lateral, Posterior), Pectoralis Major"}, 
		:equipment_type => %w[Barbell]
	},#pf'd

	{ # UPRIGHT ROWS
		:name 					=> "Upright Rows",
		:preparation 		=> "Stand with legs slightly apart, back straight and abdominals contracted. Grasp barbell infront of hips with overhand grip and hands positioned slightly wider than shoulder-width.",
		:execution 			=> "Inhale and pull the barbell up along the front of the body to the chin while flaring the elbows out to the sides.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Deltoid (Anterior, Posterior), Trapezius, Biceps Brachii"}, 
		:equipment_type => %w[Barbell]
	},#pf'd

	{ # MACHINE LATERAL RAISES
		:name 					=> "Machine Lateral Raises",
		:preparation 		=> "Sit at a machine and grasp the handles.",
		:execution 			=> "Inhale and raise the elbows until horizontal.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Lateral)", synergists: "Supraspinatus,"}, 
		:equipment_type => %w[Lever]
	},#pf'd

	{ # PEC DECK REAR-DELTOID LATERALS
		:name 					=> "Pec Deck Rear-Delt Laterals",
		:preparation 		=> "Sit facing towards the machine, with torso against the back pad, arms extended out to the sides and gripping the handles.",
		:execution 			=> "Pull the handles back, squeezing the shoulder blades together at the culmination of the movement.",
		:category 			=> "Upper Body",
		:body_part 			=> %w[Shoulders],
		:muscle_groups 	=> {target: "Deltoid (Posterior)", synergists: "Infraspinatus, Teres Minor"}, 
		:equipment_type => %w[Lever]
	},#pf'd


# 	###############################################################################
# 	######################                     ####################################
# 	######################*** CHEST SECTION ***####################################
# 	######################                     #################################### 
#   ################################################################################

	{ # INCLINE BENCH PRESS
	 	:name 			    => "Incline Bench Press",
	 	:preparation 		=> "Sit on an incline bench angled at 45-60 degrees and grasp a barbell with an overhand grip wider than shoulder width.",
	 	:execution 			=> "Lower the barbell to the sternal notch. Raise the barbell by extending the arms.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Anterior Deltoid, Anconeus, Triceps Brachii"}, 
	 	:equipment_type => %w[Barbell]
	},#pf'd

	{ # BENCH PRESS
	 	:name 			    => "Bench Press",
	 	:preparation 		=> "Lie faceup on a horizontal bench, with buttocks and lower back flat on the bench and feet flat on the ground.",
	 	:execution 			=> "Grasp the barbell with an overhand grip wider than shoulder width. Lower the bar to the chest with a controlled movement. Raise by extending the arms.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Pectoralis Minor, Anterior Deltoid, Serratus Anterior, Coracobrachialis, Triceps Brachii."}, 
	 	:equipment_type => %w[Barbell]
	},#pf'd

	{ # CLOSE-GRIP BENCH PRESS
	 	:name 			    => "Close-Grip Bench Press",
	 	:preparation 		=> "Lie faceup on a horizontal bench with the buttocks and lower back flat on the bench and feet flat on the ground. Grasp the barbell with an overhand grip shoulder-width or narrower, depending on wrist flexibility.",
	 	:execution 			=> "Lower the bar in a controlled manner to the chest, with elbows out to the sides. Raise by extending the arms.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis major", synergists: "Anterior Deltoid, Triceps Brachii, Anconeus."}, 
	 	:equipment_type => %w[Barbell]
	},#pf'd

	{ # DECLINE BENCH PRESS
	 	:name 			    => "Decline Bench Press",
	 	:preparation 		=> "Lie faceup on a decline bench angled at 20-40 degrees and fix the feet to prevent sliding. Grasp the barbell with an overhand grip shoulder width or wider.",
	 	:execution 			=> "Lower the barbell to the sternal notch in a controlled movement. Raise by extending the arms.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Anterior Deltoid."}, 
	 	:equipment_type => %w[Barbell]
	},#pf'd

	{ # MACHINE BENCH PRESS
	 	:name 			    => "Machine Bench Press",
	 	:preparation 		=> "Lie on the machine with the gluteals and lower back in contact with the bench and feet flat on the floor.",
	 	:execution 			=> "Grip the handles. Press to raise.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Posterior Fascicles of the Deltoids, Anconeus."}, 
	 	:equipment_type => %w[Lever]
	},#pf'd

	{ # PARALLEL BAR DIPS
	 	:name 			    => "Parallel Bar Dips",
	 	:preparation 		=> "Grip the handles and position the upper body above the parallel bars with arms extended and legs suspended with a knee angle of 90 degrees for counterbalance.",
	 	:execution 			=> "Bend the elbows to the rear until upper arm's are horizontal. Return to initial position by extending the arms.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Anconeus, Anterior Deltoid."}, 
	 	:equipment_type => %w[Body\ Weight]
	},#pf'd

	{ # PUSH UPS
	 	:name 			    => "Push Ups",
	 	:preparation 		=> "Support yourself facedown on the ground, with arms extended and hands shoulder-width apart or wider, back straight and feet touching or slightly apart.",
	 	:execution 			=> "Bend the elbows out to the sides until upper arms are horizontal. Do not arch the low back. Push back up to complete arm extension.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Anterior Deltoid, Anconeus"}, 
	 	:equipment_type => %w[Body\ Weight]
	}, #pf'd

	{ # DUMBBELL PRESSES
	 	:name 			    => "Dumbbell Presses",
	 	:preparation 		=> "Lie faceup on a horizontal bench, with feet flat on the ground for stability and elbows bent. Grasp a dumbbell in each hand with an overhand grip at chest level.",
	 	:execution 			=> "Extend the arms vertically while rotating the forearms so that the palms face each other at the end of the movement. Return to initial position in a controlled manner.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Anterior Deltoid, Anconeus."}, 
	 	:equipment_type => %w[Dumbbell]
	}, #pf'd

	{ # DUMBBELL FLYS
	 	:name 			    => "Dumbbell Flys",
	 	:preparation 		=> "Lie on a narrow bench that won't interfere with the shoulder movement and hold a dumbbell in each hand with arms extended or slightly bent to relieve stress on the joint.",
	 	:execution 			=> "Open the arms to horizontal. Raise the arms to vertical. Perform a small isometric contraction at the end of the movement to emphasize the work on the sternal head of the pectoralis major.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "None"}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # INCLINE DUMBBELL PRESSES
	 	:name 			    => "Incline Dumbbell Presses",
	 	:preparation 		=> "Sit on a bench with an angle of no more than 60 degrees (to prevent too much work with the deltoid), with elbows bent. Grasp the dumbbells with an overhand grip.",
	 	:execution 			=> "Extend the arms vertically, bringing the dumbbells together.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Anterior Deltoid, Serratus Anterior, Pectoralis Minor, Triceps Brachii."}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # INCLINE DUMBBELL FLYS
	 	:name 			    => "Incline Dumbbell Flys",
	 	:preparation 		=> "Sit on a bench angled between 45 and 60 degrees, dumbbells in hand and arms extended vertically or slightly bent to ease stress when bringing the arms together.",
	 	:execution 			=> "Extend the arms to horizontal. Raise the arms to vertical.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "None"}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # PEC DECK FLYS
	 	:name 			    => "Pec Dec Flys",
	 	:preparation 		=> "Sit at the machine with the arms open and horizontal, bent at the elbows. Rest the forearms on the pads, with the forearms and wrists relaxed.",
	 	:execution 			=> "Squeeze the arms together.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Coracobrachialis, Biceps Brachii."}, 
	 	:equipment_type => %w[Machine]
	},
	
	{ # CABLE CROSSOVER FLYS
	 	:name 			    => "Cable Crossover Flys",
	 	:preparation 		=> "Stand with the legs slightly apart and lean the torso forward a bit, with the arms spread apart and elbows slightly bent.",
	 	:execution 			=> "Squeeze the arms together until the wrists touch. Return without jerking to the initial position and repeat.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Pectoralis Minor"}, 
	 	:equipment_type => %w[Machine]
	},

	{ # DUMBBELL PULLOVERS
	 	:name 			    => "Dumbbell Pullovers",
	 	:preparation 		=> "Lie on a bench with the feet on the ground and hold a dumbbell in the palms of both hands, with the thumbs surrounding the handle and arms extended.",
	 	:execution 			=> "Lower the dumbbell behind gthe head, bending slightly at the elbows. Return to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest Back],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Teres Majopr, Latissiumus Dorsi, Serratus Anterior, Rhomboids, Pectoralis Minor"}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # BARBELL PULLOVERS
	 	:name 			    => "Barbell Pullovers",
	 	:preparation 		=> "With arms extended, hold the barbell with an overhand grip and hands shouilder-width apart.",
	 	:execution 			=> "Lower the barbell behind the head while bending slightly at the elbows. Return to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Chest Back],
	 	:muscle_groups  => {target: "Pectoralis Major", synergists: "Triceps Brachii, Teres Major, Latissimus Dorsi, Serratus Anterior, Rhomboids, Pectoralis Minor."}, 
	 	:equipment_type => %w[Barbell]
	},



	###############################################################################
	######################                     ####################################
	######################*** BACK SECTION  ***####################################
	######################                     #################################### 
  ################################################################################

	{ # CHIN-UPS
	 	:name 			    => "Chin-Ups",
	 	:preparation 		=> "Hang from a fixed bar with a very wide overhand grip.",
	 	:execution 			=> "Pull the chest up to the level of bar. Return to the initial position with a controlled descent and begin again.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Rhomboids, Trapezius, Biceps Brachii, Brachioradialis"}, 
	 	:equipment_type => %w[Body\ Weight]
	},

	{ # REVERSE CHIN-UPS
	 	:name 			    => "Reverse Chin-Ups",
	 	:preparation 		=> "Hang from a bar with an underhand grip, hands shoulder-width apart.",
	 	:execution 			=> "Raise the chin to the bar. Return to the initial position with a controlled descent and begin again.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Biceps Brachii, Brachialis, Trapezius, Rhomboids, Pectorals."}, 
	 	:equipment_type => %w[Body\ Weight]
	},

	{ # BACK LAT PULL-DOWNS
	 	:name 			    => "Back Lat Pull-Downs",
	 	:preparation 		=> "Sit facing the machine with the thights positioned under the pads. Grasp the bar with a wide overhand grip.",
	 	:execution 			=> "Pull the bar down to the back of the neck, bringing the elbows alongside the body.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Biceps Brachii, Brachialis, Brachioradialis, Rhomboids, Trapezius."}, 
	 	:equipment_type => %w[Cable]
	},

	{ # CLOSE-GRIP LAT PULL-DOWNS
	 	:name 			    => "Close-Grip Lat Pull-Downs",
	 	:preparation 		=> "Sit and face the machine with knees positioned under the pads.",
	 	:execution 			=> "Bring the handle to the sternum while leaning slightly back with the torso.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Trapezius, Posterior Deltoid, Biceps Brachii, Brachialis, Brachioradialis."}, 
	 	:equipment_type => %w[Cable]
	},

	{ # SEATED ROWS
	 	:name 			    => "Seated Rows",
	 	:preparation 		=> "Sit facing the machine, feet resting on the foot pad and the torso bent forward.",
	 	:execution 			=> "Bring the handle to the base of the sternum by straightening the back and pulling the elbows back as far as possible. Return smoothly to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Posterior Deltoid, Biceps Brachii, Brachioradialis, Trapezius, Rhomboids, Erector Spinae."}, 
	 	:equipment_type => %w[Cable]
	},

	{ # WIDE-GRIP SEATED ROWS
	 	:name 			    => "Wide-Grip Seated Rows",
	 	:preparation 		=> "Sit facing the machine with your feet on the foot pads and your chest flexed. Grasp the bar with an overhand grip (thumbs to the inside) sider than shouilder-width apart.",
	 	:execution 			=> "Pull the bar to your chest, straightening the back and keeping your elbows raised. Return smoothly to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups 	=> {target: "Latissimus Dorsi", synergists: "Teres Major, Posterior Deltoid, Infraspinatus, Teres Minor, Biceps Brachii, Brachialils, Brachioradialis, Rhomboids, Trapezius, Erector Spinae."}, 
	 	:equipment_type => %w[Cable]
	},

	{ # STRAIGHT-ARM LAT PULL-DOWNS
	 	:name 			    => "Straight-Arm Lat Pull-Downs",
	 	:preparation 		=> "Stand and face the machine with feet slightly apart. Grip the bar with an overhand grip, arms extended and shoulder-width apart. Fix the back and contract the abdominal core.",
	 	:execution 			=> "Bring the bar to the thighs, keeping the arms extended (elbows can be slightly bent).",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Triceps Brachii."}, 
	 	:equipment_type => %w[Cable]
	},

	{ # ONE-ARM DUMBBELL ROWS
	 	:name 			    => "One-Arm Dumbbell Rows",
	 	:preparation 		=> "Grasp a dumbbell with the palm facing in; use the opposite hand and knee on the bench to support the back.",
	 	:execution 			=> "Lift the upper arm and elbow as high as possible next to the body with the elbow bent.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Posterior Deltoid, Trapezius, Rhomboids, Biceps Brachii, Brachialis, Brachioradialis."}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # DUMBBELL ROWS
	 	:name 			    => "Dumbbell Rows",
	 	:preparation 		=> "Stand with the legs slightly bent and the chest leaning forward at approximately a 45-degree angle. Keep your back very flat and hang your arms by your sides; hold a dumbbell in each hand with an overhand grip, palms facing inward.",
	 	:execution 			=> "Isometrically contract the abdominal core. Pull the dumbbells as high as possible, keeping the elbows close to the body. Squeeze the shoulder blades together at the end of the movement. Return to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissium Dorsi", synergists: "Teres Major, Posterior Deltoid, Biceps Brachii, Brachialis, Brachioradialis, Rhomboids, Trapezius, Erector Spinae, Infraspinatus, Teres Minor."}, 
	 	:equipment_type => %w[Dumbbell]
	},

	{ # BARBELL ROWS
	 	:name 			    => "Barbell Rows",
	 	:preparation 		=> "Stand with legs slightly bent and grasp the bar with an overhand grip with the hands wider than shoulder-width apart. With the back straight, lean forward at the waist 45 degrees, so that the bar is at knee level.",
	 	:execution 			=> "Isometrically contract the abdominal core and pull the barbell to the chest. Return to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissimus Dorsi", synergists: "Teres Major, Posterior Deltoid, Biceps Brachii, Brachialis, Brachioradialis, Rhomboids, Trapezius, Erector Spinae, Infraspinatus, Teres Minor."}, 
	 	:equipment_type => %w[Barbell]
	},

	{ # T-BAR ROWS
	 	:name 			    => "T-Bar Rows",
	 	:preparation 		=> "Straddle the bar with the legs slightly bent and lean forward at the waist about 45 degrees with a flat back. Grasp the bar with an overhand grip.",
	 	:execution 			=> "Raise the bar to the chest.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissium Dorsi", synergists: "Teres Major, Infraspinatus, Rhomboids, Trapezius, Erector Spinae, Posterior Deltoid, Teres Minor, Brachialis, Brachioradialis"}, 
	 	:equipment_type => %w[Lever]
	},

	{ # T-BAR ROWS WITH ABDOMINAL SUPPORT
	 	:name 			    => "T-Bar Rows with Abodominal Support",
	 	:preparation 		=> "Rest against the incline bench.",
	 	:execution 			=> "Bring the bar to the chest with an overhand grip.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups  => {target: "Latissium Dorsi", synergists: "Teres Major, Posterior Deltoid, Biceps Brachii, Brachialis, Infraspinatus, Trapezius, Rhomboids."}, 
	 	:equipment_type => %w[Lever]
	},

	{ # STIFF-LEGGED DEADLIFTS
	 	:name 			    => "Stiff-Legged Deadlifts",
	 	:preparation 		=> "Stand with the feet slightly apart, facing the bar as it rests on the ground.",
	 	:execution 			=> "Bend forward at the waist with the chest forward, back arched, and legs as straight as possible. Grasp the bar with an overhand grip. Keeping the arms relaxed, stand up straight by rotating the hips. Keep the abodominal muscles tight and a slight arch in the back for support. Bend forward and return to the initial position, but without returning the bar to the floor. To avoid injury, keep the back straight.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back Legs],
	 	:muscle_groups  => {target: "Erector Spinae", synergists: "Gluteus maximus, Biceps Femoris, Semimembranosus, Semitendinosus."}, 
	 	:equipment_type => %w[Barbell]
	},

	{ # SUMO DEADLIFTS
	 	:name 			    => "Sumo Deadlifts",
	 	:preparation 		=> "Stand facing the bar, with legs wider than shoulder-width apart and toes pointing out in line with the knees.",
	 	:execution 			=> "Bend the legs until the thighs are horizontal to the ground. Grasp the bar with an overhand grip about shoulder-width apart. If you are lifting heavy weights, use a reverse grip (grasp the bar with one overhand and one underhand grip) to keep the bar from rolling. Contract the core, slightly round the back, and extend the legs, bringing the torso vertical and pulling the shoulders back. Return the bar to the ground. Never round your back.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Legs Back],
	 	:muscle_groups  => {target: "Quadriceps", synergists: "Adductors, Trapezius, Pectineus, Gracillis, Gluteus Maximus"}, 
	 	:equipment_type => %w[Barbell]
	},

	{ # DEADLIFTS
	 	:name 			    => "Deadlifts",
	 	:preparation 		=> "Stand facing the barbell, legs slightly apart with the abdominal muscles contracted and the back slightly arched. Bend the knees until the thighs are almost parallel to the floor. This position will vary depending on your physical structure and the flexibility of your ankles. Take an overhand grip on the bar with your hands slightly more than shoulder-width apart. You can also use an over-under grip (one palm faces forward and the other faces back) to prevent the bar from rolling and to work with much heavier weight.",
	 	:execution 			=> "Contract the abdominal and low back muscles, and lift the bar by straightening your legs and allowing the bar to slide up the shins. When the bar reaches the knees, extend your torso while straightening your legs so you are standing erect with your arms straight down at your sides. Hold this straightened position for 2 seconds, then return the weight to the floor, making sure you do not hyperextend or arch your back. Throughout the exercises, keep your back straight.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups   	=> {target: "Lumbosacral muscle", synergists: "Trapezius, Gluteal Muscles, Quadriceps, Splenius Capitis, Levator Scapulae, External Oblique, Rectus Abdominis, Flexor Digitorum"}, 
	 	:equipment_type     => %w[Barbell]
	},

	{ # BACK EXTENSIONS
	 	:name 			    => "Back Extensions",
	 	:preparation 		=> "Lie facedown on a Roman chair and place the ankles under the roller pads. Because the axis of flexion passes through the coxo-femoral joints, the pubic bone should not rest on the support pad.",
	 	:execution 			=> "With the torso bent forward, extend the back to horizontal. Raise the head and continue into hyperextension by arching the lumbar spinae. This must be performed carefully to protect your low back.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups   	=> {target: "Paraspinal erectors of the spine", synergists: "Quadratus Lumborum, Gluteus Maximus, Hamstrings, Lumbrosacral Mass, Semitendinosus, Semimembranosus."}, 
	 	:equipment_type     => %w[Roman Chair]
	},

	{ # MACHINE BACK EXTENSIONS
	 	:name 			    => "Machine Back Extensions",
	 	:preparation 		=> "Sit at the machine, with the torso leaning forward and the pad of the machine at shoulder-blade (scapula) level.",
	 	:execution 			=> "Press back, straightening the torso as much as possible. Return slowly to the initial position.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups   	=> {target: "Erector muscles of the spine", synergists: "Lumbosacral"}, 
	 	:equipment_type     => %w[Machine]
	},

	{ # UPRIGHT ROWS
	 	:name 			    => "Upright Rows",
	 	:preparation 		=> "Stand with the legs slightly apart, keeping the back straight and grasping the barbell with an overhand grip. The grip should be hand width or slightly wider.",
	 	:execution 			=> "Pull the barbell up along the front of the body to the chin, raising the elbows as high as possible. Lower the barbell with a controlled movement.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups   	=> {target: "Trapezius", synergists: "Deltoids, Levator Scapulae, Biceps Brachii, Brachialis, Forearm, Abdominals, Gluteals, Lumbosacrals."}, 
	 	:equipment_type     => %w[Barbell]
	},

	{ # BARBELL SHRUGS
	 	:name 			    => "Barbell Shrugs",
	 	:preparation 		=> "Stand with the legs slightly apart and face the bar that is either on the ground or on a stand.",
	 	:execution 			=> "Grasp the bar with an overhand grip with the hands slightly wider than shoulder-width apart, or use a reverse grip if the weight is heavy. Shrug the shoulders while keeping the arms relaxed, back straight, and abdominal muscles contracted.",
	 	:category 			=> "Upper Body",
	 	:body_part 			=> %w[Back],
	 	:muscle_groups   	=> {target: "Trapezius", synergists: "Levator Scapulae."}, 
	 	:equipment_type     => %w[Barbell]
	},


	###############################################################################
	######################                     ####################################
	######################   BUTTOCKS SECTION  ####################################
	######################                     #################################### 
  ################################################################################

 	{ # BARBELL LUNGES
		:name 				=> "Barbell Lunges",
		:preparation 		=> "Stand with the legs slightly apart and the barbell ",
		:execution 			=> "",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: ""}, 
		:equipment_type 	=> %w[Barbell],
		:skill_level 		=> "Intermediate", 			
		:force 				=> "Push" 			
	},

	{ # DUMBBELL LUNGES
		:name 				=> "Dumbbell Lunges",
		:preparation 		=> "Stand with the legs slightly apart and hold a dumbbell in each hand.",
		:execution 			=> "Take a big step forward, keeping the torso as straight as possible. When the forward thigh reaches horizontal or slightly below, use tonic extension to treturn to initial position. ",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: "Quadriceps"}, 
		:equipment_type 	=> %w[Dumbbell],
		:skill_level 		=> "Beginner", 			
		:force 				=> "Push" 			
	},

	{ # CABLE BACK KICKS
		:name 				=> "Cable Back Kicks",
		:preparation 		=> "Stand on one leg facing the machine, the other leg attached to the ankle strap of the low pulley, and the pelvis tilted forward. Grasp the handle.",
		:execution 			=> "Extend the hip and pull the leg back.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: "Hamstrings"}, 
		:equipment_type 	=> %w[Cable],
		:skill_level 		=> "Intermediate", 			
		:force 				=> "Push" 			
	},

	{ # MACHINE HIP EXTENSIONS
		:name 				=> "Machine Hip Extensions",
		:preparation 		=> "Stand on one leg with the other slightly forward and position the pad against the calf halfway between the knee and ankle. Lean the torso forward slightly and grasp the handles.",
		:execution 			=> "Push the thigh back until the hip is hyperextended. Maintain the position with an isometric contraction for a couple of seconds. Return to initial position.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: "Hamstrings"}, 
		:equipment_type 	=> %w[Lever],
		:skill_level 		=> "Beginner", 			
		:force 				=> "Push" 			
	},

	{ # FLOOR HIP EXTENSIONS
		:name 				=> "Floor Hip Extensions",
		:preparation 		=> "Kneel on one leg and bring the other knee to the chest while leaning on the elbows or on the hands with the arms extended.",
		:execution 			=> "Extend the bent leg back with complete hip extension.",
		:category 			=> "Lower Body",
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: "Hamstrings"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			
		:force 				=> "Push" 			
	},

	{ # BRIDGING
		:name 				=> "Bridging",
		:preparation 		=> "Lie on the back with hands flat on the ground, arms alongside the body, and knees bent.",
		:execution 			=> "Lift the buttocks off the ground, pushing down through the feet. Maintain the position for a couple of seconds and lower the pelvis without touching the buttocks to the ground. Repeat.",
		:category 			=> "Lower Body", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Hamstrings", synergists: "Gluteus Maximus"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 				# Push or Pull
	},

	{ # CABLE HIP ABDUCTIONS
		:name 				=> "Cable Hip Abductions",
		:preparation 		=> "Stand on one leg with a pulley attached to the other ankle.",
		:execution 			=> "Raise the leg laterally as high as possible.",
		:category 			=> "Lower Body", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Medius", synergists: "Gluteus Minimus"}, 
		:equipment_type 	=> %w[Cable],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # STANDING MACHINE HIP ABUDCTIONS
		:name 				=> "Standing Machine Hip Abductions",
		:preparation 		=> "Stand on one leg at the machine and place the other leg against the pad below the knee.",
		:execution 			=> "Slowly raise the leg as high as possible. Return to initial position and repeat.",
		:category 			=> "Lower Body", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Medius", synergists: "Gluteus Minimus"}, 
		:equipment_type 	=> %w[Lever],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Push" 			# Push or Pull
	},

	{ # LYING HIP ABDUCTIONS
		:name 				=> "Lying Hip Abductions",
		:preparation 		=> "Lie on the side and support the head with the hand or rest the upper body on your elbow.",
		:execution 			=> "Raise the leg laterally no more than 70 degrees, keeping the knee straight.",
		:category 			=> "Lower Body", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Medius", synergists: "Gluteus Minimus"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Push" 			# Push or Pull
	},

	{ # SEATED MACHINE HIP ABDUCTIONS
		:name 				=> "Seated Machine Hip Abductions",
		:preparation 		=> "Sit at the machine",
		:execution 			=> "Spread the legs as wide as possible. Return to initial position with a controlled movement.",
		:category 			=> "Lower Body", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Buttocks],
		:muscle_groups 		=> {target: "Gluteus Maximus", synergists: ""}, 
		:equipment_type 	=> %w[Lever],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Push" 			# Push or Pull
	},


	################################################################################
	######################                     #####################################
	######################  ABDOMINALS SECTION  ####################################
	######################                     ##################################### 
    ################################################################################


	{ # CRUNCHES
		:name 				=> "Crunches",
		:preparation 		=> "Lie on the back with hands behind the head, thighs vertical, and knees bent.",
		:execution 			=> "Inhale and raise the shoulders off the ground, bringing the knees and head towards each other by crunching, which means rounding the back and rolling the spine up. Exhale and return to initial position.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "External Oblique, Tensor Fasciae Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # SIT-UPS
		:name 				=> "Sit-Ups",
		:preparation 		=> "Lie on the back with knees bent, feet flat on the ground, and hands behind the head.",
		:execution 			=> "Raise the torso by rounding the back. Exhale and return to initial position.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},


	{ # GYM-LADDER SIT-UPS
		:name 				=> "Gym-Ladder Sit-Ups",
		:preparation 		=> "Lie faceup on the ground and posiiton the feet between two bars in the ladder with the thighs vertical and hands behind the head.",
		:execution 			=> "Raise the torso as high as possible, rounding the spine.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},	



	{ # CALVES OVER BENCH SIT-UPS
		:name 				=> "Calves Over Bench Sit-Ups",
		:preparation 		=> "Lie on your back with your calves laying over a flat exercise bench. Place your hands behind your ears.",
		:execution 			=> "Lift your shoulders off the floor. Try to touch your knees with your head.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},


	{ # INCLINE BENCH SIT-UPS
		:name 				=> "Incline Bench Sit-Ups",
		:preparation 		=> "Sit on a bench with the feet positioned under the pads, hands behind the ears.",
		:execution 			=> "Lower the torso less than 20 degrees. Raise the torso while slightly rounding the back to better focus on the rectus abdominis. Exhale and repeat.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},


	{ # SUSPENDED BENCH SIT-UPS
		:name 				=> "Suspended Bench Sit-Ups",
		:preparation 		=> "Position the feet under the pads with the torso suspended in midair, hands behind the ears.",
		:execution 			=> "Raise the torso, trying to bring the head to the knees while rounding the spine.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Advanced", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},	

	{ # HIGH-PULLEY CRUNCHES
		:name 				=> "High-Pulley Crunches",
		:preparation 		=> "Kneel in front of the machine and hold the handle behind the neck.",
		:execution 			=> "Inhale, then exhale and roll the spine as you lower the strenum toward the pubis.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "External Oblique, Pyramidalis"}, 
		:equipment_type 	=> %w[Cable],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # MACHINE CRUNCHES
		:name 				=> "Machine Crunches",
		:preparation 		=> "Sit at the machine, grasp the handles, and position the feet under the pad.",
		:execution 			=> "Roll the spine, trying to bring the sternum to the pubis.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors, External Oblique, Tensor Fascia Latae, Rectus Femoris"}, 
		:equipment_type 	=> %w[Lever],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # INCLINE LEG RAISES
		:name 				=> "Incline Leg Raises",
		:preparation 		=> "Lie on an incline bench and grip the bars or handles.",
		:execution 			=> "Raise the legs to horizontal. Then raise the pelvis, rolling the spine up as if trying to bring the knees to the head.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Rectus Abdominis", synergists: "Hip Flexors"}, 
		:equipment_type 	=> %w[Body \Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # LEG RAISES 
		:name 				=> "Leg Raises",
		:preparation 		=> "Support the body by resting the elbows on the pads. Position the back against the back support.",
		:execution 			=> "Raise the knees to the chest, rounding the back in order to contract the abdominal core.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Iliopsoas", synergists: "External Oblique, Pyramidalis, Tensor Fasciae Latae, Rectus Femoris."}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # HANGING LEG RAISES 
		:name 				=> "Hanging Leg Raises",
		:preparation 		=> "Hang from a chin-up bar.",
		:execution 			=> "Inhale and raise the knees as high as possible by rolling up the spine and bringing the pubis toward the sternum.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "Hip Flexors", synergists: "Rectus Abdominis, External Oblique"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},
	
	{ # TRUNK ROTATIONS 
		:name 				=> "Trunk Rotations",
		:preparation 		=> "Stand with the legs apart. Hold a stick across the trapezius above the posterior deltoid, hands resting on the stick without pushing.",
		:execution 			=> "Rotate the torso to one side and to the other, keeping the pelvis fixed with isometric contraction of the gluteal muscles.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "External Obliques", synergists: "Internal Oblique, Rectus Abdominis, Quadratus Lumborum, Erector Spinae"}, 
		:equipment_type 	=> %w[Barbell],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # DUMBBELL SIDE BENDS
		:name 				=> "Dumbbell Side Bends",
		:preparation 		=> "Stand with the legs slightly apart and one hand behind the ear. Hold a dumbbell in the other hand.",
		:execution 			=> "Bend the torso to the side opposite to the dumbbell. Return to the inital position or further with passive flexion of the torso. Alternate sets, changing sides without resting.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "External Oblique", synergists: "Rectus Abdominis, Pyramidalis, Erector Spinae, Quadratus Lumborum"}, 
		:equipment_type 	=> %w[Dumbbell],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # ROMAN CHAIR SIDE BENDS
		:name 				=> "Roman Chair Side Bends",
		:preparation 		=> "Lie on your side with the hip on the bench, torso in the air, hands near the ears or on the chest, and feet positioned under the pads.",
		:execution 			=> "Raise the side of the body toward the ceiling",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "External Oblique", synergists: "Rectus Abdominis, Quadratus Lumborum"}, 
		:equipment_type 	=> %w[Body\ Weight],
		:skill_level 		=> "Intermediate", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	},

	{ # MACHINE TRUNK ROTATIONS
		:name 				=> "Machine Trunk Rotations",
		:preparation 		=> "Stand on the swivel plate and grasp the handle",
		:execution 			=> "Rotate the pelvis to one side then to the other, keeping the shoulders fixed. The knees should be slighly bent. Control the rotations.",
		:category 			=> "Torso", # Upper Body, Lower Body or Torso
		:body_part 			=> %w[Abdomen],
		:muscle_groups 		=> {target: "External and Internal Obliques", synergists: "Rectus Abdominis"}, 
		:equipment_type 	=> %w[Lever],
		:skill_level 		=> "Beginner", 			# Beginner, Intermediate or Advanced
		:force 				=> "Pull" 			# Push or Pull
	}

].each do |exercise|
	ExerciseDescription.create(
		name: exercise[:name], 
		preparation: exercise[:preparation], 
		execution: exercise[:execution], 
		category: exercise[:category],
		body_part: exercise[:body_part],
		muscle_groups: exercise[:muscle_groups],
		equipment_type: exercise[:equipment_type],
		skill_level: exercise[:skill_level],
		force: exercise[:force]
	)
end







###### SAMPLE STRUCTURE
	# { # 
	# 	:name 				=> "",
	# 	:preparation 		=> "",
	# 	:execution 			=> "",
	# 	:category 			=> "Torso", # Upper Body, Lower Body or Torso
	# 	:body_part 			=> %w[Abdomen],
	# 	:muscle_groups 		=> {target: "Rectus Abdominis", synergists: ""}, 
	# 	:equipment_type 	=> %w[],
	# 	:skill_level 		=> "", 			# Beginner, Intermediate or Advanced
	# 	:force 				=> "" 			# Push or Pull
	# },












