include_file("functions.js");
const kPackageID="example.script";

function userFunction()
{
	this.interfaces =  [Host.Interfaces.IEditTask]

	this.prepareEdit = function (context)
	{
		return Host.Results.kResultOk;
	}

	// -----------------------------------------------------------------

	this.performEdit = function (context)
	{
		// get the track collection
		const Tracks = S1.getTracks();

		// open the message window
		S1.openWindow( "MessageWindow" );

		/* 	iterate the track collection  
			and print each track name to 
			to the message window  	*/
		for (const track of Tracks){
			
			// print track names to console
			print(track.name)
			
			// set all faders to -6.5
			if(track.channel)
			{
				
				track.channel.volume = S1.dbToFloat("-6.5")
			}
				

			// set input gains to +6.5
			if (track.channel.find('InputFX'))	
				track.channel.find('InputFX').findParameter('gain').value = 6.5;
		}

		return Host.Results.kResultOk;
	}
}

// ---------------------------------------------------------------------

// entry function
function createInstance()
{
	return new userFunction();
}