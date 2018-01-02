/**
* Grid_generator.
* Contains all the methods allowing to generate w2ui grids and display them in the division #div2.
* Be aware that a specific format as to be respected for the ballots given as arguments.
*
* The grids are generated using the open source W2UI library : 
*	https://github.com/vitmalina/w2ui
*/


// This number will generate unique IDs for all grids.
var id = 0;


/**
* Generates a grid for the results of an election. 
* This grid contains the participants sorted with their number of votes which itself is displayed.
* 
* @param Ballot[] results : an array representing the election results.
* Each ballots in the results array should have the following fields : 
* - Number recid : which should be unique for each object.
* - String sciper : the sciper of a participant of the election.
* - Number votes : the number of votes this participant get.
*
* @throw TypeError if results is not an array.
* @throw TypeError if at least one of the ballots does not respect the desired format.
*/
function generateResultGrid(results){
	/* Type check. */
	if(typeof results != 'object' || typeof results.length != 'number'){
		throw new TypeError('The given results is not an array.');
	}
	for(var i = 0; i < results.length; i++){
		var ballot = results[i];
		if(typeof ballot.recid != 'number' || typeof ballot.sciper != 'number' || typeof ballot.votes != 'number'){
			throw new TypeError('At least one of the ballots does not respect the desired format.');
		}
	}
	/* End type check. */

	$("#div2").append(paragraph(""));
	$("#div2").append(createGrid("gridDiv")); 
		
	$('#gridDiv').w2grid({
		name: "Grid"+(id++),
		header: 'List of Ballots',
		show: {
		toolbar: true,
		footer: true
		},
		columns: [
		{ field: 'recid', caption: 'Place', size: '60px', sortable: true, attr: 'align=center' },
		{ field: 'sciper', caption: 'Sciper', size: '50%', sortable: true, resizable: true },
		{ field: 'votes', caption: 'Votes', size: '50%', sortable: true, resizable: true }
		],
		searches: [
		{ field: 'user', caption: 'Sciper', type: 'text' }
		],
		sortData: [{ field: 'recid', direction: 'ASC' }],
		records: results
	});

	$("#div2").append(paragraph("If the results do not appear in the grid, please click on its refresh button."));
}


/**
* Generate a grid to represent encrypted ballots.
* The grid display for each ballots the sciper number of the voter along with
* the ElGamal encryption pair of the ballot.
*
* @param Ballot[] ballots : the ballots to display.
* The ballots should have the following fields :
* - Number user : the sciper of a participant of the election.
* - String alpha : the alpha field of the ElGamal encryption of the ballot.
* - String beta : the beta field of the ElGamal encryption of the ballot.
*
* @throw TypeError if results is not an array.
* @throw TypeError if one of the ballots does not respect the desired format.
*/
function generateEncryptedBallotsGrid(ballots){
	/* Type check. */
	if(typeof ballots != 'object' || typeof ballots.length != 'number'){
		throw new TypeError('The given ballots is not an array.');
	}
	for(var i = 0; i < ballots.length; i++){
		var ballot = ballots[i];
		if(typeof ballot.user != 'number' || typeof ballot.alpha != 'string' || typeof ballot.beta != 'string'){
			throw new TypeError('At least one of the ballots does not respect the desired format.');
		}
	}
	/* End type check. */

	$("#div2").append(paragraph(""));
	$("#div2").append(createGrid("gridDiv")); 
		
	$('#gridDiv').w2grid({
		name: "Grid"+(id++),
		header: 'List of Ballots',
		show: {
		toolbar: true,
		footer: true
		},
		columns: [
		{ field: 'user', caption: 'Sciper', size: '60px', sortable: true, attr: 'align=center' },
		{ field: 'alpha', caption: 'Alpha', size: '50%', sortable: true, resizable: true },
		{ field: 'beta', caption: 'Beta', size: '50%', sortable: true, resizable: true }
		],
		searches: [
		{ field: 'user', caption: 'Sciper', type: 'text' }
		],
		sortData: [{ field: 'user', direction: 'ASC' }],
		records: ballots
	});

	$("#div2").append(paragraph("If the ballots do not appear in the grid, please click on its refresh button."));
}


/**
* Generate a grid to represent shuffled ballots.
* The grid display the shuffled ballots without the sciper of the voter which is
* expected considering that the shuffle is made to lose the trace of the original 
* ballot.
*
* @param Ballot[] ballots : the ballots to display.
* The ballots should have the following fields :
* - String alpha : the alpha field of the ElGamal encryption of the ballot.
* - String beta : the beta field of the ElGamal encryption of the ballot.
*
* @throw TypeError if results is not an array.
* @throw TypeError if one of the ballots does not respect the desired format.
*/
function generateShuffledBallotsGrid(ballots){
	/* Type check. */
	if(typeof ballots != 'object' || typeof ballots.length != 'number'){
		throw new TypeError('The given ballots is not an array.');
	}
	for(var i = 0; i < ballots.length; i++){
		var ballot = ballots[i];
		if(typeof ballot.alpha != 'string' || typeof ballot.beta != 'string'){
			throw new TypeError('At least one of the ballots does not respect the desired format.');
		}
	}
	/* End type check. */

	$("#div2").append(paragraph(""));
	$("#div2").append(createGrid("gridDiv")); 
		
	$('#gridDiv').w2grid({
		name: "Grid"+(id++),
		header: 'List of Ballots',
		show: {
		toolbar: true,
		footer: true
		},
		columns: [
		{ field: 'alpha', caption: 'Alpha', size: '50%', sortable: true, resizable: true },
		{ field: 'beta', caption: 'Beta', size: '50%', sortable: true, resizable: true }
		],
		records: ballots
	});

	$("#div2").append(paragraph("If the ballots do not appear in the grid, please click on its refresh button."));
}
