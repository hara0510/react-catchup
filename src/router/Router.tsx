import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(()=>{
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => (
        <Route key={route.path} path={`home${route.path}`} element={route.element} />
      ))}
    </Routes>
 );
});