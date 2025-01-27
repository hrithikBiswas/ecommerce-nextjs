import { Badge, Button } from "@heroui/react";
import { BsHandbag } from 'react-icons/bs';

export default function NotificationBadge({
    Icon,
    notification,
    hideIconClass,
    onOpenDrawer,
}) {
    return (
        <Badge
            content={notification}
            shape="circle"
            size="lg"
            className={`border-theme-primary bg-white ${hideIconClass}`}
        >
            <Button
                onPress={onOpenDrawer}
                className={`bg-gray-300/25 p-2 rounded-full ${hideIconClass}`}
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
            >
                <Icon size={24} className="text-white" />
            </Button>
        </Badge>
    );
}
