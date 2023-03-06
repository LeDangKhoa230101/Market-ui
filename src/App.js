import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, adminRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts';
import { Fragment } from 'react';
import AdminLayout from './admin/AdminLayout';

function App() {
    return (
        <Router>
            <div
                className="App"
                style={{
                    overflow: 'hidden',
                }}
            >
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
                {/* <Routes>
                    {adminRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = AdminLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
