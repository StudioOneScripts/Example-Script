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

		const WM = Host.Objects.WindowManager;
    	WM.openWindow("TagPalette");
		return;

		// get the track collection
		const Tracks = S1.getTracks();

		// open the message window
		S1.openWindow( "MessageWindow" );

		/* 	iterate the track collection  
			and print each track name to 
			to the message window  	*/
		for (const track of Tracks){
			
			// print track names to messge window
			print(track.name)
			
			// set faders to a value
			if(track.channel)
				S1.setFaderLevel(track.channel,"-4.0")
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