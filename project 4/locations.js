	//determines what loaction you are at.
	var currentlocation = 4  
	
	//room toggle scores 
	var room0score = 0;
	var room1score = 0;
	var room2score = 0;
	var room3score = 0;
	var room4score = 0;
	var room5score = 0;
	var room6score = 0;
	var room7score = 0;
	var room8score = 0;
	var room9score = 0;			

	//the total score from the toggles
	var score = 0;

	//list of the items
	var item_ladle = false
	var item_card = false
	var item_lockbox = false


	function btn_north_click() {

			switch (currentlocation) {
				case 9:currentlocation = 8;
					room8();
					updatetext(msg);
					break;
				case 8:currentlocation = 4;
					room4();
					updatetext(msg);
					break;
				case 4:currentlocation = 1;
					room1();
					updatetext(msg);
					break;
				case 1:currentlocation = 0;
					room0();
					updatetext(msg);
					break;
				case 0: //Furthest you can go
					room0();
					updatetext("You cannot go any further North.");
					break;
				}
			}

	function btn_east_click() {

			switch (currentlocation) {
				case 2:currentlocation = 3;
					room3();
					updatetext(msg);
					break;
				case 3:currentlocation = 4;
					room4();
					updatetext(msg);
					break;
				case 4:currentlocation = 5;
					room5();
					updatetext(msg);
					break;
				case 5:currentlocation = 6;
					room6();
					updatetext(msg);
					break;
				case 6:currentlocation = 7
					room7();
					updatetext(msg);
					break;
				case 7: //furthest you can go
					room7();
					updatetext("You cannot go any further East.");
					break;
				}
			}

	function btn_south_click() {

			switch (currentlocation) {
				case 0:currentlocation = 1;
					room1();
					updatetext(msg);
					break;
				case 1:currentlocation = 4;
					room4();
					updatetext(msg);
					break;
				case 4:currentlocation = 8;
					room8();
					updatetext(msg);
					break;
				case 8:currentlocation = 9;
					room9();
					updatetext(msg);
					break;
				case 9: //Furthest you can go
					room9();
					updatetext("You cannot go any further South.");
					break;
				}
			}

	function btn_west_click() {

			switch (currentlocation) {
				case 7:currentlocation = 6;
					room6();
					updatetext(msg);
					break;
				case 6:currentlocation = 5;
					room5();
					updatetext(msg);
					break;
				case 5:currentlocation = 4;
					room4();
					updatetext(msg);
					break;
				case 4:currentlocation = 3;
					room3();
					updatetext(msg);
					break;
				case 3:currentlocation = 2
					room2();
					updatetext(msg);
					break;
				case 2: //furthest you can go
					room2();
					updatetext("You cannot go any further West.");
					break;
				}
			}

	



	function room0() {
		msg = "You find yourself in what looks like to be a sauna there is not much in here except a pile of coals and a wooden ladle in a bucket" ;

		if (room0score === 0) {
			room0score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function room1() {
		msg = "There is a strong light when you open the door.  Your eyes slowly adjust to the light.  There is a single sink, toilet and a modern looking white cabinet.  There also is a door to the North that is ajar.  You have the urge to wash your hands, but you are way to busy with more pressing concerns.";
		
		if (room1score === 0) {
			room1score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function room2() {
		msg = "You walk into a room with tinted glass walls on all sides.  There are empty shelves on the floor and a metal door across the room that is locked." ;
	
		if (room2score === 0) {
			room2score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function room3() {
		msg = "You open the Western door, and it leads you into a single beige hallway with a door to the west.  You feel like you could die from the blandness of this hallway and want to leave quickly";
		
		if (room3score === 0) {
			room3score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function room4() {
		msg = "You awake in a dim lit room with a single panel on the wall with a small sticker on it. One door leading In each direction.  Lastly a logo on the wall that reads Aperture Science.  The Northern door is labeled Bathroom.  The Eastern door is labeled Storage.  The Southern door is labeled Bedroom.  The Western door is Labeled Testing Facility." ;
		
		if (room4score === 0) {
			room4score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function room5() {
		msg = "The door to the storage room opens with a loud creak.  You should find some WD40 for that...  The room contains a small stack of boxes, a breaker box, and a mirror with some harsh stains.  There looks to be another door to the East beyond the boxes.";

		if (room5score === 0) {
			room5score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function room6() {
		msg = "You open the door to see what looks like to be a mess hall.  There are a few tables in the center of the room.  To the north there is a door that is barred shut.  To the East there is what looks like to be the kitchen." ;
		
		if (room6score === 0) {
			room6score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="visible";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function room7() {
		msg = "You walk into the kitchen, it looks like the entire place was ransacked.  Nothing was left except one of the stoves has a pot boiling that contains a green tinted liquid.  It looks extremely hot, but you notice a small glint at the bottom of the pot.  It is clearly to hot to put your hand in.  You reach for the knobs on the stove, but they were all torn off.";
		
		if (room7score === 0) {
			room7score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="hidden";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="visible";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	function room8() {
		msg = "The door to the bedroom was already open.  Upon entering you see a weird looking bed, a metal lock box, and a chest of drawers.  There is a closet in the south end of the room  After looking around you feel like taking a nap, but you don't due to the lack of a pillow, warm milk, and blankets."; 
		
		if (room8score === 0) {
			room8score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="visible";
	}

	function room9() {
		msg = "As you enter the closet there is a small stack of coffee mugs and what looks like a portable radio and a single shelf with a card on it.";
		
		if (room9score === 0) {
			room9score++;
			score = (score + 5)
			}
		
		document.getElementById("idNorth").style.visibility="visible";
    	document.getElementById("idEast").style.visibility="hidden";
    	document.getElementById("idWest").style.visibility="hidden";
    	document.getElementById("idSouth").style.visibility="hidden";
	}

	
	
		
	function btn_score_click() {
		alert("You have " + score + " points.");
			}						
					

	function updatetext(directionmsg) {
		directionmsg = directionmsg + "[ " + currentlocation + " ]"
		var textadd = document.getElementById("textarea1");
		textadd.value = directionmsg + "\n" + textadd.value;
	}
		
	function btn_enter_click() {
		var userinput = document.getElementById("txtcommand");


	// TODO add new items here and declare the room its in 
	function take_item() {

		switch (currentlocation) {
			case 0:
				if (item_ladle === false) {
					item_ladle = true;
					updatetext ("Your inventory now contains the Ladle")
					} else {}
					break;
			case 9:
				if (item_card === false) {
					item_card = true;
					updatetext ("Your inventory now contains the card")
					} else {}
					break;
			case 8:
				if (item_lockbox === false) {
					item_lockbox = true;
					updatetext ("Your inventory now contains the lockbox")
					} else {}
					break;
			}
		}

	function inventory_check() {

			if (item_ladle === true) {
				updatetext("You have the Ladle in your inventory");
				} else {}
			if (item_card === true) {
				updatetext("You have the Card in your inventory");
				} else {}
			if (item_lockbox === true) {
				updatetext("You have the Lockbox in your inventory");
				} else {}
			if (item_ladle === false && item_card === false && item_lockbox === false) {
				updatetext ("Nothing is in your inventory.")
				}
			}

	function help_user(){
 		updatetext("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\".  Anything else will not work.  You should find something to get to the bottom of the pot.");
  		}
		
		switch (userinput.value) {
			//direction inputs
			case "N":
	        	btn_north_click();          
	        break;     
	        case "n":
	        	btn_north_click();          
	        break;     
	        case "E":
	        	btn_east_click();          
	        break;  
	        case "e":
	       		btn_east_click();          
			break;  
			case "S":
				btn_south_click();          
			break;  
			case "s":
				btn_south_click();          
			break;  
			case "W":
				btn_west_click();          
			break;  
			case "w":
				btn_west_click();          
			break;  

			//take commant
			case "Take":
				take_item();
			break;
			case "take":
				take_item();
			break;

			//help command
			case "Help":
				help_user();
			break;
			case "help":
				help_user();
			break;

			//inventory checker
			case "Inventory":
				inventory_check();
			break;
			case "inventory":
				inventory_check();
			break;

			default:
         	   updatetext ("Valid commands are \"n\", \"e\", \"s\", \"w\", \"take\", \"help\", and \"inventory\". ");                   
      		}
      	}			
