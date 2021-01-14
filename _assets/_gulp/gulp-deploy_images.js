var gulp            = require('gulp');
var notify          = require("gulp-notify");
var htmlmin         = require('gulp-htmlmin');
var replace         = require('gulp-replace');
var inlinesource    = require('gulp-inline-source');
var stripDebug      = require('gulp-strip-debug');
var rename          = require('gulp-rename');
var moment          = require('moment');

var ghtmlSrc = require('gulp-html-src');

var zip           = require('gulp-zip');




function deploy(projectName){
    const splited = projectName.split("-")
    const msg = splited[3]
    const version = splited[4]
    const size = splited[5]
    const prov = splited[6]


    var entry = './dev/'+projectName+'/index.html';
    var stream =  gulp.src(entry)
        .pipe(replace("main.js", 'log-free.js'))
        .pipe(htmlmin({removeComments:true, collapseWhitespace:true, preserveLineBreaks:true}))
        .pipe(inlinesource({compress:true, svgAsImage:true}))
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(replace('data:image/svg+xml;utf8', 'data:image/svg+xml;charset=utf-8'))
        .pipe(replace('<script type="text/javascript" src="http://localhost:48626/takana.js"></script>', ''))
        .pipe(replace("takanaClient.run({host: 'localhost:48626'});", ''))
        .pipe(replace("../_common/images/"+size+"/", ''))
        .pipe(replace("../_common/images/prov/", ''))
        .pipe(replace("../_common/images/msg/", ''))
        


        
        
        
        .pipe(replace("<title>", '<title>Created: '+moment().format('MMM D, h:mm')))
        .pipe(gulp.dest('./docs/deploy/'+projectName));
        
        return stream;
}

function getImagePaths(projectName, cb){
    
    var images = []
    const imageStream = gulp.src('./dev/'+projectName+'/index.html')
        .pipe(
            ghtmlSrc({                 
                selector: 'img', 
                includeHtmlInOutput: false,
                getFileName:function(node){
                    var url = node.attr("src")
                    url = url.replace("../_common", "dev/_common")
                    cb(url)
                    // images.push(url)                    
                    return url;
                }
            })
        )
}


function log_free(projectName){  
    var images = []
    getImagePaths(projectName, function(url){
        images.push(url)
    })


    var stream = gulp.src('./dev/'+projectName+'/_bundled/main.js')
        // .pipe(stripDebug())
        .pipe(rename("log-free.js"))
        .pipe(gulp.dest(function(file){            
            return file.base;
        }))
    

        

    deploy(projectName).on("end", function(){
        console.log("_____________ 1");    
        for(var i=0;i<images.length;i++){
            console.log(images[i]);    
            gulp.src(images[i]).pipe(gulp.dest('./docs/deploy/'+projectName))
        }
        console.log("_____________ 2");    


        gulp.src('./docs/deploy/'+projectName+'/**',  { base : "./docs/deploy" })
            .pipe(zip(projectName+'.zip'))
            .pipe(gulp.dest('./docs/zips'));
        return;
    })

        
        
        
        
        

        return stream;   

       
}

module.exports = log_free;

