import { DeviceType } from "../types/device.type";

const getDeviceType = () => {
    let deviceType: DeviceType = 'desktop';
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        deviceType = 'tablet';
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        deviceType = 'mobile';
    }
    return deviceType;
};

export const Device = {
    getDeviceType
}