import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { role, page } from '../utils/constants/system'
import {
  Chat,
  ConfirmedRegistration,
  Home,
  Login,
  Profile,
  Registration,
  Users
} from '../pages/_exports'
import { PermissionGuard, SidebarLayout } from '../components/_exports'

function AppRouter() {
  const isLogged = useSelector((state) => state.auth.info.isLogged)
  const defaultPage = isLogged ? page.home : page.login

  return (
    <div className="app-router">
      <Routes>
        <Route path="*" element={<Navigate to={defaultPage} />} />

        <Route element={<PermissionGuard permittedRoles={[role.public]} />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="confirmed-registration" element={<ConfirmedRegistration />} />
        </Route>

        <Route element={<PermissionGuard permittedRoles={[role.admin]} />}>
          <Route path="users" element={<SidebarLayout page={<Users />} />} />
        </Route>

        <Route element={<PermissionGuard permittedRoles={[role.user]} />}>
          <Route path="profile" element={<SidebarLayout page={<Profile />} />} />
        </Route>

        <Route element={<PermissionGuard permittedRoles={[role.user, role.admin]} />}>
          <Route path="home" element={<SidebarLayout page={<Home />} />} />
          <Route path="chat" element={<SidebarLayout page={<Chat />} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter