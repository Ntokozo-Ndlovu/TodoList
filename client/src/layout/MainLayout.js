import Navigation from '../ui/Navigation';
import { Outlet } from 'react-router-dom';
import stylesClasses from './MainLayout.module.css';

const MainLayout = (props)=>{

        return <>
        <Navigation></Navigation>
        <Outlet></Outlet></>
}


export default MainLayout;