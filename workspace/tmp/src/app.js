import './sub';
import './app.scss';


function init(callback){
    const hoge = 'hoge';
    callback(hoge);
}

init(function(param){
    console.log(param);
});
