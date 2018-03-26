$(document).ready(function() {

	// on submit button click
	$('#submit-btn').on('click', function(event) {
		
		// prevent default submit behaviour
		event.preventDefault();

		// set function name to reset field
		function resetField() {
			// reset field for #city-type to original placeholder text
			$('#city-type').val('Enter a city name...');
		}

		// get city-type value
		var city = $('#city-type').val().toLowerCase();


			// if city === austin
			if (city === 'austin' || city === 'atx') {
					// reset field on submit
					resetField()
					// add attributes from .austin to body
    				$('body').attr('class', 'austin')
			}

			// else if city === los angeles
			else if (city === 'los angeles' || city === 'losangeles' || city === 'la' || city === 'lax') {
					// reset field on submit
					resetField()
					// add attributes from .la to body
    				$('body').attr('class', 'la')
			}

			// else if city === new york city
			else if (city === 'new york city' || city === 'newyorkcity' || city === 'newyork city' || city === 'new york' || city === 'newyork' || city === 'nyc' || city === 'ny' || city === 'n y') {
					// reset field on submit
					resetField()
					// add attributes from .nyc to body
    				$('body').attr('class', 'nyc')
			}

			// else if city === san francisco
			else if (city === 'san francisco' || city === 'sanfrancisco' || city === 'san fran' || city === 'sanfran' || city === 'sf' || city === 'bay area' || city === 'bayarea') {
					// reset field on submit
					resetField()
					// add attributes from .sf to body
    				$('body').attr('class', 'sf')
			}

			// else if city === sydney
			else if (city === 'sydney' || city === 'syd') {
					// reset field on submit
					resetField()
					// add attributes from .sydney to body
    				$('body').attr('class', 'sydney')
			}

			// else, send random spell-check message to user
			else {

				// define random messages
				var randomMessage = [
			   		{
			   		  random: 'Whoops! Check yo spelling bro...'
			   		},
			   		{
			   		  random: 'Is that even a place?...'
			   		},
			   		{
			   		  random: 'Where?!...'
			   		},
			   		{
			   		  random: 'Read a map dude...'
			   		},
			   		{
			   		  random: 'Is that the capital of Uranus?...'
			   		},
			   		{
			   		  random: 'Nope...'
			   		},
			 	];

				// create random number 0–6
  				var index = Math.floor(Math.random() * randomMessage.length);
				
  				// access array item using random index
  				var message = randomMessage[index];

  				// apply random message to #city-type placeholder
				$('#city-type').attr('placeholder', '' + message.random + '').val('');

			}


		

	});	
		
});