'use client';

import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import CreditTermCard from '../common/CreditTermCard';
import NotificationComponent from '../common/NotificationComponent';

const OnBoardingExtraFields = () => {
  const { t } = useTranslation('common');

  return (
    <Row gutter={16}>
      <NotificationComponent
        icon={<CheckCircleFilled style={{ fontSize: '48px' }} />}
        title="Congragulations"
        subtitle="Approved Credit Limit SAR 10,000"
      />
      <Col>
      <CreditTermCard days={30} interestRate={3} />
      </Col>
      <Col span={24} xs={24} md={24}>
        <Form layout="vertical" name="OnboardingExtraForm">
          <Form.Item label={t('iban_number')}>
            <Input placeholder={t('iban_number_placeholder')} />
          </Form.Item>
          <Form.Item label={t('bank_name')}>
            <Input placeholder={t('bank_name_placeholder')} />
          </Form.Item>

          <Button
            style={{
              background: '#2a237e',
              color: '#fff',
            }}
          >
            {t('accept_limit')}
          </Button>
          <Button
            style={{
              background: '#2a237e',
              color: '#fff',
            }}
          >
            {t('request_for_higher_limit')}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default OnBoardingExtraFields;
