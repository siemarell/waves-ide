import React from 'react';
import { inject, observer } from 'mobx-react';
import { FILE_TYPE, FilesStore, IRideFile, TAB_TYPE, TabsStore, TFile } from '@stores';
import Scrollbar from '@src/new_components/Scrollbar';
import Menu, { MenuItem, SubMenu } from 'rc-menu';
import styles from './styles.less';
import DeleteConfirm from '@src/new_components/DeleteConfirm';

type IFileExplorerState = {
    editingFile: string
};

interface IInjectedProps {
    filesStore?: FilesStore
    tabsStore?: TabsStore
}


@inject('filesStore', 'tabsStore', 'uiStore')
@observer
class Explorer extends React.Component<IInjectedProps, IFileExplorerState> {
    state: IFileExplorerState = {
        editingFile: ''
    };

    private getFileIcon = (file: TFile) => {
        let icon = <div className="accountdoc-16-basic-600"/>;
        if (file.type === FILE_TYPE.RIDE) {
            switch (file.info.type) {
                case 'account':
                    icon = <div className="accountdoc-16-basic-600"/>;
                    break;
                case 'asset':
                    icon = <div className="assetdoc-diamond-16-basic-600"/>;
                    break;
                case 'dApp':
                    icon = <div className="dapps-16-basic-600"/>;
                    break;
            }
        } else if (file.type === FILE_TYPE.JAVA_SCRIPT) {
            icon = <div className="test-16-basic-600"/>;
        }
        return icon;
    };


    private handleOpen = (fileId: string) => () => this.props.tabsStore!.openFile(fileId);

    private handleRename = (key: string, name: string) => {
        this.props.filesStore!.renameFile(key, name);
    };

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target;
        input.setSelectionRange(0, input.value.length);
    };

    private handleEdit = (fileId: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        this.setState({editingFile: fileId});
    };

    private handleDelete = (fileId: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        this.props.filesStore!.deleteFile(fileId);
    };

    private handleEnter = (e: React.KeyboardEvent) => {
        if (e.key.toLowerCase() === 'enter') {
            e.preventDefault();
            this.setState({editingFile: ''});
        }
    };

    private getButtons = (key: string, name: string) => (
        <div className={styles.toolButtons}>
            <div className="edit-12-basic-600" onClick={this.handleEdit(key)}/>
            <DeleteConfirm align={{offset: [-34, 0]}} name={name} onDelete={this.handleDelete(key)}>
                <div className="delete-12-basic-600"/>
            </DeleteConfirm>
        </div>
    );

    private createMenuItemForFile = (file: TFile) => (
        <MenuItem key={file.id} onClick={this.handleOpen(file.id)}>
            {this.state.editingFile === file.id
                ? (<>
                    {this.getFileIcon(file)}
                    <input
                        onChange={(e) => {
                            this.handleRename(file.id, e.target.value);
                        }}
                        onBlur={() => this.setState({editingFile: ''})}
                        value={file.name}
                        readOnly={false}
                        onFocus={this.handleFocus}
                        autoFocus={true}
                        onKeyDown={(e) => this.handleEnter(e)}
                    />
                </>)
                : <>
                    {this.getFileIcon(file)}
                    <div className={styles.fileName}>{file.name}</div>
                    {!file.readonly && this.getButtons(file.id, file.name)}
                </>
            }

        </MenuItem>
    );

    private getFileMenu = (type: string, name: string, files: TFile[]) =>
        <SubMenu key={type} title={<span>{name}</span>}>
            {files.filter(file => file.type === type).map(file => this.createMenuItemForFile(file))}
        </SubMenu>;


    render() {
        const {
            filesStore,
            tabsStore,
        } = this.props;


        const files = filesStore!.files;
        const libraryContent = Object.entries(filesStore!.examples.categories)
            .map(([title, {files}]) => [title, files] as [string, IRideFile[]]);

        const activeTab = tabsStore!.activeTab;
        const selectedKeys = activeTab && activeTab.type === TAB_TYPE.EDITOR ? [activeTab.fileId] : [];
        return (
            <Scrollbar className={styles.root} suppressScrollX={true}>
                <div>
                    <Menu
                        mode="inline"
                        selectedKeys={selectedKeys}
                        defaultOpenKeys={[FILE_TYPE.RIDE]}
                    >
                        {this.getFileMenu(FILE_TYPE.RIDE, 'Your files', files)}

                        <SubMenu title={<span>Library</span>}>
                            {libraryContent.map(([title, files]) =>
                                <SubMenu key={'Samples' + title}
                                         title={<>
                                             <div className="folder-16-basic-600"/>
                                             {title}</>}
                                >
                                    {files.map((file: IRideFile) => this.createMenuItemForFile(file))}
                                </SubMenu>
                            )}
                        </SubMenu>

                        {this.getFileMenu(FILE_TYPE.JAVA_SCRIPT, 'Tests', files)}
                    </Menu>
                </div>
            </Scrollbar>
        );
    }
}

export default Explorer;
