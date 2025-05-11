import { Button, Result } from 'antd';
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
  );
};

export default NotificationComponent;
