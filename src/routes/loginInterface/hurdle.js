import React from 'react';
import { List, InputItem, Icon, Toast, Checkbox, Modal,WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import id from '../../assets/id.png';
import pd from '../../assets/pd.png';
import Styles from './index.less';
const CheckboxItem = Checkbox.CheckboxItem;

@connect(({ todo }) => ({ todo }))
class hurdle extends React.Component {

    componentDidMount() {
        if (window.platform) { // 只在 ReactNative 中使用
            this.props.screenProps.stackNavigation.setParams({
                title: 'Todos', drawerNavigation: this.props.navigation,
            });
        }
    }

    onSave = () => {
        const { form, dispatch } = this.props;
        form.validateFields({ first: false }, async (error, value) => {
            if (error) Toast.fail(firstError(error), 1);
            else {
                await dispatch({
                    type: 'todo/add',
                    text: value.task,
                });
                form.resetFields(['task']);
            }
        });
    };

    onComplete = async (id) => {
        await this.props.dispatch({
            type: 'todo/check', id,
        });
    };

    onDelete = (id) => {
        Modal.alert('Delete', 'Are you sure?', [
            { text: 'Cancel' },
            { text: 'OK',
                onPress: () => {
                    this.props.dispatch({
                        type: 'todo/del', id,
                    });
                    Toast.success('Deleted!', 1);
                } },
        ]);
    };

    render() {
        const { todo, form } = this.props;
        const { getFieldProps } = form;
        return (
            <WingBlank>
                <List>
                <InputItem
                    {...getFieldProps('Identification')}
                    placeholder="请输入账号"
                    clear
                >
                    <div style={{ backgroundImage: 'url('+id+')', backgroundSize: 'cover', height: '28px', width: '22px' }} />
                </InputItem>
                <InputItem
                    {...getFieldProps('Password')}
                    type="password"
                    placeholder="请输入密码"
                    clear
                >
                    <div style={{ backgroundImage: 'url('+pd+')', backgroundSize: 'cover', height: '28px', width: '22px' }} />
                </InputItem>
            </List>
            </WingBlank>
        );
    }

}

export default createForm()(hurdle);
