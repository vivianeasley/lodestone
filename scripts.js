var APP = { };

var hobbits = [
  {hobbitName:'Bilbo Baggins'},
  {hobbitName:'Filibert Bolger'},
  {hobbitName:'Fredegar Bolger'},
  {hobbitName:'Mrs. Bracegirdle'},
  {hobbitName:'Melilot Brandybuck'},
  {hobbitName:'Rosie Cotton'},
  {hobbitName:'Elanor Gamgee'},
  {hobbitName:'Frodo Gamgee'},
  {hobbitName:'Hamfast Gamgee'},
];

var elves = [
  {hobbitName:'Círdan'},
  {hobbitName:'Galdor'},
  {hobbitName:'Gil-galad'},
  {hobbitName:'Silinde'},
  {hobbitName:'Celeborn'},
  {hobbitName:'Haldir'},
  {hobbitName:'Nilfaleth'},
  {hobbitName:'Rúmil'},
  {hobbitName:'Figwit'},
];

APP.RenderModule = (function ( ) {

    var fListItem ;

    return {
      render:render,
      initSubParts:initSubParts,

    };

    function render ( partHTML, targetNode, events, subParts, listItem, callback ) {
      var empty ;
      fListItem = listItem;

      var tempNode       = document.createElement( 'div' );
      tempNode.innerHTML = partHTML;
      var newNode        = tempNode.firstChild;
      var childNodes     = newNode.childNodes.length;
      if ( events.length !== 0 ) {
        attachEvents( newNode, events );
      }

      targetNode.appendChild( newNode );

      if ( subParts.length !== 0 ) {
        empty = newNode.childNodes.length < 2;
        initSubParts( newNode, subParts, empty );
      }

      if ( callback !== undefined ) {
        callback( newNode );
      }

    }

    function attachEvents( node, events ) {
      var tempNodeTwo ;
      for (var i = 0; i < events.length; i++) {
        tempNodeTwo = node.querySelector( events[i].selector );
        tempNodeTwo.addEventListener(events[i].event, events[i].call, false );
      }
    }

    function initSubParts( node, subParts, empty ) {
      var tempNodeThree ;
      var topNode = [ ];

      if ( fListItem === true ) {
        topNode.push( node );

      }

      for (var i = 0; i < subParts.length; i++) {
        if ( empty === true ) {
          tempNodeThree = node;
        } else {
          tempNodeThree = node.querySelector( subParts[i].target );
        }

        if ( subParts[i].data.length > 1 ) {
          listSubParts( subParts[i] );
        } else {
          subParts[i].partPathInit( tempNodeThree, subParts[i].data, topNode );
        }

      }

      function listSubParts ( part ) {
        var num = 1;
        for (var j = 0; j < part.data.length; j++) {
          part.partPathInit( tempNodeThree, part.data[j], topNode, num );
          num++;
        }
      }

    }

})( );



APP.toolsModule = (function ( ) {

    return {
    };

})( );



APP.ListingInfoPart = (function ( ) {

    // public methods
    function initSelf ( appendTarget, data, topLevelNode ) {
      var fData = data;

      var self;

      var fHobbitName;
      var fBusinessImage;

      init( );

      return;

      // Initialize View and Configure
      function init ( ) {
        var listItem   = true;
        var targetNode = appendTarget;
        var partHTML   = HTML( );
        var events     = [  ];
        var subParts   = [  ];

        APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem, setSelf );

      }

      function setSelf ( selfNode ) {
        self = selfNode;
        cacheNodes( populateData );
      }

      function cacheNodes ( callback ) {
        fHobbitName  = self.querySelector(".main-card-name");

        if ( callback !== undefined ) {
          callback( );
        }

      }

      function populateData ( ) {
        fHobbitName.textContent = fData.hobbitName;
      }


      // html
      function HTML ( ) {
        return "<div class='main-card-listing-wrapper'>\
          <div class='main-card-name'></div>\
        </div>\
      ";
      }

    }

    return {
      initSelf:initSelf,

    };

})( );


