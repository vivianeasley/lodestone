var fLoaded = false;
var fBodyElement;

routie({
    '': function( ) {
      if ( fLoaded === false ) {
        APP.MainParentPart.initSelf( );
        fLoaded = true;
        
      } else {
        removeParts( );
      }
      
    },
    'hobbits': function( ) {
      if ( fLoaded === false ) {
        window.location.href = './';
        fLoaded = true;
      } else {
        removeParts( );
        if ( fBodyElement === undefined ) {
          fBodyElement = document.querySelector('.main-body-part');
        }
        
        APP.MainHobbitsBodyPart.initSelf( fBodyElement, undefined, undefined );
      }
      

    },
    'elves': function( ) {
      if ( fLoaded === false ) {
        window.location.href = './';
        fLoaded = true;
      } else {
        removeParts( );
        if ( fBodyElement === undefined ) {
          fBodyElement = document.querySelector('.main-body-part');
        }
        
        APP.MainElvesBodyPart.initSelf( fBodyElement, undefined, undefined );
      }

    },
});

function removeParts ( ) {
  fElement = document.querySelector('.main-body-wrapper');

  if ( fElement !== null && fElement !== undefined ) {
    fElement.remove( );
  }

}
