import { UTableView as OTableView } from 'proto-ui.vusion';

export const UTableView = {
    name: 'u-table-view',
    extends: OTableView,
    props: {
        sortTrigger: { type: String, default: 'head' },
        showSizer: { type: Boolean, default: true },
    },
};

export default UTableView;
