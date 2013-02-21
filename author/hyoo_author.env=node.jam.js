this.$hyoo_author=
$jin_resource( function( $hyoo_author, author ){
    
    author.resource_get= function( author, data ){
        return $jin_tree.parse('a @ b').toXMLString()
        
        //return $node.util.inspect( $hyoo_storage.exec([ 'select from jin_resource where hyoo_author_name=', author.uri.$.query.author ], {} ) )
        
        //var art= $hyoo_storage.save(
        //{   '@class': 'jin_route'
        //,   jin_route_uri: '?author=Nin+Jin'
        //,   jin_resource_time: new Date
        //})
        
        //var art= $hyoo_storage.save(
        //{   '@class': 'jin_route'
        //,   jin_route_uri: '?article=Привет,+мир!;author=Nin+Jin'
        //,   jin_resource_time: new Date
        //})
        
        //var art= $hyoo_storage.save(
        //{   '@class': 'hyoo_author'
        //,   hyoo_author_name: 'Привет, мир!'
        //,   hyoo_author_content: 'олала'
        //,   hyoo_author_author: '#11:1'
        //,   jin_resource_time: new Date
        //,   jin_resource_route: '#11:0'
        //})
        
        //var art= $hyoo_storage.save(
        //{   '@class': 'hyoo_author'
        //,   hyoo_author_name: 'Nin Jin'
        //,   hyoo_author_about: 'это я'
        //,   jin_resource_time: new Date
        //,   jin_resource_route: '#11:1'
        //,   jin_resource_articles: '#12:0'
        //})
        
        return art
    }
    
})
