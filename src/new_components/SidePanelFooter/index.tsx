import React from 'react';
import { inject, observer } from 'mobx-react';
import { FilesStore, FILE_TYPE } from '@stores';

import Menu, { MenuItem } from 'rc-menu';
import Dropdown from 'rc-dropdown';

import styles from './styles.less';


import icons from '../icons';

interface IInjectedProps {
    filesStore?: FilesStore
}

@inject('filesStore')
@observer
class SidePanelFooter extends React.Component<IInjectedProps> {
    private newEmptyFile = (type: FILE_TYPE) => this.props.filesStore!.createFile({type, content: ''}, true);

    private getMenu = () =>
        <Menu>
            <MenuItem onClick={this.newEmptyFile.bind(this, FILE_TYPE.RIDE)}>
                {icons.file} Ride file
            </MenuItem>

            <MenuItem onClick={this.newEmptyFile.bind(this, FILE_TYPE.JAVA_SCRIPT)}>
                {icons.file} Asset script
            </MenuItem>
        </Menu>;

    render() {
        return (
            <div className={styles.root}>
                <Dropdown
                    overlayClassName={styles.actionsBtn_dropdown}
                    overlay={this.getMenu()}
                >
                    <div className={styles.actionsBtn}>
                        {icons.plus}
                    </div>
                </Dropdown>
            </div>
        );
    }
}

export default SidePanelFooter;
