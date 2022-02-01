function isOutdated(date) {
    if (Date.now() - date > 5 * 60 * 1000) {
        return true
    }
    return false
}

export default isOutdated
