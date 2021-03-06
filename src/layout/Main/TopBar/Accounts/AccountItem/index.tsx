import React from 'react';
import { observer } from 'mobx-react';
import { IAccount } from '@stores';
import Avatar from '@components/Avatar';
import styles from './styles.less';
import DeleteConfirm from '@src/components/DeleteConfirm';
import Checkbox from '@components/Checkbox';

interface IInjectedProps {
    account: IAccount,
    isActive: boolean,
    onDelete: () => void,
    onSelect: () => void
}

interface IAccountItemState {
    isEdit: boolean
}

@observer
export default class AccountItem extends React.Component<IInjectedProps, IAccountItemState> {
    state = {isEdit: false};

    private handleFocus = (e: React.FocusEvent<HTMLInputElement>) => e.target.select();

    private handleEnter = (e: React.KeyboardEvent) => {
        if (e.key.toLowerCase() === 'enter') {
            e.preventDefault();
            this.setState({isEdit: false});
        }
    };

    private handleOpenRename = () => {
        this.setState({isEdit: true});
    };

    private handleCloseRename = () => this.setState({isEdit: false});

    private handleRename = (e: React.ChangeEvent<HTMLInputElement>) => this.props.account.label = e.target.value;

    render() {
        const {onDelete, account, isActive, onSelect} = this.props;
        const {isEdit} = this.state;

        return <div className={styles.root}>
            <Checkbox onSelect={onSelect} selected={isActive}/>
            <Avatar size={24} className={styles.avatar} address={account.address}/>
            {isEdit ? (<input
                    className={styles.labelEditor}
                    onChange={this.handleRename}
                    onBlur={this.handleCloseRename}
                    onFocus={this.handleFocus}
                    onKeyDown={this.handleEnter}
                    value={account.label}
                    autoFocus={true}
                />
            ) : (
                <>
                    <div className={styles.itemName}>{account.label}</div>
                    <div className={styles.toolButtons}>
                        <div className={styles.editIcn} onClick={this.handleOpenRename}/>
                        <DeleteConfirm
                            type="account"
                            align={{offset: [-39, 0]}}
                            owner={'accounts'}
                            name={account.label}
                            onDelete={onDelete}
                        >
                            <div className={styles.deleteIcn} />
                        </DeleteConfirm>

                    </div>
                </>)
            }
        </div>;
    }
}
