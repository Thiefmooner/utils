/**
 * 把扁平化数组转为树形结构
 * @param {Array} data
 * @return {Array} 
 * @desc 注意data的顶级节点，然后自行更改逻辑
 */

function arrToTree(data) {
    const newArr = []
    const map = {}
    data.forEach(ele => {
        // 如果ele没有子级，就创建[]
        if (!ele.children) {
            ele.children = []
        }
        // ele有子级，就把id和对象用map对应起来
        map[ele.id] = ele
    });
    data.forEach(ele => {
        // 如果ele是顶级节点，直接添加到根节点数组
        if (ele.pid === 0) {
            newArr.push(ele)
        }
        else {
            // 如果ele的父级存在，就把ele加到父级的children数组里
            if (map[ele.pid]) {
                map[ele.pid].children.push(ele)
            } else {
                // 如果ele的父级不存在（数据错误），可以选择抛出错误或忽略
                console.warn(`Parent node with id ${ele.pid} not found for node with id ${ele.id}`)
            }
        }
    })
    return newArr
}

/**TEST*/
// 注意这里的数据，顶级节点的pid是0
const data = [
    {
        id: 2,
        pid: 0,
        path: '/sdaghe',
        name: 'mwafga'
    },
    {
        id: 3,
        pid: 2,
        path: '/esagds',
        name: 'dfhr4'
    },
    {
        id: 4,
        pid: 3,
        path: '/vdsxge4ws',
        name: 'fsefgesg'
    },
    {
        id: 5,
        pid: 2,
        path: '/dsgdesytxdv',
        name: 'dsfe34es'
    },
    {
        id: 6,
        pid: 0,
        path: '/gdsghsedryhdv',
        name: 'yrer'
    },
    {
        id: 7,
        pid: 6,
        path: '/fdst6egs',
        name: 'fdsfsaew'
    },
    {
        id: 8,
        pid: 6,
        path: '/gdstyes6tgse',
        name: 'dsgdge'
    },
]
let a = arrToTree(data)
console.log(a)