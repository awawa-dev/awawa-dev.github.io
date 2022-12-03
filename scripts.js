
	async function listDirectory(url, directory) {		
		const list = await fetch(url).then(res => res.json());
		const dir = list.tree.find(node => node.path === directory);
		if (dir) {
			const list = await fetch(dir.url).then(res => res.json());
			return list.tree.map(node => node.url);
		}
	}
	async function listFiles(url, extension, target) {		
		const list = await fetch(url).then(res => res.json());
		let htmlString = '<ul>';

		Object.keys(list.tree).forEach(key => {
			var package = list.tree[key].path;
			if (package.includes(extension))		
				htmlString += `<li><a href="https://awawa-dev.github.io/repo/others/${package}">${package}</a></li>`;			
		});

		htmlString += '</ul>';
		target.innerHTML = htmlString;
	}    
	listDirectory(`https://api.github.com/repos/awawa-dev/awawa-dev.github.io/git/trees/upload`,'repo').
	then(result => {
					listFiles(result, '.rpm', document.getElementById('RpmTarget')); 
					listFiles(result, '.pkg.tar.zst', document.getElementById('ArchTarget'));
	});
