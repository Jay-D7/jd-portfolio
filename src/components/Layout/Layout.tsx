import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.scss';

export const Layout: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span>&lt;/html&gt;</span>
          <span className="bottom-tag-html">&lt;body&gt;</span>
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          <span className="bottom-tag-html">&lt;/body&gt;</span>
          <span>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};
