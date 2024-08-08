import dirTree from 'directory-tree';

function toSidebarOption(directoryTree = []) {
    if (!Array.isArray(directoryTree)) return []
    const tree = directoryTree.sort((a, b) => {
        // 提取字符串中的数字部分，并将其转换为数字类型进行比较
        const a1 = hasNumber(a.name) ? parseInt(a.name.match(/\d+/)[0]) : -Infinity;
        const b1 = hasNumber(b.name) ? parseInt(b.name.match(/\d+/)[0]) : -Infinity;

        return a1 - b1;
    })

    return tree.map(v => {
        if (v.children !== undefined && v.type === 'directory') {
            return {
                text: v.name.split('、')[1] ?? v.name,
                collapsed: false,
                items: toSidebarOption(v.children),
            }
        } else {
            return {
                text: v.name.replace(".md", ""),
                link: v.path.split("docs")[1].replace(".md", ""),
            }
        }
    })
}

function hasNumber(str) {
    return /\d/.test(str);
}

function autoGetSidebarOptionBySrcDir(srcPath) {
    const srcDir = dirTree(srcPath, {
        extensions: /\.md$/,
        normalizePath: true,
        attributes: ["type"]
    })
    const list = toSidebarOption(srcDir.children)
    // console.log(list);
    return list

}

module.exports = autoGetSidebarOptionBySrcDir