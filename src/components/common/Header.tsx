import { MenuOutlined } from '@ant-design/icons';
import { Col, Row, Select, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_OPTIONS } from '../../utils/constants';

const Header = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <Row
      style={{
        width: '100%',
        padding: 16,
        alignItems: 'center',
        background: '#2a237e',
      }}
      justify="space-between"
    >
      <Col>
        <MenuOutlined style={{ fontSize: 24, color: '#fff !important' }} />
        <Typography.Text
          style={{ color: '#fff', fontSize: 18, marginLeft: 12 }}
        >
         {t('title')}
        </Typography.Text>
      </Col>
      <Col>
        <Select
          value={i18n.language}
          style={{ width: 100 }}
          onChange={(lng) => {
            i18n.changeLanguage(lng);
            localStorage.setItem('language', lng);
          }}
        >
          {LANGUAGE_OPTIONS.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
};

export default Header;
