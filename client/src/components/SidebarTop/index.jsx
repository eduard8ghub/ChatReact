import React, {useEffect, useState} from 'react';

import './SidebarTop.sass';
import {FormOutlined, UserSwitchOutlined} from "@ant-design/icons";
import {Popup, AlertMessage } from "../../components";
import {Button, Form, Input} from "antd";
import Upload from "antd/es/upload";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import {useHttp} from "../../hooks/http.hook";

const SidebarTop = () => {
    const [alertMessage, setAlertMessage] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const {request, loading} = useHttp();

    const onOpenPopup = () => {
        setShowPopup(true);
    };

    const onHidePopup = () => {
        setShowPopup(false);
    };

    const onFinish = async value => {
        console.log(this);

        try {
            const userId = JSON.parse(localStorage.getItem('useData')).userId;
            const data = await request('/api/chat/new', 'POST', {...value, userId});
            setAlertMessage({status: 'green', message: data.message});
        } catch (e) {
            setAlertMessage({status: 'red', message: e.message});
        }
    };

    return (
        <div className="sidebar__top">
            <span className="sidebar__top__icon"><UserSwitchOutlined /></span>
            <p>Список диалогов</p>
            <span className="sidebar__icon" onClick={onOpenPopup}><FormOutlined /></span>
            <Popup showPopup={showPopup} onClosePopup={onHidePopup}>
                <Form
                    name="new_chat"
                    // initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                        label="Название чата"
                        className="new_chat__input"
                        rules={[
                            {required: true, message: 'Please input title chat!'},
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Title" size='large' id="success" onChange={()=>setAlertMessage(null)}/>
                    </Form.Item>
                    {
                        loading && <Button type="primary" size="small" loading>Loading</Button>
                    }

                    <Upload className="wrapper-upload">
                        <Button>
                            <UploadOutlined /> Загрузить фото
                        </Button>
                    </Upload>

                    { alertMessage && <AlertMessage status={alertMessage.status} message={alertMessage.message}/> }
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="add-new-chat">
                            Добавить чат
                        </Button>
                        <Button type="primary" danger onClick={onHidePopup}>
                            Отмена
                        </Button>
                    </Form.Item>
                </Form>
            </Popup>
        </div>
    );
};

export default SidebarTop;