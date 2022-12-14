import { memo, useCallback, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { TRouteData, TRouterComponent } from "./types";
import { routeList } from "./constants";

const Router: TRouterComponent = () => {
    const mapRoute = useCallback((data: TRouteData) => {
        const { Component, name, id, path } = data;

        return (
            <Route element={<Component title={name} />} key={id} path={path} />
        );
    }, []);

    const routes = useMemo(() => {
        return routeList.map(mapRoute);
    }, [mapRoute]);

    return (
        <Routes>
            {routes}
            <Route element={<Navigate replace={true} to="/" />} path={"*"} />
        </Routes>
    );
};

export default memo(Router);
