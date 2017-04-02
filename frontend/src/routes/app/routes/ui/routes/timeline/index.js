module.exports = {
    path: 'timeline',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Timeline'))
        })
    }
}
