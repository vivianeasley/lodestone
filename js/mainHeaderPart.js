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

