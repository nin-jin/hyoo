require( 'pms' ).$jin_persistent( function( ){
    $jin_build4web_all( 'doc' )
    $jin_build4web_all( 'hyoo' )
    $jin_build4node_dev( 'hyoo' ).load().$hyoo_start()
})
