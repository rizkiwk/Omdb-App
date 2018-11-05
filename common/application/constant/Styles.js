import Layout from './Layout';
import Config from './Config';
import Color from './Color';
import { StatusBar } from 'react-native';

const NavbarFullScreen  = (Config.OsName === 'ANDROID') ? (StatusBar.currentHeight + 66) : 80;

export const NavbarStyle = {
    navbar: {
        height: Layout.isMediumDevice ? 66 : (Layout.isSmallDevice ? 66 : NavbarFullScreen),
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: Color.navbar_default,
    },
    navbar_wrapper_full: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Layout.isMediumDevice ? 15 : (Layout.isSmallDevice ? 10 : 20),
    },
    navbar_wrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Layout.isMediumDevice ? 15 : (Layout.isSmallDevice ? 10 : 20),
    },
    navbar_left: {
        minWidth: 100,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    navbar_body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbar_right: {
        minWidth: 100,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    navbar_icon_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    navbar_logo: {
        width: Layout.isMediumDevice ? 32 : (Layout.isSmallDevice ? 30 : 34),
        height: Layout.isMediumDevice ? 30 : (Layout.isSmallDevice ? 28 : 32),
    },
    navbar_title: {
        fontSize: Layout.isMediumDevice ? 15 : (Layout.isSmallDevice ? 14 : 16),
        textAlign: 'center',
        color: '#ffffff',
    },
    navbar_icon_support: {
        width: Layout.isMediumDevice ? 32 : (Layout.isSmallDevice ? 30 : 34),
        height: Layout.isMediumDevice ? 30 : (Layout.isSmallDevice ? 28 : 32),
    },
    navbar_icon_image: {
        width: Layout.isMediumDevice ? 22 : (Layout.isSmallDevice ? 20 : 24),
        height: Layout.isMediumDevice ? 22 : (Layout.isSmallDevice ? 20 : 24),
    },
};

export const ContainerStyle = {
    main_container: {
        flexGrow: 1,
        backgroundColor: Color.primary_grey,
    },
};