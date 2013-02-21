this.$hyoo_storage= $jin_lazyProxy( function(){
    return $jin_orientDB( 'orientdb://admin:admin@localhost:2424/hyoo' )
} )