APP.ListingParentPart = (function ( ) {

    // public methods
    function initSelf ( appendTarget, data, topLevelNode, num ) {
      var fData = data;

      init( );

      return;

      // Initialize View and Configure
      function init ( ) {
        var listItem   = true;
        var targetNode = appendTarget;
        var partHTML   = HTML( );
        var events     = [ ];
        var subParts   = [
          { partPathInit:APP.ListingInfoPart.initSelf, target:'.main-card-wrapper', data:fData, topSelfNode:topLevelNode },
        ];

        APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem );

      }


      // html
      function HTML ( ) {
        return "<div class='main-card-wrapper'>\
          </div>\
        ";
      }

    }

    return {
      initSelf:initSelf,

    };

})( );


APP.MainElvesBodyPart = (function ( ) {

    // public methods
    function initSelf ( appendTarget, data, topLevelNode ) {
      var fData = elves;
      var self;

      init( );

      return;

      // Initialize View and Configure
      function init ( ) {
        var listItem   = false;
        var targetNode = appendTarget;
        var partHTML   = HTML( );
        var events     = [ ];
        var subParts   = [
          { partPathInit:APP.ListingParentPart.initSelf, target:'.main-body-list-wrapper', data:fData, topSelfNode:topLevelNode },
        ];

        APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem, setSelf );

      }

      function setSelf( selfNode ) {
        self = selfNode;  
        

      }

      // html
      function HTML ( ) {
        return "<div class='main-body-wrapper'>\
          <div class='main-body-list-wrapper'></div>\
        </div>\
      ";
      }

    }

    return {
      initSelf:initSelf,

    };

})( );


APP.MainHeaderPart = (function ( ) {

    // public methods
    function initSelf ( appendTarget, data, topLevelNode ) {
      var fData = [ ];
      var self;

      init( );

      return;

      // Initialize View and Configure
      function init ( ) {
        var listItem   = false;
        var targetNode = appendTarget;
        var partHTML   = HTML( );
        var events     = [
          { event:'click', selector:".main-elves-button", call:elves },
          { event:'click', selector:".main-hobbits-button", call:hobbits },
        ];
        var subParts   = [ ];

        APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem, setSelf );

      }

      function setSelf ( newNode ) {
        self = newNode;

      }

      function elves ( ) {
        window.location.href = './#elves';
      }

      function hobbits ( ) {
        window.location.href = './#hobbits';
      }

      // html
      function HTML ( ) {
        return "<div class='main-header-wrapper'>\
            <div class='main-elves-button button shape-light'>\
              <div class='main-character-text'>Elves</div>\
            </div>\
            <div class='main-hobbits-button button shape-light'>\
              <div class='main-character-text'>Hobbits</div>\
            </div>\
      </div>\
      ";
      }

    }

    return {
      initSelf:initSelf,

    };

})( );


APP.MainHobbitsBodyPart = (function ( ) {

    // public methods
    function initSelf ( appendTarget, data, topLevelNode ) { 
      var fData = hobbits;
      var self;

      init( );

      return;

      // Initialize View and Configure
      function init ( ) {
        var listItem   = false;
        var targetNode = appendTarget;
        var partHTML   = HTML( );
        var events     = [ ];
        var subParts   = [
          { partPathInit:APP.ListingParentPart.initSelf, target:'.main-body-list-wrapper', data:fData, topSelfNode:topLevelNode },
        ];

        APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem, setSelf );

      }

      function setSelf( selfNode ) {
        self = selfNode;  
        

      }

      // html
      function HTML ( ) {
        return "<div class='main-body-wrapper'>\
          <div class='main-body-list-wrapper'></div>\
        </div>\
      ";
      }

    }

    return {
      initSelf:initSelf,

    };

})( );


APP.MainParentPart = (function ( ) {

  function initSelf ( ) {
    var fData = [ ];
    var self;

    init( );

    return ;

    function init ( ) {
      var listItem   = false;
      var topNode    = [ ];
      var targetNode = document.querySelector('#uber-part');
      var partHTML   = HTML( );
      var events     = [ ];
      var subParts   = [
        { partPathInit:APP.MainHeaderPart.initSelf, target:'.main-header-part', data:fData, topSelfNode:topNode },
      ];

      APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem );

    }

    function HTML ( ) {
      return "<div class='uber-part'>\
          <div class='main-header-part'>\
          </div>\
          <div class='main-body-part'>\
          </div>\
          </div>\
        </div>\
      ";
    }

  }

  return {
    initSelf:initSelf,

  };

})( );





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
