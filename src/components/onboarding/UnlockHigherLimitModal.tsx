'use client';

import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Modal, Row, Slider, Space, Typography } from 'antd';
import { useState } from 'react';

const { Text, Title } = Typography;
type UnlockHigherLimitProps = {
  showModal: boolean;
  setShowUnlockModal: (value: boolean) => void;
};

const UnlockHigherLimitModal = ({
  showModal,
  setShowUnlockModal,
}: UnlockHigherLimitProps) => {
  const [requestedLimit, setRequestedLimit] = useState(10000);
  const cancelHandler = () => {
    setShowUnlockModal(false);
  };
  return (
    <Modal
      open={showModal}
      onCancel={cancelHandler}
      footer={null}
      closeIcon={<CloseOutlined />}
      width={480}
      centered
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 0 }}>
          Unlock Higher Limit
        </Title>

        <Space direction="vertical" size={4} style={{ width: '100%' }}>
          <Text type="secondary">Current Limit</Text>
          <Title level={5} style={{ margin: 0 }}>
            10,000 SAR
          </Title>
        </Space>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Text type="secondary">Request Limit</Text>
          <Slider
            min={10000}
            max={1000000}
            step={10000}
            value={requestedLimit}
            onChange={setRequestedLimit}
            className='custom-slider'
          />
          <Row justify="space-between">
            <Text type="secondary">10,000 SAR</Text>
            <Text type="secondary">Max 1,000,000 SAR</Text>
          </Row>
        </Space>

        <Button
          type="primary"
          block
          size="large"
          icon={<RightOutlined />}
          iconPosition="end"
          style={{ backgroundColor: '#2e1f83', borderColor: '#2e1f83' }}
        >
          Request for Higher Limit
        </Button>

        <Button block size="large" onClick={cancelHandler}>
          Close
        </Button>
      </Space>
    </Modal>
  );
};

export default UnlockHigherLimitModal;
