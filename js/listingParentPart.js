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

