module.exports = {
    path: 'app',
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/dashboard'),
                require('./routes/pageLayouts'),
                require('./routes/ui'),
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/MainApp'))
        })
    }
}
