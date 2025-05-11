'use client';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Upload } from 'antd';
import { useTranslation } from 'react-i18next';

const HigherCreditLimitFields = () => {
  const { t, i18n } = useTranslation('common');
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  return (
    <Row gutter={16} style={{ margin: 16 }}>
      <Col span={24} xs={24} md={24}>
        <Form
          layout="vertical"
          name="HigherCreditLimitForm"
          style={{ direction }}
        >
          <Form.Item label={t('vat_number_12')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}

              />
            </Upload>
          </Form.Item>
          <Form.Item label={t('simah_business_report')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
              />
            </Upload>
          </Form.Item>
          <Form.Item label={t('simah_owner_report')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
              />
            </Upload>
          </Form.Item>
          <Form.Item label={t('saudization_certificate')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
              />
            </Upload>
          </Form.Item>
          <Form.Item label={t('balady_license')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
              />
            </Upload>
          </Form.Item>
          <Form.Item label={t('audited_financials')}>
            <Upload>
              <Input
                placeholder={t('browse_files')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
              />
            </Upload>
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
            {t('submit')}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default HigherCreditLimitFields;
