/* Author:

*/





document.addEvent( 'domready', function () {
    var map_view = $( 'map_view' );
    log( map_view );
    if ( map_view ) {
        var map = {
            nodes: [
                ['sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['sea', 'sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['sea', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'sea', 'sea', 'sea', 'sea', 'sea', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass castle', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ],
                ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'sea', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass' ]
            ]
        }
        map.nodes.each( function ( row, x ) {
            var row_element = new Element( 'div.row' );
            map_view.adopt( row_element );
            row.each( function ( tile, y ) {
                new Element( 'div', {'class': tile + ' tile' } ).inject( row_element );
            } );
        } );
    }
} );

