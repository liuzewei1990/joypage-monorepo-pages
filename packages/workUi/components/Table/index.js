const _Table = () => import(/* webpackChunkName: "work.ui" */ /* webpackPrefetch:true */ "./component.vue");

const Table = Object.assign(_Table, {
    install: (app) => {
        app.component("Table", _Table);
    }
});

export default Table;
