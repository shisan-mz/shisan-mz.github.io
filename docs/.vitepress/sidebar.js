import dirTree from 'directory-tree';

function autoGetSidebarOptionBySrcDir(path) {
    const srcDir = dirTree(path, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    if (!Array.isArray(srcDir.children)) return []
    let items = []
    // const regex = /\.([^\.]+)\./; 
    srcDir.children.forEach( v => {
        items.push({
            text: v.name.replace(".md", ""),
            link: v.path.split("docs")[1].replace(".md", "")
        })
    })
    return items
}

module.exports = autoGetSidebarOptionBySrcDir