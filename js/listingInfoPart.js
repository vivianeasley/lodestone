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

