import { Button, Card, Result } from 'antd';
import React, { ReactNode } from 'react';

interface NotificationComponentProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  actionText?: string;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  icon,
  title,
  subtitle,
  actionText,
}) => {
  return (
    <Card
      style={{
        maxWidth: 700,
        width: '100%',
        margin: '0 auto',
        borderRadius: 20,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Result
        icon={icon}
        title={title}
        subTitle={subtitle}
        extra={
          actionText
            ? [
                <Button type="primary" key="action">
                  {actionText}
                </Button>,
              ]
            : null
        }
      />
    </Card>
  );
};

export default NotificationComponent;
