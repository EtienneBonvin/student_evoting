/**
* Grid_generator.
* Contains all the methods allowing to generate w2ui grids and display them in the division #div2.
* Be aware that a specific format as to be respected for the ballots given as arguments.
*/


/* This number will generate unique IDs for all grids. */
var id = 0;


/**
* Generates a grid for the results of an election.
* 
* @param Ballot[] results : an array representing the election results.
* Each object in the results array should have the following fields : 
* - Number recid : which should be unique for each object.
* - String sciper : the sciper of a participant of the election.
* - Number votes : the number of votes this participant get.
*
* @throw TypeError if results is not an array.
* @throw TypeError if at least one of the ballots does not respect the desired format.
*/
function generateResultGrid(results){
	/* Type check. */
	if(typeof result != 'object' || typeof result.length != 'number'){
		throw new TypeError('The given results is not an array.');
	}
	for(var i = 0; i < results.length; i++){
		var ballot = results[i];
		if(typeof ballot.recid != 'number' || typeof ballot.sciper != 'number' || typeof ballot.votes != 'number'){
			throw new TypeError('At least one of the ballots does not respect the desired format.');
		}
	}
	/* End type check. */

	$("#div2").append(paragraph("If the results does not appear in the grid, please click on its refresh button."));

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
}


/**
* Generate a grid to represent encrypted ballots.
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
	if(typeof result != 'object' || typeof result.length != 'number'){
		throw new TypeError('The given results is not an array.');
	}
	for(var i = 0; i < ballots.length; i++){
		var ballot = ballots[i];
		if(typeof ballot.user != 'number' || typeof ballot.alpha != 'string' || typeof ballot.beta != 'string'){
			throw new TypeError('At least one of the ballots does not respect the desired format.');
		}
	}
	/* End type check. */

	$("#div2").append(paragraph("If the results does not appear in the grid, please click on its refresh button."));

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
}
