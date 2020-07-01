const path = require('path');
function resolve (dir){
	path.resolve(__dirname,dir)
}
module.exports = {
	devServer:{
		open:true
	},
	
}