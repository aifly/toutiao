const fs = require('fs')
const path = require('path')



const readDir = (entry) => {
	const dirInfo = fs.readdirSync(entry)
	dirInfo.forEach(dir =>{
		const location = path.join(entry,dir)

		
		fs.stat(location,(err,stat)=>{
			if (stat.isDirectory()){
				console.log(location)
				readDir(location)
			}else if(stat.isFile()){
				console.log(location)
			}
		})

		console.log(location)
	})
}


readDir(__dirname)