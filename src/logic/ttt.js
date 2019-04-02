const checkDiskSpace = require('check-disk-space')

// On Windows
checkDiskSpace('C:').then((diskSpace) => {
    console.log(diskSpace.size)
})