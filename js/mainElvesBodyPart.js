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

