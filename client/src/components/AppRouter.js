import React, {useContext} from "react";
import {Navigate, Route, Routes} from 'react-router-dom' 
import { authRoutes, publicRoutes } from "../routes.js";
import { Context } from "../index.js";

const AppRouter = () => {
    const user = useContext(Context);
    console.log(user);
    return (
        <>
                <Routes>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component />} />
                    )
                    }
                    {user.isAuth && authRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component />} />
                    )
                    }
                    
                </Routes>
        </>        
    );
}

export default AppRouter;