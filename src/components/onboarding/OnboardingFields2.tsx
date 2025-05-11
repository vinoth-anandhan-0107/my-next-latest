'use client';

import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import NotificationComponent from '../common/NotificationComponent';

const OnBoardingExtraFields = () => {
  const { t, i18n } = useTranslation('common');
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  return (
    <Row gutter={16} style={{ margin: 16 }}>
      <Col span={24} xs={24} md={24}>
        <NotificationComponent
          icon={
            <CheckCircleFilled style={{ color: '#52c41a', fontSize: '48px' }} />
          }
          title="Congragulations"
          subtitle="Approved Credit Limit SAE 10,000"
        />
        <Form
          layout="vertical"
          name="OnboardingExtraForm"
          style={{ direction }}
        >
          <Form.Item label={t('cr_number')}>
            <Input placeholder={t('cr_number_placeholder')} />
          </Form.Item>
          <Form.Item label={t('vat_number')}>
            <Input placeholder={t('vat_number_placeholder')} />
          </Form.Item>
          <Button
            style={{
              background: '#2a237e',
              marginBottom: 8,
              color: '#ffffff !important',
              border: 'none',
              width: '100%',
            }}
          >
            {t('next_button')}
          </Button>
          <Button
            style={{
              background: '#2a237e',
              marginBottom: 8,
              color: '#ffffff !important',
              border: 'none',
              width: '100%',
            }}
          >
            {t('next_button')}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default OnBoardingExtraFields;
