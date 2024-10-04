import AccountNavigation from './Navigation';
import Profile from './Profile';
import Signin from './Signin';
import Signup from './Signup';
import { Routes, Route, Navigate } from 'react-router';

export default function Account() {
  return (
    <div>
      <h2>Account</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/Kanbas/Account/Signin" />}
                />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}