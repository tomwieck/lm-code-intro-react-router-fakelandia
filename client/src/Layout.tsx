import { Route, Routes, } from 'react-router-dom'
import { Confessions } from './Confessions'
import { Misdemeanour } from './Misdemeanour'
import { NotFound } from './NotFound'
import { Link } from "react-router-dom";

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export const Layout: React.FC = () => 
    <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/misdemeanour">Misdemeanour</Link>
            </li>
            <li>
                <Link to="confessions">Confessions</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/">
            <Route
                path="confessions"
                element={<Confessions />}
            />
            <Route path="misdemeanour" element={< Misdemeanour />} />
            <Route path="*" element={< NotFound />} />
            </Route>
        </Routes>
       
    </>;
