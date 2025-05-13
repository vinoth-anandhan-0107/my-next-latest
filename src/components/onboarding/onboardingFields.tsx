'use client';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Upload } from 'antd';
import { useTranslation } from 'react-i18next';

const OnBoardingFields = () => {
  const { t } = useTranslation('common');

  return (
    <Row gutter={16} style={{ margin: 16 }}>
      <Col span={24} xs={24} md={24}>
        <Form layout="vertical" name="OnboardingForm">
          <Form.Item label={t('cr_number')}>
            <Input placeholder={t('cr_number_placeholder')} />
          </Form.Item>
          <Form.Item>
            <Upload>
              <Input
                placeholder={t('cr_number_upload')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
                className="custom-upload-input"
              />
            </Upload>
          </Form.Item>

          <Form.Item label={t('nid_number')}>
            <Input placeholder={t('nid_number_placeholder')} />
          </Form.Item>
          <Form.Item>
            <Upload>
              <Input
                placeholder={t('nid_number_upload')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
                className="custom-upload-input"
              />
            </Upload>
          </Form.Item>

          <Form.Item label={t('vat_number')}>
            <Input placeholder={t('vat_number_placeholder')} />
          </Form.Item>
          <Form.Item>
            <Upload>
              <Input
                placeholder={t('vat_number_upload')}
                readOnly
                suffix={<UploadOutlined style={{ fontSize: 20 }} />}
                className="custom-upload-input"
              />
            </Upload>
          </Form.Item>

          <Form.Item label={t('name')}>
            <Row gutter={16}>
              <Col xs={12} sm={12}>
                <Input placeholder={t('first_name_placeholder')} />
              </Col>
              <Col xs={12} sm={12}>
                <Input placeholder={t('last_name_placeholder')} />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item label={t('phone_number')}>
            <Input placeholder={t('phone_number_placeholder')} />
          </Form.Item>

          <Form.Item label={t('email_address')}>
            <Input placeholder={t('email_address_placeholder')} />
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
        </Form>
      </Col>
    </Row>
  );
};

export default OnBoardingFields;
