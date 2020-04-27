const ghpage = require('gh-pages');
ghpages.publis('build',{

    branch: 'master',
    message: 'auto commit',
    repo : "git@github.com:hellwombat/hellwombat-github.io.git",
    dest: "myapp"
   
},(error) => {
    console.log(error);

});
