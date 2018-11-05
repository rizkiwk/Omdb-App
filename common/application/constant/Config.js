import DeviceInfo from 'react-native-device-info';

export default {
    OsName: (DeviceInfo.getSystemName().toUpperCase() === 'IPhone OS') ? 'IOS' : DeviceInfo.getSystemName().toUpperCase(),
    OsVersion: DeviceInfo.getSystemVersion(),
    DeviceName: DeviceInfo.getModel(),
    AppVersion: DeviceInfo.getVersion(),
    AppBuildNumber: DeviceInfo.getBuildNumber(),
}